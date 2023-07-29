import React from 'react'
import { Svg, Path } from "react-native-svg";

const MotorcycleIcon = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 636 371" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M132.5 371C95.8417 371 64.5894 358.077 38.743 332.23C12.8967 306.384 -0.0176486 275.141 1.81011e-05 238.5C1.81011e-05 201.842 12.9232 170.589 38.7695 144.743C64.6159 118.897 95.8593 105.982 132.5 106H439.9L386.9 53H291.5V0H408.1L515.425 107.325C549.875 109.975 578.583 123.887 601.55 149.062C624.517 174.237 636 204.05 636 238.5C636 275.158 623.077 306.411 597.231 332.257C571.384 358.103 540.141 371.018 503.5 371C466.842 371 435.589 358.077 409.743 332.23C383.897 306.384 370.982 275.141 371 238.5C371 230.55 371.557 222.706 372.67 214.968C373.783 207.23 375.876 199.616 378.95 192.125L306.075 265H262.35C256.167 295.917 240.929 321.312 216.638 341.187C192.346 361.062 164.3 371 132.5 371ZM503.5 318C525.583 318 544.354 310.271 559.812 294.812C575.271 279.354 583 260.583 583 238.5C583 216.417 575.271 197.646 559.812 182.187C544.354 166.729 525.583 159 503.5 159C481.417 159 462.646 166.729 447.188 182.187C431.729 197.646 424 216.417 424 238.5C424 260.583 431.729 279.354 447.188 294.812C462.646 310.271 481.417 318 503.5 318ZM132.5 318C149.283 318 164.415 313.142 177.895 303.425C191.374 293.708 200.976 280.9 206.7 265H132.5V212H206.7C200.958 196.1 191.357 183.292 177.895 173.575C164.433 163.858 149.301 159 132.5 159C110.417 159 91.6459 166.729 76.1875 182.187C60.7292 197.646 53 216.417 53 238.5C53 260.583 60.7292 279.354 76.1875 294.812C91.6459 310.271 110.417 318 132.5 318Z" 
        fill={color}/>
    </Svg>
  )
}

export default MotorcycleIcon