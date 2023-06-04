import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import ContentPageQLy from "../../layout/ContentLayout/ContentPageQLy";
import { IParams } from "../../types";
import { useParams } from "react-router-dom";
import ContentChiTietHD from "../../layout/ContentLayout/ContentChiTietHD";
import ContentCreateHD from "../../layout/ContentLayout/ContentCreateHD";
import ContentCreateHDKT from "../../layout/ContentLayout/ContentCreateHDKT";
import ContentChiTietHDKT from "../../layout/ContentLayout/ContentChiTietHDKT";
import ContentPageLapLichPhat from "../../layout/ContentLayout/ContentLapLicPhat";
import ContentChiTietLichPhat from "../../layout/ContentLayout/ContentLapLicPhat/ChitetLichPhat";

const { Content } = Layout;

const QuanLyPage = () => {
  const { page, control, tag, id }: IParams = useParams();
  console.log(control);
  const showContent = () => {
    switch (`${tag}`) {
      default:
        switch (`${control}`) {
          case "chitietlichphat":
            return <ContentChiTietLichPhat/>;      
          default:
            switch (`${page}`) {
              case "laplichphat":
                return <ContentPageLapLichPhat />;
              default:
                break;
            }
            break;
        }
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

export default QuanLyPage;
