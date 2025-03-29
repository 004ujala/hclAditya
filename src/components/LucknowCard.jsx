import React from 'react'
import "../css/LucknowCard.css"
const LucknowCard = ({ src, desc }) => {
    return (
        <>
            <div className="card luckCard mt-2 mb-2">
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{desc}</p>
                </div>
            </div>

        </>
    )
}

export default LucknowCard