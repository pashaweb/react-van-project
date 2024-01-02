import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import { initializeApp } from 'firebase/app';
import { config } from '@/config/config';
import { AuthRoute } from '@/components/AuthRoute';
import Login from '@/pages/auth/Login';

initializeApp(config.firebaseConfig);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/guarded"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
