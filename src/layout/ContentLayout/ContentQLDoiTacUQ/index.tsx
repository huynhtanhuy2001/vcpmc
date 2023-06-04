import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import TableDefault from "../../../components/table/tbdefault";
import TablePlayLits from "../../../components/table/tbPlaylist";
import CtrPlayList from "../../ControllerPageLayout/CtrPlayList";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";
import TableSelection from "../../../components/table/tbSelecttions";

const ContentPageQLDoitacUQ = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenDT: string;
    tenDN: string;
    email: string;
    ngayHenHan: string;
    sdt: string;  
    trangThai: boolean
  }


  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên đối tác",
      dataIndex: "tenDT",
      key: "tenDT",
    },
  

    {
      title: "Tên đăng nhập",
      dataIndex: "tenDN",
      key: "tenDN",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ngày Hết Hạn",
      dataIndex: "ngayHenHan",
      key: "ngayHenHan",
    },
    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt",
    },
  
    {
      key: "actionTT",
      render: (_, {trangThai}) => (
        <>
          <Space size="middle">
            <div>
              <Switch defaultChecked={trangThai}/>
            </div>
          </Space>
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/capnhat-doitac/${record.key}}`}>Cập nhật</Link>
        </Space>
      ),
    },
   
  ];
 

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenDT: 'Amy Ngọc',
      tenDN:'phm_L@gmail.com',
      email:'phm_L@gmail.com',
      ngayHenHan:'21/04/2021',
      sdt: '021 593 1214' ,
     
    trangThai: i>2 ? false : true
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Đối tác ủy quyền" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <SearchComponent textHint={"Họ tên, tên đăng nhập, email..."} width={517}/>
         <TableDefault columns={columns}  data={data}/>
        </div>
      </div>
    </div>
  );
};

export default ContentPageQLDoitacUQ;
