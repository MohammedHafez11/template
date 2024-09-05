"use client"
import { FC, useState } from "react";
import {  Media, DropdownToggle, DropdownMenu, Button } from "reactstrap";
import { Href, ImagePath } from "../utils/constant/index";
import { CommonUserHeadingProps } from "./CommonInterFace";
import CustomImage from "./CustomImage";
import HoverMessage from "./HoverMessage";
import { Post } from "@/redux-toolkit/models/postModel";
import { format } from 'timeago.js'
import { toast } from "react-toastify";
import { FaRegClipboard } from "react-icons/fa";

type Props = {
  item: Post;
}

const CommonUserHeading: FC<CommonUserHeadingProps & Props> = ({ image, id, item }) => {
  const [showOption, setShowOption] = useState(false);

  const formattedDate = item.dateTime ? format(item.dateTime) : 'Unknown date';

  const handleShareClick = () => {
    const url = `http://localhost:3000/post/${item.id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Post URL copied to clipboard!');
    }).catch(err => {
      toast.error('Failed to copy: ' + err);
    });
  };
  return (
    <div className="post-title" style={{display: "flex", justifyContent: "space-between"}}>
      <div className="profile" >
        <Media>
          <a className="popover-cls user-img bg-size blur-up lazyloaded" href={Href} id={id}>
            <CustomImage src={`${ImagePath}/user-sm/${image}.jpg`} className="img-fluid blur-up lazyload bg-img" alt="user"/>
          </a>
          <Media body>
            <h5> {item.createdByName} </h5>
            <h6> {formattedDate} </h6>
          </Media>
        </Media>
        <HoverMessage placement={"right"} target={id} name={" محمد حافظ "} imagePath={`user-sm/${image}.jpg`} />
      </div>
      <div>
      <FaRegClipboard onClick={handleShareClick} style={{fontSize: "17px", cursor: "pointer", color: "#AD49E1"}}/>
      </div>
    </div>
  );
};

export default CommonUserHeading;