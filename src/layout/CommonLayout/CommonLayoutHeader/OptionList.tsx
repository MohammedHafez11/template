import { FC } from "react";
import DarkLight from "./DarkLight";
import HeaderMessage from "./HeaderMessage";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import MultipleLang from "./MultipleLang";

const OptionList: FC = () => {
  return (
    <ul className="option-list">
      <MultipleLang/>
      <HeaderMessage />
      <DarkLight />
      <Notification />
      <UserProfile />
      
    </ul>
  );
};

export default OptionList;
