import KanbanColumn from './KanbanColumn';

function KanbanBoard({ columns, jobs, onEdit, onDelete }) {
  return (
    <div className="kanban-container">
      {columns.map(column => (
        <KanbanColumn
          key={column.id}
          column={column}
          jobs={jobs.filter(job => job.status === column.id)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
