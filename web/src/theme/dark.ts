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
  background:colors.darkGray,
  primaryContent: colors.white,
  secondaryColor: "black",
  breackPoints: themeConfigs.breakpoints,
  colors: {
    mainPurpole: colors.mainPurpole,
    white: colors.white,
    mediumGray: colors.mediumGray,
    red:colors.red,
    hoverRed:colors.hoverRed
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
  dropDownBg:colors.veryDarkGray,
  newColumnGradient:'linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)',
  borderColor:colors.linesDark
  
};
