"use client";
import CommonLayout from "@/layout/CommonLayout";
import { FC } from "react";
import { Container } from "reactstrap";
import CenterContent from "@/components/NewsFeed/Style4/CenterContent";
import ConversationPanel from "@/layout/CommonLayout/ConversationPanel";

const NewsFeedStyle1: FC = () => {
    return (
        <CommonLayout
            showFullSideBar
            HideConversationPanel
            mainClass="newsfeed-style2"
            loaderName="style4"
        >
            <div className="page-center">
                <Container fluid className="px-0 layout-default">
                    <div className="d-flex justify-content-center">
                        <CenterContent />
                    </div>
                </Container>
            </div>
            <ConversationPanel sidebarClassName="" />
        </CommonLayout>
    );
};

export default NewsFeedStyle1;