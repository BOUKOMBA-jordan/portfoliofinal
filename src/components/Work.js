import React, { useState } from 'react';
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./workCardData";  // Assurez-vous que le nom du fichier et son chemin sont corrects

const Work = () => {
  // Étape 1 : Ajouter un état pour le filtre
  const [filter, setFilter] = useState('tous');

  // Étape 2 : Filtrer les données
  const filteredData = ProjectCardData.filter(val => {
    if (filter === 'tous') {
      return true;
    }
    return val.categorie === filter; // Supposons que chaque carte a une propriété 'categorie'
  });

  // Étape 3 : Boutons de filtre
  const handleFilterChange = (nouveauFiltre) => {
    setFilter(nouveauFiltre);
  };

  return (
    <div className="work-container">
      <h1 className="project-heading">Projets</h1>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('tous')}>Tous</button>
        <button onClick={() => handleFilterChange('e-commerce')}>E-commerce</button>
        <button onClick={() => handleFilterChange('immobilier')}>Immobilier</button>
        <button onClick={() => handleFilterChange('portfolio')}>Portfolio</button>
        <button onClick={() => handleFilterChange('éducation')}>Éducation</button>
        <button onClick={() => handleFilterChange('culture')}>Culture</button>
        <button onClick={() => handleFilterChange('location')}>Location</button>
      </div>
      <div className="project-container">
        {filteredData.map((val, ind) => {
          return (
            <WorkCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              index={ind} // Passer l'index à WorkCard
            />
          )
        })}
      </div>
    </div>
  );
}

export default Work;
