import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FormCreatePlayList from "../../../components/form/FormCreatePlayList";
import TableDefault from "../../../components/table/tbdefault";
import { DataTypeBanGhi } from "../../../types";
import CtrPlayListAddBG from "../../ControllerPageLayout/CtrPlayList/CtrPlayListAddBG";
import CtrPlayListDSBG from "../../ControllerPageLayout/CtrPlayList/CtrPlayListDSBG";
import "./styles.scss";

const data: DataTypeBanGhi[] = [];
for (let i = 1; i < 3; i++) {
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
const AddBanGhi = () => {
  const [dataBGAdd, setdataBanGhi] = useState<DataTypeBanGhi[]>([]);
  const [datawait , SetDataWait ] = useState<DataTypeBanGhi[]>(data);

  const handelAddBanGhi = (banGhi: DataTypeBanGhi) => {
    setdataBanGhi(dataBGAdd.concat(banGhi));
    let datawaitNew = datawait.filter(it => it !== banGhi)
    SetDataWait(datawaitNew)

  };  
  const handelRemoveBanGhi = (banGhi: DataTypeBanGhi) => {
    SetDataWait(datawait.concat(banGhi));
    let dataadd = dataBGAdd.filter(it => it !== banGhi)
    setdataBanGhi(dataadd)

  }; 
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
        <Space size="middle" onClick={() => handelAddBanGhi(record)}>
          <a>Thêm</a>
        </Space>
      ),
    },
  ];
  const columnsActionBG: ColumnsType<DataTypeBanGhi> = [
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
        <Space size="middle" onClick={()=> handelRemoveBanGhi(record)}>
          <a>Gỡ</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="Content-App">
      <ContentTitle title="Thêm bản ghi " />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <div className="Content-body_PlaylistPage-AddBanGhi">
            <div className="Content-body_PlaylistPage-AddBanGhi_Left">
              <CtrPlayListAddBG />
              <TableDefault
                data={datawait}
                columns={columns}
                sizeTb={800}
                heightTb={450}
                pagesize={8}
              />
            </div>
            <div className="Content-body_PlaylistPage-AddBanGhi_Right">
              <CtrPlayListDSBG />
              <TableDefault
                data={dataBGAdd}
                columns={columnsActionBG}
                sizeTb={800}
                heightTb={450}
                pagesize={8}
              />
            </div>
          </div>
          <div className="btn-group">
            <Link to={"/khobanghi/list"}>
              <Button
                type="primary"
                danger
                ghost
                className="btn-default"
                // onClick={handleCancel}
              >
                Hủy
              </Button>
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-submit btn-default"
              // onClick={handleOpenModalSuccess}
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBanGhi;
