import CommonLikePanel from "@/Common/CommonLikePanel";
import CommonPostReact from "@/Common/CommonPostReact";
import CommonUserHeading from "@/Common/CommonUserHeading";
import DetailBox from "@/Common/DetailBox";
import { BirthdayHeading, BirthdaySpan } from "../../../utils/constant";
import { Button, Col, Container, Row } from "reactstrap";
import { FC, useState } from "react";
import CommonGalleryModal from "@/Common/CommonGalleryModal";
import { Post } from "@/redux-toolkit/models/postModel";
import Image from "next/image";

type Props = {
    item: Post;
}

const SufiyaElizaTwoPhotoPost: FC<Props> = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggle = () => setModalOpen(!modalOpen);

    const imagesToShow = 4;

    // Function to determine the type of attachment
    const renderAttachment = (attachment: string, index: number) => {
        const fileExtension = attachment.split('.').pop()?.toLowerCase();
        const fileName = attachment.split('/').pop();
        if (fileExtension) {
            if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension)) {
                // Render image
                return (
                    <Image
                        key={index}
                        height={225}
                        width={385}
                        src={`https://sociallms.runasp.net/${attachment}`}
                        className="img-fluid blur-up lazyloaded"
                        alt={`image-${index}`}
                        onClick={toggle}
                    />
                );
            } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
                // Render video
                return (
                    <video
                        key={index}
                        controls
                        className="img-fluid blur-up lazyloaded"
                        onClick={toggle}
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <source src={`https://sociallms.runasp.net/${attachment}`} type={`video/${fileExtension}`} />
                        Your browser does not support the video tag.
                    </video>
                );
            } else {
                // Render file link
                return (
                    <a
                        key={index}
                        href={`https://sociallms.runasp.net/${attachment}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block mb-3"
                        style={{ textDecoration: 'underline', color: 'blue' }}
                    >
                        Download File {fileName}
                    </a>
                );
            }
        }
    }

    return (
        <div className="post-wrapper col-grid-box section-t-space d-block" style={{ width: "600px" }}>
            <CommonUserHeading item={item} image={1} id="SufiyaElizaTwoPhotoPost" />
            <div className="post-details">
                <div className="img-wrapper">
                    <div className="gallery-section">
                        <div className="portfolio-section ratio_square">
                            <Container className="p-0">
                                <Row>
                                    {Array.isArray(item.attachments) && item.attachments.slice(0, imagesToShow).map((attachment, index) => (
                                        <Col
                                            key={index}
                                            xs={item.attachments?.length === 1 ? 12 : 6}
                                            md={item.attachments?.length === 1 ? 12 : 6}
                                            sm={item.attachments?.length === 1 ? 12 : 6}
                                            className="mb-3"
                                        >
                                            {renderAttachment(attachment, index)}
                                        </Col>
                                    ))}
                                </Row>
                                {item.attachments && item.attachments.length > imagesToShow && (
                                    <Button style={{ background: "var(--theme-gradient-button)" }} onClick={toggle} className="mt-3 d-block m-auto border-0">
                                        مشاهدة المزيد
                                    </Button>
                                )}
                                <CommonGalleryModal item={item} toggle={toggle} modal={modalOpen} />
                            </Container>
                        </div>
                    </div>
                </div>

                <DetailBox item={item} />

                <CommonLikePanel />
                <CommonPostReact item={item} />
            </div>
        </div>
    );
};

export default SufiyaElizaTwoPhotoPost;