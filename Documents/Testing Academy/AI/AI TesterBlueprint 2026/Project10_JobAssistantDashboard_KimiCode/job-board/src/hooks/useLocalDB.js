import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'jobboard_pro_data';

const initialData = {
  jobs: [],
  settings: {
    theme: 'dark',
    defaultResume: ''
  }
};

export function useLocalDB() {
  const [data, setData] = useState(initialData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData({ ...initialData, ...parsed });
      } catch (e) {
        console.error('Failed to parse stored data:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const { jobs } = data;

  // Add a new job
  const addJob = useCallback((jobData) => {
    const newJob = {
      id: crypto.randomUUID(),
      ...jobData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setData(prev => ({
      ...prev,
      jobs: [...prev.jobs, newJob]
    }));
    
    return newJob;
  }, []);

  // Update an existing job
  const updateJob = useCallback((jobId, updates) => {
    setData(prev => ({
      ...prev,
      jobs: prev.jobs.map(job => 
        job.id === jobId 
          ? { ...job, ...updates, updatedAt: new Date().toISOString() }
          : job
      )
    }));
  }, []);

  // Delete a job
  const deleteJob = useCallback((jobId) => {
    setData(prev => ({
      ...prev,
      jobs: prev.jobs.filter(job => job.id !== jobId)
    }));
  }, []);

  // Move job to different status (column)
  const moveJob = useCallback((jobId, newStatus) => {
    setData(prev => ({
      ...prev,
      jobs: prev.jobs.map(job => 
        job.id === jobId 
          ? { ...job, status: newStatus, updatedAt: new Date().toISOString() }
          : job
      )
    }));
  }, []);

  // Export data as JSON file
  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `jobboard_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [data]);

  // Import data from JSON file
  const importData = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result);
          if (imported.jobs && Array.isArray(imported.jobs)) {
            setData({
              ...initialData,
              ...imported,
              jobs: imported.jobs.map(job => ({
                ...job,
                id: job.id || crypto.randomUUID()
              }))
            });
            resolve(imported.jobs.length);
          } else {
            reject(new Error('Invalid data format'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }, []);

  // Get statistics
  const getStats = useCallback(() => {
    const total = jobs.length;
    const byStatus = {
      todo: jobs.filter(j => j.status === 'todo').length,
      applied: jobs.filter(j => j.status === 'applied').length,
      interview: jobs.filter(j => j.status === 'interview').length,
      done: jobs.filter(j => j.status === 'done').length
    };
    
    const bySource = jobs.reduce((acc, job) => {
      acc[job.source] = (acc[job.source] || 0) + 1;
      return acc;
    }, {});
    
    const byResume = jobs.reduce((acc, job) => {
      acc[job.resumeUsed] = (acc[job.resumeUsed] || 0) + 1;
      return acc;
    }, {});

    // Calculate weekly activity
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toISOString().split('T')[0];
    }).reverse();

    const weeklyActivity = last7Days.map(date => ({
      date,
      count: jobs.filter(job => job.createdAt && job.createdAt.startsWith(date)).length
    }));

    return {
      total,
      byStatus,
      bySource,
      byResume,
      weeklyActivity,
      conversionRate: total > 0 ? Math.round((byStatus.interview / total) * 100) : 0
    };
  }, [jobs]);

  return {
    jobs,
    isLoaded,
    addJob,
    updateJob,
    deleteJob,
    moveJob,
    exportData,
    importData,
    getStats
  };
}
