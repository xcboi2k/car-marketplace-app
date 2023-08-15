import React, { useState } from 'react'

import { ButtonContainer, PriceYearContainer, CarPostEditContainer, HeaderHolder, HeaderText, HolderContainer, InfoContainer } from './styles'

import ButtonText from '../../shared/ButtonText/ButtonText'
import ButtonUploadImage from '../../shared/ButtonUploadImage/ButtonUploadImage'
import CommentInput from '../../shared/CommentInput/CommentInput'
import Dropdown from '../../shared/Dropdown/Dropdown'
import ScreenHeader from '../../shared/ScreenHeader/ScreenHeader'
import TextInput from '../../shared/TextInput/TextInput'
import { ICON_NAMES } from '../../../constants/constant'

const CarPostEditScreen = () => {
    const [mode, setMode] = useState("details");
    const [selectedTransmission, setSelectedTransmission] = useState("");
    const [transmissionItems, setTransmissionItems] = useState([
        {label: 'Manual', value: 'manual'},
        {label: 'Automatic', value: 'automatic'},
        {label: 'Sequential', value: 'sequential'},
        {label: 'CVT', value: 'cvt'},
    ]);

    const EditButtonGroup = () => (
        <>
            <ButtonText
                text='Save' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
            />
            <ButtonText
                text='Delete' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
            />
        </>
    );

    return (
        <CarPostEditContainer>
            <ScreenHeader leftIconName={ICON_NAMES.BACK}/>
            <HeaderHolder>
                <HeaderText>Edit Listing</HeaderText>
            </HeaderHolder>
            <InfoContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Vehicle Model",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Vehicle Model:"
                    labelTextSize = '16px'
                />
                <PriceYearContainer>
                    <TextInput 
                        inputProps={{
                            placeholder: "Enter Price",
                            // onChangeText: formik.handleChange("wishlistName"),
                            // value: formik.values.wishlistName,
                        }}
                        customLabel="Price:"
                        labelTextSize = '16px'
                        width='45%'
                    />
                    <TextInput 
                        inputProps={{
                            placeholder: "Enter Year",
                            // onChangeText: formik.handleChange("wishlistName"),
                            // value: formik.values.wishlistName,
                        }}
                        customLabel="Year:"
                        labelTextSize = '16px'
                        width='40%'
                    />
                </PriceYearContainer>
                <TextInput 
                    inputProps={{
                        placeholder: "Enter Total Kilometers",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
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
                            // formik.setFieldValue("targetAccount", value);
                            // const targetAccount = accountItems.find(item => item.value === value);
                            // // console.log(targetAccount);
                            // formik.setFieldValue("accountName", targetAccount.label);
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
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Description:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Features about the car",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Features:"
                    textSize = '16px'
                />
                <CommentInput 
                    inputProps={{
                        placeholder: "Enter necessary vehicle information",
                        // onChangeText: formik.handleChange("wishlistName"),
                        // value: formik.values.wishlistName,
                    }}
                    customLabel="Vehicle Information:"
                    textSize = '16px'
                />
                {/* <ButtonUploadImage
                    customLabel={"Upload Image"}
                    // imageUri={image}
                    // onPress={chooseImage}
                    // filename={filename}
                /> */}
                <ButtonContainer mode={mode}>
                    {mode === "edit" ? (
                        <EditButtonGroup />
                    ) : (
                        <ButtonText
                            text='Edit' buttonColor='#234791' textColor='#F4F6F8' width='45%' textSize='16'
                            onPress={() => setMode("edit")}
                        />
                    )}
                </ButtonContainer>
            </HolderContainer>
        </CarPostEditContainer>
    )
}

export default CarPostEditScreen