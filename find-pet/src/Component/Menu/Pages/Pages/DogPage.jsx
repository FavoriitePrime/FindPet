import React from 'react'
import './MainPage.css'
import Card from './Card/Card'
import DogJpg from './Images/Dog.jpg'

function CatPage(props) {
    return (
        <div className='page'>
            <Card 
            petImage={DogJpg}
            title="Пропала собака мухтар" 
            petName="Мухтар"
            petAge="-"
            petBreed="Овчарка"
            petColor="Темно-коричневая"
            />
             <Card 
            petImage={DogJpg}
            title="Пропала собака мухтар" 
            petName="Мухтар"
            petAge="-"
            petBreed="Овчарка"
            petColor="Темно-коричневая"
            />

        </div>
    )
}

export default CatPage