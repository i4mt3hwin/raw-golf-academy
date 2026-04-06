// Site-wide settings
export const siteSettings = {
  phone: '9737316462',
  phone_formatted: '(973) 731-6462',
  location_name: 'Golf Cube Social',
  location_address: 'Springfield, NJ',
  announcement_bar_text: 'Now teaching at GolfCube Social — Springfield, NJ &nbsp;|&nbsp; Private indoor lessons on GOLFZON simulators',
  hours: [
    { day: 'Monday - Friday', time: '9AM - 8PM' },
    { day: 'Saturday', time: '9AM - 8PM' },
    { day: 'Sunday', time: '9AM - 8PM' },
  ],
  first_timer_tips: [
    "Bring your clubs — we'll work with what you play",
    "Comfortable clothes — you'll be swinging, so dress to move",
    "No experience needed — beginners are welcome",
  ],
};

// Pricing packages
export const pricingPackages = [
  { title: 'Single Lesson', price: '$135', price_detail: '60 minutes per session', description: 'Full-hour session with detailed feedback', is_featured: false, badge_text: '' },
  { title: '6-Lesson Package', price: '$675', price_detail: '60 minutes each', description: 'Most popular choice for rebuilding fundamentals. Pay for 5, get the 6th free.', is_featured: true, badge_text: 'Best Value' },
];

// Testimonials
export const testimonials = [
  { text: 'After three lessons, my grip completely changed — and so did my consistency off the tee. Wenz breaks it down simply.', author: '— Satisfied Student', stars: 5 },
  { text: 'I came in shooting 105. After the six-lesson package, I broke 90 for the first time. Posture and tempo were game-changers.', author: '— Satisfied Student', stars: 5 },
];

// Timeline (used on home + approach)
export const timeline = [
  { name: 'Harry Vardon', desc: 'Six-time Open Champion; pioneer of the modern grip. Born 1870.' },
  { name: 'Ernie Jones', desc: 'Legendary British instructor; revolutionized teaching with "swing the clubhead" philosophy. Born 1887.' },
  { name: 'Angel de la Torre', desc: 'Spanish professional; proponent of natural swing mechanics. Born 1896.' },
  { name: 'Manuel de la Torre', desc: "PGA Top 100 Teacher; carried teachings forward as one of golf's most respected instructors. Born 1921." },
  { name: 'Wenz Golf', desc: 'Continuing this tradition with modern GOLFZON simulator technology. Present day.' },
];

