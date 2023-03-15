import Image from "../../config/images";
import { ImageWrapper, SwitchWrapper } from "./styledComponent";
import SideBarSwitch from "../switch";
import { ThemeEnum } from "../../interfaces/enums";

interface Props {
  theme: ThemeEnum;
  onChange: (val: boolean) => void;
}
const SwitchContainer = ({ theme, onChange }: Props) => {
  return (
    <SwitchWrapper>
      <ImageWrapper style={{ marginLeft: "66px" }}>
        <Image icon="light" />
      </ImageWrapper>
      <SideBarSwitch theme={theme} onChange={onChange}></SideBarSwitch>
      <ImageWrapper>
        <Image icon="dark" />
      </ImageWrapper>
    </SwitchWrapper>
  );
};
export default SwitchContainer;
