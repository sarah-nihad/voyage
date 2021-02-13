
import React from 'react';
import Context from '../../assets/js/Context';
import ScrollAnimation from 'react-animate-on-scroll';

class Ballete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='svgMain' >

                            {/* <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: 600, width: "100%" }} >
                                <polygon style={{ fill: "rgb(255,0,0)", stroke: "rgb(255,0,0)", strokeWidth: 0.3 }} points="37.1 30.9 37 36.5 37.9 39.9 39.3 42.7 40 44.5 38 47.7 36 48.2 35.1 49 33.5 48.7 32 48.5 30.5 47.1 29.4 44.9 28.5 43.3 28 40.1 27.9 37.1 29.4 34.3 31 32 33.5 30.6"   >
                                </polygon>
                                <polygon style={{ fill: "rgb(255,0,0)", stroke: "rgb(255,0,0)", strokeWidth: 0.3 }} points="46.8 43.4 47.8 38 50.3 34.3 49.8 30.6 48.5 29 47 27.5 45.5 26.1 43.8 25.6 41.5 25.8 39.5 28.1 38.3 30.8 38.2 33.6 37.4 33.9 37.1 36.7 37.8 39.5 39.8 42 42.2 43.7 44.1 43.9 45.3 43.9"></polygon>
                            </svg> */}

                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Ballete;