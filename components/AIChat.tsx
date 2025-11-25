import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateAIResponse } from '../services/geminiService';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  contextText?: string;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose, contextText }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Merhaba! Ben LexNot hukuk asistanıyım. Seçtiğiniz notlar hakkında veya genel hukuk konularında bana soru sorabilirsiniz.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await generateAIResponse(userMessage.text, contextText);
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      // Error is handled in service but fallback here
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-40 flex flex-col border-l border-gray-200 transform transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-legal-900 text-white shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-amber-400" />
          <h3 className="font-semibold">Hukuk Asistanı</h3>
        </div>
        <button onClick={onClose} className="hover:bg-legal-700 p-1 rounded transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              flex max-w-[85%] rounded-lg p-3 shadow-sm text-sm
              ${msg.role === 'user' 
                ? 'bg-legal-600 text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'}
            `}>
              <div className="mr-2 mt-0.5 min-w-[16px]">
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-legal-600" />}
              </div>
              <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center gap-2">
               <Bot size={16} className="text-legal-600" />
               <span className="text-xs text-gray-500 flex items-center gap-1">
                 Düşünüyor... <Loader2 size={12} className="animate-spin" />
               </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="relative">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Notla ilgili bir soru sor..."
            className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-legal-300 focus:bg-white transition-all resize-none text-sm text-gray-800 placeholder-gray-400"
            rows={2}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 bottom-2 p-2 bg-legal-600 text-white rounded-lg hover:bg-legal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </button>
        </div>
        <div className="text-center mt-2">
           <span className="text-[10px] text-gray-400">Yapay zeka hata yapabilir. Bilgileri teyit ediniz.</span>
        </div>
      </div>
    </div>
  );
};

export default AIChat;