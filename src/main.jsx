import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Intentionally NOT wrapped in <StrictMode>: it double-invokes effects, which
// would double the render counter in the UseRef demo and the API-call log in the
// UseMemo demo — the exact numbers those examples exist to demonstrate.
createRoot(document.getElementById('root')).render(<App />);
