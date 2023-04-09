import React from 'react'
import './MainPage.css'
import Card from './Card/Card'
import CatJpg from './Images/Cat.jpg'




function CatPage(props) {
    return (
        <div className='page'>
            <Card 
            petImage={CatJpg}
            title="Пропала кошка муся" 
            petName="Муся"
            petAge="3"
            petBreed="Абисинская"
            petColor="Рыже-коричневый"
            />
             <Card 
            petImage={CatJpg}
            title="Пропала кошка муся" 
            petName="Муся"
            petAge="3"
            petBreed="Абисинская"
            petColor="Рыже-коричневый"
            />
                    <Card 
            petImage={CatJpg}
            title="Пропала кошка муся" 
            petName="Муся"
            petAge="3"
            petBreed="Абисинская"
            petColor="Рыже-коричневый"
            />

        </div>
    )
}

export default CatPage