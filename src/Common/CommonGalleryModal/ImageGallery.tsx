import { Href } from "../../utils/constant";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import { Col } from "reactstrap";
import { CommonGalleryModalInterFace } from "../CommonInterFace";
import DynamicFeatherIcon from "../DynamicFeatherIcon";
import { Post } from "@/redux-toolkit/models/postModel";

type Props = {
  item: Post;
  toggle: () => void;
};

const ImageGallery: FC<Props> = ({ toggle, item }) => {
  // Slider settings
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to render attachment based on type
  const renderAttachment = (attachment: string, index: number) => {
    const fileExtension = attachment.split('.').pop()?.toLowerCase() || '';

    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension)) {
      // Render image
      return (
        <Image
          key={index}
          width={1165}
          height={775}
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
          Download File {attachment.split('/').pop()}
        </a>
      );
    }
  };

  return (
    <Col xl={9} lg={8} className="p-0">
      <a href={Href}>
        <DynamicFeatherIcon iconName="X" className="icon-light close-btn" onClick={toggle} />
      </a>
      <Slider {...settings} className="slide-1 box-arrow dots-number">
        {Array.isArray(item.attachments) && item.attachments.map((attachment, index) => (
          <div key={index}>
            <div style={{ width: "100%", display: "inline-block" }}>
              <div className="img-part">
                {renderAttachment(attachment, index)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Col>
  );
};

export default ImageGallery;