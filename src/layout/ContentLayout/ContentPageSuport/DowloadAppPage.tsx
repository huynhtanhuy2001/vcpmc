import { Button } from "antd";
import React from "react";
import ContentTitle from "../../../components/common/Content/contentTitle";

const DownloadAppPage = () => {
  return (
    <div className="Content-App">
      <ContentTitle title="Tải app" />
      <div className="Content-body">
        <div className="Content-body_DownloadPage">
          <div className="Content-body_DownloadPage-Title">
            <h3>
              ứng dụng <span>VCPMC</span>
            </h3>
          </div>
          <div className="Content-body_DownloadPage-Border"></div>
          <div className="Content-body_DownloadPage-SubTitle">
            <p> Bạn vui lòng chọn </p>

            <p>
              {" "}
              <span> nền tảng</span> phù hợp để trải nghiệm
            </p>
          </div>
          <div className="Content-body_DownloadPage-GroupDownLoad">
            <div className="Content-body_DownloadPage-GroupDownLoad-item">
              <div className="Content-body_DownloadPage-GroupDownLoad-item_image">
                <img
                  src={require("../../../assets/image/download/download.png")}
                  alt="imagedownload"
                />
              </div>
              <div className="Content-body_DownloadPage-GroupDownLoad-item_btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-submit btn-default"
                  // onClick={handleOpenModalSuccess}
                >
                  Tool Upload
                </Button>
              </div>
            </div>
            <div className="Content-body_DownloadPage-GroupDownLoad-item">
              <div className="Content-body_DownloadPage-GroupDownLoad-item_image">
                <img
                  src={require("../../../assets/image/download/window.png")}
                  alt="imagedownload"
                />
              </div>
              <div className="Content-body_DownloadPage-GroupDownLoad-item_btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-submit btn-default"
                  // onClick={handleOpenModalSuccess}
                >
                Tải App Window
                </Button>
              </div>
            </div>
            <div className="Content-body_DownloadPage-GroupDownLoad-item">
              <div className="Content-body_DownloadPage-GroupDownLoad-item_image">
                <img
                  src={require("../../../assets/image/download/adroid.png")}
                  alt="imagedownload"
                />
              </div>
              <div className="Content-body_DownloadPage-GroupDownLoad-item_btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn-submit btn-default"
                  // onClick={handleOpenModalSuccess}
                >
                 Tải App Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
