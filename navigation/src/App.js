import { Routes, Route } from 'react-router-dom';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MainLayout from './pages/MainLayout';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardMessages from './pages/dashboard/DashboardMessages';
import DashboardTasks from './pages/dashboard/DashboardTasks';

/*
    / -> HomePage.js
    /faq -> FaqPage.js
    /about -> AboutPage.js
    qualsiasi altra rotta -> NotFound.js
*/
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
