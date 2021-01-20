import React from "react";
import {
  StyledForm,
  StyledField,
  StyledErrorMessage,
} from "./AddNewDevice.css";
import { Formik } from "formik";
import { AiOutlineQuestion } from "react-icons/ai";
const AddNewDevice = ({
  devices,
  cardTitleId,
  handleAddDevice,
  setIsActiveAddingDevice,
  defaultRoom,
}) => {
  return (
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
          <StyledField type="number" placeholder="min value" name="minValue" />
          <StyledErrorMessage name="minValue" component="div" />
          <StyledField type="number" placeholder="max value" name="maxValue" />
          <StyledErrorMessage name="maxValue" component="div" />
          <StyledField type="checkbox" name="checkbox" />
          <button type="submit" disabled={isSubmitting}>
            Add Device
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddNewDevice;
