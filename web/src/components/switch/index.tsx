import React, { } from "react";
import { SwitchInput, SwitchSlider, SwitchWrapper } from "./styledComponents";
import { ThemeEnum } from "../../interfaces/enums";
interface Props {
  theme: ThemeEnum;
  onChange: (val: boolean) => void;
}

const SideBarSwitch = ({ theme, onChange }: Props) => {
  const handleChange = (e: any) => {
    onChange(e.target.checked);
  };

  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={theme === ThemeEnum.LIGHT ? true : false}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <SwitchSlider />
    </SwitchWrapper>
  );
};

export default SideBarSwitch;
