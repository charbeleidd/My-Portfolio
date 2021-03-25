import React from "react";

const Projects = () => {
  return (
    <div className="edu-header" id="projects">
      <h1>My Projects</h1>
      <div className="container-edu">
        <h2>C# project: Drum / Guitar store </h2>
        A Drum / Guitar store is created using OOP logic ; <br />
        in this project, these specs are used : <br />
        <ul>
          <li>Dictionaries</li>
          <li>Lists</li>
          <li> file I/O (used also as a Database to retreive information)</li>
          <li> Sorting using various methods </li>
        </ul>
        First designing the authentication page of authorized users (logging in
        , adding a worker). <br />
        Adding clients and their information (First name , Last name ...).{" "}
        <br />
        Adding products and their info ( Number of parts , type : electrical ,
        classic ...). A page to buy products and complete the neccesairy changes
        to the accounts . <br />
        <h2>C# project:Airport System</h2>
        this project aims to mimic an airport system , similar to the store
        project bt instead relational database is used (SQLSever) <br />
        <h3>working on :</h3>
        Currently i am working on: <br />
        1.An interactive telegram chatbot using Pyhon language . <br />
        2. A REST API server using NODEJS that will be integrated with react
        framework and MongoDB (and testing requests using Postman). <br />
        3.Cross platform web app using React framwork. <br />
      </div>
    </div>
  );
};

export default Projects;
