import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ClipboardList, Send, Users, CheckCircle2, Plus } from 'lucide-react';
import JobCard from './JobCard';

const iconMap = {
  ClipboardList,
  Send,
  Users,
  CheckCircle: CheckCircle2
};

function KanbanColumn({ column, jobs, onEdit, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });
  const Icon = iconMap[column.icon] || ClipboardList;

  return (
    <div 
      className={`kanban-column ${isOver ? 'drag-over' : ''}`}
      style={{ '--column-color': column.color }}
    >
      <div className="column-header">
        <div className="column-title-wrapper">
          <div 
            className="column-indicator" 
            style={{ backgroundColor: column.color }}
          />
          <span className="column-title">{column.title}</span>
        </div>
        <span className="column-count">{jobs.length}</span>
      </div>
      
      <div className="column-content" ref={setNodeRef}>
        {jobs.length === 0 ? (
          <div className="empty-state" style={{ padding: '3rem 1rem' }}>
            <div className="empty-state-icon">
              <Icon size={32} />
            </div>
            <h3>No jobs yet</h3>
            <p>Drag jobs here or add new</p>
          </div>
        ) : (
          <SortableContext 
            items={jobs.map(j => j.id)}
            strategy={verticalListSortingStrategy}
          >
            {jobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                onEdit={() => onEdit(job)}
                onDelete={() => onDelete(job.id)}
              />
            ))}
          </SortableContext>
        )}
      </div>
    </div>
  );
}

export default KanbanColumn;
