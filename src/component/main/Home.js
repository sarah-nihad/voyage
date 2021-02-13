import React from 'react';
import Context from '../../assets/js/Context';
import NavBar from './common/NavBar';
import { withController } from 'react-scroll-parallax';
import ScrollUpButton from "react-scroll-up-button";
import Slide1 from './common/Slide1';
import About from './About';
import Product from './Product';
import ScrollAnimation from 'react-animate-on-scroll';
import Ballete from './Ballete';
import Footer from './Footer';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }

    handleLoad = () => {
        this.props.parallaxController.update();
    };

    render() {



        return (

            <Context.Consumer>
                {ctx => {

                    return (

                        <div onLoad={this.handleLoad} className='homeBgbimg'  >
                            <NavBar />
                            <Slide1 />
                            <div id='downHeaderNavContiner'>
                                <About />


                                <Product />



                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }} id='video_mindiv'  >
                                    <div style={{ backgroundColor: '#F8F6EA', zIndex: '3', position: 'relative' }} id='whit_div' ></div>
                                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }} >
                                        <video id='vid_1' muted autoPlay loop style={{ position: 'relative' }} >
                                            <source src={require('../../assets/video.mp4')} type="video/mp4" />
                                        </video>
                                    </div>

                                </div>

                                <Ballete />

                                <div className='blogmain1'  >
                                    <div className='blogmain2' >
                                        <div id='blogdivMainImg' > 
                                        <div style={{ position: 'relative' }} id='blogdiv'  >
                                            <img src={require('../../assets/img/t1.jpg')} className='blogimg' alt='img' />
                                            <div style={{ zIndex: 2,position: 'absolute',height: '100%',width: '100%',top: 0}} />
                                        </div>
                                        </div>

                                        <div id='blogdivMainImg' > 
                                        <div style={{ position: 'relative' }} id='blogdiv'  >
                                        <img src={require('../../assets/img/line12.jpg')} className='blogimg' alt='img' />
                                            <div style={{ zIndex: 2,position: 'absolute',height: '100%',width: '100%',top: 0}} />
                                        </div>
                                        </div>
                                        <div id='blogdivMainImg' > 
                                        <div style={{ position: 'relative' }} id='blogdiv'  >
                                        <img src={require('../../assets/img/t2.jpg')} className='blogimg' alt='img' />
                                            <div style={{ zIndex: 2,position: 'absolute',height: '100%',width: '100%',top: 0}} />
                                        </div>
                                        </div>


                                       
                                       
                                    </div>
                                </div>


                                <div style={{ paddingTop: '5%' }} >
                                    <div className='tab-head'>
                                        <div className='hometab-heading box-heading'>
                                            <ScrollAnimation animateIn='flipInX'
                                                animateOut='flipOutX' >
                                                GET IN TOUCH
                                    </ScrollAnimation>
                                        </div>
                                    </div>


                                    <div id='ContactUsContiner'  >

                                        <div id='firstPartContactUs' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                                            <iframe id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{ width: '90%', height: '460px', padding: '20', boxShadow: '0px 0px 5px 1px rgba(153, 153, 153, 1)' }}
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>
                                        </div>

                                        <div id='secondPartContactUs'   >
                                            <input type='text' id='inputCOntactHome' placeholder='Name' value={this.state.email} onChange={(e) => {
                                                this.setState({ email: e.target.value })
                                            }} />
                                            <input type='text' id='inputCOntactHome' placeholder='E-mail' value={this.state.subject} onChange={(e) => {
                                                this.setState({ subject: e.target.value })
                                            }} />
                                            <textarea id='areaCOntactHome' placeholder='Message' value={this.state.body} onChange={(e) => {
                                                this.setState({ body: e.target.value })
                                            }} />
                                            <div id='BtnContactUSHome'   >Send</div>
                                        </div>
                                    </div>

                                </div>

                                <Footer />



                                <ScrollUpButton
                                    StopPosition={0}
                                    ShowAtPosition={150}
                                    EasingType='easeOutCubic'
                                    AnimationDuration={2000}
                                    ContainerClassName='ScrollUpButton__Container'
                                    TransitionClassName='ScrollUpButton__Toggled'
                                    style={{ backgroundColor: 'rgba(46, 48, 49, 0.7)' }}
                                    ToggledStyle={{}}
                                />

                                {/* <Footer /> */}
                            </div>




                        </div>
                    )



                }}
            </Context.Consumer>
        )
    }
}
export default withController(Home);