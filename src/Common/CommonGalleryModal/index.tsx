import { FC } from "react";
import { Col, Modal, Row } from "reactstrap";
import { CommonGalleryModalInterFace } from "../CommonInterFace";
import ImageGallery from "./ImageGallery";
import CommonLikePanel from "../CommonLikePanel";
import CommonPostReact from "../CommonPostReact";
import UserHeading from "./UserHeading";
import { Post } from "@/redux-toolkit/models/postModel";
type props = {
  item: Post,
  modal: boolean,
  toggle: () => void
}
const CommonGalleryModal = ({ modal, toggle, item }: props) => {
  return (
    <Modal isOpen={modal} toggle={toggle} centered modalClassName="comment-model">
      <div>
        <div className="image-gallery">
          <Row className="m-0">
            <ImageGallery item={item} toggle={toggle} />
            <Col xl="3" lg="4" className="p-0">
              <div className="comment-part theme-scrollbar">
                <UserHeading item={item} />
                <h3 style={{marginRight: "15px", marginBottom: "15px"}} >
                {item.content}
                </h3>
                <div className="post-panel mb-0">
                  <div className="post-wrapper">
                    <div className="post-details">
                      <CommonLikePanel />
                      <CommonPostReact />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default CommonGalleryModal;
