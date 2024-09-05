"use client";
import EducationProfile from "@/components/profile/EducationProfile";
import HobbiesProfile from "@/components/profile/HobbiesProfile";
import ProfileFriendList from "@/components/profile/ProfileFriendList";
import ProfileLayout from "@/layout/ProfileLayout";
import { Col, Container, Row } from "reactstrap";


const AboutProfile = () => {
  return (
    <ProfileLayout title="about" loaderName="aboutProfileSkelton" >
      <Container fluid className="section-t-space px-0">
        <Row>
          
          <Col xs="8" className="content-center res-full-width">
            <HobbiesProfile />
            <EducationProfile />
            <ProfileFriendList />
          </Col>
        </Row>
      </Container>
    </ProfileLayout>
  );
};

export default AboutProfile;
