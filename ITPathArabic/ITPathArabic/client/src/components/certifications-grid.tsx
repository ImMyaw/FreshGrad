import { useState } from 'react';
import { CertificationCard } from './certification-card';
import { SearchFilter } from './search-filter';
import { certifications } from '../data/certifications';
import { FilterState } from '../types/certification';

export const CertificationsGrid = () => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    difficulty: 'all',
    category: 'all'
  });

  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesDifficulty = filters.difficulty === 'all' || cert.difficulty === filters.difficulty;
    const matchesCategory = filters.category === 'all' || cert.category === filters.category;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <section id="certifications" className="py-20">
      <div className="container">
        <SearchFilter 
          filters={filters} 
          onFiltersChange={setFilters}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map(cert => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
        
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary text-lg">
              لا توجد شهادات مطابقة لمعايير البحث الخاصة بك.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
