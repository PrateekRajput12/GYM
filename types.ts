
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
