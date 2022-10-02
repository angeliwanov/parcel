import React from "react";
import { createRoot } from 'react-dom/client';

const Hello = () => {
    return (
        <div>Helloo!!!</div>
    )
}

createRoot(document.getElementById('app')).render(<Hello/>);