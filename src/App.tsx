import { MantineProvider } from "@mantine/core";
import Authentication from "./components/pages/Authentication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/protectedRoutes";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/ErrorPages/PageNotFound";
import React from "react";
import getTheme from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider theme={getTheme()} withGlobalStyles withNormalizeCSS>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/login" element={<Authentication />} />
          <Route
            path="/home"
            element={<ProtectedRoutes component={<Home />} />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
