import React from 'react';
import 'tachyons'

const Card = (props) => {
    return(
        <div className="dib grow bg-light-blue tc br3 pa2 ma2 bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h1>{props.robotName}</h1>
                <p>{props.robotEmail}</p>
            </div>
        </div>
    )
}
export default Card;
