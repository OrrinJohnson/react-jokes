import React from "react"
import "../styles/Loader.css"

export function Loader({ text }) {
    return (
        <div className="loader-container">
            <div className="loader">
                <span></span>
            </div>
        </div>
    )
}
