"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button, Input } from "reactstrap";
import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import OptionsInputs from "./OptionsInputs";
import { createPostData } from "@/Data/common";
import { Post } from "@/redux-toolkit/models/postModel";
import { PostService  } from "@/redux-toolkit/services/PostService";
import Image from "next/image";
import { toast } from "react-toastify";
import { Album, Href, ImagePath } from "@/utils/constant";
import CreatePostHeader from "./CreatePostHeader";


const CreatePost = () => {
  const { data: session } = useSession();
const accessToken ="Bearer " + session?.user?.access_token;
  const colorList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [writePost, setWritePost] = useState(false);
  const [showPostButton, setShowPostButton] = useState(false);
  const [postClass, setPostClass] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const postService = new PostService( );
  const { useAddByFormDataMutation } = postService.Apis(accessToken);
  const [post, setPost] = useState(new Post());
  const [attachments, setAttachments] = useState<FileList | null>(null);

  const [add] = useAddByFormDataMutation();
  const [filePreviews, setFilePreviews] = useState<{ url: string; type: string }[]>([]);
  const [isContentEmpty, setIsContentEmpty] = useState(false);
  const [isBackgroundContentEmpty, setIsBackgroundContentEmpty] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  // const sortColumn = "dateTime"; 
  // const sortColumnDirection = "desc"; 
  

  // Fetch posts with sorting
  // const { data: posts, refetch: refetchPosts } = useGetAllQuery({
  //   sortColumn,
  //   sortColumnDirection
  // });



  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!post.content || post.content.trim() === "") {
      if (writePost) {
        setIsBackgroundContentEmpty(true);
      } else {
        setIsContentEmpty(true);
      }
      return;
    }

    setIsContentEmpty(false);
    setIsBackgroundContentEmpty(false);
    setIsUploading(true);

    try {
      let formData = new FormData();

      if (attachments) {
        Array.from(attachments).forEach(file => formData.append("files", file));
      }

      const postData = {
        ...post,
        background: postClass,
      };
      const response = await add({ item: postData, formData }).unwrap();

      setPost(new Post());
      setAttachments(null);
      setFilePreviews([]);
      setOptionInput("");
      setWritePost(false);
      setShowPostButton(false);
      setPostClass("");

      // refetchPosts();

      toast.success("تم اضافة المنشور بنجاح");

    } catch (err: any) {
      toast.error(err?.data?.message);

    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      const existingFiles = attachments ? Array.from(attachments) : [];
      const combinedFiles = [...existingFiles, ...newFiles];

      const updatedAttachments = new DataTransfer();
      combinedFiles.forEach(file => updatedAttachments.items.add(file));

      setAttachments(updatedAttachments.files);

      const fileURLs = combinedFiles.map(file => {
        if (file.type.startsWith("image/")) {
          return { url: URL.createObjectURL(file), type: "image" };
        } else if (file.type.startsWith("video/")) {
          return { url: URL.createObjectURL(file), type: "video" };
        } else {
          return { url: URL.createObjectURL(file), type: "other" };
        }
      });
      setFilePreviews(fileURLs);
    }
  };

  const handleRemoveFile = (index: number) => {
    if (attachments) {
      const updatedAttachments = new DataTransfer();

      Array.from(attachments).forEach((file, i) => {
        if (i !== index) {
          updatedAttachments.items.add(file);
        }
      });

      setAttachments(updatedAttachments.files);
    }

    setFilePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };

  const handleShowPost = (value: string) => {
    setWritePost(true);
    setShowPostButton(true);
    setPostClass(value);
    setPost({ ...post, background: value });
  };

  const handleCloseBackgroundInput = () => {
    setWritePost(false);
    setIsBackgroundContentEmpty(false);
    setShowPostButton(false);
    setPostClass("");
    setPost({ ...post, background: "" });
  };

  return (
    <div className="create-post">
      <CreatePostHeader writePost={writePost} />
      <form onSubmit={handleAddPost}>
        {!writePost && (
          <>
            <div className="search-input input-style icon-right">
              <Input
                type="text"
                value={post.content || ""}
                onChange={e => {
                  setPost({ ...post, content: e.target.value });
                  setIsContentEmpty(false);
                }}
                placeholder="اكتب هنا..."
                style={{ textTransform: "none" }}
              />
              <a href={Href}>
                <Image width={14} height={12} src={`${ImagePath}/icon/translate.png`} className="img-fluid blur-up icon lazyloaded" alt="translate" />
              </a>
            </div>

            {isContentEmpty && (
              <div style={{ color: "red", marginTop: "5px" }}>
                هذا الحقل مطلوب
              </div>
            )}

            <OptionsInputs OptionsInput={optionInput} setOptionInput={setOptionInput} />
            <ul className="create-btm-option">
              <li>
                <Input
                  className="choose-file"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                <h5>
                  <DynamicFeatherIcon iconName="Camera" className="iw-14" />
                  {Album}
                </h5>
              </li>
              {createPostData.map((data, index) => (
                <li key={index} onClick={() => setOptionInput(data.value)}>
                  <h5>
                    <DynamicFeatherIcon iconName={data.icon} className={data.tittle === "feelings & acitivity" ? "iw-14" : "iw-15"} />
                    {data.tittle}
                  </h5>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "10px" }}>
              {filePreviews.length > 0 && (
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "10px" }}>
                  {filePreviews.map((file, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      {file.type === "image" && (
                        <Image
                          width={100}
                          height={100}
                          style={{ width: "100px", height: "100px", marginBottom: "10px" }}
                          src={file.url}
                          alt={`preview-${index}`}
                        />
                      )}
                      {file.type === "video" && (
                        <video
                          width={100}
                          height={100}
                          style={{ width: "100px", height: "100px", marginBottom: "10px" }}
                          controls
                          src={file.url}
                        />
                      )}
                      {file.type === "other" && (
                        <a href={file.url} download>
                          Download File
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(index)}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer"
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        <div className="create-bg">
          <div className={`bg-post ${postClass} ${writePost ? "d-block" : ""}`}>
            <div className="input-sec">
              <Input
                type="text"
                className="enable"
                value={post.content || ""}
                onChange={e => {
                  setPost({ ...post, content: e.target.value });
                  setIsBackgroundContentEmpty(false);
                }}
                placeholder="write something here.."
                style={{ textTransform: "none" }}
              />
              <div className="close-icon" onClick={handleCloseBackgroundInput}>
                <a href={Href}>
                  <DynamicFeatherIcon iconName="X" className="iw-20 ih-20" />
                </a>
              </div>
            </div>
          </div>

          {isBackgroundContentEmpty && (
            <div style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
              هذا الحقل مطلوب
            </div>
          )}

          <ul className="gradient-bg theme-scrollbar">
            {colorList.map((data, index) => (
              <li key={index} onClick={() => handleShowPost(`gr-${data}`)} className={`gr-${data}`} />
            ))}
          </ul>
        </div>

        <div className='post-btn d-block'>
          <Button type="submit" disabled={isUploading}>
            {isUploading ? "جارٍ النشر..." : "نشر"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;