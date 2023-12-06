// PATH: './main.jsx'


// Refactor: removed React import after removing strict mode;
// strictmode is helpful in production, but can produce extra log messages in development.

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
