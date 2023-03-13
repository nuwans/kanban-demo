import { useState } from "react";
import Image from "../../config/images";
import {
  AddNewContent,
  IconWrapper,
  ItemWrapper,
  ItemWrapperNew,
  Name,
} from "./styledComponents";

interface Props {
  name: string;
  onClick?: () => void;
}
const SideBarItemNew = ({ name, onClick }: Props) => {
  return (
    <ItemWrapperNew onClick={onClick}>
      <IconWrapper>
        <Image icon={"sidebar-icon-purpule"}></Image>
      </IconWrapper>
      <AddNewContent>{name}</AddNewContent>
    </ItemWrapperNew>
  );
};
export default SideBarItemNew;
