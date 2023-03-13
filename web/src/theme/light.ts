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
  background: "#ffffff",
  primaryContent:colors.black,
  secondaryColor: "#000000",
  colors: {
    mainPurpole: colors.mainPurpole,
    white: colors.white,
    mediumGray:colors.mediumGray
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
  dropDownBg:colors.white
};
