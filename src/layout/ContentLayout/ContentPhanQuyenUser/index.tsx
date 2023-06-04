import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";

import CtrPQUser from "../../ControllerPageLayout/CtrPhanQuyenUser";

const ContentPhanQuyenUser = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenHD: string;
    nguoiUyQuyen: string;
    soBHUQ: string;
    doanhThu: string;
    phiHanhChinh: string;
    mucNB: string;
    ngayDoiSoat: string;

  }


  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Hợp đồng ủy quyền",
      dataIndex: "tenHD",
      key: "tenHD",
    },
  
    {
      title: "Người ủy quyền",
      dataIndex: "nguoiUyQuyen",
      key: "nguoiUyQuyen",
    },

    {
      title: "Số bài hát ủy quyền",
      dataIndex: "soBHUQ",
      key: "soBHUQ",
    },
    {
      title: "Doanh thu (VNĐ) ",
      dataIndex: "doanhThu",
      key: "doanhThu",
    },
    {
      title: "Hành chính phí (VNĐ)",
      dataIndex: "phiHanhChinh",
      key: "phiHanhChinh",
    },
    {
      title: "Mức nhuận bút (VNĐ)",
      dataIndex: "mucNB",
      key: "mucNB",
    },
    {
      title: "Ngày chốt đối soát",
      dataIndex: "ngayDoiSoat",
      key: "ngayDoiSoat",
    },
    {
      key: "actionCT",
      title: "Chi tiết doanh thu",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiet-doanhThu/${record.key}}`}>Xem Chi tiết</Link>
        </Space>
      ),
    },
  ];


  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenHD: 'UQ789',
    nguoiUyQuyen: 'Vương Anh Tú' ,

    soBHUQ:'15',
    doanhThu: '365.000.000',
    phiHanhChinh:'365.000.000',
    mucNB: '365.000.000',
    ngayDoiSoat: '21/07/2021'
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách người dùng" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
         <CtrPQUser/>
       
        </div>
      </div>
    </div>
  );
};

export default ContentPhanQuyenUser;
