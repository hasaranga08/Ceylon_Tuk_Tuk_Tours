import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Destination email for all website inquiries
const NOTIFICATION_EMAIL = 'tours.ceylontuktuk@gmail.com';

// Ensure data directory exists for persistent inquiry logging
const DATA_DIR = path.join(process.cwd(), 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

function ensureDataDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(INQUIRIES_FILE)) {
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Failed to initialize inquiries data file:', err);
  }
}
ensureDataDir();

function saveInquiryRecord(record: any) {
  try {
    ensureDataDir();
    let current: any[] = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      const content = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      current = JSON.parse(content || '[]');
    }
    current.unshift(record);
    if (current.length > 100) {
      current = current.slice(0, 100);
    }
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(current, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save inquiry record:', err);
  }
}

// Get Formspree endpoint from environment
export function getFormspreeEndpoint(): string {
  return (
    process.env.FORMSPREE_ENDPOINT?.trim() ||
    process.env.FORM_ENDPOINT?.trim() ||
    ''
  );
}

// Parse incoming JSON requests
app.use(express.json());

// API health endpoint
app.get('/api/health', (req: Request, res: Response) => {
  const formspreeEndpoint = getFormspreeEndpoint();
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    notificationEmail: NOTIFICATION_EMAIL,
    deliveryService: 'formspree',
    formspreeConfigured: Boolean(formspreeEndpoint),
  });
});

// Diagnostic endpoint to check Formspree integration status
app.get('/api/formspree-status', (req: Request, res: Response) => {
  const formspreeEndpoint = getFormspreeEndpoint();
  return res.json({
    status: 'ok',
    deliveryService: 'formspree',
    destinationEmail: NOTIFICATION_EMAIL,
    formCount: 8,
    singleEndpointSupported: true,
    configured: Boolean(formspreeEndpoint),
    endpoint: formspreeEndpoint
      ? formspreeEndpoint.replace(/\/[a-zA-Z0-9]+$/, '/******')
      : '[NOT CONFIGURED - Set FORMSPREE_ENDPOINT in environment]',
    message: formspreeEndpoint
      ? 'Formspree endpoint is configured. All 8 forms are routed server-side.'
      : 'Awaiting Formspree endpoint. Set FORMSPREE_ENDPOINT in your environment or Settings.',
  });
});

// Endpoint to view logged inquiries (testing & persistence verification)
app.get('/api/inquiries', (req: Request, res: Response) => {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const content = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      const inquiries = JSON.parse(content || '[]');
      return res.json({ count: inquiries.length, inquiries });
    }
    return res.json({ count: 0, inquiries: [] });
  } catch (err) {
    return res.status(500).json({ error: 'Unable to retrieve inquiries' });
  }
});

