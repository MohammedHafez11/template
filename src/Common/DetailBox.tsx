"use client";
import { FC, useState } from "react";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { DetailBoxProps } from "./CommonInterFace";
import { ImagePath, PeopleReactThisPost } from "../utils/constant";
import CustomImage from "./CustomImage";
import { Post } from "@/redux-toolkit/models/postModel";

type props = {
  item: Post
}



const DetailBox = ({item}:props)  => {
  const [bookMarkActive, setBookMarkActive] = useState(false);
  
  return (
    <div  >
      <div className={`${item.background} content-post`} style={{padding: "10px", fontSize: "18px"}}>{item.content}</div>
      {/* <div className={`bookmark favorite-btn ${bookMarkActive ? "active" : ""}`}>
        <DynamicFeatherIcon iconName="Bookmark" className="iw-14 ih-14" onClick={() => {setBookMarkActive(!bookMarkActive); toast.success(`${bookMarkActive?"un-":""}bookmark successful`);}   }/>
      </div> */}
      <div className="people-likes" style={{marginBottom: "10px", marginTop: "10px", padding: "10px", }}>
        <ul>
      
            <li  className="popover-cls bg-size blur-up lazyloaded">
              <CustomImage src="" className="img-fluid blur-up lazyload bg-img" alt="image"/>
            </li>
        </ul>
        <h6 style={{fontSize: "14px"}}>+12 {PeopleReactThisPost}</h6>
      </div>
    </div>
  );
};

export default DetailBox;
