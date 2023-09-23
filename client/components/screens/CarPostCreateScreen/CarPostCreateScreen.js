import React, { useState } from 'react'
import { Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import uuid from 'react-native-uuid';

import { ButtonContainer, CarPostCreateContainer, DropdownContainer, HeaderHolder, HeaderText, HolderContainer, InfoContainer, PriceYearContainer, SubText } from './styles'

import ButtonText from '../../shared/ButtonText/ButtonText'
import ButtonUploadImage from '../../shared/ButtonUploadImage/ButtonUploadImage'
import CommentInput from '../../shared/CommentInput/CommentInput'
import Dropdown from '../../shared/Dropdown/Dropdown'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import TextInput from '../../shared/TextInput/TextInput'
import { ICON_NAMES } from '../../../constants/constant'

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';

import useUploadImage from '../../../hooks/useUploadImage';
import { addListingAction } from '../../../redux/actions/listingActions';

const CarPostCreateScreen = ({ navigation }) => {
    let photoId = uuid.v4();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);
    const userInfo = useSelector(state => state.user);
    const [image, chooseImage, uploadImage, filename] = useUploadImage(photoId, "listings/");

    const [selectedTransmission, setSelectedTransmission] = useState("");
    const [transmissionItems, setTransmissionItems] = useState([
        {label: 'Manual', value: 'Manual'},
        {label: 'Automatic', value: 'Automatic'},
        {label: 'Sequential', value: 'Sequential'},
        {label: 'CVT', value: 'CVT'},
    ]);

    const initialValues = {
        carModel: "",
        price: "",
        productionYear: "",
        totalKMs: "",
        description: "",
        features: "",
        vehicleInformation: "",
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        try{
            dispatch(showLoader());
            console.log('Checking values: ', values);

            let imgFile;
            console.log(image);
            if (image) {
                imgFile = await uploadImage();
                console.log('Checking image: ', imgFile);
            }

            if (values.carModel === "" || values.price === "") {
                Alert.alert("Incomplete Input", "Please fill up car model and price");
            } else {
                const enteredValues = {
                    carModel: values.carModel,
                    location: userInfo.location,
                    price: values.price,
                    productionYear: values.productionYear,
                    transmissionType: selectedTransmission,
                    totalKMs: values.totalKMs,
                    description: values.description ? values.description : 'No description.',
                    features: values.features ? values.features : 'No features.',
                    vehicleInformation: values.vehicleInformation ? values.vehicleInformation : 'No vehicle information.',
                    carPhoto: imgFile ? imgFile.imgUri : "",
                    carPhotoRef: imgFile ? imgFile.imgRef : "",
                    createdAt: Date(),
                    userId: userInfo.userId,
                    userName: userInfo.firstName + " " + userInfo.lastName,
                    userPhoto: userInfo.profile_photo
                };
                console.log(enteredValues);
                dispatch(addListingAction(enteredValues));
                resetForm();

                navigation.navigate("Home", {
                    screen: "Feed"
                })
            }
        }
        catch(error){
            dispatch(hideLoader());
            Alert.alert("Error", "There was an error when submitting the information you entered.");
        }
        
    };

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleFormikSubmit,
    });

    return (
        <CarPostCreateContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.navigate("Home", {
                    screen: "Feed"
                })}
            />
            <HeaderHolder>
                <HeaderText>Create Listing</HeaderText>
            </HeaderHolder>
            <InfoContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Car Model",
                        onChangeText: formik.handleChange("carModel"),
                        value: formik.values.carModel,
                    }}
                    customLabel="Car Model:"
                    labelTextSize = '16px'
                />
                <PriceYearContainer>
                    <TextInput 
                        inputProps={{
                            placeholder: "Enter Price",
                            onChangeText: formik.handleChange("price"),
                            value: formik.values.price,
                        }}
                        customLabel="Price:"
                        labelTextSize = '16px'
                        width='45%'
                    />
                    <TextInput 
                        inputProps={{
                            placeholder: "Enter Year",
                            onChangeText: formik.handleChange("productionYear"),
                            value: formik.values.productionYear,
                        }}
                        customLabel="Year:"
                        labelTextSize = '16px'
                        width='40%'
                    />
                </PriceYearContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Total Kilometers",
                        onChangeText: formik.handleChange("totalKMs"),
                        value: formik.values.totalKMs,
                    }}
                    customLabel="Total Kilometers:"
                    labelTextSize = '16px'
                />
                <Dropdown 
                    dropdownItems={transmissionItems}
                    setDropdownItems={setTransmissionItems}
                    dropdownProps={{
                        placeholder: "Choose Transmission Type",
                        zIndex: 1, 
                        zIndexInverse: 1000,
                        onChangeValue: (value) => {
                            console.log("dropdown:", value);
                        }
                    }}
                    customLabel={"Enter Transmission Type:"}
                    width="100%"
                    setValue={setSelectedTransmission}
                    value={selectedTransmission}
                />
                
            </InfoContainer>
            <HolderContainer>
                <CommentInput 
                    inputProps={{
                        placeholder: "Make a short description about the car",
                        onChangeText: formik.handleChange("description"),
                        value: formik.values.description,
                    }}
                    customLabel="Description:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Features about the car",
                        onChangeText: formik.handleChange("features"),
                        value: formik.values.features,
                    }}
                    customLabel="Features:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Enter necessary vehicle information",
                        onChangeText: formik.handleChange("vehicleInformation"),
                        value: formik.values.vehicleInformation,
                    }}
                    customLabel="Vehicle Information:"
                    textSize = '16px'
                />
                <ButtonUploadImage onPress={chooseImage} imageUri={image}
                width="100px" height="100px" borderRadius="0px" />
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Adding information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer>
                            <ButtonText text='Add Listing' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                            onPress={formik.handleSubmit}/>
                        </ButtonContainer>
                    )
                }
            </HolderContainer>
        </CarPostCreateContainer>
    )
}

export default CarPostCreateScreen