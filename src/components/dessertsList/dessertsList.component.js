import React, {useState, useEffect, Fragment} from 'react';
import Dessert from '../dessert/dessert.component';

const DessertList = () => {

    const APP_ID='794f1117';
    const APP_KEY='d20bc9a40cf80fab0a8b294437d68173';

    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        getDesserts();
    }, [])

    const getDesserts = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=sorbet&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
        console.log(data)
        setDesserts(data.hits)
    }

    return (
        <div>
            {
                desserts.map(dessert => (
                    <Dessert 
                        key={dessert.recipe.url}
                        title={dessert.recipe.label}
                        source={dessert.recipe.source}
                        calories={Math.floor(dessert.recipe.calories)}
                        image={dessert.recipe.image}
                        ingredients={dessert.recipe.ingredients}
                        url={dessert.recipe.url}
                    />
                ))
            }
        </div>
    )
}

export default DessertList;