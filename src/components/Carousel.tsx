import React from 'react'
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel:React.FC = () => {
    const settings:Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        waitForAnimate: false
      };
      const imgList = [
        "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
        "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
        "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
        "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
      ]
      const listItems = imgList.map((val,index) => (
        
        <div>
            <img src={val} alt="" className='w-100 br-10 object-cover carousel-img'   />
        </div>
      ));
  return (
    <>
    <div className='px-md-5 px-4'>
    <Slider {...settings}>
    {listItems}
    </Slider>
    </div>
    </>
  )
}
