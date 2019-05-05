import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../assets/css/carousel.css';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../../assets/images/img5.jpg'
import img2 from '../../assets/images/img9.png'
import img3 from '../../assets/images/img10.jpg'
import img4 from '../../assets/images/img8.jpg'
import img5 from '../../assets/images/img5.jpg'
class Carrousel extends React.Component {
    imgs = [
        <img src={img1} className="resp_img" alt="Hotel" />,
        <img src={img2} className="resp_img" alt="Hotel" />,
        <img src={img3} className="resp_img" alt="Hotel" />,
        <img src={img4} className="resp_img" alt="Hotel" />,
        <img src={img5} className="resp_img" alt="Hotel" />
    ]
    state = {
        galleryItems: this.imgs.map((i) => (<h1 key={i}>{i}</h1>)),
    }
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
    }


    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    render() {
        return (

            <div className="car-cont" id="#caro">
                <div className="verticalLine"></div>
                <h1 style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}>Only Suites & Residences</h1>
                <p>At your disposal: 11 Suites and 6 Residences offering superb luxury</p>
                
                <AliceCarousel
                    stopAutoPlayOnHover={true}
                    items={this.state.galleryItems}
                    responsive={this.responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="ltr"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseDragEnabled={false}
                    playButtonEnabled={false}
                    disableAutoPlayOnAction={false}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                    buttonsDisabled={true}
                    dotsDisabled={true}
                />
            </div>
        )
    }
}
export default Carrousel;