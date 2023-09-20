import styled from "styled-components";
import { Box, Button, Divider, Input, Paper, Text } from "@mantine/core";

export const Wrapper = styled(Box)`
  background-color: var(--primary-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledContainer = styled(Box)`
  width: 72rem;
  height: 43.75;
  display: flex;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const StyledLoginBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const StyledTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 4.81rem;
`;
export const SubHeadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledSubHeadingText = styled(Text)`
  color: rgba(255, 255, 255, 0.6);
`;

export const StyledPaper = styled(Paper)`
  padding: 4.125rem 2.5rem;
  border-radius: 0.375rem;
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const StyledLoginFormContainer = styled(Box)`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

export const StyledSignUpButton = styled(StyledButton)`
  align-self: center;
  width: 6.25rem;
`;

export const StyledDivider = styled(Divider)`
  width: 100%;
  margin: 0;
`;
export const StyledModalDivider = styled(StyledDivider)`
  width: calc(100% + 2rem);
  margin: 0 -1rem 1rem !important;
  margin: 0;
`;
export const StyledSignUpWrapper = styled(Box)`
  padding: 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledNameInputContainer = styled(Box)`
  display: flex;
  gap: 1rem;
`;
