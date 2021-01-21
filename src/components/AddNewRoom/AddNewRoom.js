import React from "react";
import {
  Wrapper,
  H2,
  StyledForm,
  StyledField,
  StyledErrorMessage,
  Button,
} from "./AddNewRoom.css";
import { Formik } from "formik";
const AddNewRoom = ({
  cards,
  handleAddRoom,
  setIsActiveAddingRoom,
  defaultBar,
}) => {
  return (
    <Wrapper>
      <H2>Add new Room</H2>
      <Formik
        initialValues={{
          roomName: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.roomName) {
            errors.roomName = "Required";
          }

          if (values.roomName) {
            const [filteredDeviced] = cards.filter((card) => {
              return card.id === values.roomName.toLowerCase();
            });
            if (filteredDeviced !== undefined) {
              errors.roomName = "Name of room is taken";
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const newCard = {
            id: values.roomName.toLowerCase(),
            title: values.roomName,
            text: "3 family members have access",
            devices: [],
          };
          handleAddRoom(newCard);
          setIsActiveAddingRoom(defaultBar);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField type="text" placeholder="room name" name="roomName" />
            <StyledErrorMessage name="roomName" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Add Room
            </Button>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

export default AddNewRoom;
