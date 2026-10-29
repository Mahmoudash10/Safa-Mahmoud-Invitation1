/*
 * Wedding invitation configuration
 * -------------------------------
 * Update this file to personalise the entire invitation. No other file needs
 * editing for normal content, image, colour, story, event, or form changes.
 */
const config = {
  // Couple and invitation
  brideName: 'Safa',
  groomName: 'Mahmoud',
  monogram: 'S & M',
  weddingDate: 'November 27, 2026',
  weddingDateTime: '2026-11-27T15:19:00',
  city: 'Maadi',
  rsvpBy: 'November 1, 2026',
  heroInvitationLine: 'invite you to celebrate their engagement',
  openingKicker: 'A celebration of love',

  // Venue and map
  venueName: 'Vienna Hall - Villa Rihana',
  address: 'المريوطية طريق سقارة السياحي بعد فندق كتراكت',
  googleMapsLink: 'https://maps.app.goo.gl/h9mo5tfvxGSoLmow6',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.682249525638!2d31.1775049!3d29.959817100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584902f52ae89f%3A0x383f54fc06dc5a10!2z2qTZitmE2Kdf2LHZitit2KfZhtipIFZpbGxhX1JpaGFuYQ!5e0!3m2!1sar!2seg!4v1784032101765!5m2!1sar!2seg',

  // Remote submissions — paste the deployed Google Apps Script URL ending in /exec.
  submissionEndpoint: 'https://script.google.com/macros/s/AKfycbzizYD5-M2Pnoivi6c4pS74sd-rMM8VDee68sCmdJACnbZUpQ6u5qU8nWmEe3jXMlMX/exec',

  // Images — use hosted URLs or local paths relative to index.html
  cardImage: './src/cardImage.png',
  // Round photo on the envelope card: the point to focus on and how far to zoom in (1 = no zoom)
  cardImagePosition: '37% 38%',
  cardImageZoom: 1.6,
  heroImage: './src/heroImage.png',

  // Background song — put an .mp3 in the src folder and write its name here
  music: './src/music.mp3',

  // Which part of the hero photo stays in view, e.g. 'center', 'center 70%' (lower), 'center top'
  heroImagePosition: 'center',

  // Theme colours (buttercream cake palette)
  colors: {
    primaryText: '#2c3a2f',
    green: '#2f5e3b',      // script lettering & leaves
    rose: '#c9959a',       // dusty-rose blooms
    butter: '#f4e6b9',     // buttercream piping
    background: '#fdf8ea', // ivory frosting
  },

  // Blessing section — the verse shown beside a photo.
  blessing: {
    eyebrow: 'A blessing to begin with',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    source: 'سورة الروم · الآية ٢١',
    translation: 'And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy.',
    imageUrl: './src/image2.png',
  },

  // Event details
  events: [
    { title: 'Ceremony', time: '7:00 PM', location: 'Vienna Hall - Villa Rihana' },
  ],
  dressCode: 'Black Tie Optional',
  note: 'Please arrive 30 minutes early.',

  isGuestbookPublic: new URLSearchParams(window.location.search).get("gusetBook") || false,
  maxGuests: 4,
  closingMessage: 'Your presence will make our celebration even more special.',
};
