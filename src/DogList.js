import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

function DogList({ dogs }) {
    return (
        <div className="DogList">
            <div>
                <h2>Click on any doggo for more info.</h2>
            </div>
            <div>
                { dogs.map((dog, index) => (
                    <div key={ index }>
                        <img src={ `/${dog.src}.jpg` } alt={ dog.name } />
                        <h3>
                            <Link to={ `/dogs/${dog.name}` }>{ dog.name }</Link>
                        </h3>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default DogList;