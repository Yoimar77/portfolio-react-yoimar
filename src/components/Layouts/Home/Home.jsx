import React from 'react';
import './Home.css';
import photo from "../../../assets/germogli.jpg";


export const Home = () => {
    return (
      <div className="home">
        <img src={photo} alt="Yoimar Vargas Restrepo" className="profile-photo" />
        <div className="greeting">
          <h2 className="hello">Hola!</h2>
          <h2 className="name">Mi nombre es Yoimar Vargas Restrepo</h2>
          <h2 className="job-title">Analista y Desarrollador de Software</h2>
        </div>
      </div>
    );
  };
