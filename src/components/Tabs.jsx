import React, { useState } from "react";
import "./styletabs.css";
import { SkillIconsHtml } from "./iconos/html";
import {DeviconCss3} from './iconos/css';
import {LogosJavascript} from './iconos/js';
import {SkillIconsBootstrap} from './iconos/boostrap';
import {LogosReact} from './iconos/react';
import {DeviconAstro} from './iconos/astro';
import {LogosPython} from './iconos/python';
import {DeviconPhp} from './iconos/php';
import {VscodeIconsFileTypeSql} from './iconos/sql';
import {DeviconFastapi} from './iconos/fastapi';
import {SkillIconsNodejsDark} from './iconos/node';
import {DeviconSqliteWordmark} from "./iconos/sqlite";
import {LogosMysql} from './iconos/mysql';
import {TeenyiconsNextjsSolid} from "./iconos/next";
import {DeviconPostgresqlWordmark} from "./iconos/postgre";
const SkillsTab = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [previousTab, setPreviousTab] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSkills = () => {
    switch (activeTab) {
      case "frontend":
        return (
          <ul className="ul-tab">
            <li>
             
                <SkillIconsHtml className="icon"/>
              
               
            <p>HTML
                </p></li>
            <li>
                <DeviconCss3 className="icon"/>
                
                <p>CSS
                </p></li>
            <li>
              
              <LogosJavascript className="icon"/>
              <p>
              JavaScript
              </p>
              </li>
              <li>
              
              <SkillIconsBootstrap className="icon"/>
              <p>
              Boostrap
              </p>
              </li>


              <li>
              
              <LogosReact className="icon"/>
              <p>
              React
              </p>
              </li>

              <li>
              
              <DeviconAstro className="icon"/>
              <p>
              Astro
              </p>
              </li>


            {/* Agrega más habilidades frontend aquí */}
          </ul>
        );
      case "backend":
        return (
          <ul className="ul-tab">
           <li>
              
              <LogosPython className="icon"/>
              <p>
              Python
              </p>
              </li>
              <li>
              
              <DeviconPhp className="icon"/>
              <p>
              PHP
              </p>
              </li>
              <li>
              
              <VscodeIconsFileTypeSql className="icon"/>
              <p>
              SQL
              </p>
              </li>
              <li>
              
              <DeviconFastapi className="icon"/>
              <p>
              FastApi
              </p>
              </li>
              <li>
              
              <TeenyiconsNextjsSolid className="icon"/>
              <p>
              NextJS
              </p>
              </li>
              <li>
              
              <SkillIconsNodejsDark className="icon"/>
              <p>
              NodeJs
              </p>
              </li>
            {/* Agrega más habilidades backend aquí */}
          </ul>
        );
      case "database":
        return (
          <ul className="ul-tab">
           <li>
              
              <LogosMysql className="icon"/>
              <p>
              MySQL
              </p>
              </li>
              <li>
              
              <DeviconSqliteWordmark className="icon"/>
              <p>
              SQLLite
              </p>
              </li>
              <li>
              
              <DeviconPostgresqlWordmark className="icon"/>
              <p>
              PostgreSQL
              </p>
              </li>
            {/* Agrega más habilidades de base de datos aquí */}
          </ul>
        );
      // Agrega más casos según sea necesario
      default:
        return null;
    }
  };

  return (
    <div className="center-content">
      <div className="tabs">
        <button
          className={activeTab === "frontend" ? "active" : ""}
          onClick={() => handleTabChange("frontend")}
        >
          Frontend
        </button>
        <button
          className={activeTab === "backend" ? "active" : ""}
          onClick={() => handleTabChange("backend")}
        >
          Backend
        </button>
        <button
          className={activeTab === "database" ? "active" : ""}
          onClick={() => handleTabChange("database")}
        >
          Base de Datos
        </button>
        {/* Agrega más pestañas según sea necesario */}
      </div>
      <div className={`color-transition ${previousTab}`}>
        <div className={`color-transition-bg ${activeTab}`}></div>
      </div>
      <div className="skills">{renderSkills()}</div>
    </div>
  );
};

export default SkillsTab;
