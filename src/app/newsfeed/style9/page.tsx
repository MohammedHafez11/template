"use client";
import CreatePost from "@/Common/CreatePost";
import { skeltonLoaderList } from "@/Data/Layout";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import GemixStore from "@/components/NewsFeed/Style3/ContentCenter/GemixStore";
import SideBarWithUser from "@/components/NewsFeed/Style9/SideBarWithUser";
import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import ConversationPanel from "@/layout/CommonLayout/ConversationPanel";
import ThemeCustomizer from "@/layout/CommonLayout/ThemeCustomizer";
import { FC } from "react";
import { Container } from "reactstrap";

const NewsFeedStyle9: FC = () => {
  return (
    <>
    {skeltonLoaderList.style9}
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className="page-body newsfeed-style5">
        <SideBarWithUser />
        <div className="page-center">
      
          <Container fluid className="section-t-space px-0">
            <div className="page-content">
              <div className="content-center">
                <CreatePost />
                <div className="overlay-bg" />
                <div className="post-panel infinite-loader-sec section-t-space">
                  <SufiyaElizaThirdPost
                    userImage={1}
                    iframeLink="https://giphy.com/embed/xl2zRzM8sVo3td58kS"
                  />
                  <GemixStore />
                  <SufiyaElizaThirdPost fourthPost={2} userImage={1} />
                </div>
              </div>
              
            </div>
          </Container>
        </div>
        <ConversationPanel sidebarClassName="" />
      </Container>
      <ThemeCustomizer />
    </>
  );
};

export default NewsFeedStyle9;
