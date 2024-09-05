"use client";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import SufiyaElizaThirdPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaMultiplePost from "@/components/NewsFeed/Style3/ContentCenter/SufiyaElizaMultiplePost";
import FriendSectionPageCover from "@/components/profile/FriendSectionPageCover";
import CommonLayout from "@/layout/CommonLayout";
import ProfileMenu from "@/layout/ProfileLayout/ProfileMenu";
import { Container } from "reactstrap";

const FriendSection: React.FC = () => {
  return (
    <CommonLayout mainClass="custom-padding profile-page" loaderName="profileTimeLine">
      <div className="page-center">
        <FriendSectionPageCover />
        <ProfileMenu title="timeline" />
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
            
            <div className="content-center">
              <CreatePost />
              <div className="overlay-bg" />
              <div className="post-panel infinite-loader-sec section-t-space">
                <SufiyaElizaFirstPost mainImage={11} userImage={15} />
                <SufiyaElizaMultiplePost
                  moreImage
                  main={40}
                  second={41}
                  third={42}
                />
                <SufiyaElizaSecondPost userImage={10} />
                <SufiyaElizaThirdPost
                  userImage={1}
                  iframeLink="https://giphy.com/embed/xl2zRzM8sVo3td58kS"
                />
                <SufiyaElizaSecondPost userImage={1} />
                <SufiyaElizaSecondPost userImage={1} />
                <SufiyaElizaSecondPost userImage={10} />
              </div>
            </div>
            
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default FriendSection;
