
import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class extends React.Component {
  render() {
    return (
        <Carousel prevLabel={null} interval={9000}  >
        <Carousel.Item>
          <div id='slotholder' >
            <div id='tpbgimg' ></div>
          </div>
          <div className='tp-parallax-wrap' id='MainslideText'  >
            <div className='tp-loop-wrap'>
              <div className='tp-mask-wrap'>
                <div className='tp-caption'>
                  <a>

                    <div className='tp-linesplit'>
                   
                    </div>

                  </a>
                </div></div></div>
          </div>
          <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
            <div className='tp-loop-wrap'>
              <div className='tp-mask-wrap'>
              <div className='tp-caption2'>
                  <a>
                    <div className='tp-span1' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id='slotholder' >
            <div id='tpbgimg1' ></div>
          </div>

          <div className='tp-parallax-wrap' >
            <div className='tp-loop-wrap' >
              <div className='tp-mask-wrap' >
                <div className='tp-caption'>
                  <div className='tp-linesplit'>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
            <div className='tp-loop-wrap'>
              <div className='tp-mask-wrap'>
                <div className='tp-caption'>
                  <a>
                    <div className='tp-span1' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id='slotholder' >
            <div id='tpbgimg2' ></div>
          </div>

          <div className='tp-parallax-wrap' >
            <div className='tp-loop-wrap' >
              <div className='tp-mask-wrap' >
                <div className='tp-caption'>
                  <div className='tp-linesplit'>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
            <div className='tp-loop-wrap'>
              <div className='tp-mask-wrap'>
                <div className='tp-caption3'>
                  <a>
                    <div className='tp-span1' />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>
    );
  }
}