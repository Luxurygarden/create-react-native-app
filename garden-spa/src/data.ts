export interface Service {
  id: string;
  name: string;
  icon: string; // emoji placeholder
  price: number; // PLN per m2
  description: string;
  images?: string[];
}

export const services: Service[] = [
  {
    id: 'earthworks',
    name: 'Earthworks',
    icon: '🌀',
    price: 155,
    description: 'Complete soil preparation and leveling.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  },
  {
    id: 'lawns',
    name: 'Lawns',
    icon: '🌱',
    price: 2.8,
    description: 'Premium lawn turf installation.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  },
  {
    id: 'planting',
    name: 'Planting & Maintenance',
    icon: '🌳',
    price: 50,
    description: 'Planting services with ongoing care.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  },
  {
    id: 'materials',
    name: 'Materials & Delivery',
    icon: '🚚',
    price: 100,
    description: 'Quality materials delivered to your site.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  },
  {
    id: 'architecture',
    name: 'Small Garden Architecture',
    icon: '🏗️',
    price: 200,
    description: 'Eco border and garden features.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  },
  {
    id: 'advantages',
    name: 'Competitive Advantages',
    icon: '⭐',
    price: 0,
    description: 'Why choose us: comprehensive service, premium materials, guaranteed deadlines.',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200']
  }
];
