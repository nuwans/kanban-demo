import { useState } from "react";
import Image from "../../config/images";
import { IconWrapper, ItemWrapper, Name } from "./styledComponent";

interface Props {
  name: string;
  id:number;
  onClick: (id:number) => void;
  selectedItem:number
}
const SideBarItem = ({ name,onClick ,id,selectedItem}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <ItemWrapper
      selected={id===selectedItem}
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      onClick={()=>onClick(id)}
    >
      <IconWrapper>
        <Image icon={(hovered || selectedItem===id)? "sidebar-icon-hover" : "sidebar-icon"}></Image>
      </IconWrapper>
      <Name>{name}</Name>
    </ItemWrapper>
  );
};
export default SideBarItem;
