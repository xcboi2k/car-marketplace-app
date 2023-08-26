import React from 'react'
import { Svg, Path } from "react-native-svg";

const LocationIcon = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 277 345" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M138.5 0C62.325 0 0 62.1 0 138C0 231.15 121.188 336.375 126.381 341.55C129.844 343.275 135.037 345 138.5 345C141.963 345 147.156 343.275 150.619 341.55C155.812 336.375 277 231.15 277 138C277 62.1 214.675 0 138.5 0ZM138.5 305.325C102.144 270.825 34.625 196.65 34.625 138C34.625 81.075 81.3688 34.5 138.5 34.5C195.631 34.5 242.375 81.075 242.375 138C242.375 194.925 174.856 270.825 138.5 305.325ZM138.5 69C100.412 69 69.25 100.05 69.25 138C69.25 175.95 100.412 207 138.5 207C176.588 207 207.75 175.95 207.75 138C207.75 100.05 176.588 69 138.5 69ZM138.5 172.5C119.456 172.5 103.875 156.975 103.875 138C103.875 119.025 119.456 103.5 138.5 103.5C157.544 103.5 173.125 119.025 173.125 138C173.125 156.975 157.544 172.5 138.5 172.5Z" 
        fill={color}/>
    </Svg>
  )
}

export default LocationIcon