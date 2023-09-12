import React, { ReactElement } from "react";
import { useAppSelector } from "../redux/hooks";
import { isUserAuthenticated } from "../redux/common/selectors";
import { Navigate } from "react-router-dom";
import SideNav from "../components/organisms/Sidenav";
import { Box, createStyles } from "@mantine/core";
type props = {
  component: ReactElement;
};
const useStyles = createStyles(() => ({
  container: {
    display: "flex",
  },
}));
const ProtectedRoutes: React.FC<props> = ({ component }) => {
  const { classes } = useStyles();
  const isAuthenticated = useAppSelector(isUserAuthenticated);
  return isAuthenticated ? (
    <Box className={classes.container}>
      <SideNav />
      {component}
    </Box>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoutes;
