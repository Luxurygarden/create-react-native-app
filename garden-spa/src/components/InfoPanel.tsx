import React, { useState } from 'react';
import { Service } from '../data';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { CostEstimator } from './CostEstimator';

interface Props {
  service: Service | undefined;
  onClose: () => void;
}

export const InfoPanel: React.FC<Props> = ({ service, onClose }) => {
  const [tab, setTab] = useState('offer');

  if (!service) return null;

  const comparison = [
    { name: 'Us', price: service.price },
    { name: 'Market', price: service.price * 1.2 },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-4 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="mb-4 border-b flex space-x-4">
          <button
            className={`pb-2 ${tab === 'offer' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setTab('offer')}
          >
            Offer & Pricing
          </button>
          <button
            className={`pb-2 ${tab === 'why' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setTab('why')}
          >
            Why Choose Us
          </button>
          <button
            className={`pb-2 ${tab === 'gallery' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setTab('gallery')}
          >
            Gallery
          </button>
          <button
            className={`pb-2 ${tab === 'estimate' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setTab('estimate')}
          >
            Estimate Cost
          </button>
          <button
            className={`pb-2 ${tab === 'quote' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setTab('quote')}
          >
            Request a Quote
          </button>
        </div>

        {tab === 'offer' && (
          <div>
            <p className="mb-2">{service.description}</p>
            <p className="font-semibold mb-2">Net price: {service.price} PLN/m²</p>
            <BarChart width={250} height={150} data={comparison} className="mx-auto">
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#16a34a" />
            </BarChart>
          </div>
        )}

        {tab === 'why' && (
          <ul className="list-disc pl-6 space-y-1">
            <li>Comprehensive service</li>
            <li>Premium materials</li>
            <li>Guaranteed deadlines</li>
          </ul>
        )}

        {tab === 'gallery' && (
          <div className="grid grid-cols-2 gap-2">
            {service.images?.map((img, idx) => (
              <img key={idx} src={img} alt="service" className="rounded" />
            ))}
          </div>
        )}

        {tab === 'estimate' && <CostEstimator price={service.price} />}

        {tab === 'quote' && (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your phone/email"
              className="w-full border rounded p-2"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
              Send Request
            </button>
            <p className="text-sm text-gray-500 text-center">
              On-site consultations are free.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
