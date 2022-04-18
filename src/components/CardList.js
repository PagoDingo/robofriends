import React from 'react'
//import robots from './robots'
import Card from './Card'

const CardList = ({robots}) => {
    return (
        <div className="tc">
            {robots.map((robot, i) => {
                return(
                    <Card
                    key={i}
                    id={robot.id}
                    robotName={robot.name}
                    robotEmail={robot.email}
                />
        )
        })}
        </div>
       // <Card robotName={robots[0].name} robotEmail={robots[0].email} />
    )
}

export default CardList