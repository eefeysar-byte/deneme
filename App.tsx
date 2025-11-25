import React, { useState, useEffect } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import AIChat from './components/AIChat';
import { CATEGORIES } from './constants';
import { Category, Note } from './types';

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const activeCategory = CATEGORIES.find(c => c.id === selectedCategoryId);

  // Auto-select first note of category when category changes, if desired
  useEffect(() => {
    if (activeCategory && activeCategory.notes.length > 0) {
       // Optional: Auto select first note
       // setSelectedNote(activeCategory.notes[0]);
       // Or clear selection
       setSelectedNote(null);
    }
  }, [selectedCategoryId, activeCategory]);

  return (
    <div className="flex h-screen bg-legal-50 overflow-hidden font-sans">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        categories={CATEGORIES} 
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Mobile Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:hidden">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <span className="font-serif font-bold text-legal-900">LexNot</span>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="p-2 text-legal-600 bg-legal-50 hover:bg-legal-100 rounded-lg"
          >
            <Sparkles size={20} />
          </button>
        </header>

        <div className="flex-1 flex overflow-hidden">
          
          {/* Note List Column */}
          {activeCategory && (
            <div className={`
              ${selectedNote ? 'hidden lg:block' : 'flex-1'} 
              lg:flex-none h-full
            `}>
              <NoteList 
                category={activeCategory} 
                selectedNoteId={selectedNote?.id || null}
                onSelectNote={setSelectedNote}
              />
            </div>
          )}

          {/* Note Detail Column */}
          {selectedNote ? (
            <div className="flex-1 flex flex-col h-full relative">
              <NoteDetail note={selectedNote} />
              
              {/* Floating AI Button (Desktop) */}
              {!isChatOpen && (
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="absolute bottom-8 right-8 bg-legal-900 text-white p-4 rounded-full shadow-lg hover:bg-legal-800 transition-transform hover:scale-105 group hidden md:flex items-center gap-2 z-10"
                >
                  <Sparkles size={20} className="text-amber-400 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium pr-1">Asistan</span>
                </button>
              )}
            </div>
          ) : (
            // Empty State for Desktop when no note is selected but category is
            <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-50 text-gray-400 flex-col p-8">
              <div className="w-64 h-64 bg-gray-200 rounded-full mb-6 opacity-20 flex items-center justify-center">
                 <Menu size={64} />
              </div>
              <p className="text-lg font-serif text-legal-800">Okumaya başlamak için listeden bir konu seçin.</p>
            </div>
          )}
        </div>
      </main>

      {/* AI Assistant Panel */}
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
        contextText={selectedNote ? `Not Başlığı: ${selectedNote.title}\n\nİçerik:\n${selectedNote.content.replace(/<[^>]*>?/gm, '')}` : undefined}
      />

    </div>
  );
}

export default App;