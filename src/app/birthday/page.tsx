"use client";
import BirthDayCover from "@/components/BirthDay/BirthDayCover";
import BirthdayCards from "@/components/BirthDay/BirthdayCards";
import CommonLayout from "@/layout/CommonLayout";
import { Container } from "reactstrap";

const BirthDay = () => {
  return (
    <CommonLayout mainClass="birthday-page custom-padding" loaderName="birthDayLoader">
      <div className="page-center">
        <BirthDayCover />
        <Container fluid className="section-t-space px-0">
          <div className="page-content">
            <div className="content-center">
              <BirthdayCards />
            </div>
           
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
};

export default BirthDay;
