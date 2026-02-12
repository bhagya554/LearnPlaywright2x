import { useMemo } from 'react';
import { 
  Briefcase, 
  Send, 
  Users, 
  CheckCircle2, 
  TrendingUp,
  Target,
  Calendar,
  Link2,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Star,
  MapPin
} from 'lucide-react';
import { format, subDays, parseISO, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

function Dashboard({ jobs, stats, onViewBoard }) {
  // Calculate additional stats
  const analytics = useMemo(() => {
    // Sources breakdown
    const sources = jobs.reduce((acc, job) => {
      acc[job.source] = (acc[job.source] || 0) + 1;
      return acc;
    }, {});

    // Resume usage
    const resumes = jobs.reduce((acc, job) => {
      acc[job.resumeUsed] = (acc[job.resumeUsed] || 0) + 1;
      return acc;
    }, {});

    // Weekly activity
    const today = new Date();
    const weekStart = startOfWeek(today);
    const weekEnd = endOfWeek(today);
    const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

    const weeklyData = weekDays.map(day => {
      const dateStr = format(day, 'yyyy-MM-dd');
      return {
        day: format(day, 'EEE'),
        date: dateStr,
        count: jobs.filter(job => job.createdAt?.startsWith(dateStr)).length
      };
    });

    // Conversion rates
    const appliedToInterview = stats.applied > 0 
      ? Math.round((stats.interview / stats.applied) * 100) 
      : 0;
    
    const totalConversion = stats.total > 0 
      ? Math.round((stats.done / stats.total) * 100) 
      : 0;

    // Recent activity
    const recentJobs = [...jobs]
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      .slice(0, 5);

    return {
      sources: Object.entries(sources).sort((a, b) => b[1] - a[1]).slice(0, 5),
      resumes: Object.entries(resumes).sort((a, b) => b[1] - a[1]).slice(0, 4),
      weeklyData,
      appliedToInterview,
      totalConversion,
      recentJobs
    };
  }, [jobs, stats]);

  const statCards = [
    { 
      key: 'total', 
      label: 'Total Jobs', 
      value: stats.total, 
      trend: '+12%',
      trendUp: true,
      icon: Briefcase,
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    { 
      key: 'applied', 
      label: 'Applied', 
      value: stats.applied, 
      trend: '+8%',
      trendUp: true,
      icon: Send,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
    },
    { 
      key: 'interview', 
      label: 'Interviews', 
      value: stats.interview, 
      trend: '+25%',
      trendUp: true,
      icon: Users,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
    },
    { 
      key: 'done', 
      label: 'Completed', 
      value: stats.done, 
      trend: '+5%',
      trendUp: true,
      icon: CheckCircle2,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #22c55e 100%)'
    }
  ];

  const maxWeekly = Math.max(...analytics.weeklyData.map(d => d.count), 1);

  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section" style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 700, 
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome back, Job Seeker! 👋
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Here's what's happening with your job search today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid" style={{ marginBottom: '2rem' }}>
        {statCards.map((card, index) => (
          <div 
            key={card.key}
            className="stat-card"
            style={{ 
              '--card-accent': card.color,
              animationDelay: `${index * 0.1}s`
            }}
            onClick={onViewBoard}
          >
            <div className="stat-header">
              <div className="stat-icon" style={{ 
                background: `${card.color}20`,
                color: card.color
              }}>
                <card.icon size={24} />
              </div>
              <div className={`stat-trend ${card.trendUp ? 'positive' : 'negative'}`}>
                {card.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {card.trend}
              </div>
            </div>
            <div className="stat-value">{card.value}</div>
            <div className="stat-label">{card.label}</div>
            <div className="stat-progress">
              <div 
                className="stat-progress-bar" 
                style={{ 
                  width: `${Math.min((card.value / Math.max(stats.total, 1)) * 100, 100)}%`,
                  background: card.gradient
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Weekly Activity Chart */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <Calendar size={20} style={{ color: '#6366f1' }} />
                Weekly Activity
              </div>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                View All
              </button>
            </div>
            <div className="card-body">
              <div className="activity-chart">
                {analytics.weeklyData.map((day, idx) => (
                  <div key={idx} className="chart-bar-wrapper">
                    <div className="chart-bar-container">
                      <div 
                        className="chart-bar"
                        style={{ 
                          height: `${(day.count / maxWeekly) * 100}%`,
                          background: day.count > 0 
                            ? 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 100%)' 
                            : 'rgba(255,255,255,0.05)'
                        }}
                      >
                        {day.count > 0 && (
                          <span style={{ 
                            position: 'absolute', 
                            top: '-20px', 
                            left: '50%', 
                            transform: 'translateX(-50%)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: '#f8fafc'
                          }}>
                            {day.count}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="chart-label">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <Clock size={20} style={{ color: '#f59e0b' }} />
                Recent Applications
              </div>
            </div>
            <div className="card-body" style={{ padding: 0 }}>
              {analytics.recentJobs.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {analytics.recentJobs.map((job, idx) => (
                    <div 
                      key={job.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.5rem',
                        borderBottom: idx < analytics.recentJobs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                      }}
                      onClick={onViewBoard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: `linear-gradient(135deg, ${getStatusColor(job.status)}20 0%, ${getStatusColor(job.status)}40 100%)`,
                        color: getStatusColor(job.status),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.85rem'
                      }}>
                        {job.company?.slice(0, 2).toUpperCase()}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>
                          {job.title}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                          {job.company} • {job.source}
                        </div>
                      </div>
                      <div style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        background: `${getStatusColor(job.status)}20`,
                        color: getStatusColor(job.status)
                      }}>
                        {job.status}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                  <Briefcase size={48} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                  <p>No applications yet. Start by adding a job!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Conversion Rate */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)' }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <Target size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Conversion Rate</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#f8fafc' }}>
                    {analytics.appliedToInterview}%
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span style={{ color: '#94a3b8' }}>Progress to Goal</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>{analytics.appliedToInterview}%</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${analytics.appliedToInterview}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
                    borderRadius: '4px',
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>

              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                {analytics.appliedToInterview > 20 
                  ? '🎉 Great job! Your conversion rate is above average.' 
                  : '💡 Keep applying! Track your progress here.'}
              </div>
            </div>
          </div>

          {/* Top Sources */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <Link2 size={20} style={{ color: '#3b82f6' }} />
                Top Job Sources
              </div>
            </div>
            <div className="card-body">
              {analytics.sources.length > 0 ? (
                <div className="source-list">
                  {analytics.sources.map(([source, count], idx) => {
                    const maxCount = analytics.sources[0][1];
                    return (
                      <div key={source} className="source-item">
                        <div className={`source-rank ${idx < 3 ? 'top' : ''}`}>#{idx + 1}</div>
                        <div className="source-info">
                          <div className="source-name">{source}</div>
                          <div className="source-count">{count} jobs</div>
                        </div>
                        <div className="source-bar">
                          <div 
                            className="source-bar-fill" 
                            style={{ width: `${(count / maxCount) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No data available
                </div>
              )}
            </div>
          </div>

          {/* Resume Performance */}
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <FileText size={20} style={{ color: '#10b981' }} />
                Resume Usage
              </div>
            </div>
            <div className="card-body">
              {analytics.resumes.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {analytics.resumes.map(([resume, count]) => (
                    <div 
                      key={resume}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <FileText size={16} style={{ color: '#10b981' }} />
                        <span style={{ fontSize: '0.9rem', color: '#f8fafc' }}>{resume}</span>
                      </div>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        background: 'rgba(16,185,129,0.1)', 
                        color: '#10b981',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No resume data yet
                </div>
              )}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(249,115,22,0.1) 100%)' }}>
            <div className="card-body">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0
                }}>
                  <Star size={20} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem' }}>Pro Tip</h4>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    Track which resume version gets you more interviews. Update your resume based on the job description for better results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status) {
  const colors = {
    todo: '#6366f1',
    applied: '#3b82f6',
    interview: '#f59e0b',
    done: '#10b981'
  };
  return colors[status] || '#6366f1';
}

export default Dashboard;
