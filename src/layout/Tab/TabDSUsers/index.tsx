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
  hoTen: string;
  tenDN: string;
  role: string;
  trangThai: boolean;
  email:string;
  sdt: string;
  ngayHetHan: string;
}
const TabDSUsers = () => {
 
  const history = useHistory();
  const pathname = history.location.pathname;
  const handleLoadPageCreate = () => {
    history.push(`${pathname}/setting_create-user`);
  };

  const actionsDSUser = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/user-plus.png")}
          width={32}
        />
      ),
      title: "Thêm người dùng",
      onClickItem: handleLoadPageCreate,
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Tên đăng nhập",
      dataIndex: "tenDN",
      key: "tenDN",
    },

    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      key: "trangThai",
      title:"Trạng thái",
      render: (_, {trangThai}) => (
        <>
          <Space size="middle">
            <div>
              <Switch defaultChecked={trangThai} style={{marginRight:12}}/>
              {trangThai ===true? "Đang kích hoạt" : "Ngừng kích hoạt"}
            </div>
          </Space>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt",
    },
    {
      title: "Ngày Hết Hạn",
      dataIndex: "ngayHetHan",
      key: "ngayHetHan",
    },
 
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/setting_update-user/${record.key}}`}>Chỉnh sửa</Link>
        </Space>
      ),
    },
   
  ];
  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      hoTen: 'Phan Mạnh Quỳnh',
      tenDN:'PMQ_01',
      role: 'Group Admin',
      trangThai: i>4 ? true : false,
      email:'pmq@gmail.com',
      sdt: '029 8131 6743',
      ngayHetHan:'02/12/2022'
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

export default TabDSUsers;
