import React from 'react';
import Context from '../../assets/js/Context';
import ScrollAnimation from 'react-animate-on-scroll';
import StarRatings from 'react-star-ratings';
import AddToCartDialog from './common/AddToCartDialog'
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 4,
            data:[
                {
                    "price":"13",
                    "img1":require('../../assets/img/line1.jpg'),
                    "img2":require('../../assets/img/linee2.jpg'),
                    "name":"eye liner",
                    "discount":"10%",
                },
                {
                    "price":"15",
                    "img1":require('../../assets/img/tint1.jpg'),
                    "img2":require('../../assets/img/tint2.jpg'),
                    "name":"tint",
                    "discount":"10%",   
                },
                {
                    "price":"35",
                    "img1":require('../../assets/img/balet1.jpg'),
                    "img2":require('../../assets/img/balet2.jpg'),
                    "name":"balet",
                    "discount":"10%",   
                },
              
            ]
        }
    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div className='hometab box' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='mainContainer'>
                            <div className='tab-head'>
                                <div className='hometab-heading box-heading'>
                                    <ScrollAnimation animateIn='flipInX'
                                        animateOut='flipOutX' >
                                        Popular Products
                                    </ScrollAnimation>
                                </div>
                            </div>
                        <div id='ProductContainer'  >
                            <div id='mainProduct' >
                            {this.state.data.map(((item, i) =>

                               
                                <div id='MainCardProduct'key={i} >
                                    <div id='img_CardProduct' >
                                        <img src={item.img1} alt='img' style={{ height: 300 }} id='img1_product' />
                                        <img src={item.img2} alt='img' style={{ height: 300 }} id='img2_product' />
                                        <div id='inner_img' >
                                            <div id='cartIcon' >  <ShoppingBasketIcon />    </div>
                                            <div id='loveIcon' >  <FavoriteIcon /> </div>
                                            <div id='seeIcon' > <VisibilityIcon />  </div>
                                        </div>
                                    </div>
                                    <div id='main_btnCard' >
                                        <div>
                                            <StarRatings
                                                rating={this.state.rating}
                                                starRatedColor=" rgb(255, 174, 0)"
                                               
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="2px"
                                                starHoverColor='yellow'
                                                isSelectable={true}
                                                changeRating={(rating) => {
                                                    this.setState({ rating: rating })
                                                }}
                                            />
                                        </div>
                                        <div id='price' >IQD {item.price} </div>
                                    </div>

                                  
                                      
                                            <AddToCartDialog data={item}   />
                                           
                               
                                </div>
                            ))}
                            </div>
                        </div></div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Product;