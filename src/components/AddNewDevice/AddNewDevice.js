import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  H2,
  StyledForm,
  StyledField,
  StyledFieldCheckbox,
  Label,
  StyledErrorMessage,
  Button,
  CheckboxWrapper,
} from "./AddNewDevice.css";
import { Formik } from "formik";
import { AiOutlineQuestion } from "react-icons/ai";

//Komponent odpowiedzialny za dodawanie nowego urzadzenia
//Uzylem biblioteki formik do latwiejszego zarzadzania calym formularzem
const AddNewDevice = ({
  devices,
  cardTitleId,
  handleAddDevice,
  setIsActiveAddingDevice,
  defaultRoom,
}) => {
  const [isActiveCheck, setIsActiveCheck] = useState("false");
  return (
    <Wrapper>
      <H2>Add New Device</H2>
      <Formik
        initialValues={{
          deviceName: "",
          deviceText: "",
          value: "",
          minValue: "",
          maxValue: "",
          checkbox: false,
        }}
        validate={(values) => {
          const errors = {};
          //walidacja
          if (!values.deviceName) {
            errors.deviceName = "Required";
          }
          if (!values.deviceText) {
            errors.deviceText = "Required";
          }
          if (!values.value) {
            errors.value = "Required";
          }
          if (!values.minValue) {
            errors.minValue = "Required";
          }
          if (!values.maxValue) {
            errors.maxValue = "Required";
          }
          if (values.deviceName) {
            const [filteredDeviced] = devices.filter((device) => {
              return device.id === values.deviceName.toLowerCase();
            });
            if (filteredDeviced !== undefined) {
              errors.deviceName = "Name of device is taken";
            }
          }
          if (values.minValue && values.value) {
            if (values.minValue > values.value) {
              errors.minValue = "Value is lower than min value";
            }
          }
          if (values.maxValue && values.value) {
            if (values.maxValue < values.value) {
              errors.maxValue = "Value is higher than max value";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const newDevice = {
            id: values.deviceName.toLowerCase(),
            icon: <AiOutlineQuestion />,
            title: values.deviceName,
            sliderSettings: [
              {
                id: values.deviceText.toLowerCase(),
                text: values.deviceText,
                min: values.minValue,
                max: values.maxValue,
                value: values.value,
              },
            ],
            remoteControl: values.checkbox,
            active: false,
          };
          handleAddDevice(newDevice, cardTitleId);
          setIsActiveAddingDevice(defaultRoom);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              type="text"
              placeholder="device name"
              name="deviceName"
            />
            <StyledErrorMessage name="deviceName" component="div" />
            <StyledField
              type="text"
              placeholder="device text"
              name="deviceText"
            />
            <StyledErrorMessage name="deviceText" component="div" />
            <StyledField type="number" placeholder="value" name="value" />
            <StyledErrorMessage name="value" component="div" />
            <StyledField
              type="number"
              placeholder="min value"
              name="minValue"
            />
            <StyledErrorMessage name="minValue" component="div" />
            <StyledField
              type="number"
              placeholder="max value"
              name="maxValue"
            />
            <StyledErrorMessage name="maxValue" component="div" />
            <CheckboxWrapper>
              <Label htmlFor="checkbox">remote control</Label>
              <StyledFieldCheckbox
                id="checkbox"
                type="checkbox"
                name="checkbox"
                onClick={() => {
                  setIsActiveCheck(!isActiveCheck);
                }}
                isactivecheck={(!isActiveCheck).toString()}
              />
            </CheckboxWrapper>

            <Button type="submit" disabled={isSubmitting}>
              Add Device
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
AddNewDevice.propTypes = {
  devices: PropTypes.array,
  cardTitleId: PropTypes.string,
  handleAddDevice: PropTypes.func,
  setIsActiveAddingDevice: PropTypes.func,
  defaultRoom: PropTypes.string,
};
export default AddNewDevice;
