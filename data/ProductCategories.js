const ProductCategories = [
  {
    name: 'Computers & Accessories',
    path: '/computers/',
    Sub: [
      {
        name: 'Laptops',
        path: '/laptops/',
      },
      {
        name: 'Desktops',
        path: '/desktops/',
      },
      {
        name: 'Tablets',
        path: '/tablets/',
      },
      {
        name: 'Monitors & Accessories',
        path: '/desktops/',
      },
      {
        name: 'Printers, Scanners & Accessories',
        path: '/printers-scanners/',
      },
      {
        name: 'Drives & Storage',
        path: '/computers/drives-storage/',
      },
      {
        name: 'Computer Components',
        path: '/computer-components/',
      },
      {
        name: 'Networking Hardware',
        path: '/networking-hardware/',
      },
      {
        name: 'Laptop & Desktop Accessories',
        path: '/laptops-desktop-accessories/',
      },
    ],
  },
  {
    name: 'Mobile Phones & Accessories',
    path: '/mobile-phones/',
    Sub: [
      {
        name: 'Smartphones',
        path: '/smartphones/',
      },
      {
        name: 'Feature Phones',
        path: '/feature-phones/',
      },
      {
        name: 'Headsets',
        path: '/headsets/',
      },
      {
        name: 'memory-cards',
        path: '/memory-cards/',
      },
      {
        name: 'Batteries & Chargers',
        path: '/batteries-chargers/',
      },
      {
        name: 'Cases & Screen Protectors',
        path: '/cases-screen-protectors/',
      },
      {
        name: 'mounts-holders',
        path: '/mounts-holders/',
      },
      {
        name: 'Cables & Other',
        path: '/cables-other/',
      },
    ],
  },
  {
    name: 'Office Electronics',
    path: '/office/',
    Sub: [
      {
        name: 'Printers & Scanners',
        path: '/printers-scanners/',
      },
      {
        name: 'Photocopiers & Duplicators',
        path: '/photocopiers-duplicators/',
      },
      {
        name: 'Scanners',
        path: '/Scanners/',
      },
      {
        name: 'Video Projectors & Accessories',
        path: '/video-projectors/',
      },
      {
        name: 'Telephones & Fax Machines',
        path: '/telephones-fax-machines/',
      },
      {
        name: 'Point-of-Sale Equipment',
        path: '/pos-equipment/',
      },
      {
        name: 'Cash Counters & Other',
        path: '/cash-counter/',
      },
      {
        name: 'Board Room Equipments',
        path: '/boardroom-equipments/',
      },
      {
        name: 'Cash Counting Machines',
        path: '/cash-counting-machines/',
      },
    ],
  },
  {
    name: 'TV and Video',
    path: '/tv-video/',
    Sub: [
      {
        name: 'Televisions',
        path: '/televisions',
      },
      {
        name: 'DVD Players & Setups',
        path: '/dvd-players-setups/',
      },
      {
        name: 'Video Projectors & Accessories',
        path: '/video-projectors/',
      },
      {
        name: 'Home Theatre Systems',
        path: '/home-theatre-system/',
      },
      {
        name: 'XBox & Accessories',
        path: '/xbox/',
      },
      {
        name: 'Playstations & Accessories',
        path: '/playstation/',
      },
      {
        name: 'AV Cables',
        path: '/av-cables/',
      },
    ],
  },
  {
    name: 'Audio Electronics',
    path: '/audio/',
    Sub: [
      {
        name: 'Speakers',
        path: '/speakers/',
      },
      {
        name: 'Home Theatre Systems',
        path: '/home-theatre-systems/',
      },
      {
        name: 'Headphones',
        path: '/headphones/',
      },
      {
        name: 'Headsets',
        path: '/headsets/',
      },
      {
        name: 'Microphones',
        path: '/microphones/',
      },
      {
        name: 'Radios',
        path: '/radios/',
      },
      {
        name: 'Car Audio',
        path: '/car-audio/',
      },
      {
        name: 'AV Cables & Other',
        path: '/av-cables-other/',
      },
    ],
  },
  {
    name: 'Video Game Consoles & Accessories',
    path: '/game/',
    Sub: [
      {
        name: 'Xbox & Accessories',
        path: '/xbox/',
      },
      {
        name: 'Playstation',
        path: '/playstation/',
      },
      {
        name: 'Televisions & Monitors',
        path: '/televisions-monitors/',
      },
      {
        name: 'Gaming Laptops',
        path: '/gaming-laptops/',
      },
      {
        name: 'Gaming Builds & Accessories',
        path: '/gaming-builds-accessories/',
      },
      {
        name: 'Headphones',
        path: '/headphones/',
      },
      {
        name: 'Nintendo Switches',
        path: '/nintendo-switches/',
      },
      {
        name: 'Gaming Chairs & Other',
        path: '/gaming-chairs-other/',
      },
    ],
  },
  {
    name: 'Wearables & Smart Home Devices',
    path: '/wearables-smart-home/',
    Sub: [
      {
        name: 'Smartwatches',
        path: '/smartwatches/',
      },
      {
        name: 'Fitness Bands',
        path: '/fitness-bands/',
      },
      {
        name: 'VR Headsets',
        path: '/vr-headsets',
      },
      {
        name: 'Smart Home Assistants',
        path: '/smart-home-assistants/',
      },
    ],
  },
  {
    name: 'Vehicle Electronics',
    path: '/vehicle-electronics/',
    Sub: [
      {
        name: 'Car Audio',
        path: '/car-audio/',
      },
      {
        name: 'Car Video',
        path: '/car-video/',
      },
      {
        name: 'gps',
        path: '/gps/',
      },
      {
        name: 'Dashboard Cameras',
        path: '/dash-cams/',
      },
      {
        name: 'Car Alarms & Security',
        path: '/car-alarms-security/',
      },
    ],
  },

  {
    name: 'Camera & Photo',
    path: '/cameras/',
    Sub: [
      {
        name: 'Film Cameras',
        path: '/film-cameras',
      },
      {
        name: 'Digital Cameras',
        path: '/digital-cameras',
      },
      {
        name: 'Lenses & Filters',
        path: '/lenses-filters/',
      },
      {
        name: 'Camcorders & Accessories',
        path: '/camcorders/',
      },
      {
        name: 'Binoculars & Telescopes',
        path: '/binoculars-telescopes',
      },
      {
        name: 'Lighting & Accessories',
        path: '/lighting/',
      },
      {
        name: 'Tripods & Supports',
        path: '/tripods-supports',
      },
      {
        name: 'Camera Drones',
        path: '/camera-drones/',
      },
    ],
  },
  {
    name: 'Security & Surveillance',
    path: '/security/',
    Sub: [
      {
        name: 'Security Camera Equipment',
        path: '/cctv/',
      },
      {
        name: 'Home Security Systems',
        path: '/home-security-systems/',
      },
      {
        name: 'Biometrics',
        path: '/biometrics/',
      },
      {
        name: 'Sensors & Detectors',
        path: '/sensors-detectors/',
      },
      {
        name: 'Alarms & Sirens',
        path: '/alarm-sirens/',
      },
      {
        name: 'Radio Scanners',
        path: '/radio-scanners/',
      },
      {
        name: 'Authentication Tokens',
        path: '/authentication-tokens/',
      },
    ],
  },
];

export default ProductCategories;
