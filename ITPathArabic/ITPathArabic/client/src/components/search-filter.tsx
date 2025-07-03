import { FilterState } from '../types/certification';

interface SearchFilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const difficultyOptions = [
  { value: 'all', label: 'جميع المستويات' },
  { value: 'beginner', label: 'مبتدئ' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'متقدم' }
];

const categoryOptions = [
  { value: 'all', label: 'جميع التخصصات', icon: 'fas fa-th-large' },
  { value: 'devops', label: 'DevOps', icon: 'fas fa-cogs' },
  { value: 'infrastructure', label: 'البنية التحتية', icon: 'fas fa-server' },
  { value: 'cloud', label: 'الحوسبة السحابية', icon: 'fas fa-cloud' },
  { value: 'security', label: 'الأمان السيبراني', icon: 'fas fa-shield-alt' },
  { value: 'business', label: 'إدارة الأعمال', icon: 'fas fa-briefcase' },
  { value: 'data', label: 'تحليل البيانات', icon: 'fas fa-chart-bar' },
  { value: 'ai', label: 'الذكاء الاصطناعي', icon: 'fas fa-brain' }
];

export const SearchFilter = ({ filters, onFiltersChange }: SearchFilterProps) => {
  return (
    <div className="bg-secondary p-8 rounded-xl mb-12">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="search-input"
            placeholder="ابحث عن الشهادة المناسبة..."
            value={filters.searchTerm}
            onChange={(e) => onFiltersChange({
              ...filters,
              searchTerm: e.target.value
            })}
          />
          <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary"></i>
        </div>
        
        <div className="w-full max-w-4xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-primary">التخصصات</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
            {categoryOptions.map((option) => (
              <button
                key={option.value}
                className={`filter-tab flex flex-col items-center gap-2 py-4 ${filters.category === option.value ? 'active' : ''}`}
                onClick={() => onFiltersChange({
                  ...filters,
                  category: option.value as FilterState['category']
                })}
              >
                <i className={`${option.icon} text-xl`}></i>
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-primary">مستوى الصعوبة</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {difficultyOptions.map((option) => (
              <button
                key={option.value}
                className={`filter-tab ${filters.difficulty === option.value ? 'active' : ''}`}
                onClick={() => onFiltersChange({
                  ...filters,
                  difficulty: option.value as FilterState['difficulty']
                })}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
