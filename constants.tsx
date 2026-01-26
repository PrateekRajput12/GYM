
import React from 'react';
import { 
  Dumbbell, 
  HeartPulse, 
  Zap, 
  Users, 
  Trophy, 
  Waves,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { Program, Trainer, Plan, Review } from './types';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Strength Training',
    description: 'Build raw power with our professional-grade weight lifting equipment and customized plans.',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Cardio Zone',
    description: 'High-end treadmills, ellipticals, and cycles to boost your endurance and heart health.',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'CrossFit',
    description: 'High-intensity functional movements designed to push your body to its absolute limits.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    title: 'Functional Training',
    description: 'Improve daily performance through exercises that mimic real-life movements.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1599058917232-d750c185967c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    title: 'Personal Training',
    description: 'Get 1-on-1 attention from experts who curate diets and workouts specifically for you.',
    icon: 'Trophy',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    title: 'Jacuzzi & Recovery',
    description: 'Relax your muscles and speed up recovery in our premium steam and jacuzzi facilities.',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Sameer Khan',
    role: 'Head Trainer',
    experience: '12+ Years',
    specialization: 'Bodybuilding & Nutrition',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Cardio Specialist',
    experience: '8+ Years',
    specialization: 'Weight Loss & Yoga',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'Rahul Deshmukh',
    role: 'Strength Coach',
    experience: '10+ Years',
    specialization: 'Powerlifting & HIIT',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'Anita Roy',
    role: 'Fitness Consultant',
    experience: '6+ Years',
    specialization: 'Mobility & Rehab',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600'
  }
];

export const PLANS: Plan[] = [
  {
    id: '1',
    name: 'Monthly',
    price: '₹2,500',
    duration: 'per month',
    features: ['Access to all gym areas', 'Free 1-day trial', 'Locker access', 'General trainer assistance']
  },
  {
    id: '2',
    name: 'Quarterly',
    price: '₹6,000',
    duration: '3 months',
    popular: true,
    features: ['All Monthly features', '10% off supplements', '1 PT Session monthly', 'Body scan analysis']
  },
  {
    id: '3',
    name: 'Yearly',
    price: '₹18,000',
    duration: '12 months',
    features: ['Best Value', 'Unlimited Jacuzzi access', '4 PT Sessions monthly', 'Diet consultation', 'Family discount eligibility']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    rating: 5,
    text: 'Best gym in Mumbai Central! The equipment is top-notch and the vibe is unbeatable.',
    date: '2 months ago'
  },
  {
    id: '2',
    name: 'Saira Malik',
    rating: 4,
    text: 'Very hygienic and spacious. The trainers are actually helpful and professional.',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Vikram Joshi',
    rating: 5,
    text: 'Great recovery section. The steam room is a lifesaver after heavy leg days.',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'Rohan Patil',
    rating: 5,
    text: 'Transformative experience. Highly recommend the personal training program.',
    date: '1 week ago'
  }
];
