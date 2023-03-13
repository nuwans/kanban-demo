import { BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import LayoutRoute from "./layout";
import { ThemeEnum } from "../interfaces/enums";
import { lightTheme } from "../theme/light";
import { darkTheme } from "../theme/dark";
import { useSelector } from "react-redux";
import { GlobalState } from "../store/global";
const Router = () => {
  const { theme }: Partial<GlobalState> = useSelector(
    (state: any) => state.global
  );
  return (
    <ThemeProvider theme={theme === ThemeEnum.LIGHT ? lightTheme : darkTheme}>
      <AppRouter>
        <Routes>
          {routes.map(({ path, component, exact }) => {
            return (
              <Route
                key={path}
                path={path}
                element={<LayoutRoute path={path} element={component} />}
              />
            );
          })}
        </Routes>
      </AppRouter>
    </ThemeProvider>
  );
};
export default Router;
