import React from 'react'
import { Alert } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase'

export default function useUploadImage(id, filepath, metadata = {}) {
    const [image, setImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [filename, setFilename] = useState("");
    
    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        let source = { uri: result.assets[0].uri };

        if (!result.canceled) {
            const filename = source.uri.substring(source.uri.lastIndexOf('/') + 1);
            setImage(source);
            setFilename(filename);
        } else {
            console.log("Choosing an Image Failed");
            Alert.alert(
                'Error',
                "Something went wrong when picking an image"
            );
            setImage(null);
            setFilename("");
        }
    };

    const resetState = () => {
        setImage(null);
        setIsUploading(false);
        setFilename("");
    };

    const uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                // return the blob
                resolve(xhr.response)
            }
            xhr.onerror = function () {
                reject(new Error('uriToBlob failed'))
            }
            xhr.responseType = 'blob'
            xhr.open('GET', uri, true)
        
            xhr.send(null)})}

    const uploadImage = async () => {
        setIsUploading(true);
        // const response = await fetch(image.uri.replace("file:///","file:/"));
        const fileBlob = await uriToBlob(image.uri);

        const fileId = id;

        const storageRef = ref(storage, filepath + fileId);

        let fileExtension = image.uri.substring(image.uri.lastIndexOf('.') + 1);

        try {
            const snapshot = await uploadBytes(storageRef, fileBlob, { ...metadata, fileExtension });
            const imgUrl = await getDownloadURL(snapshot.ref);

            resetState();
            Alert.alert("Upload Completed", "The image upload was successful.");

            return { imgUri: imgUrl, imgRef: `${filepath}${fileId}`, mediaType: fileExtension };
        } catch (err) {
            console.log(err);
            
            Alert.alert(
                'Error',
                "Something went wrong in uploading the image. Try again."
            );
            resetState();
        }
        
    };

    return [image, chooseImage, uploadImage, filename];
}
