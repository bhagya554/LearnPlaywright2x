import { useState, useEffect } from 'react';
import { DndContext, DragOverlay, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { 
  LayoutDashboard, 
  Kanban, 
  TrendingUp, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  Download, 
  Upload,
  LogOut,
  Briefcase,
  CheckCircle2,
  Users,
  Send,
  ClipboardList
} from 'lucide-react';
import KanbanBoard from './components/KanbanBoard';
import JobCard from './components/JobCard';
import AddJobModal from './components/AddJobModal';
import Dashboard from './components/Dashboard';
import { useLocalDB } from './hooks/useLocalDB';
import './App.css';

const COLUMNS = [
  { id: 'todo', title: 'To Apply', color: '#6366f1', icon: 'ClipboardList' },
  { id: 'applied', title: 'Applied', color: '#3b82f6', icon: 'Send' },
  { id: 'interview', title: 'Interview', color: '#f59e0b', icon: 'Users' },
  { id: 'done', title: 'Done', color: '#10b981', icon: 'CheckCircle' }
];

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'board', label: 'Kanban Board', icon: Kanban },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
];

function App() {
  const { jobs, addJob, updateJob, deleteJob, moveJob, exportData, importData } = useLocalDB();
  const [activeId, setActiveId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    todo: 0,
    applied: 0,
    interview: 0,
    done: 0
  });

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    const total = jobs.length;
    const todo = jobs.filter(j => j.status === 'todo').length;
    const applied = jobs.filter(j => j.status === 'applied').length;
    const interview = jobs.filter(j => j.status === 'interview').length;
    const done = jobs.filter(j => j.status === 'done').length;
    setStats({ total, todo, applied, interview, done });
  }, [jobs]);

  const handleDragStart = (event) => setActiveId(event.active.id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const activeJob = jobs.find(j => j.id === active.id);
    if (!activeJob) return;

    const overColumn = COLUMNS.find(col => col.id === over.id);
    if (overColumn && activeJob.status !== overColumn.id) {
      moveJob(active.id, overColumn.id);
    }
  };

  const handleAddJob = (jobData) => {
    if (editingJob) {
      updateJob(editingJob.id, jobData);
    } else {
      addJob(jobData);
    }
    setIsModalOpen(false);
    setEditingJob(null);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  const handleDeleteJob = (jobId) => {
    if (confirm('Are you sure you want to delete this job?')) {
      deleteJob(jobId);
    }
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) importData(file).catch(err => alert('Failed to import: ' + err.message));
    event.target.value = '';
  };

  const filteredJobs = jobs.filter(job => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      job.company?.toLowerCase().includes(query) ||
      job.title?.toLowerCase().includes(query) ||
      job.source?.toLowerCase().includes(query)
    );
  });

  const activeJob = activeId ? jobs.find(j => j.id === activeId) : null;

  const getStatColor = (key) => {
    const colors = {
      total: '#6366f1',
      todo: '#6366f1',
      applied: '#3b82f6',
      interview: '#f59e0b',
      done: '#10b981'
    };
    return colors[key] || '#6366f1';
  };

  const getStatIcon = (key) => {
    const icons = {
      total: Briefcase,
      todo: ClipboardList,
      applied: Send,
      interview: Users,
      done: CheckCircle2
    };
    return icons[key] || Briefcase;
  };

  const getStatTrend = (key) => {
    return Math.floor(Math.random() * 20) + 5;
  };

  return (
    <div className="app">
      {/* Background Animation */}
      <div className="bg-animation" />

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">
              <Briefcase size={24} />
            </div>
            <div className="brand-text">
              <h1>JobBoard</h1>
              <span>Pro</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main Menu</div>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                onClick={() => setCurrentView(item.id)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
                {item.id === 'board' && stats.total > 0 && (
                  <span className="nav-badge">{stats.total}</span>
                )}
              </button>
            ))}
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Quick Stats</div>
            <button className="nav-item" onClick={() => setCurrentView('board')}>
              <Send size={20} />
              <span>Applied</span>
              <span className="nav-badge" style={{ background: '#3b82f6' }}>{stats.applied}</span>
            </button>
            <button className="nav-item" onClick={() => setCurrentView('board')}>
              <Users size={20} />
              <span>Interviews</span>
              <span className="nav-badge" style={{ background: '#f59e0b' }}>{stats.interview}</span>
            </button>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-card">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <div className="user-name">Job Seeker</div>
              <div className="user-role">Active Candidate</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-wrapper">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-search">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search jobs, companies, or sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <button className="btn btn-secondary btn-icon" onClick={exportData} title="Export Data">
              <Download size={20} />
            </button>
            <label className="btn btn-secondary btn-icon" title="Import Data">
              <Upload size={20} />
              <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
            </label>
            <button className="btn btn-secondary btn-icon">
              <Bell size={20} />
            </button>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} />
              Add Job
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {currentView === 'dashboard' && (
            <Dashboard 
              jobs={jobs} 
              stats={stats}
              onViewBoard={() => setCurrentView('board')}
            />
          )}

          {currentView === 'board' && (
            <>
              <div className="page-header">
                <h1 className="page-title">Job Board</h1>
                <p className="page-subtitle">
                  Manage your job applications across {stats.total} positions
                </p>
              </div>

              <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              >
                <KanbanBoard 
                  columns={COLUMNS}
                  jobs={filteredJobs}
                  onEdit={handleEditJob}
                  onDelete={handleDeleteJob}
                />
                
                <DragOverlay>
                  {activeJob ? (
                    <JobCard job={activeJob} isOverlay onEdit={() => {}} onDelete={() => {}} />
                  ) : null}
                </DragOverlay>
              </DndContext>
            </>
          )}

          {currentView === 'analytics' && (
            <div className="page-header">
              <h1 className="page-title">Analytics</h1>
              <p className="page-subtitle">Detailed insights coming soon...</p>
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddJobModal
          job={editingJob}
          onSave={handleAddJob}
          onClose={() => { setIsModalOpen(false); setEditingJob(null); }}
        />
      )}
    </div>
  );
}

export default App;
