```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  const location = useLocation();
  useEffect(() => {
    // Redirect to the catch-all route on invalid routes 
    if (location.pathname !== '/' && location.pathname !== '/about') {
       window.location.href = '/404';
    }
  }, [location]);

  return <h1>404 Not Found</h1>;
}
export default App;
```