import { View, Text } from 'react-native'
import React, { useState } from 'react'

import PropTypes from 'prop-types';
import { DropdownContainer, CustomText } from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
    dropdownItems,
    setDropdownItems,
    dropdownProps,
    customLabel,
    width = "100%",
    style,
    setValue,
    value
}) => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownContainer width={width}>
            {customLabel && <CustomText>{customLabel}</CustomText>}
            <DropDownPicker 
                open={open}
                value={value}
                setOpen={setOpen}
                setValue={setValue}
                items={dropdownItems}
                setItems={setDropdownItems}
                style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#1A1717',
                    elevation: 1000,
                    marginBottom: 20,
                    ...style,
                }}
                disableBorderRadius={true}
                textStyle={{
                    fontSize: 16,
                    color: '#234791'
                }}
                selectedItemContainerStyle={{
                    backgroundColor: '#234791',
                }}
                selectedItemLabelStyle={{
                    color: '#F4F6F8',
                }}
                showTickIcon={false}
                {...dropdownProps}
            />
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    dropdownItems: PropTypes.array.isRequired,
    setDropdownItems: PropTypes.func.isRequired,
    dropdownProps: PropTypes.object,
    customLabel: PropTypes.string,
    width: PropTypes.string,
    style: PropTypes.object,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Dropdown