import { Space, Switch } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ModalLyDoHuyHD from "../../../components/modal/modalLyDoHuyHD";
import TableDefault from "../../../components/table/tbdefault";
import CtrQLDSHopDong from "../../ControllerPageLayout/CtrQLDSHopDong";
import "./styles.scss";

interface DataType {
  key: number;
  tenNhomUser: string;
  soluong: string;
  role: string;
  mota: string;
  
}
const TabRoleUser = () => {
 
  const history = useHistory();
  const pathname = history.location.pathname;
  const handleLoadPageCreate = () => {
    history.push(`${pathname}/createhd`);
  };

  const actionsDSUser = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_users.png")}
          width={32}
        />
      ),
      title: "Thêm vai trò",
      onClickItem: ()=>{},
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên nhóm người dùng",
      dataIndex: "tenNhomUser",
      key: "tenNhomUser",
      width: '14%',
    },
    {
      title: "Số lượng người dùng",
      dataIndex: "soluong",
      key: "soluong",
      width: '14%', 
    },

    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      width: '12%',
    },
  
    {
      title: "Mô tả",
      dataIndex: "mota",
      key: "mota",
    },

 
    {
      key: "actionCN",
      width: '8%',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/capnhat-roleuser/${record.key}}`}>Cập nhật</Link>
        </Space>
      ),
    },
    {
      key: "action",
      width: '8%',
      render: (_, record) => (
        <Space size="middle">
          <a >Xóa</a>
        </Space>
      ),
    },
   
  ];
  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenNhomUser: 'Super Admin',
      soluong:'1',
      role:'System Admin',
      mota: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    });
  }

  return (
    <div className="TabHD-UyQuyen">
   

      <TableDefault columns={columns} data={data}/>
      {/* <TableDSHopDong handleOpenMDLDH={OpenModalLyDOHuy} /> */}
      <ActionsPages dataRender={actionsDSUser} />

 
    </div>
  );
};

export default TabRoleUser;
