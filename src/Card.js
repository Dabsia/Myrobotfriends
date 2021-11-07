import React from "react";



const Card = (props) => {
    // From ES6 you can destructure  the id and name into
    const {name, id, email} = props
    return (
        <div className = 'bg-light-green dib br3 ma2 pa3 grow bw2 tc shadow-5 '>
            <img src = {`https://robohash.org/${id}?150*100`} alt = 'robot_photo'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;