export interface Note {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML-like string or markdown
  date: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  notes: Note[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}