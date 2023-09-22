import React, { useState } from 'react';
import { Modal, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { deleteObject, ref } from "firebase/storage";

import { ModalButtonContainer, ModalContainer, ModalContent, ModalPhoto, ModalText } from './styles';

import ButtonText from '../ButtonText/ButtonText';
import ButtonUploadImage from '../ButtonUploadImage/ButtonUploadImage';
import PicturePlaceholder from '../../../assets/images/profile-pic-placeholder.png'

import { updatePhotoAction } from '../../../redux/actions/userActions';
import { showLoader, hideLoader } from '../../../redux/actions/loaderActions';

import useUploadImage from '../../../hooks/useUploadImage';

import { storage } from '../../../firebase';

const ChangePhotoModal = ({ targetImage, targetImageRef, isVisible, onClose }) => {
    let photoId = uuid.v4();
    const [image, chooseImage, uploadImage, filename] = useUploadImage(photoId, "users/");

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.loader.isLoading);
    const userInfo = useSelector(state => state.user);

    const handleSubmitPhoto = async() => {
        dispatch(showLoader());
        try{
            let imgFile,
            oldImgRef = targetImageRef;
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

            let updatedImgRef = imgFile ? imgFile.imgRef : targetImageRef;
            let updatedImg = imgFile ? imgFile.imgUri : targetImage;

            const imgValues = {
                id: userInfo.userId,
                profilePhoto: updatedImg,
                profilePhotoRef: updatedImgRef,
            }

            dispatch(updatePhotoAction(imgValues));
            onClose();
        }catch(error){
            dispatch(hideLoader());
            Alert.alert("Error", "There was an error when submitting the updated photo.");
        }
        
    };

    const handleCloseModal = () => {
        onClose();
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ModalContainer onPress={handleCloseModal}>
                <ModalContent>
                    <ModalButtonContainer>
                        {
                            targetImage || image ? (
                                image ? (
                                    <ButtonUploadImage onPress={chooseImage} imageUri={image}
                                    width="250px" height="250px" borderRadius="0px"/>
                                ) : (
                                    <ButtonUploadImage onPress={chooseImage} imageUri={targetImage}
                                    width="250px" height="250px" borderRadius="0px"/>
                                )
                            ) : (
                                <TouchableOpacity onPress={chooseImage}>
                                    <ModalPhoto source={PicturePlaceholder}/>
                                </TouchableOpacity>
                            )
                        }
                        
                    </ModalButtonContainer>
                    {
                        isLoading ? (
                            <ModalButtonContainer>
                                <ActivityIndicator size="large" color="#234791" />
                                <ModalText>Submitting updated image ...</ModalText>
                            </ModalButtonContainer>
                        ) : (
                            image ? (
                                <ModalButtonContainer>
                                    <ButtonText text='Update Photo' buttonColor='#58F5D9' textColor='#15191E' width='100%' textSize='16' onPress={handleSubmitPhoto} />
                                </ModalButtonContainer>
                            ) : null
                        )
                    }
                </ModalContent>
            </ModalContainer>
        </Modal>
    )
}

export default ChangePhotoModal