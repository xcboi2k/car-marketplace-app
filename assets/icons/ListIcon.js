import React from 'react'
import { Svg, Path } from "react-native-svg";

const ListIcon = ({size = 32, color = 'none' }) => {
    return (
        <Svg width={size} height="100%" viewBox="0 0 351 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M319.661 62.7273C311.349 62.7273 303.378 59.4229 297.5 53.5411C291.623 47.6593 288.321 39.6818 288.321 31.3636C288.321 23.0455 291.623 15.068 297.5 9.1862C303.378 3.30437 311.349 0 319.661 0C327.972 0 335.944 3.30437 341.821 9.1862C347.698 15.068 351 23.0455 351 31.3636C351 39.6818 347.698 47.6593 341.821 53.5411C335.944 59.4229 327.972 62.7273 319.661 62.7273ZM319.661 169.364C311.349 169.364 303.378 166.059 297.5 160.177C291.623 154.296 288.321 146.318 288.321 138C288.321 129.682 291.623 121.704 297.5 115.823C303.378 109.941 311.349 106.636 319.661 106.636C327.972 106.636 335.944 109.941 341.821 115.823C347.698 121.704 351 129.682 351 138C351 146.318 347.698 154.296 341.821 160.177C335.944 166.059 327.972 169.364 319.661 169.364ZM288.321 244.636C288.321 252.955 291.623 260.932 297.5 266.814C303.378 272.696 311.349 276 319.661 276C327.972 276 335.944 272.696 341.821 266.814C347.698 260.932 351 252.955 351 244.636C351 236.318 347.698 228.341 341.821 222.459C335.944 216.577 327.972 213.273 319.661 213.273C311.349 213.273 303.378 216.577 297.5 222.459C291.623 228.341 288.321 236.318 288.321 244.636ZM231.911 12.5455C236.898 12.5455 241.68 14.5281 245.207 18.0572C248.733 21.5863 250.714 26.3727 250.714 31.3636C250.714 36.3545 248.733 41.141 245.207 44.6701C241.68 48.1992 236.898 50.1818 231.911 50.1818H18.8036C13.8166 50.1818 9.03379 48.1992 5.50744 44.6701C1.98109 41.141 0 36.3545 0 31.3636C0 26.3727 1.98109 21.5863 5.50744 18.0572C9.03379 14.5281 13.8166 12.5455 18.8036 12.5455H231.911ZM250.714 138C250.714 133.009 248.733 128.223 245.207 124.694C241.68 121.164 236.898 119.182 231.911 119.182H18.8036C13.8166 119.182 9.03379 121.164 5.50744 124.694C1.98109 128.223 0 133.009 0 138C0 142.991 1.98109 147.777 5.50744 151.306C9.03379 154.836 13.8166 156.818 18.8036 156.818H231.911C236.898 156.818 241.68 154.836 245.207 151.306C248.733 147.777 250.714 142.991 250.714 138ZM231.911 225.818C236.898 225.818 241.68 227.801 245.207 231.33C248.733 234.859 250.714 239.645 250.714 244.636C250.714 249.627 248.733 254.414 245.207 257.943C241.68 261.472 236.898 263.455 231.911 263.455H18.8036C13.8166 263.455 9.03379 261.472 5.50744 257.943C1.98109 254.414 0 249.627 0 244.636C0 239.645 1.98109 234.859 5.50744 231.33C9.03379 227.801 13.8166 225.818 18.8036 225.818H231.911Z" 
            fill={color}/>
        </Svg>
    )
}

export default ListIcon