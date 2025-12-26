export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  content: string;
  date: string;
}

export interface Devotion {
  id: string;
  title: string;
  date: string;
  scripture: {
    reference: string;
    text: string;
  };
  content: string;
}