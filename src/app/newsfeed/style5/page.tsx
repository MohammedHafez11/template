"use client";
import CommonLayout from "@/layout/CommonLayout";
import { FC } from "react";
import { Container } from "reactstrap";
import LeftContent from "@/components/NewsFeed/Style5/LeftContent";
import CenterContent from "@/components/NewsFeed/Style5/CenterContent";

const NewsFeedStyle5: FC = () => {
  return (
    <CommonLayout
      mainClass="custom-padding newsfeed-style7"
      ConversationPanelClassName="panel-xs"
      loaderName="style1"
    >
      <div className="page-center page-lg">
     
        <Container fluid className="section-t-space px-0 layout-threecolumn">
          <div className="page-content">
            <CenterContent />
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default NewsFeedStyle5;
