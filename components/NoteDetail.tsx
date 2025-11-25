import React from 'react';
import { Note } from '../types';
import { Clock, BookOpen } from 'lucide-react';

interface NoteDetailProps {
  note: Note | null;
}

const NoteDetail: React.FC<NoteDetailProps> = ({ note }) => {
  if (!note) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-paper p-8 text-center text-gray-400">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <BookOpen size={48} className="text-gray-300" />
        </div>
        <h3 className="text-xl font-medium text-gray-600 mb-2">Not Seçilmedi</h3>
        <p>Okumak için sol menüden bir ders ve konu seçiniz.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <header className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 mb-4">
            {note.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-semibold text-legal-700 bg-legal-100 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {note.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {note.date}
            </span>
            <span>•</span>
            <span className="text-legal-600 font-medium">Okuma Süresi: ~5 dk</span>
          </div>
        </header>

        <article className="prose prose-slate prose-headings:font-serif prose-headings:text-legal-900 prose-p:text-gray-700 prose-li:text-gray-700 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: note.content }} />
        </article>

        <div className="mt-12 p-6 bg-legal-50 rounded-lg border border-legal-100">
          <h4 className="font-bold text-legal-800 mb-2">Özet</h4>
          <p className="text-legal-600 text-sm italic">{note.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;