import React from "react"
import "./Loader.css"

function Loader({ text }) {
    return (
        <div className="loader-container">
            <div className="loader">
                <span></span>
            </div>
        </div>
    )
}

export default Loader