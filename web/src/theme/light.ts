import {
  headingM,
  headingXl,
  headingL,
  themeConfigs,
  headingS,
  bodyL,
  bodyM,
  colors,
} from "../config/theme";
import { Theame } from "../interfaces/theme";

export const lightTheme: Theame = {
  background: colors.white,
  primaryContent:colors.black,
  secondaryColor: "#000000",
  colors: {
    mainPurpole: colors.mainPurpole,
    white: colors.white,
    mediumGray:colors.mediumGray,
    red:colors.red,
    hoverRed:colors.hoverRed
  },
  button:{
    primary:{
        color:colors.white,
        background:colors.mainPurpole,
        hoverBackGround:colors.mainPurpoleHover,
        hoverColor:colors.white,
    },
    secondary:{
      color:colors.mainPurpole,
      background:colors.mainPurpole10Op,
      hoverBackGround:colors.mainPurpole25Op,
      hoverColor:colors.mainPurpole,
    }
  },
  breackPoints: themeConfigs.breakpoints,
  typograpy: {
    headingXl,
    headingL,
    headingM,
    headingS,
    bodyL,
    bodyM,
  },
  theameSwitcherBg:colors.lightGray,
  modalBg:colors.white,
  modalLabel:colors.mediumGray,
  modalInput:colors.inputBlack,
  modalInputBg:colors.white,
  boardBg:colors.lightGray,
  task:{
    background:colors.white,
    subHeading:colors.mediumGray,
    color:colors.inputBlack

  },
  dropDownBg:colors.white,
  newColumnGradient:'linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)',
  borderColor:colors.linesLight
};
