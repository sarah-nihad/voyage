import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { toast } from "react-toastify";
import Host from '../../../assets/js/Host';
import Context from '../../../assets/js/Context';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(theme => ({
    modal: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fad: {
        width: '45%',
        // opacity: 0.9,
        // overflow:'scroll'
    },
    paper: {
        // width:'40%',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        borderRadius: 10,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        height: 350,
        overflow: 'auto',
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

export default function SpringModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [number, setNum] = useState(1);
    const [cart, setCart] = useState([]);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const Addition = () => {
        var a = number
        a++
        setNum(a)
        // console.log(this.props.data);
    };
    const minas = () => {
        if (number > 1) {
            var a = number
            a--
            setNum(a)
        }
    };

    const AddToCart = (ctx) => {
        var arr = []

        ctx.value.cart.push({
            name: props.data.name,
            price: props.data.price,
            img1: Host + props.data.img1,
            discount: props.data.discount,
            count: number,

        });
        setTimeout(() => {
            localStorage.setItem("cart", JSON.stringify(ctx.value.cart));

            toast.success('Item Added Successfully')
            ctx.action.ss()
        }, 200);

    }


    return (
        <Context.Consumer>
            {ctx => {

                return (
                    <div>

                       
                        <div id='cartMain'  onClick={handleOpen} >
                                <div style={{ fontSize: 18, fontWeight: 'bold' }} > PLACE ORDER </div>
                              </div>
                       

                        <Modal
                            aria-labelledby="spring-modal-title"
                            aria-describedby="spring-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open} className={'fad'}>
                                <div className={classes.paper}>
                                    <div id='mainDialog'>

                                        <div className='dialogTitle2'  >
                                        <div>Name :</div>    <input  type='text' placeholder='Write Youre Name' className='OrderInput' /> 
                                        </div>
                                        <div className='dialogTitle2' s >
                                          <div>Address :</div> <input  type='text' placeholder='Write Youre Address' className='OrderInput' /> 
                                        </div>
                                        <div className='dialogTitle2'  >
                                           <div>Phone :</div>  <input  type='number' placeholder='Write Youre Phone Number'  className='OrderInput' /> 
                                        </div>
                                        <div id='main_btnCardDaloig'  >
                                            <div id='btn_cardProduct' onClick={() => AddToCart(ctx)}  >
                                               
                                                <div>Send</div>
                                            </div></div>
                                    </div>


                                </div>
                            </Fade>
                        </Modal>
                    </div>
                )
            }}</Context.Consumer>
    );
}