// Fundamentals
export const fundamentals = [
  { title: 'Grip', desc: 'How you hold the club determines everything that follows. Refining your grip creates natural, consistent contact.', icon_svg: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13"/>' },
  { title: 'Stance', desc: 'A proper stance creates the stable foundation your swing needs. Addresses alignment, width, and weight distribution for maximum consistency.', icon_svg: '<path d="M6 20v-4"/><path d="M18 20v-4"/><path d="M12 20v-8"/><path d="M6 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><circle cx="12" cy="4" r="2"/>' },
  { title: 'Posture', desc: 'The bridge between grip and stance. Correct posture enables natural rhythm, proper tempo, and the balance separating good shots from great ones.', icon_svg: '<path d="M12 2a4 4 0 0 0-4 4v4h8V6a4 4 0 0 0-4-4z"/><path d="M8 10v4c0 2 1 4 4 6c3-2 4-4 4-6v-4"/><path d="M6 18c0 2 2 4 6 4s6-2 6-4"/>' },
];

// Learning steps (approach page)
export const learningSteps = [
  { step: 1, title: 'Putting & Chipping', desc: 'Start with the short game — build feel, touch, and confidence around the green.' },
  { step: 2, title: 'Half & Three-Quarter Swings', desc: 'Develop rhythm and tempo with controlled, partial swings before going full.' },
  { step: 3, title: 'Short Irons (7, 8, 9)', desc: 'Apply fundamentals to your scoring clubs — the irons that matter most on the course.' },
  { step: 4, title: 'Mid Irons (3, 4, 5)', desc: 'Extend your range with longer irons, building on the same core mechanics.' },
  { step: 5, title: 'Woods & Driver', desc: 'The full swing — by this point, your fundamentals carry naturally to every club in the bag.' },
];

// Products (pro shop)
export const products = [
  { title: 'Hats & Caps', price_label: 'From $30', description: 'TaylorMade, GolfCube Social branded caps, and more. Multiple styles and colors available.', image: '/images/proshop/hats-caps-display.jpg', image_alt: 'Golf caps and hats display — TaylorMade, GolfCube branded' },
  { title: 'Apparel & Outerwear', price_label: 'From $55', description: 'Performance polos, rain jackets, and layering pieces. Brands you trust, fit for the course.', image: '/images/proshop/outerwear-jackets.jpg', image_alt: 'Golf outerwear and jackets on display' },
  { title: 'PING Clubs', price_label: 'Pricing varies', description: 'PING Authorized Dealer. Drivers, irons, and hybrids including the latest G430 lineup. Custom fitting available.', image: '/images/proshop/ping-drivers.jpg', image_alt: 'PING drivers on display' },
  { title: 'Tour Edge Clubs', price_label: 'Pricing varies', description: 'Tour Edge sales, service, and custom fittings with lifetime warranty. Full range of woods, irons, and bags.', image: '/images/proshop/tour-edge-clubs.jpg', image_alt: 'Tour Edge clubs display — Sales, Service and Custom Fittings' },
  { title: 'Golf Gloves', price_label: 'From $20', description: 'TaylorMade TP and US Kids gloves in all sizes. Premium feel for better grip and control.', image: '/images/proshop/taylormade-gloves-closeup.jpg', image_alt: 'TaylorMade TP golf gloves' },
  { title: 'Iron Sets', price_label: 'Pricing varies', description: "Full iron sets from leading brands. Game improvement and player's irons available for all skill levels.", image: '/images/proshop/iron-sets.jpg', image_alt: 'Iron sets on wall display' },
  { title: 'Towels & Accessories', price_label: 'From $15', description: 'GolfCube Social branded towels, ball markers, and accessories. Great for gifts.', image: '/images/proshop/hats-polos-towels.jpg', image_alt: 'Pro shop display with towels, hats, and polos' },
  { title: 'Custom Club Fitting', price_label: 'Call for pricing', description: 'Professional club fitting and repair services. Get equipment dialed in for your swing on the GOLFZON simulator.', image: '/images/proshop/fitting-workbench.jpg', image_alt: 'Club fitting and repair workbench' },
  { title: 'Lesson Gift Cards', price_label: '$135+', description: 'Give the gift of better golf. Available in single lesson or 6-lesson package denominations.', image: '/images/hero/raw-ball-marker.jpg', image_alt: 'RAW Golf Academy branded ball marker and golf ball' },
];

// Blog posts
export const blogPosts = [
  {
    slug: 'top-5-grip-tips',
    title: 'Top 5 Grip Tips',
    date: 'March 6, 2026',
    author: 'RAW Golf Academy',
    excerpt: 'In golf, one of the fundamental parts is your grip on the club. Learn the essentials for better contact and consistency.',
    status: 'published',
    icon_svg: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 13"/>',
    body: `<h2 style="margin-bottom: 16px;">Grip Is a Fundamental Part of Golf</h2>
<p>In golf, one of the fundamental parts is your grip on the club. How you hold the club determines everything that follows — from the angle of the clubface at impact to the natural release through the ball. A proper grip doesn't require strength; it requires understanding.</p>
<h3 style="margin-top: 32px; margin-bottom: 12px;">1. Pressure Is Everything</h3>
<p>Most amateurs grip the club too tightly. On a scale of 1-10, your grip pressure should be around a 4 or 5. Think of holding a tube of toothpaste without squeezing any out. Light pressure allows the club to swing freely and generates more speed with less effort.</p>
<h3 style="margin-top: 32px; margin-bottom: 12px;">2. The Club Sits in Your Fingers, Not Your Palm</h3>
<p>The club should rest along the base of your fingers, not buried deep in your palm. A palm grip restricts wrist hinge and reduces your ability to generate clubhead speed. When the club sits in your fingers, you gain feel and natural release.</p>
<h3 style="margin-top: 32px; margin-bottom: 12px;">3. Check Your V's</h3>
<p>The "V" formed by your thumb and index finger on each hand should point toward your right shoulder (for right-handed golfers). This neutral position promotes a square clubface at impact. If your V's point too far left or right, you'll fight a slice or hook.</p>
<h3 style="margin-top: 32px; margin-bottom: 12px;">4. Match Your Hands</h3>
<p>Both hands need to work together as a unit. Whether you prefer an interlocking, overlapping, or ten-finger grip, the key is that your hands complement each other. Your lead hand controls direction; your trail hand adds power.</p>
<h3 style="margin-top: 32px; margin-bottom: 12px;">5. Consistency Over Perfection</h3>
<p>The "perfect" grip is the one you can repeat every time. Once you find a grip that produces consistent contact, commit to it. Practice gripping the club the same way every time until it becomes second nature — even when you're just watching TV.</p>`,
  },
  { slug: '', title: 'Stance Fundamentals', date: 'Coming Soon', author: '', excerpt: 'How your stance affects alignment, weight distribution, and swing consistency. Article coming soon.', status: 'draft', icon_svg: '<path d="M6 20v-4"/><path d="M18 20v-4"/><path d="M12 20v-8"/><path d="M6 12a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><circle cx="12" cy="4" r="2"/>' },
  { slug: '', title: 'Posture for Power', date: 'Coming Soon', author: '', excerpt: 'Why posture is the bridge between grip and stance — and how it unlocks natural rhythm. Article coming soon.', status: 'draft', icon_svg: '<path d="M12 2a4 4 0 0 0-4 4v4h8V6a4 4 0 0 0-4-4z"/><path d="M8 10v4c0 2 1 4 4 6c3-2 4-4 4-6v-4"/><path d="M6 18c0 2 2 4 6 4s6-2 6-4"/>' },
];

// Gallery photos
export const galleryPhotos = [
  { src: '/images/facility/golfzon-simulator.jpg', alt: 'GOLFZON simulator bay at GolfCube Social' },
  { src: '/images/facility/lounge-area.jpg', alt: 'GolfCube Social lounge with leather couches and TV' },
  { src: '/images/hero/raw-ball-marker.jpg', alt: 'RAW Golf Academy branded ball marker and golf ball' },
  { src: '/images/proshop/hats-polos-towels.jpg', alt: 'Pro shop — hats, polos, and towels display' },
  { src: '/images/proshop/ping-drivers.jpg', alt: 'PING drivers on display' },
  { src: '/images/proshop/tour-edge-clubs.jpg', alt: 'Tour Edge club display with sales and fittings' },
  { src: '/images/proshop/taylormade-gloves.jpg', alt: 'TaylorMade TP golf gloves' },
  { src: '/images/proshop/fitting-workbench.jpg', alt: 'Club fitting and repair workbench' },
  { src: '/images/proshop/outerwear-jackets.jpg', alt: 'Golf outerwear and jackets' },
  { src: '/images/proshop/ping-authorized-dealer.jpg', alt: 'PING Authorized Dealer sign' },
  { src: '/images/proshop/ping-g430-driver.jpg', alt: 'PING G430 driver closeup' },
  { src: '/images/proshop/gloves-wall.jpg', alt: 'Golf gloves wall display' },
];
