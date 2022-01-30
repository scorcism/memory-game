import React from 'react';
import './SingleCard.css'

function SingleCard({ card, handChoice, flipped, disable }) {

    const handleClick = () => {
        if(!disable){
            handChoice(card)
        }
    }

    return (
        <>
            <div className="card" key={card.id}>
                <div className={flipped ? "flipped" : ""}>
                    <img src={card.src} alt="card front" className="front" />
                    <img src="/img/cover.png" onClick={handleClick} alt="card back" className="back" />
                </div>
            </div>
        </>
    )
}

export default SingleCard;
