import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Category, Note } from '../types';

interface NoteListProps {
  category: Category;
  selectedNoteId: string | null;
  onSelectNote: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ category, selectedNoteId, onSelectNote }) => {
  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 w-full md:w-80 lg:w-96 flex-shrink-0">
      <div className="p-6 border-b border-gray-100 bg-legal-50">
        <h2 className="text-xl font-bold text-legal-900 font-serif mb-1">{category.name}</h2>
        <p className="text-sm text-legal-500 line-clamp-2">{category.description}</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {category.notes.map((note) => (
          <div 
            key={note.id}
            onClick={() => onSelectNote(note)}
            className={`
              p-4 rounded-lg cursor-pointer transition-all duration-200 border
              ${selectedNoteId === note.id 
                ? 'bg-white border-legal-300 shadow-md ring-1 ring-legal-200' 
                : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'}
            `}
          >
            <h3 className={`font-semibold mb-2 ${selectedNoteId === note.id ? 'text-legal-800' : 'text-gray-800'}`}>
              {note.title}
            </h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
              {note.summary}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{note.date}</span>
              </div>
              {note.tags.length > 0 && (
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">
                  <Tag size={10} />
                  <span className="font-medium text-gray-600">{note.tags[0]}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;