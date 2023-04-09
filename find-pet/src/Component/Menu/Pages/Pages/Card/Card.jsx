import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div className='page-card'>
            <div className='page-card-content'>
                <img src={props.petImage} className='page-card-image' alt='^w^' />
                <div className='page-card-form'>
                    <h1>
                        {props.title}
                    </h1>
                    <hr />
                    <div className='page-card-info'>
                        Кличка:{props.petName}
                        <br />
                        Возраст:{props.petAge}
                        <br />
                        Порода:{props.petBreed}
                        <br />
                        Расцветка:{props.petColor}
                    </div>
                    <div className='page-card-buttons'>
                        <Link to="/form" >
                            <button className='page-card-button'>Отозваться</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card