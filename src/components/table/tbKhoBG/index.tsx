/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IParams } from "../../../types";
import CardListItemBanGhi from "../../card/cardKhoBG";
import { DataTypeKhobG } from "../../../types";

const TableKhoBG: React.FC<{}> = (props) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { control, tag }: IParams = useParams();
  const columns: ColumnsType<DataTypeKhobG> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "tenBG",
      key: "tenBG",
    },
    {
      title: "Mã ISRC",
      dataIndex: "maISRC",
      key: "maISRC",
    },
    {
      title: "Thời lượng",
      dataIndex: "thoiLuong",
      key: "thoiLuong",
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
      title: "Thể loại",
      dataIndex: "theLoai",
      key: "theLoai",
    },
    {
      title: "Định dạng",
      dataIndex: "dinhDang",
      key: "dinhDang",
    },
    {
      title: "Thời hạn sử dụng",
      key: " hieuLuc",
      dataIndex: " hieuLuc",
      render: (_, { hieuLuc, ngayHetHan }) => (
        <>
          {/* 1 => mới
            2=> Còn thời hạn
            3=> hết hạn
            0 => hủy
        */}
          {hieuLuc === 1 ? (
            <div className="Item-HLuc">
              <div className="Item-HLuc_Group">
                <img
                  src={require("../../../assets/image/status-icon/Egreen.png")}
                />
                <p>Mới</p>
              </div>
              <div className="Item-HLuc_Sub">
                <p>{ngayHetHan}</p>
              </div>
            </div>
          ) : hieuLuc === 2 ? (
            <div className="Item-HLuc">
              <div className="Item-HLuc_Group">
                <img
                  src={require("../../../assets/image/status-icon/Eblue.png")}
                />
                <p>Còn thời hạn</p>
              </div>
              <div className="Item-HLuc_Sub">
                <p>{ngayHetHan}</p>
              </div>
            </div>
          ) : hieuLuc === 3 ? (
            <div className="Item-HLuc">
              <div className="Item-HLuc_Group">
                <img
                  src={require("../../../assets/image/status-icon/ENot.png")}
                />
                <p>Đã hết hạn</p>
              </div>
              <div className="Item-HLuc_Sub">
                <p>{ngayHetHan}</p>
              </div>
            </div>
          ) : (
            <div className="Item-HLuc">
              <div className="Item-HLuc_Group">
                <img
                  src={require("../../../assets/image/status-icon/Ered.png")}
                />
                <p>Đã hủy</p>
              </div>
              <div className="Item-HLuc_Sub">
                <p>{ngayHetHan}</p>
              </div>
            </div>
          )}
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) =>
        tag === "pheduyet" ? (
          ""
        ) : (
          <Space size="middle">
            <Link to={`${pathname}/capnhatbg/${record.key}_${record.tenBG}`}>
              Cập nhật
            </Link>
          </Space>
        ),
    },
    {
      key: "actionHuy",
      render: (_, { hieuLuc }) => (
        <>
          <Space
            size="middle"
            // onClick={()=>handleOpenMD({soHD, lydoHuy})}
          >
            <div>
              <a>Nghe</a>
            </div>
          </Space>
        </>
      ),
    },
  ];

  // const handleOpenMD =(Value: object) =>{
  // props.handleOpenMDLDH(Value)

  // }
  const data: DataTypeKhobG[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenBG: "Mất em ",
      maISRC: "KRA40105463" + i,
      thoiLuong: "04:27",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      theLoai: "Ballad",
      dinhDang: "Audio",
      hieuLuc: i > 3 ? 0 : i,
      ngayHetHan: "02/10/2019",
      soHD: "HD40105463" + i,
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="Table-KhoBG">
      {control === "grid" ? (
        <CardListItemBanGhi data={data} />
      ) : tag === "pheduyet" || control=== "pheduyet" ? (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 13 }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 13 }}
        />
      )}
    </div>
  );
};

export default TableKhoBG;
