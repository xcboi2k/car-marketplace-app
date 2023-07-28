import React from 'react'
import { Svg, Path } from "react-native-svg";

const HomeIcon = ({size = 32, color = 'none' }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 353 353" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M154.261 7.88508C160.55 2.78398 168.402 0 176.5 0C184.598 0 192.45 2.78398 198.739 7.88508L333.373 116.947C339.495 121.904 344.434 128.164 347.829 135.271C351.224 142.378 352.991 150.154 353 158.03V317.705C353 327.066 349.281 336.043 342.661 342.662C336.041 349.281 327.062 353 317.7 353H247.1C237.738 353 228.759 349.281 222.139 342.662C215.519 336.043 211.8 327.066 211.8 317.705V211.82H141.2V317.705C141.2 327.066 137.481 336.043 130.861 342.662C124.241 349.281 115.262 353 105.9 353H35.3C25.9379 353 16.9592 349.281 10.3391 342.662C3.7191 336.043 1.03637e-06 327.066 1.03637e-06 317.705V158.065C-0.00155979 150.177 1.75992 142.388 5.15567 135.268C8.55141 128.147 13.4956 121.876 19.6268 116.911L154.261 7.88508ZM311.169 144.336L176.5 35.3446L41.8305 144.336C39.7874 145.993 38.1406 148.086 37.0107 150.461C35.8808 152.837 35.2963 155.435 35.3 158.065V317.705H105.9V211.82C105.9 202.459 109.619 193.482 116.239 186.862C122.859 180.243 131.838 176.525 141.2 176.525H211.8C221.162 176.525 230.141 180.243 236.761 186.862C243.381 193.482 247.1 202.459 247.1 211.82V317.705H317.7V158.065C317.704 155.435 317.119 152.837 315.989 150.461C314.859 148.086 313.213 145.993 311.169 144.336Z" 
            fill={color}/>
        </Svg>
    )
}

export default HomeIcon