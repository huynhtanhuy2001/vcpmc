import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import ContentPageHDSD from "../../layout/ContentLayout/ContentPageSuport";
import DownloadAppPage from "../../layout/ContentLayout/ContentPageSuport/DowloadAppPage";
import FeedbackPage from "../../layout/ContentLayout/ContentPageSuport/FeedbackPage";

import ContentPhanQuyenUser from "../../layout/ContentLayout/ContentPhanQuyenUser";
import HandelPagePQUser from "../../layout/ContentLayout/ContentPhanQuyenUser/HandelPagePQUSer";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import { IParams } from "../../types";

const SupportPages = () => {
  const { page, control, tag, id }: IParams = useParams();

  const { Content } = Layout;
  const showContent = () => {
    switch (`${control}`) {
      case "HDSD":
        return <ContentPageHDSD />;
      case "dowload-app":
        return <DownloadAppPage />;
        case "feedback":
          return <FeedbackPage />;
  
      default:
        break;
    }
  };
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>{showContent()}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SupportPages;