// Primary Inquiry Submission API Endpoint
app.post('/api/inquiry', async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      phoneWhatsapp,
      preferredDate,
      travelerCount,
      travelerType,
      pickupLocation,
      tourInterest,
      tourTitle,
      preferredVehicle,
      travelStyle,
      message,
      formType = 'General Tour Inquiry',
      referenceNumber,
      submittedAt,
      botcheck,
    } = req.body;

    // Honeypot spam check
    if (botcheck && botcheck.trim() !== '') {
      console.log('Honeypot bot submission detected and ignored.');
      return res.json({
        success: true,
        referenceNumber: referenceNumber || 'CTT-BOT000',
        message: 'Inquiry received.',
      });
    }

    // Required fields validation
    if (!fullName || !email || !phoneWhatsapp) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your Full Name, Email, and WhatsApp / Phone number.',
      });
    }

    // Preserve / generate reference number
    const refNumber =
      referenceNumber || `CTT-${Math.floor(100000 + Math.random() * 900000)}`;

    // Sri Lanka timestamp (Asia/Colombo UTC+5:30)
    const formattedTimestamp =
      submittedAt ||
      new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Colombo',
        dateStyle: 'full',
        timeStyle: 'medium',
      });

    const cleanPhone = phoneWhatsapp.replace(/[^\d+]/g, '');
    const resolvedTourTitle = tourTitle || tourInterest || 'Custom Sri Lanka Tour';
    const formspreeEndpoint = getFormspreeEndpoint();

    // Prepare complete inquiry information payload for Formspree
    const formspreePayload: Record<string, any> = {
      _subject: `New Website Inquiry – ${formType} (#${refNumber})`,
      _replyto: email,
      'Form Source': formType,
      'Inquiry Reference Number': refNumber,
      'Submitted Date & Time': `${formattedTimestamp} (Sri Lanka Time)`,
      'Full Name': fullName,
      'Email Address': email,
      'WhatsApp / Phone': phoneWhatsapp,
      'Direct WhatsApp Chat': `https://wa.me/${cleanPhone.replace('+', '')}`,
      'Tour / Route': resolvedTourTitle,
      'Preferred Date': preferredDate || 'Flexible / To be confirmed',
      'Number of Travellers': `${travelerCount || '1'} (${travelerType || 'General'})`,
      'Vehicle Preference': preferredVehicle || 'Authentic Tuk Tuk',
      'Pickup Location': pickupLocation || 'Negombo / Airport / Hotel',
      'Travel Style': travelStyle || 'Not specified',
      'Special Requests': message || 'None',
      destination_email: NOTIFICATION_EMAIL,
    };

    // Prepare persistent inquiry record for data/inquiries.json
    const inquiryRecord: any = {
      id: refNumber,
      fullName,
      email,
      phoneWhatsapp,
      preferredDate,
      travelerCount,
      travelerType,
      pickupLocation,
      tourInterest: resolvedTourTitle,
      preferredVehicle,
      travelStyle,
      message,
      formType,
      submittedAt: formattedTimestamp,
      recipient: NOTIFICATION_EMAIL,
      timestamp: new Date().toISOString(),
      deliveryService: 'formspree',
      deliveryStatus: 'pending',
    };

    let emailDelivered = false;
    let formspreeDetails: any = null;

    if (formspreeEndpoint) {
      try {
        console.log(`[FORMSPREE] Submitting inquiry #${refNumber} (${formType}) to Formspree...`);
        const fsResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formspreePayload),
        });

        const fsData = await fsResponse.json().catch(() => null);

        if (fsResponse.ok) {
          console.log(`[FORMSPREE SUCCESS] Inquiry #${refNumber} delivered to Formspree:`, fsData);
          emailDelivered = true;
          inquiryRecord.deliveryStatus = 'delivered';
          inquiryRecord.formspreeResponse = fsData;
          formspreeDetails = fsData;
        } else {
          console.error(`[FORMSPREE ERROR] Status ${fsResponse.status}:`, fsData);
          inquiryRecord.deliveryStatus = 'failed';
          inquiryRecord.formspreeError = fsData || `HTTP ${fsResponse.status}`;
          formspreeDetails = fsData;
        }
      } catch (fsErr: any) {
        console.error(`[FORMSPREE NETWORK ERROR] Inquiry #${refNumber}:`, fsErr.message);
        inquiryRecord.deliveryStatus = 'failed';
        inquiryRecord.formspreeError = fsErr.message;
        formspreeDetails = { error: fsErr.message };
      }
    } else {
      console.log(`[FORMSPREE] Endpoint not yet configured. Inquiry #${refNumber} recorded locally.`);
      inquiryRecord.deliveryStatus = 'logged_locally';
    }

    // Save persistent record
    saveInquiryRecord(inquiryRecord);

    // Return response to frontend (guarantees visitor sees Inquiry Received and WhatsApp confirmation)
    return res.json({
      success: true,
      emailDelivered,
      deliveryService: 'formspree',
      referenceNumber: refNumber,
      recipient: NOTIFICATION_EMAIL,
      formType,
      formspreeConfigured: Boolean(formspreeEndpoint),
      formspreeDetails,
      message: emailDelivered
        ? `Inquiry #${refNumber} received and delivered to Formspree for ${NOTIFICATION_EMAIL}.`
        : `Inquiry #${refNumber} received and logged.`,
    });
  } catch (error: any) {
    console.error('Inquiry endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your inquiry.',
    });
  }
});

