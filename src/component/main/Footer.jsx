import React from 'react';
import Context from '../../assets/js/Context';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
class Footer extends React.Component {
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
                        <div style={{ backgroundColor: '#0F0F0F', color: '#888888',display:'flex',alignItems:'center',justifyContent:'center' }} >
                            <div className='mainContainer'  style={{width:'100%'}} >
                            <div id='RowFooter'>
                                <div id='ColFooter' >
                                    <div id='fotTiltleDiv'>
                                        <i className="fas fa-map-marker-alt" id="i2"></i>
                                        <div id="h6" style={{color:"rgb(136, 136, 136)"}}> Baghdad - Hay-Aljama'a </div>
                                    </div>
                                   

                                    <div id='fotTiltleDiv' >
                                        <i className='fas fa-phone' id="i2"></i>
                                        <div id="h6" style={{color:"rgb(136, 136, 136)"}} > +964 772596322 </div>
                                    </div>
                                    <div id='fotTiltleDiv' >
                                        <i className='fas fa-phone' id="i2"></i>
                                        <div id="h6" style={{color:"rgb(136, 136, 136)"}} > +964 772126596 </div>
                                    </div>
                                    <div id='fotTiltleDiv'>
                                        <i className='fas fa-envelope' id="i2"></i>
                                        <div id="h6"style={{color:"rgb(136, 136, 136)"}} > info@voyage.com </div>
                                    </div>

                                </div>

                                <div id='ColFooter' >
                                  
                                <Carousel
                                    autoplay={true}
                                     autoplayInterval= {2000}
                                     wrapAround={true}
                                     withoutControls={false}
                                     defaultControlsConfig={{
                                      
                                        pagingDotsStyle: {
                                          fill: '#b15f6c'
                                        }
                                      }}
                                       >
                                      <div  id='footer_slide' >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing
                                      Lorem ipsum dolor sit amet, 
                                       elit quis nostrud exercitation ullamco laboris nisi ut ...
                                          </div>
                                          <div  id='footer_slide' >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing
                                      Lorem ipsum dolor sit amet, 
                                       elit quis nostrud exercitation ullamco laboris nisi ut ...
                                          </div>
                                          <div  id='footer_slide' >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing
                                      Lorem ipsum dolor sit amet,
                                       elit quis nostrud exercitation ullamco laboris nisi ut ...
                                          </div>
                                </Carousel>

                                   
                                </div>



                                <div id='ColFooter' >
                                    {/* <p>Quick Links</p>
                                    <div style={{ backgroundColor: '#fff', height: 2, width: 120,marginBottom:15 }} /> */}
                                    <p className='QuickLInk'> <Link to='/'> Home </Link>  </p>
                                    <p className='QuickLInk'> <Link to='/'> About  </Link> </p>
                                    <p className='QuickLInk'> <Link to='/Collection'> Products  </Link> </p>
                                    <p className='QuickLInk'> <Link to='/Contact'>  Contact Us  </Link>   </p>
                                    <div id='footIcons'>
                                        <a href='https://www.facebook.com/103696084368620/'>
                                            <FacebookIcon id='IconHomeUP' />
                                        </a>

                                        <a href='https://instagram.com/city_of_beautyiq?igshid=13cvyt6fdyv3f'>
                                            <InstagramIcon id='IconHomeUP' />
                                        </a>
                                        <a>
                                            <YouTubeIcon  id='IconHomeUP'/>
                                        </a>
                                        <a>
                                            <TwitterIcon  id='IconHomeUP'/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div id='RowFooterSecond'>
                                 VOYAGE © 2021 All rights reserved  
                             
                            </div>
                            {/* <Row id='RowFooterSecond' style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                          <a href='https://www.croczi.com/' style={{color:'gray',textDecoration:'none'}} > Powered By Croczi.com</a> 
                            </Row> */}



</div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Footer;