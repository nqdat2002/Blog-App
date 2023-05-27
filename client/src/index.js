import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContexProvider} from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContexProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </AuthContexProvider>
);