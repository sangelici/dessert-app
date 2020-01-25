import React, {useState, useEffect} from 'react';
import Dessert from '../dessert/dessert.component';
import DessertOptions from '../dessertOptions/dessertOptions.component'

// functional component
const DessertList = () => {

    // required api code
    const APP_ID='794f1117';
    const APP_KEY='d20bc9a40cf80fab0a8b294437d68173';

    // set the initial state of desserts using hook
    const [desserts, setDesserts] = useState([]);
    const [query, setQuery] = useState('desserts')

    // data fetching side effect hook
    useEffect(() => {
        getDesserts();
    }, [query])

    // aysnc function
    const getDesserts = async () => {
        // first, gets data from api
        // the fetch takes a query to start
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        // second, formats response into a JSON object and sets it to the variable data
        const data = await res.json();
        console.log(data)
        // desserts state gets set to that data.hits(the individual desserts)
        setDesserts(data.hits)
    }

    const handleSelection = e => {
        // console.log(e.target.value) <- WORKS
        e.preventDefault();
        let selection = e.target.id;
        // console.log(selection) <- WORKS
        setQuery(selection)
    }

    return (
        <div className="dessert-list">
            <DessertOptions onClick={handleSelection}/>
            {/* map through the list of desserts and passes the properties to the Dessert component*/}
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