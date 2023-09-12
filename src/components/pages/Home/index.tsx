import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setIsUserAuthenticated } from "../../../redux/common/actions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(setIsUserAuthenticated(false));
    window.sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      Home
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
