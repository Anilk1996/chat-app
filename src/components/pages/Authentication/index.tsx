import { Text } from "@mantine/core";
import React from "react";
import {
  StyledBox,
  StyledContainer,
  StyledLoginBox,
  StyledSubHeadingText,
  StyledTextContainer,
  SubHeadingContainer,
  Wrapper,
} from "./styles";
import LoginForm from "./LoginForm";
import { useDisclosure } from "@mantine/hooks";
import SignUpModal from "./SignUpModal";

const Authentication = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [type, toggle] = useToggle(["login", "register"]);
  // const form = useForm({
  //   initialValues: {
  //     email: "",
  //     name: "",
  //     password: "",
  //     terms: true,
  //   },

  //   validate: {
  //     email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
  //     password: (val) =>
  //       val.length <= 6
  //         ? "Password should include at least 6 characters"
  //         : null,
  //   },
  // });
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/home");
  //   }
  // }, [navigate, isAuthenticated]);
  // const handleClick = () => {
  //   dispatch(setIsUserAuthenticated(true));
  //   try {
  //     sessionStorage.setItem(
  //       commonSlice.name,
  //       JSON.stringify({ isUserAuthenticated: true })
  //     );
  //   } catch (err) {
  //     // Handle error
  //   }
  // };
  return (
    <Wrapper>
      <StyledContainer>
        <StyledBox>
          <StyledTextContainer>
            <Text variant="text3">ChatUp</Text>
            <SubHeadingContainer>
              <StyledSubHeadingText variant="text4">
                Welcome to ChatUp
              </StyledSubHeadingText>
              <StyledSubHeadingText variant="text4">
                "Speak Freely, Message Easily."
              </StyledSubHeadingText>
            </SubHeadingContainer>
          </StyledTextContainer>
        </StyledBox>
        <StyledLoginBox>
          <LoginForm opened={opened} showModal={open} />
        </StyledLoginBox>
      </StyledContainer>
      <SignUpModal {...{ opened, close }} />
    </Wrapper>
  );
};
export default Authentication;
