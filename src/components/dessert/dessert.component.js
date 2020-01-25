import React from 'react'

const Dessert = ({ title, source, calories, image, ingredients, url}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h5>By: {source}</h5>
            <p>{calories}</p>
            <img src={image} alt="dessert image" />
            <ol>
                {
                    ingredients.map(ingredient => (
                        <div key={ingredient.text}>
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