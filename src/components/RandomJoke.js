import React, { Component } from "react"
import { Loader } from "../components/Loader"
import "../styles/RandomJoke.css"

class RandomJoke extends Component {
    state = {
        data: [],
        isLoaded: false,
        show: false
    }

    async componentDidMount() {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const json = await response.json()
        this.setState({
            data: json,
            isLoaded: true
        })
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    jokeFetcher = () => {
        window.location.reload(false);
    }

    render() {
        const punchline = this.state.data.punchline
        const joke = this.state.data.setup

        if(this.state.isLoaded) {
            return (
                <div>
                <h1>{this.props.title}</h1>
                    <h3>{joke}</h3>
                    <button className="joke-button"
                    onClick={this.toggleShow}>
                        {this.state.show ? "Hide" : "Show"} Answer
                    </button>
                    <button
                    className="joke-button"
                    onClick={this.jokeFetcher}>Another Joke?</button>
                    <p 
                    className="punchline">
                        <em>
                            {this.state.show ? punchline : ""}
                        </em>
                    </p>
                </div>
            )
        } else if(!this.state.isLoaded) {
            return <Loader />
        } else {
            return (
                <div>
                    <h1>Something went wrong on our end...</h1>
                </div>
            )
        }
    }
}

export default RandomJoke