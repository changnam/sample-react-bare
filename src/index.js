import React from 'react';
import { createRoot,hydrateRoot } from "react-dom/client";
import App from './App';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

const root = document.getElementById('root');
hydrateRoot(root, <App />);

