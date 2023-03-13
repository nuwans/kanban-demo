import {
  bodyL,
  bodyM,
  colors,
  headingL,
  headingM,
  headingS,
  headingXl,
  themeConfigs,
} from "../config/theme";
import { Theame } from "../interfaces/theme";

export const darkTheme: Theame = {
  background: "#2B2C37",
  primaryContent: colors.white,
  secondaryColor: "black",
  breackPoints: themeConfigs.breakpoints,
  colors: {
    mainPurpole: colors.mainPurpole,
    white: colors.white,
    mediumGray: colors.mediumGray,
  },
  button: {
    primary: {
      color: colors.white,
      background: colors.mainPurpole,
      hoverBackGround: colors.mainPurpoleHover,
      hoverColor: colors.white,
    },
    secondary: {
      color: colors.mainPurpole,
      background: colors.white,
      hoverBackGround: colors.white,
      hoverColor: colors.mainPurpole,
    },
  },
  typograpy: {
    headingXl,
    headingL,
    headingM,
    headingS,
    bodyL,
    bodyM,
  },
  theameSwitcherBg: colors.veryDarkGray,
  modalBg: colors.darkGray,
  modalLabel: colors.white,
  modalInput: colors.white,
  modalInputBg: colors.darkGray,
  boardBg: colors.veryDarkGray,
  task: {
    background: colors.darkGray,
    subHeading: colors.mediumGray,
    color: colors.white,
  },
  dropDownBg:colors.veryDarkGray
  
};
