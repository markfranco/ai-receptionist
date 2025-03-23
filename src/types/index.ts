export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BusinessType {
  id: string;
  label: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
} 