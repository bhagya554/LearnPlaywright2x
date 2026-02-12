import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Building2, MapPin, DollarSign, ExternalLink, Calendar, FileText, Edit2, Trash2, GripVertical, Briefcase } from 'lucide-react';

function JobCard({ job, isOverlay, onEdit, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: job.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  };

  const priorityColors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
  };

  const priorityLabels = {
    high: 'High',
    medium: 'Medium',
    low: 'Low'
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getInitials = (name) => {
    if (!name) return '??';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`job-card priority-${job.priority} ${isOverlay ? 'overlay' : ''} ${isDragging ? 'dragging' : ''}`}
    >
      {/* Drag Handle */}
      <div 
        className="drag-handle" 
        {...attributes} 
        {...listeners}
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          padding: '0.25rem',
          cursor: 'grab',
          color: '#64748b',
          opacity: 0,
          transition: 'opacity 0.2s'
        }}
      >
        <GripVertical size={16} />
      </div>

      <div 
        className="job-card-header"
        onMouseEnter={(e) => {
          const handle = e.currentTarget.parentElement.querySelector('.drag-handle');
          if (handle) handle.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          const handle = e.currentTarget.parentElement.querySelector('.drag-handle');
          if (handle) handle.style.opacity = '0';
        }}
      >
        <div className="job-company">
          <div 
            className="company-logo"
            style={{ 
              background: `linear-gradient(135deg, ${priorityColors[job.priority]}40 0%, ${priorityColors[job.priority]}60 100%)`,
              color: priorityColors[job.priority]
            }}
          >
            {getInitials(job.company)}
          </div>
          <div className="company-details">
            <h4>{job.company}</h4>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Briefcase size={12} />
              {job.source}
            </span>
          </div>
        </div>
        
        <div className="job-actions">
          <button className="job-action-btn" onClick={onEdit} title="Edit">
            <Edit2 size={14} />
          </button>
          <button className="job-action-btn delete" onClick={onDelete} title="Delete">
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <h3 className="job-title">{job.title}</h3>

      <div className="job-meta">
        {job.location && (
          <span className="job-tag">
            <MapPin size={12} />
            {job.location}
          </span>
        )}
        {job.type && (
          <span className="job-tag">
            <Building2 size={12} />
            {job.type}
          </span>
        )}
        {job.salary && (
          <span className="job-tag salary">
            <DollarSign size={12} />
            {job.salary}
          </span>
        )}
      </div>

      {job.resumeUsed && (
        <div className="job-resume">
          <FileText size={14} />
          <span>{job.resumeUsed}</span>
        </div>
      )}

      <div className="job-footer">
        <div className="job-date">
          <Calendar size={14} />
          {formatDate(job.createdAt)}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {job.url && (
            <a 
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: '#6366f1',
                fontSize: '0.8rem',
                fontWeight: 500,
                textDecoration: 'none'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              View
            </a>
          )}
          <span className={`job-priority ${job.priority}`}>
            {priorityLabels[job.priority]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
