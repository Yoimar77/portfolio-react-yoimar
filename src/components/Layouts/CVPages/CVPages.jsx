// CVPage.jsx
import React from 'react';
import CV from '../../../assets/CV-YoimarVargasRestrepo-Actualizado.pdf'; 
import './CVPages.css'; // Asegúrate de importar el archivo CSS correspondiente

export const CVPage = () => {
  return (
    <div className="cv-page">
      <iframe src={CV} className="pdf-viewer" title="Yoimar CV"></iframe>
    </div>
  );
};
