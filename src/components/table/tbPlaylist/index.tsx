/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataTypePlayList, IParams } from "../../../types";
import CardListItemBanGhi from "../../card/cardKhoBG";
import { DataTypeKhobG } from "../../../types";
import CardListItemPlaylist from "../../card/cardPlaylist";

const TablePlayLits: React.FC<{}> = (props) => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { control, tag }: IParams = useParams();
  const columns: ColumnsType<DataTypePlayList> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Số bản ghi",
      dataIndex: "soBG",
      key: "soBG",
    },
    {
      title: "Thời lượng",
      dataIndex: "thoiLuong",
      key: "thoiLuong",
    },
    {
      title: "Chủ đề",
      dataIndex: "chuDe",
      key: "chuDe",
      render: (_, { chuDe }) => (
        <Space size="middle">
          {chuDe.map((item, inđex) => {
            return (
              <>
                <div className="Item-CD">
                  <p>{item}</p>
                </div>
              </>
            );
          })}
        </Space>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
      key: "ngayTao",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
    },

    // {
    //   title: "Thời hạn sử dụng",
    //   key: " hieuLuc",
    //   dataIndex: " hieuLuc",
    //   render: (_, { hieuLuc, ngayHetHan }) => (
    //     <>
    //       {/* 1 => mới
    //         2=> Còn thời hạn
    //         3=> hết hạn
    //         0 => hủy
    //     */}
    //       {hieuLuc === 1 ? (
    //         <div className="Item-HLuc">
    //           <div className="Item-HLuc_Group">
    //             <img
    //               src={require("../../../assets/image/status-icon/Egreen.png")}
    //             />
    //             <p>Mới</p>
    //           </div>
    //           <div className="Item-HLuc_Sub">
    //             <p>{ngayHetHan}</p>
    //           </div>
    //         </div>
    //       ) : hieuLuc === 2 ? (
    //         <div className="Item-HLuc">
    //           <div className="Item-HLuc_Group">
    //             <img
    //               src={require("../../../assets/image/status-icon/Eblue.png")}
    //             />
    //             <p>Còn thời hạn</p>
    //           </div>
    //           <div className="Item-HLuc_Sub">
    //             <p>{ngayHetHan}</p>
    //           </div>
    //         </div>
    //       ) : hieuLuc === 3 ? (
    //         <div className="Item-HLuc">
    //           <div className="Item-HLuc_Group">
    //             <img
    //               src={require("../../../assets/image/status-icon/ENot.png")}
    //             />
    //             <p>Đã hết hạn</p>
    //           </div>
    //           <div className="Item-HLuc_Sub">
    //             <p>{ngayHetHan}</p>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="Item-HLuc">
    //           <div className="Item-HLuc_Group">
    //             <img
    //               src={require("../../../assets/image/status-icon/Ered.png")}
    //             />
    //             <p>Đã hủy</p>
    //           </div>
    //           <div className="Item-HLuc_Sub">
    //             <p>{ngayHetHan}</p>
    //           </div>
    //         </div>
    //       )}
    //     </>
    //   ),
    // },
    {
      key: "actionCT",
      render: (_, record) =>
        tag === "pheduyet" ? (
          ""
        ) : (
          <Space size="middle">
            <Link to={`${pathname}/chitietplaylist/${record.key}_${record.title}`}>Chi tiết</Link>
          </Space>
        ),
    },
  ];
  
  const data: DataTypePlayList[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      title: "Top ca khúc 2021",
      soBG: "20",
      thoiLuong: "01:04:27",
      chuDe: ["Pop", "Chill"],
      ngayTao: "22/10/2020",
      nguoiTao: "Cindy Cường",
    });
  }

  return (
    <div className="Table-LayList">
      {control === "grid" ? (
        <CardListItemPlaylist data={data} />
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

export default TablePlayLits;
