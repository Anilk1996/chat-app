import React from "react";
import { Box, Modal, Select, Text } from "@mantine/core";
import {
  StyledInput,
  StyledModalDivider,
  StyledNameInputContainer,
  StyledSignUpButton,
  StyledSignUpWrapper,
} from "./styles";
import { DateInput } from "@mantine/dates";
import Calender from "../../atoms/icons/Calender";

interface Props {
  opened: boolean;
  close: () => void;
}
const SignUpModal: React.FC<Props> = ({ opened, close }) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Box
            sx={{
              display: "flex",
              padding: "0 .5rem",
              flexDirection: "column",
            }}
          >
            <Text variant="text2">Sign Up</Text>
            <Text variant="text5" color="gray.7">
              To get started easily.
            </Text>
          </Box>
        }
        overlayProps={{
          blur: 2,
        }}
        closeButtonProps={{ style: { alignSelf: "start" } }}
        centered
      >
        <StyledModalDivider />
        <StyledSignUpWrapper>
          <StyledNameInputContainer>
            <StyledInput type="text" placeholder="First Name" />
            <StyledInput type="text" placeholder="Last name" />
          </StyledNameInputContainer>
          <StyledInput
            type="text"
            placeholder="Phone number or Email address"
          />
          <StyledInput type="password" placeholder="New Password" />
          <DateInput
            icon={<Calender />}
            sx={{ zIndex: 1400 }}
            label="Date of Birth"
            placeholder="Date of Birth"
            valueFormat="DD MMMM YYYY"
          />
          <Select
            sx={{ zIndex: 1400 }}
            label="Gender"
            placeholder="Please Select"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "others", label: "Others" },
            ]}
          />
          <StyledSignUpButton color="green.6">Sign Up</StyledSignUpButton>
        </StyledSignUpWrapper>
      </Modal>
    </>
  );
};

export default SignUpModal;
