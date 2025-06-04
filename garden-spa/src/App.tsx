import React, { useState } from 'react';
import { InfoPanel } from './components/InfoPanel';
import { services } from './data';
import { Hotspot } from './components/Hotspot';

export default function App() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="p-4 md:p-8 space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Discover your dream garden with transparent pricing!
      </h1>

      <div className="relative mx-auto max-w-xl h-96 rounded-lg shadow-inner bg-gradient-to-br from-green-100 via-green-200 to-green-300">
        {services.map((service) => (
          <Hotspot
            key={service.id}
            service={service}
            onClick={() => setActive(service.id)}
          />
        ))}
      </div>

      <InfoPanel
        service={services.find((s) => s.id === active)}
        onClose={() => setActive(null)}
      />

      <section className="max-w-xl mx-auto space-y-2">
        <h2 className="text-xl font-semibold">About Us</h2>
        <p>
          We are a professional landscaping company offering comprehensive services and premium materials.
        </p>
      </section>

      <section className="max-w-xl mx-auto space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Phone: 123-456-789</p>
        <p>Email: info@example.com</p>
      </section>
    </div>
  );
}
