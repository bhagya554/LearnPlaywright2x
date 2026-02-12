# 🎯 JobBoard Pro

A stunning job application tracker with a Kanban board interface, built with React and modern UI design.

![JobBoard Pro](https://img.shields.io/badge/JobBoard-Pro-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 📊 Dashboard
- **Statistics Overview**: Total jobs, applied, interviews, and completed
- **Weekly Activity Chart**: Visualize your job search progress
- **Conversion Rate**: Track your application-to-interview success rate
- **Top Job Sources**: See where you find the most opportunities
- **Resume Analytics**: Track which resume versions perform best

### 📋 Kanban Board
- **4 Columns**: To Apply → Applied → Interview → Done
- **Drag & Drop**: Move jobs between stages seamlessly
- **Priority Levels**: High (red), Medium (yellow), Low (green)
- **Detailed Cards**: Company, title, location, salary, source, resume used

### 💾 Data Management
- **Local Storage**: All data persists in your browser
- **Export/Import**: Backup and restore your data as JSON
- **No Server Required**: Completely self-hosted

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bhagya554/AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode.git

# Navigate to project directory
cd AITesterBlueprint_Project10_JobAssistantDashboard_KimiCode/job-board

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Custom CSS with CSS Variables
- **Drag & Drop**: @dnd-kit
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📱 Screenshots

### Dashboard
Modern dashboard with stats cards, activity charts, and analytics.

### Kanban Board
Beautiful Kanban board with drag-and-drop functionality.

### Add Job Modal
Comprehensive form to track all job application details.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 Usage Guide

### Adding a Job
1. Click the "Add Job" button
2. Fill in company name, job title, and other details
3. Select source (LinkedIn, Indeed, etc.)
4. Choose which resume version you used
5. Set priority level
6. Save!

### Moving Jobs
- Drag cards between columns to update status
- Or edit a job and change its status manually

### Tracking Progress
- View the Dashboard for overall statistics
- Check weekly activity to stay motivated
- Monitor conversion rates to optimize your approach

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any environment-specific settings:

```env
VITE_APP_NAME=JobBoard Pro
```

## 📦 Project Structure

```
job-board/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Analytics dashboard
│   │   ├── KanbanBoard.jsx    # Main board component
│   │   ├── KanbanColumn.jsx   # Individual columns
│   │   ├── JobCard.jsx        # Job cards
│   │   └── AddJobModal.jsx    # Add/Edit job form
│   ├── hooks/
│   │   └── useLocalDB.js      # Local storage database
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Drag & Drop by [@dnd-kit](https://dndkit.com/)

---

Made with ❤️ for job seekers everywhere!
