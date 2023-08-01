import React from 'react'
import { Svg, Path } from "react-native-svg";

const AddIcon = ({size = 32, color = 'none' }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M193.05 157.95V87.75H157.95V157.95H87.75V193.05H157.95V263.25H193.05V193.05H263.25V157.95H193.05ZM175.5 351C128.954 351 84.3154 332.51 51.4028 299.597C18.4901 266.685 0 222.045 0 175.5C0 128.954 18.4901 84.3154 51.4028 51.4028C84.3154 18.4901 128.954 0 175.5 0C222.045 0 266.685 18.4901 299.597 51.4028C332.51 84.3154 351 128.954 351 175.5C351 222.045 332.51 266.685 299.597 299.597C266.685 332.51 222.045 351 175.5 351Z" 
            fill={color}/>
        </Svg>
    )
}

export default AddIcon