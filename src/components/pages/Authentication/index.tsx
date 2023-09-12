import { Text } from "@mantine/core";
import React from "react";
import { StyledBox, StyledContainer } from "./styles";

const Authentication = () => {
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
    <StyledContainer>
      <StyledBox>
        <Text variant="fs72fw700lh72">ChatUp</Text>
      </StyledBox>
      <StyledBox>Hello world</StyledBox>
    </StyledContainer>
  );
};
export default Authentication;
