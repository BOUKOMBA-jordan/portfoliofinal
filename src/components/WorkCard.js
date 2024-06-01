import React, { useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const directions = ['animate-left', 'animate-right', 'animate-bottom'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];

    card.classList.add(randomDirection);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }, props.index * 200); // Delay based on the index
        }
      });
    }, { threshold: 0.1 });

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [props.index]);

  return (
    <div ref={cardRef} className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
         
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
