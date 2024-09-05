"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SufiyaElizaTwoPhotoPost from "@/components/NewsFeed/Style4/SufiyaElizaTwoPhotoPost";
import { PostService } from "@/redux-toolkit/services/PostService";
import { Post } from "@/redux-toolkit/models/postModel";
import { ReadDto } from "@/redux-toolkit/models/searchModel";
import PostNotFound from "@/utils/PostNotFound";
import { Container } from "reactstrap";
import ConversationPanel from "@/layout/CommonLayout/ConversationPanel";
import CommonLayout from "@/layout/CommonLayout";
import Heading from "@/utils/Heading";
import { useSession } from "next-auth/react";


const PostPage: React.FC = () => {
  const { id } = useParams();
  const postService = new PostService( );
  const { data: session } = useSession();
const accessToken ="Bearer " + session?.user?.access_token;
  const { useGetAllQuery } = postService.Apis(accessToken);
  const postquery = new ReadDto<Post>();
  const { data, isLoading } = useGetAllQuery({ ...postquery });
  const allPosts: Post[] = data?.data.listData || [];
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (allPosts.length > 0 && id) {
      const selectedPost = allPosts.find((p) => p.id === id);
      setPost(selectedPost || null);
    }
  }, [allPosts, id]);

  if (isLoading) {
    return null;
  }

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <>
      <Heading title="hello" description="hello" keywords="hello" />
      <CommonLayout
        showFullSideBar
        HideConversationPanel
        mainClass="newsfeed-style2"
        loaderName="style4"
      >
        <div className="page-center" >

          <Container fluid className=" px-0 layout-default" >
            <div className="d-flex justify-content-center">

              <div className="content-center">
                <div className="overlay-bg" />
                <div className="post-panel section-t-space">
                  <SufiyaElizaTwoPhotoPost key={post.id} item={post} />
                </div>
              </div>

            </div>

          </Container>

        </div>
        <ConversationPanel sidebarClassName="" />
      </CommonLayout>
    </>

  );
};

export default PostPage;