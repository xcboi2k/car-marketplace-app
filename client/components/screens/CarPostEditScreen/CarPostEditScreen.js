import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import uuid from 'react-native-uuid';
import { deleteObject, ref } from "firebase/storage";

import { ButtonContainer, PriceYearContainer, CarPostEditContainer, HeaderHolder, HeaderText, HolderContainer, InfoContainer, OptionsHolderContainer, OptionTitleText, OptionContainer, OptionButton, OptionText, SubText, EditPhoto, ButtonUploadContainer, ButtonUploadText } from './styles'

import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'
import { ICON_NAMES } from '../../../constants/constant'

import ButtonText from '../../shared/ButtonText/ButtonText'
import ButtonUploadImage from '../../shared/ButtonUploadImage/ButtonUploadImage'
import CommentInput from '../../shared/CommentInput/CommentInput'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import TextInput from '../../shared/TextInput/TextInput'

import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';
import { updateListingAction, deleteListingAction } from '../../../redux/actions/listingActions';

import useUploadImage from '../../../hooks/useUploadImage';
import { storage } from '../../../firebase';

const CarPostEditScreen = ({ route, navigation }) => {
    const { carPostEditID } = route.params;
    let photoId = uuid.v4();
    const [image, chooseImage, uploadImage, filename] = useUploadImage(photoId, "listings/");

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);

    const userListings = useSelector((state) => state.listing.userListings);
    const [currentCarPost, setCurrentCarPost] = useState(() => {
        return userListings.find(item => item._id === carPostEditID);
    });

    useEffect(() => {
        const targetListing = userListings.find(item => item._id === carPostEditID);
        console.log('targetListing', targetListing);
        setCurrentCarPost(targetListing);
    }, [carPostEditID])

    const [mode, setMode] = useState("details");

    const transmissionItems = ['Manual', 'Automatic', 'Sequential', 'CVT'];
    const [selectedTransmission, setSelectedTransmission] = useState(transmissionItems[transmissionItems.indexOf(currentCarPost.transmission_type)]);
    const handleTransmissionItemPress = (transType) => {
        setSelectedTransmission(transType);
    };

    const classificationItems = ['Car', 'Van', 'Truck/Bus', 'Motorcycle'];
    const [selectedClassification, setSelectedClassification] = useState(classificationItems[classificationItems.indexOf(currentCarPost.classification_type)]);
    const handleClassificationItemPress = (classificationType) => {
        setSelectedClassification(classificationType);
    };

    let currentPrice = currentCarPost.price.toString();
    let currentYear = currentCarPost.production_year.toString()
    let currentKMs = currentCarPost.total_kms.toString()

    const initialValues = {
        carModel: currentCarPost.car_model,
        price: currentPrice,
        productionYear: currentYear,
        totalKMs: currentKMs,
        description: currentCarPost.description,
        features: currentCarPost.features,
        vehicleInformation: currentCarPost.vehicle_information,
    };

    const handleFormikSubmit = async(values, { resetForm }) => {
        try{
            dispatch(showLoader());
            console.log('Checking values: ', values);

            let imgFile,
            oldImgRef = currentCarPost.car_photo_ref;
            // IF THERE IS AN EXISTING IMAGE AND NEW IMAGE IS SELECTED
            if (image && oldImgRef) {
                // THEN DELETE THE OLD IMAGE
                const oldFileRef = ref(storage, oldImgRef);
                await deleteObject(oldFileRef);
                imgFile = await uploadImage();
                // IF THERE IS AN IMAGE BUT NO OLD IMAGE
            } else if (image && !oldImgRef) {
                imgFile = await uploadImage();
            }

            let updatedImgRef = imgFile ? imgFile.imgRef : currentCarPost.car_photo_ref;
            let updatedImg = imgFile ? imgFile.imgUri : currentCarPost.car_photo;

            const enteredValues = {
                carModel: values.carModel,
                price: values.price,
                productionYear: values.productionYear,
                transmissionType: selectedTransmission,
                classificationType: selectedClassification,
                totalKMs: values.totalKMs,
                description: values.description ? values.description : 'No description.',
                features: values.features ? values.features : 'No features.',
                vehicleInformation: values.vehicleInformation ? values.vehicleInformation : 'No vehicle information.',
                carPhoto: updatedImg,
                carPhotoRef: updatedImgRef,
                listingID: carPostEditID,
            };

            dispatch(updateListingAction(enteredValues));
            resetForm();

            const newKey = Math.random().toString();
            navigation.navigate("Profile", {
                screen: "ProfileMain",
                key: newKey
            })
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

    const handleDelete = () => {
        dispatch(deleteListingAction(carPostEditID, currentCarPost.car_photo_ref));
        Alert.alert("Success", "Item Deleted.");

        const newKey = Math.random().toString();
            navigation.navigate("Profile", {
                screen: "ProfileMain",
                key: newKey
            });
    };

    const showDeletePrompt = () => {
        Alert.alert("Deleting file", "Are you sure ?", [{
            text: "Yes",
            onPress: handleDelete,
            style: "destructive"
        }, {
            text: "No",
            onPress: () => { },
            style: "cancel"
        }]);

    };

    const EditButtonGroup = () => (
        <>
            <ButtonText
                text='Save' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                onPress={formik.handleSubmit}
            />
        </>
    );

    return (
        <CarPostEditContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}
            onLeftPress={() => 
                navigation.goBack()}/>
            <HeaderHolder>
                <HeaderText>Edit Listing</HeaderText>
            </HeaderHolder>
            <InfoContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Car Model",
                        onChangeText: formik.handleChange("carModel"),
                        value: formik.values.carModel,
                        editable: mode === "edit"
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
                            editable: mode === "edit"
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
                            editable: mode === "edit"
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
                        editable: mode === "edit"
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
                        editable: mode === "edit"
                    }}
                    customLabel="Description:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Features about the car",
                        onChangeText: formik.handleChange("features"),
                        value: formik.values.features,
                        editable: mode === "edit"
                    }}
                    customLabel="Features:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Enter necessary vehicle information",
                        onChangeText: formik.handleChange("vehicleInformation"),
                        value: formik.values.vehicleInformation,
                        editable: mode === "edit"
                    }}
                    customLabel="Vehicle Information:"
                    textSize = '16px'
                />
                <ButtonUploadContainer>
                    <ButtonUploadText>Upload Photo:</ButtonUploadText>
                    {
                        currentCarPost.car_photo || image ? (
                            image ? (
                                <ButtonUploadImage onPress={chooseImage} imageUri={image}
                                width="100px" height="100px" borderRadius="0px"/>
                            ) : (
                                <ButtonUploadImage onPress={chooseImage} imageUri={{ uri: currentCarPost.car_photo}}
                                width="100px" height="100px" borderRadius="0px"/>
                            )
                        ) : (
                            <TouchableOpacity onPress={chooseImage}>
                                <EditPhoto source={PicturePlaceholder}/>
                            </TouchableOpacity>
                        )
                    }
                </ButtonUploadContainer>
                {
                    isLoading ? (
                        <HeaderHolder>
                            <ActivityIndicator size="large" color="#234791" />
                            <SubText>Updating information ...</SubText>
                        </HeaderHolder>
                    ) : (
                        <ButtonContainer mode={mode}>
                            {mode === "edit" ? (
                                <EditButtonGroup />
                            ) : (
                                <>
                                    <ButtonText
                                        text='Edit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                                        onPress={() => setMode("edit")}
                                    />
                                    <ButtonText
                                        text='Delete' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                                        onPress={showDeletePrompt}
                                    />
                                </>
                            )}
                        </ButtonContainer>
                    )
                }
            </InfoContainer>
        </CarPostEditContainer>
    )
}

export default CarPostEditScreen