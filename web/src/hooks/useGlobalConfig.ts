import { useDispatch } from "react-redux";
import { changeThemeAction } from "../store/global";
import { ThemeEnum } from "../interfaces/enums";

export const useGlobalConfig = () => {
  const dispatch = useDispatch();

  const changeTheme = async (theme: ThemeEnum) => {
    dispatch(changeThemeAction({ theme }));
  };
  return {
    changeTheme,
  };
};
