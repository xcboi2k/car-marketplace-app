import React from 'react'
import { Svg, Path } from "react-native-svg";

const AddIcon = ({size = 32, color = 'none' }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_80720_114" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="350" height="350">
            <Path d="M175 348C270.548 348 348 270.548 348 175C348 79.4521 270.548 2 175 2C79.4521 2 2 79.4521 2 175C2 270.548 79.4521 348 175 348Z" 
            fill={color} stroke="white" stroke-width="4" stroke-linejoin="round"/>
            <Path d="M175 104V254M100 179H250" stroke="black" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
            </mask>
            <g mask="url(#mask0_80720_114)">
            <Path d="M-32.6 -32.6001H382.6V382.6H-32.6V-32.6001Z" fill={color}/>
            </g>
        </Svg>
    )
}

export default AddIcon