import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";
import "./styles.scss";

import TabDSUsers from "../../../layout/Tab/TabDSUsers";
import TabRoleUser from "../../../layout/Tab/TabRoleUser";

const TabPagePQUSer = () => {
  const history = useHistory();
  const { page, control, tag, id }: IParams = useParams();
  const path = history.location.pathname;

  const items: TabsProps["items"] = [
    {
      key: "ds-user",
      label: `Danh sách người dùng`,
      children: <TabDSUsers />,
      className: "tab-hp",
    },
    {
      key: "role-user",
      label: `Vai trò người dùng`,
      children: <TabRoleUser />,
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

  return (
    <Tabs
    className="TabBar_Page"
      defaultActiveKey="1"
      items={items}
      type="card"
      // onChange={onChange}
    />
  );
};

export default TabPagePQUSer;
