import React from "react";
import {
  StyledButton,
  StyledDivider,
  StyledInput,
  StyledLoginFormContainer,
  StyledPaper,
} from "./styles";
import { Anchor, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
interface Props {
  showModal: () => void;
  opened: boolean;
}
const LoginForm: React.FC<Props> = ({ opened, showModal }) => {
  const navigate = useNavigate();
  return (
    <StyledPaper>
      <StyledLoginFormContainer>
        <StyledInput type="text" placeholder="Phone number or Email address" />
        <StyledInput type="password" placeholder="Password" />
        <StyledButton
          w={"100%"}
          color={opened ? "dark.9" : "green.6"}
          onClick={() => navigate("/home")}
        >
          Log in
        </StyledButton>
        <Anchor href="#">
          <Text variant={"text1"}>Forgot password?</Text>
        </Anchor>
        <StyledDivider color="gray.2" my="sm" />
        <Button color="dark.9" onClick={showModal}>
          Create account
        </Button>
      </StyledLoginFormContainer>
    </StyledPaper>
  );
};

export default LoginForm;
