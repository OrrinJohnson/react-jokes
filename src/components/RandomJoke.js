import React, { Component } from "react"
import { Loader } from "../components/Loader"
import "../styles/RandomJoke.css"

class RandomJoke extends Component {
    state = {
        data: {},
        isLoaded: false,
        showJoke: false
    }

    async componentDidMount() {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const jsonResponse = await response.json()
        this.setState({
            data: jsonResponse,
            isLoaded: true
        })
    }

    toggleShow = () => {
        this.setState(prevState => {
            return {
                showJoke: !prevState.showJoke
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
                    <div className="button-container">
                        <button onClick={this.toggleShow}>{this.state.showJoke ? "Hide" : "Show"} Answer</button>
                        <button onClick={this.jokeFetcher}>Another Joke?</button>
                    </div>
                    <p 
                    className="punchline">
                        <em>
                            {this.state.showJoke ? punchline : ""}
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