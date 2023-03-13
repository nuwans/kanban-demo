import { useState } from "react";
import Image from "../../config/images";
import { ToggleContent, ToggleWrapper } from "./styledComponents";

interface Props {
  show?: boolean;
  onClick: () => void;
}
const SideBarToggle = ({ onClick}: Props) => {
  return (
    <ToggleWrapper
     onClick={onClick}
    >
      <Image icon="sidebar-toggle"></Image>
      <ToggleContent>Hide sidebar</ToggleContent>
    </ToggleWrapper>
  );
};
export default SideBarToggle;
