import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spiner from './Spiner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } 

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spiner message="Please accept location request" />;
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>;
    } 

/*     state = { time: null };

    componentDidMount() {
        setInterval(() => {
            this.setState ({time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        )
    } */

}

ReactDOM.render(<App />, document.querySelector('#root'));

/* class UserForm extends React.Component {
    render() {
        return 
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
    }
}
 */

/* class Clock extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString() 
        }, 1000)
    }

    render() {
        return (
            <div className="time">
                The time is: {this.time}
            </div>
        )
    }
} */
//SetState