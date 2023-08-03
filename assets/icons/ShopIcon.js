import React from 'react'
import { Svg, Path } from "react-native-svg";

const ShopIcon = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height="100%" viewBox="0 0 377 334" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M321.707 104.375L334.273 167H42.7267L55.2933 104.375H321.707ZM356.056 0H20.9444V41.75H356.056V0ZM356.056 62.625H20.9444L0 167V208.75H20.9444V334H230.389V208.75H314.167V334H356.056V208.75H377V167L356.056 62.625ZM62.8333 292.25V208.75H188.5V292.25H62.8333Z" 
    fill={color}/>
    </Svg>
  )
}

export default ShopIcon