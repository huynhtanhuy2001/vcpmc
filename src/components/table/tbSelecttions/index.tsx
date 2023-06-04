/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

interface DataType {
  key: number;
  nameBG: string;
  phongcachBG: string;
  typeBG: string;
  timeBG: string;
  ISRC: string;
  casi: string;
  tacgia: string;
  ngayTai: string;
  status: number;
}

const TableSelection: React.FC<{
  openTBEdit: boolean;
  rowSelection: any;
  columns: ColumnsType<any>;
  data: any[];
  sizeTb?: number;
  heightTb? :number;
}> = (props) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const history = useHistory();
  const pathname = history.location.pathname;
  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameBG",
      key: "nameBG",
      render: (_, record) => (
        <div className="RecordNameTPUQ">
          <div className="RecordNameTPUQ_Name">
            <p>{record.nameBG}</p>
          </div>
          <div className="RecordNameTPUQ_SubName">
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.phongcachBG}</span>
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.typeBG}</span>
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.timeBG}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mã ISRC",
      dataIndex: "ISRC",
      key: "ISRC",
    },
    {
      title: "Ca sĩ",
      dataIndex: "casi",
      key: "casi",
    },
    {
      title: "Tác giả",
      dataIndex: "tacgia",
      key: "tacgia",
    },
    {
      title: "Ngày Tải",
      dataIndex: "ngayTai",
      key: "ngayTai",
    },
    {
      title: "Tình Trang",
      key: "status",
      dataIndex: " status",
      render: (_, { status }) => (
        <>
          {/* 1 => mới
            2=> Còn thời hạn
            3=> hết hạn
            0 => hủy
        */}
          {status === 1 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Egreen.png")}
              />
              <p>Mới</p>
            </div>
          ) : status === 2 ? (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
              <p>Đã phê duyệt</p>
            </div>
          ) : (
            <div className="Item-HLuc">
              <img
                src={require("../../../assets/image/status-icon/Ered.png")}
              />
              <p>Bị từ chối</p>
            </div>
          )}
        </>
      ),
    },
    {
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Nghe</a>

          {/* <Link to={`${pathname}/chitiethd/${record.key}_${record.soHD}`}>Xem Chi tiết</Link> */}
        </Space>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      nameBG: "Gorgeous Wooden Bike",
      phongcachBG: "Ballad",
      typeBG: "Audio",
      timeBG: "3:12",
      ISRC: "VNA1423525",
      casi: "Vương Anh Tú",
      tacgia: "Vương Phong",
      ngayTai: "01/04/2021 15:53:13",
      status: i > 2 ? 0 : i,
    });
  }
  return (
    <div
      className="Table-Selection"
      style={{
        width: props.sizeTb ? props.sizeTb : "1534px",
        height: props.heightTb ? props.heightTb : "680px",
      }}
    >
      {props.openTBEdit ? (
        <Table
          columns={props.columns}
          dataSource={props.data}
          pagination={{ pageSize: 13 }}
          rowSelection={props.rowSelection}
        />
      ) : (
        <Table
          columns={props.columns}
          dataSource={props.data}
          pagination={{ pageSize: 13 }}
        />
      )}
    </div>
  );
};

export default TableSelection;
