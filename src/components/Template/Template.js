import React from 'react'
import './Template.css'
import temp1 from '../../images/t1.png'
import temp2 from '../../images/t2.png'
import temp3 from '../../images/t3.png'
//import left from '../../images/left.jpeg'
//import right from '../../images/right.jpeg'
//import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";

// function Template() {
    
//     return (
//         <div className="tp-main" >
           
            
//       <img src={temp1} style={{ marginBottom:'5%', width:'75%'}} />
      
//       <img src={temp2} style={{ width:'75%'}} />
//       <img src={temp3} style={{marginTop:'5%', marginBottom:'5%', width:'75%'}} />
//         </div>
//     )
// }

// export default Template




class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        temp1,
        temp2,
        temp3
        
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="tp-main" style={ {paddingBottom:'60px'}}>
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            height:'100%',
            width:'auto'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
      </div>
    );
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
<i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>    </div>
  );
}

// ReactDOM.render(
//   <Template />,
//   document.querySelector('.app')
// )
export default Template
