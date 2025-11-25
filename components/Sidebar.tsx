import React from 'react';
import { Book, Scale, User, Gavel, Landmark, ChevronRight } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategoryId, 
  onSelectCategory,
  isOpen,
  onCloseMobile
}) => {
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'scale': return <Scale size={20} />;
      case 'user': return <User size={20} />;
      case 'gavel': return <Gavel size={20} />;
      case 'building': return <Landmark size={20} />;
      default: return <Book size={20} />;
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onCloseMobile}
        ></div>
      )}

      <aside className={`
        fixed md:relative z-30
        w-64 h-full bg-legal-900 text-gray-300 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-legal-700 flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg">
            <Scale className="text-legal-900" size={24} />
          </div>
          <span className="text-xl font-serif font-bold text-white tracking-wide">LexNot</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-legal-400">
            Dersler
          </div>
          <ul>
            {categories.map((cat) => (
              <li key={cat.id} className="mb-1">
                <button
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onCloseMobile();
                  }}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 text-sm transition-colors
                    ${selectedCategoryId === cat.id 
                      ? 'bg-legal-800 text-white border-l-4 border-amber-500' 
                      : 'hover:bg-legal-800 hover:text-white border-l-4 border-transparent'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {getIcon(cat.icon)}
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  {selectedCategoryId === cat.id && <ChevronRight size={16} />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-legal-700 text-xs text-center text-legal-500">
          &copy; 2024 LexNot Hukuk Platformu
        </div>
      </aside>
    </>
  );
};

export default Sidebar;