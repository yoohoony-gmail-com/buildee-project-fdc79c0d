import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/Settings';
import DashboardPage from './pages/Dashboard';

const getNavLinkClass = ({ isActive }: { isActive: boolean; }) => {
  const baseClasses = "px-3 py-2 text-sm";
  if (isActive) {
    return `${baseClasses} text-white font-semibold border-b-2 border-accent-blue`;
  }
  return `${baseClasses} text-warm-400 hover:text-white transition-colors`;
};

const Layout = () => (
  <div className="min-h-screen bg-warm-950 text-white font-sans">
    <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
        <div className="flex items-center gap-1">
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/dashboard" className={getNavLinkClass}>Dashboard</NavLink>
            <NavLink to="/settings" className={getNavLinkClass}>Settings</NavLink>
        </div>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
