import React from 'react'
import '../css/MapCard.css'
const MapCard = ({ src, steps }) => {
    return (
        <>
            <div className="cards mt-2" >
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    {
                        steps.map((step, index) => {
                            return <p className="card-text text-start" key={index}>
                                <b>{index !== steps.length - 1 ? `Step ${index + 1}:` : "Final:"}</b> {step}
                            </p>
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default MapCard