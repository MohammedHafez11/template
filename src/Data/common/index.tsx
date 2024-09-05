import {
  CreatePostInterface,
  GalleryModalInterFace,
  galleryDropDownsInterFace,
  userDropDownDataInterFace,
} from "@/Common/CommonInterFace";
import { EdiPost, HidePost, SavePost } from "../../utils/constant";

export const createPostDropDown: CreatePostInterface[] = [
  { icon: "Globe", name: "Public" },
  { icon: "Users", name: "Friends" },
  { icon: "User", name: "friends except" },
  { icon: "User", name: "specific friends" },
  { icon: "User", name: "only me" },
];

export const userDropDownData: userDropDownDataInterFace[] = [
  { icon: "Globe", detail: "Public" },
  { icon: "Users", detail: "Friends" },
  { icon: "User", detail: "Friend except" },
  { icon: "User", detail: "specific except" },
  { icon: "Lock", detail: "specific except" },
];

interface createPostInterFace {
  icon: "Camera" | "MapPin" | "Tag";
  tittle: string;
  value: string;
}
export const createPostData: createPostInterFace[] = [
  { icon: "Camera", tittle: "feelings & acitivity", value: "feeling" },
  { icon: "MapPin", tittle: "check in", value: "place" },
  { icon: "Tag", tittle: "tag friends", value: "friends" },
];

export const feelings = [
  "Happy",
  "Sad",
  "Angry",
  "Worried",
  "Shy",
  "Excited",
  "Surprised",
  "Silly",
  "Embarrassed",
];

export const friendsNames = [
  " محمد حافظ ",
  " محمد حافظ ",
  " محمد حافظ ",
  " محمد حافظ ",
  " محمد حافظ ",
  " محمد حافظ ",
  " محمد حافظ ",
];

export const galleryModalDropDownData: GalleryModalInterFace[] = [
  { title: SavePost, icon: "Bookmark" },
  { title: EdiPost, icon: "Edit" },
  { title: HidePost, icon: "XSquare" },
];

export const albumListData = [
  { tittle: "Cover Photos", image: 3 },
  { tittle: "Profile Photos", image: 4 },
  { tittle: "Family Trip", image: 10 },
  { tittle: "Family Trip", image: 11 },
  { tittle: "Family Trip", image: 8 },
  { tittle: "Family Trip", image: 7 },
];

export const galleryDropDowns: galleryDropDownsInterFace[] = [
  { icon: "Trash2", title: "Delete Photo" },
  { icon: "Download", title: "Download" },
  { icon: "Image", title: "Make a cover" },
  { icon: "Image", title: "Make a profile" },
];
export const yearsWiseDetails = [
  { year: 2019, amount: 12 },
  { year: 2018, amount: 12 },
  { year: 2017, amount: 12 },
  { year: 2016, amount: 12 },
  { year: 2015, amount: 12 },
];

export const fullSideBarData = [
  { iconName: "news", title: "الاخبار" },
  { iconName: "star", title: "المفضله" },
  { iconName: "friends", title: "المجموعات" },
  { iconName: "headphones", title: "الموسيقي & الفيديو" },
  { iconName: "sky", title: "الطقس" },
  { iconName: "calendar", title: "التاريخ" },
  { iconName: "cake-pop", title: "الطعام" },
  { iconName: "games", title: "الالعاب" },
  { iconName: "comment", title: "الاخبار" },
  { iconName: "youtube", title: "لايف" },
  { iconName: "cart", title: "التسوق" },
];

export const reactions = [
  { tittle: "smile", imageName: "040" },
  { tittle: "love", imageName: 113 },
  { tittle: "cry", imageName: "027" },
  { tittle: "wow", imageName: "052" },
  { tittle: "angry", imageName: "039" },
  { tittle: "haha", imageName: "042" },
];
