export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date?: string; // ISO string date
  avatarUrl?: string;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    rating: 5,
    comment: "Absolutely stunning 3D animations! Abhi brought my vision to life with incredible detail and creativity. Highly recommended!",
    date: '2024-07-15',
    avatarUrl: 'https://placehold.co/40x40.png?text=AS',
  },
  {
    id: '2',
    name: 'Priya Patel',
    rating: 4.5,
    comment: "Great graphic design work for my new brand. Abhi was very responsive and delivered excellent quality. The website help was also top-notch.",
    date: '2024-06-28',
    avatarUrl: 'https://placehold.co/40x40.png?text=PP',
  },
  {
    id: '3',
    name: 'Rohan Mehta',
    rating: 5,
    comment: "Needed urgent help with a digital project, and Abhi was a lifesaver! Fast, efficient, and very knowledgeable. The service was beyond my expectations.",
    date: '2024-05-10',
    avatarUrl: 'https://placehold.co/40x40.png?text=RM',
  },
   {
    id: '4',
    name: 'Sneha Desai',
    rating: 4,
    comment: "The website design is clean and professional. Abhi listened to my requirements and delivered a great product. Some minor delays but overall satisfied.",
    date: '2024-08-01',
     avatarUrl: 'https://placehold.co/40x40.png?text=SD',
  },
];
