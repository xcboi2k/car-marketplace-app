import React from 'react'
import { Svg, Path } from "react-native-svg";

const BackIcon = ({size = 32, color = 'none' }) => {
    return (
        <Svg width={size} height="100%" viewBox="0 0 192 336" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M168 24L24 168L168 312" stroke="white" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" fill={color}/>
        </Svg>
    )
}

export default BackIcon