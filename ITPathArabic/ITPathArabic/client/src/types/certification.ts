export interface Certification {
  id: string;
  title: string;
  provider: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  features: string[];
  price: string;
  category: string;
}

export interface FilterState {
  searchTerm: string;
  difficulty: 'all' | 'beginner' | 'intermediate' | 'advanced';
  category: 'all' | 'devops' | 'infrastructure' | 'cloud' | 'security' | 'business' | 'data' | 'ai';
}
