import React from "react";
import { createRoot } from 'react-dom/client';

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: micro-frontend-root</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div>Version: v2</div>
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
