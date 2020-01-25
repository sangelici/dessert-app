import React from 'react';

const DessertOptionsForm = props => {
    return(
        <div>
            {/* in order for the onClick function in DessertList component to work,
            I had to pass it as a PROP to the DessertOptionsForm so that the function can be accessed */}
            <form className="dessert-options" onClick={props.onClick}>
                <input type="button" className="typeof-dessert" id="cake" value="Cake" />
                <input type="button" className="typeof-dessert" id="cupcakes" value="Cup Cakes" />
                <input type="button" className="typeof-dessert" id="pies" value="Pies" />                <input type="button" className="typeof-dessert" id="pastries" value="Pastries" />
                <input type="button" className="typeof-dessert" id="breads" value="Breads" />
                <input type="button" className="typeof-dessert" id="chocolate" value="Chocolate" />
                <input type="button" className="typeof-dessert" id="icecream" value="Ice Cream" />
                <input type="button" className="typeof-dessert" id="milkshake" value="Shakes" />
            </form>
        </div>
    )
}

export default DessertOptionsForm