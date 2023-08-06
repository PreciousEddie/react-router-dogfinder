import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import "./DogDetails.css"

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find((dog) => dog.name === name);
    if (!dog) return <Navigate to="dogs" />
    return (
        <div className="row DogDetails">
            <div className="col d-flex flex-column align-items-center">
                <h2>{ dog.name }</h2>
                <h3>Age: { dog.age }</h3>
                <img src={ `/${dog.src}.jpg` } />
                <ul>
                    { dog.facts.map((fact, index) => (
                        <li key={ index }>{ fact }</li>
                    )) }
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    );
};

export default DogDetails;