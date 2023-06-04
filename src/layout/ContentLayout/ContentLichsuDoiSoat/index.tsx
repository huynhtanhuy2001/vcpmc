import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";
import TableDefault from "../../../components/table/tbdefault";
import CtrLichSuDoiSoat from "../../ControllerPageLayout/CtrLichSuDoiSoat";

const ContentPageLichsuDoiSoat = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    soHD: string;
    donViKT: string;
    hanHD: string;
    loaiHD: string;
    tongLuotPhat: string;
    tongDoanhThu: string;
    chuaPP: string;
    ngayDoiSoat:string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "soHD",
      key: "soHD",
    },

    {
      title: "Đơn vị khai thác",
      dataIndex: "donViKT",
      key: "donViKT",
    },

    {
      title: "Thời hạn hợp đồng",
      dataIndex: "hanHD",
      key: "hanHD",
    },
    {
      title: "Loại hợp đồng ",
      dataIndex: "loaiHD",
      key: "loaiHD",
    },
    {
      title: "Tổng lượt phát",
      dataIndex: "tongLuotPhat",
      key: "tongLuotPhat",
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "tongDoanhThu",
      key: "tongDoanhThu",
    },
    {
      title: "Doanh thu chưa phân phối",
      dataIndex: "chuaPP",
      key: "chuaPP",
    },
    {
      title: "Ngày chốt đối soát",
      dataIndex: "ngayDoiSoat",
      key: "ngayDoiSoat",
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiet-doisoatdt/${record.key}_${record.soHD}`}>Xem Chi tiết</Link>
        </Space>
      ),
    },

  ];
  const actionsPagePPDT = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/file-export.png")}
          width={32}
          alt="Xuất file"
        />
      ),
      title: "Xuất file",
      onClickItem: () => {},
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      soHD: 'HĐ123',
    donViKT: 'Cty TNHH TM DV ABCEDEF',
    hanHD: '10/07/2020 - 10/07/2021 ',
    loaiHD: 'Trọn gói',
    tongLuotPhat: '365',
    tongDoanhThu: '365.000.000',
    chuaPP: '1.000.000',
    ngayDoiSoat:'10/07/2021',
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Lịch sử đối soát doanh thu" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <CtrLichSuDoiSoat/>
          <TableDefault data={data} columns={columns} />
          <ActionsPages dataRender={actionsPagePPDT} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageLichsuDoiSoat;
