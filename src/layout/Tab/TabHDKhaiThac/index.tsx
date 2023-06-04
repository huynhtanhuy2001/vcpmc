import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import TableDefault from "../../../components/table/tbdefault";
import { useAppSelector } from "../../../redux/hooks";
import { DataTypeHDKhaiThac } from "../../../types";
import CtrlQLHDKhaiThac from "../../ControllerPageLayout/CtrlQLHDKhaiThac";
import "./styles.scss";
const TabHDKhaiThac = () => {
  const { dataHDKhaiThac } = useAppSelector((state) => state.hopDong);
  const history = useHistory();
  const pathname = history.location.pathname;
  const handleLoadPageCreate = () => {
    history.push(`${pathname}/create_hdkt`);
  };

  const actionsDSHDKhaiThac = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/Add.png")}
          width={32}
        />
      ),
      title: "Thêm hợp đồng",
      onClickItem: handleLoadPageCreate,
    },
  ];

  const columns: ColumnsType<DataTypeHDKhaiThac> = [
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
      title: "Khách hàng",
      dataIndex: "khachHang",
      key: "khachHang",
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },
    {
      title: "Ngày hiệu lực",
      dataIndex: "ngayHieuluc",
      key: "ngayHieuluc",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "ngayHetHan",
      key: "ngayHetHan",
    },
    {
      title: "Hiệu lực hợp đồng",
      key: " hieuLuc",
      dataIndex: " hieuLuc",
      render: (_, { hieuLuc }) => (
        <>
          {/* 1 => mới
          2=> Còn thời hạn
          3=> hết hạn
          0 => hủy
      */}
          {hieuLuc === 1 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Egreen.png")}
              />
              <p>Mới</p>
            </div>
          ) : hieuLuc === 2 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
              <p>Đang hiệu lực</p>
            </div>
          ) : hieuLuc === 3 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/ENot.png")}
              />
              <p>Hết hiệu lực</p>
            </div>
          ) : (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Ered.png")}
              />
              <p>Đã hủy</p>
            </div>
          )}
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiet_hdkt/${record.key}_${record.soHD}`}>
            Xem Chi tiết
          </Link>
        </Space>
      ),
    },
    {
      key: "actionHuy",
      render: (_, { hieuLuc }) => (
        <>
          <Space size="middle">
            <a>Sao chép hợp đồng</a>
          </Space>
        </>
      ),
    },
  ];
  // const data: DataTypeHDKhaiThac[] = [];
  // for (let i = 1; i < 50; i++) {
  //   data.push({
  //     key: i,
  //     soHD: "HD123" + i,
  //     khachHang: "Hợp đồng kinh doanh 1",
  //     ngayTao: "01/04/2021 15:53:13",
  //     ngayHieuluc: "02/12/2021",
  //     ngayHetHan: "02/12/2022",
  //     hieuLuc: i > 3 ? 0 : i,
  //   });
  // }

  return (
    <div className="TabHDKhaiThac">
      <CtrlQLHDKhaiThac />
      <TableDefault columns={columns} data={dataHDKhaiThac} />

      <ActionsPages dataRender={actionsDSHDKhaiThac} />
    </div>
  );
};

export default TabHDKhaiThac;