// Activity and Tour fallback image mapping (normalized key -> fallback image filename)
const FALLBACK_IMAGE_MAP: Record<string, string> = {
  // Colombo & Negombo
  'negombocitytour': 'coastal_beach.jpg',
  'negombolagoonboatexperience': 'mangrove_lagoon.jpg',
  'negombofishmarketexperience': 'fishing_boats.jpg',
  'colombocitytour': 'colombo_skyline.jpg',
  'colombostreetfoodexperience': 'galle_face.jpg',
  'tuktuklocalexploration': 'home.jpeg',

  // Cultural Triangle
  'sigiriyarockfortress': 'sigiriya.jpg',
  'dambullacavetemple': 'dambulla.jpg',
  'sigiriyadambulladaytour': 'sigiriya_unsplash.jpg',
  'polonnaruwaancientcity': 'polonnaruwa.jpg',
  'anuradhapuraancientcity': 'anuradhapura.jpg',
  'villagelocalfoodexperience': 'spices_food.jpg',

  // Hill Country
  'kandycityexperience': 'kandy_tooth.jpg',
  'templeofthetootharea': 'kandy_tooth.jpg',
  'teacountryexperience': 'tea_picker.jpg',
  'nuwaraeliyaexperience': 'tea_plantation.jpg',
  'elladayexperience': 'ella_nine_arch.jpg',
  'scenictrainexperience': 'ella_nine_arch.jpg',
  'waterfallexploration': 'ella_nine_arch.jpg',
  'hikingnaturewalks': 'ella_nine_arch.jpg',

  // Wildlife
  'yalasafari': 'yala_jeep.jpg',
  'udawalawesafari': 'udawalawe.jpg',
  'minneriyakaudullasafari': 'yala_wildlife.jpg',
  'birdwatching': 'mangrove_lagoon.jpg',
  'wildlifenatureexperience': 'yala_leopard.jpg',

  // South Coast
  'weligamasurfexperience': 'tropical_surf.jpg',
  'surfinginweligama': 'weligama.jpg',
  'hiriketiyabeachsurf': 'surf_beach.jpg',
  'surfbeachlifeinhiriketiya': 'surf_beach.jpg',
  'beachhoppinginhiriketiya': 'surf_beach.jpg',
  'mirissawhalewatching': 'whale_watching.jpg',
  'whalewatchingaroundmirissa': 'whale_watching.jpg',
  'gallefortexperience': 'galle_fort.jpg',
  'gallefortheritage': 'galle_fort.jpg',
  'unawatunabeach': 'unawatuna.jpg',
  'southcoastbeachhopping': 'mirissa.jpg',
  'snorkelingdiving': 'scuba_diving.jpg',
  'localseafoodexperience': 'spices_food.jpg',
  'srilankanfoodexperiences': 'spices_food.jpg',
  'sunsetexperience': 'galle_face.jpg',
  'sunsetexperiences': 'galle_face.jpg',

  // East Coast
  'arugambaysurfexperience': 'arugam_bay.jpg',
  'pasikudabeachexperience': 'pasikudah.jpg',
  'trincomaleecoastalexperience': 'trincomalee.jpg',
  'snorkelingmarineexperiences': 'scuba_diving.jpg',
  'eastcoastbeachexploration': 'tropical_palm.jpg',

  // West Coast
  'kalpitiyacoastallagoonexploration': 'coastal_beach.jpg',
  'bentotariversafaricoastalexperience': 'mangrove_lagoon.jpg',
  'negombocoastalexploration': 'coastal_beach.jpg',

  // Multi-day Tours
  '7daysrilankaexplorer': 'sigiriya.jpg',
  '12daysrilankadiscovery': 'tea_plantation.jpg',

  // Day & Half-Day Tours
  'negombocoastalvillagetuktuktour': 'fishing_boats.jpg',
  'negombotuktukcitytour': 'home.jpeg',
  'negombolagoonexperience': 'mangrove_lagoon.jpg',
  'localfoodcultureexperience': 'spices_food.jpg',
  'customizeddaytours': 'home.jpeg',
};

