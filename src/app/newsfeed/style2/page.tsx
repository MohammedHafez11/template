"use client";
import ContentCenter from "@/components/NewsFeed/Style1/ContentCenter";
import CommonLayout from "@/layout/CommonLayout";
import { Container } from "reactstrap";

const newsFeedStyle2 = () => {
  return (
    <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style1" differentLogo="logo-color.png">
      <div className="page-center">
      
        <Container fluid className="section-t-space px-0 layout-default">
          <div className="page-content">
         
            <ContentCenter />
       
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default newsFeedStyle2;
