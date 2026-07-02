export const business = {
  name: "Brunda Beauty Parlour",
  nameKannada: "ಬೃಂದಾ ಬ್ಯೂಟಿ ಪಾರ್ಲರ್",
  invocation: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ",
  tagline: "One Stop Destination to Pamper Yourself",
  phone: {
    display: "+91 99457 70418",
    telHref: "tel:+919945770418",
    whatsappHref: "https://wa.me/919945770418?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Brunda%20Beauty%20Parlour.",
  },
  address: {
    line1: "#36 (Basement), 3rd Main Road",
    line2: "Ramanjaneya Nagar, Beside A-Plus Food & More Store",
    locality: "Chikkalasandra, Bengaluru — 560061",
    full:
      "#36 (Basement), 3rd Main Road, Ramanjaneya Nagar, Beside A-Plus Food & More Store, Chikkalasandra, Bengaluru 560061",
  },
  coords: { lat: 12.9086, lng: 77.5433 },
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Brunda Beauty Parlour, 3rd Main Road, Ramanjaneya Nagar, Chikkalasandra, Bengaluru 560061"
    ),
  hours: [
    { day: "Mon — Sat", time: "10:00 — 20:00" },
    { day: "Sunday", time: "By appointment" },
  ],
} as const;
