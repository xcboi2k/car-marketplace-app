import React from 'react'
import { Svg, Path } from "react-native-svg";

const ChatIcon = ({size = 32, color = 'none' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 356 356" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M158.929 178C158.929 183.058 160.938 187.909 164.515 191.486C168.091 195.062 172.942 197.071 178 197.071C183.058 197.071 187.909 195.062 191.485 191.486C195.062 187.909 197.071 183.058 197.071 178C197.071 172.942 195.062 168.091 191.485 164.514C187.909 160.938 183.058 158.929 178 158.929C172.942 158.929 168.091 160.938 164.515 164.514C160.938 168.091 158.929 172.942 158.929 178ZM238.392 178C238.392 183.058 240.401 187.909 243.978 191.486C247.555 195.062 252.405 197.071 257.463 197.071C262.521 197.071 267.372 195.062 270.949 191.486C274.525 187.909 276.535 183.058 276.535 178C276.535 172.942 274.525 168.091 270.949 164.514C267.372 160.938 262.521 158.929 257.463 158.929C252.405 158.929 247.555 160.938 243.978 164.514C240.401 168.091 238.392 172.942 238.392 178ZM79.4655 178C79.4655 183.058 81.4748 187.909 85.0514 191.486C88.6279 195.062 93.4787 197.071 98.5367 197.071C103.595 197.071 108.446 195.062 112.022 191.486C115.599 187.909 117.608 183.058 117.608 178C117.608 172.942 115.599 168.091 112.022 164.514C108.446 160.938 103.595 158.929 98.5367 158.929C93.4787 158.929 88.6279 160.938 85.0514 164.514C81.4748 168.091 79.4655 172.942 79.4655 178ZM342.171 109.025C333.192 87.6888 320.319 68.538 303.91 52.0888C287.615 35.735 268.272 22.7356 246.974 13.8268C225.122 4.64866 201.918 0 178 0H177.205C153.128 0.119196 129.806 4.88705 107.874 14.2638C86.7586 23.264 67.5963 36.2865 51.4547 52.6054C35.2045 69.0147 22.4506 88.0862 13.6302 109.343C4.49193 131.354 -0.116941 154.757 0.00225408 178.834C0.137074 206.427 6.66493 233.613 19.0734 258.259V318.652C19.0734 323.499 20.999 328.148 24.4265 331.575C27.854 335.003 32.5028 336.929 37.35 336.929H97.7818C122.427 349.337 149.613 355.865 177.205 356H178.04C201.839 356 224.923 351.391 246.656 342.372C267.846 333.569 287.118 320.721 303.393 304.547C319.802 288.296 332.715 269.304 341.734 248.127C351.111 226.195 355.879 202.872 355.998 178.795C356.117 154.598 351.429 131.116 342.171 109.025ZM282.137 283.052C254.285 310.626 217.334 325.804 178 325.804H177.325C153.366 325.684 129.567 319.725 108.549 308.52L105.212 306.732H49.2695V250.789L47.4816 247.452C36.2772 226.433 30.3175 202.634 30.1983 178.675C30.0394 139.063 45.1771 101.873 72.9496 73.8621C100.682 45.8509 137.752 30.3554 177.364 30.1964H178.04C197.906 30.1964 217.175 34.0504 235.333 41.679C253.053 49.1089 268.946 59.7969 282.613 73.4647C296.241 87.0929 306.969 103.025 314.399 120.746C322.107 139.102 325.961 158.571 325.881 178.675C325.643 218.249 310.108 255.319 282.137 283.052Z" 
    fill={color}/>
    </Svg>
  )
}

export default ChatIcon