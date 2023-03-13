export interface Breakpoints {
  mobile: string;
  tab: string;
  desktop: string;
}
export interface ButtonProps {
  color: string;
  background: string;
  hoverColor?: string;
  hoverBackGround?: string;
}
export interface Typograpy {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Theame {
  background: string;
  primaryContent: string;
  secondaryColor: string;
  breackPoints: Breakpoints;
  theameSwitcherBg: string;
  modalBg: string;
  colors: {
    mainPurpole: string;
    white: string;
    mediumGray: string;
  };
  button: {
    primary: ButtonProps;
    secondary:ButtonProps;
  };
  typograpy?: {
    headingXl: Typograpy;
    headingL: Typograpy;
    headingM: Typograpy;
    headingS: Typograpy;
    bodyL: Typograpy;
    bodyM: Typograpy;
  };
  modalLabel: string;
  modalInput:string;
  modalInputBg:string;
  boardBg:string;
  task:{
    background:string,
    subHeading:string,
    color:string

  },
  dropDownBg:string,
  newColumnGradient:string;
}
