import React from 'react';

//Or you can write name,email,id instead of props
//const Card = ({name,email,id})=>{} and instead of props.name 
//use name directly
const Card=(props) => {
    
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robot' src={`https://robohash.org/${props.id}?200x200}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}
export default Card;
