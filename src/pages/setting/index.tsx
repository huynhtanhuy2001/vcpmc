import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import ContentPageBaoCaoDT from "../../layout/ContentLayout/ContentBaoCaoDT";
import ContentPageLichsuDoiSoat from "../../layout/ContentLayout/ContentLichsuDoiSoat";
import ContentPageKhoBG from "../../layout/ContentLayout/ContentPageKhoBG";
import ContentPagePhanPhoiDT from "../../layout/ContentLayout/ContentPhanPhoiDT";
import ContentPhanQuyenUser from "../../layout/ContentLayout/ContentPhanQuyenUser";
import HandelPagePQUser from "../../layout/ContentLayout/ContentPhanQuyenUser/HandelPagePQUSer";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import { IParams } from "../../types";

const BCDoanhThuPages = () => {
  const { page, control, tag, id }: IParams = useParams();

  const { Content } = Layout;
  const showContent = () => {
    switch (`${tag}`) {
      case "setting_create-user":
        return <HandelPagePQUser/>;
      case "setting_update-user":
        return <HandelPagePQUser/>;

      default:
        switch (`${control}`) {
          case "phanquyen-user":
            return <ContentPhanQuyenUser />;

          default:
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

export default BCDoanhThuPages;
