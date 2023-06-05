/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import type { MenuProps } from "antd";
import { MenuFoldOutlined, RightOutlined } from "@ant-design/icons";
import "./styles.scss";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,

  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/Banghiicon.png")} />

        <span>Kho bản ghi</span>
      </div>
    </>,
    "/khobanghi/list"
  ),
  //play list
  getItem(
    <>
      <div className="menu-item">
        <img
          src={require("../../../assets/image/menu-icon/Playlisticon.png")}
        />
        <span>Playlist</span>
      </div>
    </>,
    "/playlist/list"
  ),
  //lap lich phat
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/calendar.png")} />

        <span>Lập lịch phát</span>
      </div>
    </>,
    "/laplichphat"
  ),
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/hopdongicon.png")} />

        <span>Quản lý</span>
      </div>
    </>,
    "/quanly",
    [
      getItem("Quản lý hợp đồng", "/quanly/ql-hopdong"),
      getItem("Quản lý thiết bị", "/quanly/ql-thietbi"),
      getItem("Đơn vị ủy quyền", "/quanly/donviuyquyen"),
      getItem("Đơn vị sử dụng", "/quanly/donvisudung"),
    ]
  ),
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/baocaoicon.png")} />

        <span>Doanh thu</span>
      </div>
    </>,
    "/doanhthu",
    [
      getItem("Báo cáo doanh thu", "/doanhthu/baocaodt"),
      getItem("Lịch sử đổi soát", "/doanhthu/lichsu-doisoat"),
      getItem("Phân phối doanh thu", "/doanhthu/phanphoidt"),
    ]
  ),
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/Settingicon.png")} />

        <span>Cài đặt</span>
      </div>
    </>,
    "/setting",
    [
      getItem("Phân quyền người dùng", "/setting/phanquyen-user"),
      getItem("Cấu hình", "/setting/cauhinh"),
      getItem("Quản lý hợp đồng", "/setting/ql_hopdong"),
      getItem("Thông tin tác phẩm", "/setting/thongtin_tacpham"),
      getItem("Chu kỳ đổi soát", "/setting/chuky_doisoat"),
    ]
  ),

  //Hỗ Trợ
  getItem(
    <>
      <div className="menu-item">
        <img src={require("../../../assets/image/menu-icon/Support.png")} />

        <div className="menu-item-title">Hổ trợ</div>
      </div>
    </>,
    "/support",
    [
      getItem("Hướng dẫn sử dụng", "/support/HDSD"),
      getItem("Tải app", "/support/dowload-app"),
      getItem("Feedback", "/support/feedback"),
    ]
  ),

  // getItem("Navigation Three", "sub4", [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Option 11", "11"),
  //   getItem("Option 12", "12"),
  // ]),
];

const SiderMenu = () => {
  const history = useHistory();
  const { page, control }: IParams = useParams();

  const onClickItem: MenuProps["onClick"] = e => {
    history.push(e.key);
  };

  const keySelect = control ? `/${page}/${control}` : `/${page}`;

  // const [shouldRenderIcon, setShouldRenderIcon] = useState(false);
  // useEffect(() => {
  //   setShouldRenderIcon(keySelect === "/laplichphat");
  // }, [keySelect]);

  // const siderContent = shouldRenderIcon ? (
  //   <div style={{ width: "40px" }} className="icon">
  //     <MenuFoldOutlined style={{ color: "white" }} />
  //   </div>
  // ) : (
  //   <>
  //     <div className="logo">
  //       <Avatar
  //         size={96}
  //         icon={<img src={require("../../../assets/image/logo.png")} />}
  //       />
  //     </div>
  //     <Menu
  //       onClick={onClickItem}
  //       selectedKeys={[keySelect]}
  //       style={{
  //         width: 170,
  //         height: 1080,
  //         backgroundColor: "#020220",
  //         color: "#ffff",
  //       }}
  //       mode="vertical"
  //       items={items}
  //     />
  //   </>
  // );
  // return (
  //   <Sider trigger={null} collapsible>
  //     {siderContent}
  //   </Sider>
  // );
  return (
    <Sider trigger={null} collapsible>
      <div className="logo">
        <Avatar
          size={96}
          icon={<img src={require("../../../assets/image/logo.png")} />}
        />
      </div>
      <Menu
        onClick={onClickItem}
        selectedKeys={[keySelect]}
        style={{
          width: 170,
          height: 1080,
          backgroundColor: "#020220",
          color: "#ffff",
        }}
        mode="vertical"
        items={items}
      />
    
    </Sider>
  );
};

export default SiderMenu;
