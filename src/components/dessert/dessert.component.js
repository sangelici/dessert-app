import React from 'react'

// functional component that takes in the properties passed down to in from DessertsList
const Dessert = ({ title, source, calories, image, ingredients, url}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h5>By: {source}</h5>
            <p>{calories}</p>
            <img src={image} alt="dessert" />
            <ol>
                {/* maps through the array of ingredients and lists them */}
                {
                    ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <li>{ingredient.text}</li>
                            {/* <li>{ingredient.weight}</li> */}
                        </div>
                    ))
                 }
            </ol>
            <a href={url}>Go to Recipe</a>
        </div>
    )
}

export default Dessert;