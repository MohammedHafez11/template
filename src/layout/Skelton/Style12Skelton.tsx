import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import ProfileBox from "./common/ProfileBox";
import LikePage from "./common/LikePage";
import ContentCenter from "./common/ContentCenter";
import SuggestionBox from "./common/SuggestionBox";
import LayoutSideBar from "../CommonLayout/LayoutSideBar";
import ConversationPanel from "./common/ConversationPanel";

const Style12Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`custom-padding newsfeed-style page-body`}>
        <LayoutSideBar sideBarClassName="" />
        <div className="page-center">
          
          <Container fluid className="section-t-space px-0 layout-default">
            <div className="page-content">
              <div className="content-left">
                <ProfileBox />
                <SuggestionBox />
                <div className="sticky-top">
                  <LikePage />
                </div>
              </div>
              <ContentCenter />
              
            </div>
          </Container>
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(Style12Skelton);
