import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";
import TabHDUyQuyen from "../../../layout/Tab/TabHDUyQuyen";
import TabHDKhaiThac from "../../../layout/Tab/TabHDKhaiThac";
import './styles.scss'
import Item from "antd/es/list/Item";


const TabPageQl = () => {
  const history = useHistory();
  const { page, control, tag, id }: IParams = useParams();
  const path = history.location.pathname;


  const items: TabsProps["items"] = [
    {
      key: "hp-uyquyen",
      label: `Hợp đồng ủy quyền`,
      children: <TabHDUyQuyen/>,
      className: "tab-hp"
    },
    {
      key: "hd-khaithac",
      label: `Hợp đồng khai thác`,
      children: <TabHDKhaiThac/>,
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

export default TabPageQl;
