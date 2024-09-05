
import CommonLayoutHeader from "@/layout/CommonLayout/CommonLayoutHeader";
import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import FullSideBar from "./common/FullSideBar";
import ContentCenter from "./common/ContentCenter";
import ConversationPanel from "./common/ConversationPanel";

const Style4Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {

 localStorage.getItem("lang");
 
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <CommonLayoutHeader headerClassName="" />
      <Container fluid className={`page-body newsfeed-style4`}>
        <FullSideBar />
        <div className="page-center">
          <Container fluid className="px-0 layout-default">
            <div className="d-flex justify-content-center">
              <ContentCenter />
            </div>
          </Container>
          
        </div>
        <ConversationPanel />
      </Container>
    </div>
  );
};

export default LoaderHoc(Style4Skelton);