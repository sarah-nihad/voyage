import React from 'react';
import Context from '../../assets/js/Context';
import ScrollAnimation from 'react-animate-on-scroll';
class Story extends React.Component {
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
                        <div id='czaboutcmsblock'  >

                            <div className='mainContainer'>
                                <div className='about-store'>
                                    <div className='about-store-inner'>
                                        <div id='aboutCountainer' >

                                            <div className='right-part'>
                                                <div className='mainheading'>
                                                    <ScrollAnimation animateIn='flipInX'
                                                        animateOut='flipOutX' >
                                                        Our Little Story
                                                </ScrollAnimation>
                                                </div>
                                                <div className='storedetail'>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                                    in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error

                                            </div>
                                                {/* <div className='action-button'>
                                                    < a href='/' className='shopnow-btn btn btn-primary'>Read More</a>
                                                </div> */}
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Story;