import React from "react";

function Categories({items, onClick}) {

    return(
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((text, index) =>  <li onClick={() => onClick(text)} key={`${text}_${index}`}>{text}</li>)}

            </ul>
        </div>
    )
}

export default Categories;