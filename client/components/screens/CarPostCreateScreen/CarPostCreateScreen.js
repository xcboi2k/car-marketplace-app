import React, { useState } from 'react'
import { Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import uuid from 'react-native-uuid';

import { ButtonContainer, ButtonUploadContainer, ButtonUploadText, CarPostCreateContainer, DropdownContainer, HeaderHolder, HeaderText, HolderContainer, InfoContainer, OptionButton, OptionContainer, OptionsHolderContainer, OptionText, OptionTitleText, OtherInfoContainer, PriceYearContainer, SubText } from './styles'

import ButtonText from '../../shared/ButtonText/ButtonText'
import ButtonUploadImage from '../../shared/ButtonUploadImage/ButtonUploadImage'
import CommentInput from '../../shared/CommentInput/CommentInput'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import TextInput from '../../shared/TextInput/TextInput'
import { ICON_NAMES } from '../../../constants/constant'

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';

import useUploadImage from '../../../hooks/useUploadImage';
import { addListingAction } from '../../../redux/actions/listingActions';

const CarPostCreateScreen = ({ navigation }) => {
    let photoId = uuid.v4();
    const [image, chooseImage, uploadImage, filename] = useUploadImage(photoId, "listings/");
    
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);
    const userInfo = useSelector(state => state.user);

    const transmissionItems = ['Manual', 'Automatic', 'Sequential', 'CVT'];
    const [selectedTransmission, setSelectedTransmission] = useState(transmissionItems[0]);
    const handleTransmissionItemPress = (transType) => {
        setSelectedTransmission(transType);
    };

    const classificationItems = ['Car', 'Van', 'Truck/Bus', 'Motorcycle'];
    const [selectedClassification, setSelectedClassification] = useState(classificationItems[0]);
    const handleClassificationItemPress = (classificationType) => {
        setSelectedClassification(classificationType);
    };

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
                    classificationType: selectedClassification,
                    totalKMs: values.totalKMs,
                    description: values.description ? values.description : 'No description.',
                    features: values.features ? values.features : 'No features.',
                    vehicleInformation: values.vehicleInformation ? values.vehicleInformation : 'No vehicle information.',
                    carPhoto: imgFile ? imgFile.imgUri : "",
                    carPhotoRef: imgFile ? imgFile.imgRef : "",
                    createdAt: Date(),
                    userID: userInfo.userId,
                    userName: userInfo.firstName + " " + userInfo.lastName,
                    userPhoto: userInfo.profile_photo
                };
                console.log(enteredValues);
                dispatch(addListingAction(enteredValues));
                resetForm();

                const newKey = Math.random().toString();
                navigation.navigate("Home", {
                    screen: "Feed",
                    key: newKey
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
                <OptionsHolderContainer>
                    <OptionTitleText>Transmission:</OptionTitleText>
                    <OptionContainer>
                        {transmissionItems.map((item) => (
                            <OptionButton key={item} onPress={() => handleTransmissionItemPress(item)} active={selectedTransmission === item}>
                                <OptionText active={selectedTransmission === item}>{item}</OptionText>
                            </OptionButton>
                        ))}
                    </OptionContainer>
                </OptionsHolderContainer>
                
                <OptionsHolderContainer>
                    <OptionTitleText>Classification:</OptionTitleText>
                    <OptionContainer>
                        {classificationItems.map((item) => (
                            <OptionButton key={item} onPress={() => handleClassificationItemPress(item)} active={selectedClassification === item}>
                                <OptionText active={selectedClassification === item}>{item}</OptionText>
                            </OptionButton>
                        ))}
                    </OptionContainer>
                </OptionsHolderContainer>
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
                <ButtonUploadContainer>
                    <ButtonUploadText>Upload Photo:</ButtonUploadText>
                    <ButtonUploadImage onPress={chooseImage} imageUri={image} iconName={ICON_NAMES.ADDPHOTO}
                    width="100px" height="100px" borderRadius="0px" />
                </ButtonUploadContainer>
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Adding information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer>
                            <ButtonText text='Submit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='18'
                            onPress={formik.handleSubmit}/>
                        </ButtonContainer>
                    )
                }
            </InfoContainer>
        </CarPostCreateContainer>
    )
}

export default CarPostCreateScreen