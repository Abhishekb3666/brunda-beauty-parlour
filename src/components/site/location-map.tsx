"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { business } from "@/lib/business";

// Custom SVG gold marker with pulse
const markerIcon = L.divIcon({
  className: "brunda-marker",
  html: `
    <div class="relative">
      <span class="absolute inset-0 -m-3 rounded-full bg-[#D4A24A]/25 animate-ping"></span>
      <span class="absolute inset-0 -m-1.5 rounded-full bg-[#D4A24A]/40"></span>
      <span class="relative block w-4 h-4 rounded-full bg-[#D4A24A] ring-2 ring-[#0B0B0D] shadow-[0_0_18px_rgba(212,162,74,0.9)]"></span>
    </div>
  `,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function LocationMap() {
  useEffect(() => {
    // Ensure Leaflet re-measures inside animated containers.
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <MapContainer
      center={[business.coords.lat, business.coords.lng]}
      zoom={16}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      className="h-full w-full rounded-2xl overflow-hidden"
      style={{ background: "#0B0B0D" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains={["a", "b", "c", "d"]}
      />
      <ZoomControl position="bottomright" />
      <Marker
        position={[business.coords.lat, business.coords.lng]}
        icon={markerIcon}
      >
        <Popup>
          <div style={{ fontFamily: "Inter, sans-serif", color: "#0B0B0D" }}>
            <strong>{business.name}</strong>
            <div style={{ fontSize: 12, marginTop: 4 }}>
              {business.address.line1}
              <br />
              {business.address.locality}
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
