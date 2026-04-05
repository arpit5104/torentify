
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SKILLS } from '../constants';

interface SkillPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillPopup: React.FC<SkillPopupProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredSkills = useMemo(() => 
    SKILLS.filter(skill => skill.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const handleSkillClick = (skill: string) => {
    navigate(`/jobs?skill=${encodeURIComponent(skill)}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Explore Skills</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <div className="flex flex-wrap gap-2">
            {filteredSkills.length > 0 ? (
              filteredSkills.map(skill => (
                <button
                  key={skill}
                  className="px-4 py-1.5 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-full text-sm font-medium text-gray-600 transition-colors"
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill}
                </button>
              ))
            ) : (
              <p className="text-gray-500 italic">No skills found matching "{search}"</p>
            )}
          </div>
        </div>
        <div className="p-4 bg-gray-50 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillPopup;
