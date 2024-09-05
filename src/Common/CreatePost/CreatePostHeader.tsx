import { CreatePost, GoLive, Href, ImagePath} from "../../utils/constant";
import { FC } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import {  Input } from "reactstrap";
import OptionDropDown from "./OptionDropDown";
import SettingsDropDown from "./SettingsDropDown";
import { CreatePostHeaderInterFace } from "../CommonInterFace";
import Image from "next/image";
type props = {
  writePost:any
}
const CreatePostHeader = ({writePost}:props) => {
  return (
    <div className={`static-section ${writePost ?"d-none":""}`}>
      <div className="card-title">
        <h3>{CreatePost}</h3>
        <ul className="create-option">
          <li className="options">
            <OptionDropDown />            
          </li>
          <li>
            <h5><DynamicFeatherIcon iconName="Video" className="iw-15" />{GoLive}</h5>
          </li>
        </ul>
        <SettingsDropDown />
      </div>
      
    </div>
  );
};

export default CreatePostHeader;
