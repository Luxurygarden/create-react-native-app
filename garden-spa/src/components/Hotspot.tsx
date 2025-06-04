import React from 'react';
import type { Service } from '../data';
import { positions } from '../positions';

interface Props {
  service: Service;
  onClick: () => void;
}

export const Hotspot: React.FC<Props> = ({ service, onClick }) => (
  <button
    className="absolute flex items-center justify-center w-10 h-10 text-xl bg-white rounded-full shadow hover:bg-green-200 transition-colors"
    style={positions[service.id]}
    onClick={onClick}
    aria-label={service.name}
  >
    {service.icon}
  </button>
);
