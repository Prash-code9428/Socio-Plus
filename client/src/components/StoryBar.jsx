import React from 'react';
import { FaPlus } from 'react-icons/fa';

const mockStories = [
  { id: 1, user: 'John Doe', image: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, user: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, user: 'Alex', image: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, user: 'Sarah', image: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, user: 'Mike', image: 'https://i.pravatar.cc/150?img=13' },
  { id: 6, user: 'Emma', image: 'https://i.pravatar.cc/150?img=20' },
];

export default function StoryBar() {
  return (
    <div className="glass-panel p-3 mb-4 d-flex align-items-center gap-3 overflow-auto" style={{ whiteSpace: 'nowrap' }}>
      <div className="text-center d-inline-block flex-shrink-0">
        <button className="btn btn-light rounded-circle shadow-sm story-bubble d-flex align-items-center justify-content-center border-0" style={{ background: '#fff', color: '#4F46E5' }}>
          <FaPlus size={24} />
        </button>
        <div className="small mt-1 text-muted" style={{ fontSize: '0.75rem' }}>Add Story</div>
      </div>
      
      {mockStories.map(story => (
        <div key={story.id} className="text-center d-inline-block flex-shrink-0">
          <img src={story.image} alt={story.user} className="story-bubble" />
          <div className="small mt-1 text-muted text-truncate" style={{ fontSize: '0.75rem', width: '64px' }}>
            {story.user}
          </div>
        </div>
      ))}
    </div>
  );
}
