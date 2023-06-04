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
import ContentPagePlayList from "../../layout/ContentLayout/ContentPagePlayList";
import CreatePlayList from "../../layout/ContentLayout/ContentPagePlayList/CreatePlayList";
import AddBanGhi from "../../layout/ContentLayout/ContentPagePlayList/AddBanGhi";
import ChitietPlaylist from "../../layout/ContentLayout/ContentPagePlayList/ChiTietPlaylist";

const { Content } = Layout;

const PlayListPage = () => {
  const { page, control, tag, id }: IParams = useParams();
  const showContent = () => {
    switch (`${id}`) {
      case "addbanghi":
        return <AddBanGhi />;
      default:
        switch (`${tag}`) {
          case "create-playlist":
            return <CreatePlayList />;
            case "chitietplaylist":
              return <ChitietPlaylist/>
          default:
            switch (`${control}`) {
              case "list":
                return <ContentPagePlayList />;
              case "grid":
                return <ContentPagePlayList />;
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

export default PlayListPage;
