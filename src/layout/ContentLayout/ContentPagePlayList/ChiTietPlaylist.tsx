import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FormCreatePlayList from "../../../components/form/FormCreatePlayList";
import TableDefault from "../../../components/table/tbdefault";
import { DataTypeBanGhi, IParams } from "../../../types";
import "./styles.scss";

const ChitietPlaylist = () => {
  const history = useHistory();
  const currentpath = history.location.pathname;
  const { id }: IParams = useParams();

  const nameplaylist = id?.slice(id.indexOf("_") + 1);

  const actionsCTPlayList = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
          alt="Chỉnh sửa"
        />
      ),
      title: "Chỉnh sửa",
      onClickItem: ()=>{},
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/trash-alt.png")}
          width={32}
          alt="Xóa Playlist"
        />
      ),
      title: "Xóa Playlist",
      onClickItem: ()=>{},
    },
  ];

  const columns: ColumnsType<DataTypeBanGhi> = [
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
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Nghe</a>
        </Space>
      ),
    },
    {
      key: "actionGo",
      render: (_, record) => (
        <Space size="middle">
          <a>Gỡ</a>
        </Space>
      ),
    },
  ];
  const data: DataTypeBanGhi[] = [];
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
    <div className="Content-App">
      <ContentTitle title={`Playlist ${nameplaylist}`} />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <div className="Content-body_PlaylistPage-Create">
            <FormCreatePlayList handle="chitiet" />
            <TableDefault
              columns={columns}
              data={data}
              sizeTb={1234}
              heightTb={680}
            />
          </div>

        
         

          <ActionsPages dataRender={actionsCTPlayList} />
        </div>
      </div>
    </div>
  );
};

export default ChitietPlaylist;
