// StackTools.jsx
import React from 'react';
import './StackTools.css';
import { FaReact, FaJava, FaJsSquare, FaTrello } from 'react-icons/fa';
import { SiSpringboot, SiGithub, SiJira } from 'react-icons/si';
import { NavLink } from '../../UI/NavbarLink/NavbarLink';

export const StackTools = () => {
  return (
    <div className="stack-tools" id="stack-tools">
      <h3>Stack & Tools</h3>
      <div className="content">
        <div className="stack">
          <h4>Stack</h4>
          <ul>
            <li><NavLink to="#react" label="React" icon={<FaReact />} /></li>
            <li><NavLink to="#springboot" label="Spring Boot" icon={<SiSpringboot />} /></li>
            <li><NavLink to="#java" label="Java" icon={<FaJava />} /></li>
            <li><NavLink to="#javascript" label="JavaScript" icon={<FaJsSquare />} /></li>
          </ul>
        </div>
        <div className="divider" />
        <div className="tools">
          <h4>Tools</h4>
          <ul>
            <li><NavLink to="#github" label="GitHub" icon={<SiGithub />} /></li>
            <li><NavLink to="#scrum" label="Scrum" icon={<FaTrello />} /></li>
            <li><NavLink to="#jira" label="Jira" icon={<SiJira />} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
