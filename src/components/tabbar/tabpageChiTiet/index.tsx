import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";
import TabHDUyQuyen from "../../../layout/Tab/TabHDUyQuyen";
import TabHDKhaiThac from "../../../layout/Tab/TabHDKhaiThac";
import './styles.scss'
import TabThongTinHD from "../../../layout/Tab/TabThongTinHD";
import TabTPUyQuyen from "../../../layout/Tab/TabTPUyQuyen";



const TabPageChiTiet = () => {
  const history = useHistory();
  const { page, control, tag, id }: IParams = useParams();
  const path = history.location.pathname;


  const items: TabsProps["items"] = [
    {
      key: "thongtin-hopdong",
      label: `Thông tin hợp đồng`,
      children: <TabThongTinHD/>,
      className: "tab-hp"
    },
    {
      key: "tacpham_uyquyen",
      label: `Tác phẩm ủy quyền`,
      children: <TabTPUyQuyen/>,
    },
  
  ];

  // const onChange = (key: string) => {
  //   if (tab && path.indexOf(tab) !== -1) {
  //     let pathslice = path.slice(0, path.indexOf(`/${tab}`));

  //     history.replace(`${pathslice}/${key}`);
  //   } else {
  //     history.replace(`${path}/${key}`);
  //   }
  // };

  return <Tabs 
  className="TabBar_Page"
  defaultActiveKey="1" 
  items={items} 
  type= "card" 
  // onChange={onChange} 
  />;
};

export default TabPageChiTiet;