// Helper to normalize image lookup keys
function normalizeImageKey(str: string): string {
  return str
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/nehombo/g, 'negombo')
    .replace(/[^a-z0-9]/g, '');
}

function isFuzzyMatch(fileKey: string, reqKey: string): boolean {
  if (fileKey === reqKey) return true;
  // Strip leading numbers: "1negombolagoon..." -> "negombolagoon..."
  if (fileKey.replace(/^[0-9]+/, '') === reqKey) return true;
  // Strip trailing numbers: "colombocitytour2" -> "colombocitytour"
  if (fileKey.replace(/[0-9]+$/, '') === reqKey) return true;
  return false;
}

// Diagnostic endpoint to inspect current images and card matches
app.get('/api/images-status', (req: Request, res: Response) => {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  let files: string[] = [];
  try {
    if (fs.existsSync(imagesDir)) {
      files = fs.readdirSync(imagesDir);
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }

  const matches: Record<string, { assignedFile: string; isCustomUpload: boolean }> = {};
  for (const [key, fallback] of Object.entries(FALLBACK_IMAGE_MAP)) {
    const matched = files.find(file => {
      const cleanFile = normalizeImageKey(file);
      return isFuzzyMatch(cleanFile, key);
    });

    if (matched) {
      matches[key] = { assignedFile: matched, isCustomUpload: true };
    } else {
      matches[key] = { assignedFile: fallback, isCustomUpload: false };
    }
  }

  return res.json({
    totalFilesInDirectory: files.length,
    files,
    matches,
  });
});

// Smart Image Matching Middleware: resolves exact filenames, case-insensitive, extension-tolerant
app.get('/images/:imageName(*)', (req: Request, res: Response, next) => {
  const rawParam = req.params.imageName;
  if (!rawParam) return next();

  const decodedName = decodeURIComponent(rawParam);
  const searchDirs = [
    path.join(process.cwd(), 'public', 'images'),
    path.join(process.cwd(), 'public'),
    path.join(process.cwd(), 'src', 'assets'),
  ];

  // 1. Direct match in search directories
  for (const dir of searchDirs) {
    const directPath = path.join(dir, decodedName);
    if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
      res.setHeader('Cache-Control', 'no-cache');
      return res.sendFile(directPath);
    }
  }

  // 2. Normalized & fuzzy matching: ignore case, extension (.jpg, .jpeg, .png, .webp, .avif), spaces, numbers
  const cleanReq = normalizeImageKey(decodedName);

  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    try {
      const files = fs.readdirSync(dir);
      const matched = files.find(file => {
        const cleanFile = normalizeImageKey(file);
        return isFuzzyMatch(cleanFile, cleanReq);
      });
      if (matched) {
        res.setHeader('Cache-Control', 'no-cache');
        return res.sendFile(path.join(dir, matched));
      }
    } catch {
      // Continue to next directory
    }
  }

  // 3. Fallback map for predefined tours/activities
  const fallbackFile = FALLBACK_IMAGE_MAP[cleanReq];
  if (fallbackFile) {
    const fallbackPath = fallbackFile.endsWith('.jpeg') || fallbackFile.endsWith('.png')
      ? path.join(process.cwd(), 'public', fallbackFile)
      : path.join(process.cwd(), 'public', 'images', fallbackFile);

    if (fs.existsSync(fallbackPath)) {
      res.setHeader('Cache-Control', 'no-cache');
      return res.sendFile(fallbackPath);
    }
  }

  next();
});

// Setup Vite development middleware or production static serving
async function startServer() {
  const formspreeEndpoint = getFormspreeEndpoint();

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Ceylon Tuk Tuk Tours server listening on http://${HOST}:${PORT}`);
    console.log(`[DELIVERY] Service: Formspree`);
    console.log(`[DELIVERY] Destination: ${NOTIFICATION_EMAIL}`);
    console.log(`[DELIVERY] Endpoint configured: ${Boolean(formspreeEndpoint)}`);
  });
}

startServer();
