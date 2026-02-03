import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicLayout } from '@/components/layout';
import {
  HomePage,
  AboutPage,
  PortfolioPage,
  ProjectDetailPage,
  TeamPage,
  TeamMemberPage,
} from '@/pages/public';
import { AdminLayout } from '@/components/layout/AdminLayout';
import {
  LoginPage,
  DashboardPage,
  ProjectsAdminPage,
  TeamAdminPage,
  MediaLibraryPage,
  SettingsPage,
} from '@/pages/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:slug" element={<TeamMemberPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsAdminPage />} />
          <Route path="team" element={<TeamAdminPage />} />
          <Route path="media" element={<MediaLibraryPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
