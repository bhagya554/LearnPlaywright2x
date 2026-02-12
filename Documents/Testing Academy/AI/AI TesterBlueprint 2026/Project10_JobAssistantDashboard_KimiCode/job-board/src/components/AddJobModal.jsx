import { useState, useEffect } from 'react';
import { X, Building2, Briefcase, MapPin, DollarSign, Link2, FileText, AlignLeft, Star, Layers } from 'lucide-react';

const JOB_SOURCES = [
  'LinkedIn',
  'Indeed',
  'Naukri.com',
  'Company Website',
  'Referral',
  'Recruiter',
  'Glassdoor',
  'AngelList',
  'Other'
];

const RESUME_VERSIONS = [
  'Resume - General',
  'Resume - Frontend',
  'Resume - Backend',
  'Resume - Full Stack',
  'Resume - DevOps',
  'Resume - Data Science',
  'Resume - Product Manager',
  'Resume - Custom',
  'CV - Academic'
];

const JOB_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
  'Remote'
];

function AddJobModal({ job, onSave, onClose }) {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    type: 'Full-time',
    salary: '',
    source: 'LinkedIn',
    resumeUsed: 'Resume - General',
    url: '',
    priority: 'medium',
    status: 'todo',
    notes: ''
  });

  useEffect(() => {
    if (job) {
      setFormData({
        company: job.company || '',
        title: job.title || '',
        location: job.location || '',
        type: job.type || 'Full-time',
        salary: job.salary || '',
        source: job.source || 'LinkedIn',
        resumeUsed: job.resumeUsed || 'Resume - General',
        url: job.url || '',
        priority: job.priority || 'medium',
        status: job.status || 'todo',
        notes: job.notes || ''
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <div className="modal-header">
          <h2>{job ? 'Edit Job' : 'Add New Job'}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label>
                <Building2 size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g., Google, Microsoft"
                required
              />
            </div>
            <div className="form-group">
              <label>
                <Briefcase size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Senior React Developer"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <MapPin size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Bangalore, Remote"
              />
            </div>
            <div className="form-group">
              <label>
                <Layers size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Job Type
              </label>
              <select name="type" value={formData.type} onChange={handleChange}>
                {JOB_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              <DollarSign size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Salary Range
            </label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g., ₹15-25 LPA or $80k - $120k"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <Link2 size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Source (Where you found it) *
              </label>
              <select name="source" value={formData.source} onChange={handleChange} required>
                {JOB_SOURCES.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                <FileText size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Resume Used *
              </label>
              <select name="resumeUsed" value={formData.resumeUsed} onChange={handleChange} required>
                {RESUME_VERSIONS.map(resume => (
                  <option key={resume} value={resume}>{resume}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              <Link2 size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Job Posting URL
            </label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                <Star size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Priority
              </label>
              <div className="priority-selector">
                {['low', 'medium', 'high'].map(priority => (
                  <label 
                    key={priority} 
                    className={`priority-option ${formData.priority === priority ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      value={priority}
                      checked={formData.priority === priority}
                      onChange={handleChange}
                    />
                    <span style={{ textTransform: 'capitalize' }}>{priority}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>
                <Layers size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Status
              </label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="todo">To Apply</option>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              <AlignLeft size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any notes about this job application...&#10;- Key requirements&#10;- Contacts&#10;- Follow-up dates"
              rows={4}
            />
          </div>
        </form>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            {job ? 'Update Job' : 'Save Job'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJobModal;
