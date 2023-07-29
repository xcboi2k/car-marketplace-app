import React from 'react'
import { Svg, Path } from "react-native-svg";

const TruckIcon = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 636 462" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M491.455 418.688C479.954 418.688 468.924 414.124 460.792 406.002C452.66 397.879 448.091 386.862 448.091 375.375C448.091 363.888 452.66 352.871 460.792 344.748C468.924 336.626 479.954 332.063 491.455 332.062C502.955 332.063 513.985 336.626 522.117 344.748C530.249 352.871 534.818 363.888 534.818 375.375C534.818 386.862 530.249 397.879 522.117 406.002C513.985 414.124 502.955 418.688 491.455 418.688ZM534.818 158.812L591.48 231H462.545V158.812M144.545 418.688C133.045 418.688 122.015 414.124 113.883 406.002C105.75 397.879 101.182 386.862 101.182 375.375C101.182 363.888 105.75 352.871 113.883 344.748C122.015 336.626 133.045 332.063 144.545 332.062C156.046 332.063 167.076 336.626 175.208 344.748C183.34 352.871 187.909 363.888 187.909 375.375C187.909 386.862 183.34 397.879 175.208 406.002C167.076 414.124 156.046 418.688 144.545 418.688ZM549.273 115.5H462.545V0H57.8182C25.7291 0 0 25.6987 0 57.75V375.375H57.8182C57.8182 398.349 66.9555 420.383 83.22 436.628C99.4845 452.873 121.544 462 144.545 462C167.547 462 189.606 452.873 205.871 436.628C222.135 420.383 231.273 398.349 231.273 375.375H404.727C404.727 398.349 413.865 420.383 430.129 436.628C446.394 452.873 468.453 462 491.455 462C514.456 462 536.515 452.873 552.78 436.628C569.045 420.383 578.182 398.349 578.182 375.375H636V231L549.273 115.5Z" 
        fill={color}/>
    </Svg>
  )
}

export default TruckIcon