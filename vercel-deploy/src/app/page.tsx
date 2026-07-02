import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { SignatureBridal } from "@/components/site/signature-bridal";
import { About } from "@/components/site/about";
import { Location } from "@/components/site/location";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { business } from "@/lib/business";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  alternateName: business.nameKannada,
  slogan: business.tagline,
  telephone: "+919945770418",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "#36 (Basement), 3rd Main Road, Ramanjaneya Nagar, Beside A-Plus Food & More Store",
    addressLocality: "Chikkalasandra",
    addressRegion: "Karnataka",
    postalCode: "560061",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coords.lat,
    longitude: business.coords.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  areaServed: "Bengaluru",
  makesOffer: [
    { "@type": "Offer", name: "Bridal Makeup" },
    { "@type": "Offer", name: "Pre & Post Wedding Makeup" },
    { "@type": "Offer", name: "HD Makeup" },
    { "@type": "Offer", name: "Party / Fashion Makeup" },
    { "@type": "Offer", name: "Light Makeup" },
    { "@type": "Offer", name: "Model Portfolio" },
    { "@type": "Offer", name: "Hair" },
    { "@type": "Offer", name: "Skin Care" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Services />
        <SignatureBridal />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
