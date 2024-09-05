import { LoadingLoaderProps } from "@/layout/LayoutTypes";
import LoaderHoc from "@/utils/LoaderHoc";
import { Container } from "reactstrap";
import BrandLogo from "../CommonLayout/CommonLayoutHeader/BrandLogo";
import SearchBox from "../CommonLayout/CommonLayoutHeader/SearchBox";
import RightSection from "../HorizontalSidebar/RightSection";
import HeaderCenter from "../HorizontalSidebar/HeaderCenter";
import ProfileBox from "./common/ProfileBox";
import SuggestionBox from "./common/SuggestionBox";
import LikePage from "./common/LikePage";
import ContentCenter from "./common/ContentCenter";
const Style7Skelton: React.FC<LoadingLoaderProps> = ({ show }) => {
  return (
    <div className={`pre-loader ${show ? "d-block" : "d-none"}`}>
      <header className="header-menu">
        <div className="mobile-fix-menu" />
        <Container fluid className="custom-padding">
          <div className="header-section">
            <div className="header-left">
              <BrandLogo />
              <SearchBox />
            </div>
            <HeaderCenter />
            <RightSection />
          </div>
        </Container>
      </header>
      <Container fluid className={`page-body custom-padding newsfeed-style4`}>
        <div className="page-center">
        
          <Container fluid className="section-t-space px-0 layout-default">
            <div className="page-content">
              <div className="content-left">
                <ProfileBox />
                <SuggestionBox />
                <LikePage />
              </div>
              <ContentCenter />
            
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default LoaderHoc(Style7Skelton);
