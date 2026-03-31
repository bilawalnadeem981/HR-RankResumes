import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';  // <- import added

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* <- scroll fix component */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;