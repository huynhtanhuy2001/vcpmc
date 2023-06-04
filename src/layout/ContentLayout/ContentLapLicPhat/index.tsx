import React from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import TableDefault from "../../../components/table/tbdefault";
import TablePlayLits from "../../../components/table/tbPlaylist";
import CtrPlayList from "../../ControllerPageLayout/CtrPlayList";
import { Space } from "antd";
import { Link, useHistory } from "react-router-dom";

const ContentPageLapLichPhat = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenLich: string;
    timePhat: string
  }
  const columnsLapLichPhat: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên lịch",
      dataIndex: "tenLich",
      key: "tenLich",
    },
    {
      title: "Thời gian phát",
      dataIndex: "timePhat",
      key: "timePhat",
    },
 
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitietlichphat/${record.key}_${record.tenLich}`}>Xem Chi tiết</Link>
        </Space>
      ),
    },
    {
      key: "actionHuy",
      render: (_, {}) => (
        <>
    
            <Space size="middle" >
              <div>
              <a 
              >Xóa</a>
              </div>
             
            </Space>
          
        </>
      ),
    },
  ];
  const actionsPageLapLichPhat = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/addplaylist.png")}
          width={32}
          alt="Thêm lịch phát"
        />
      ),
      title: "Thêm lịch phát",
      onClickItem: () => {},
    },
  ];



  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenLich:'Lịch phát số ' + i,
      timePhat: '22/05/2021 - 30/05/2021'
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách lịch phát" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
            <TableDefault columns={columnsLapLichPhat} data={data}/>
          <ActionsPages dataRender={actionsPageLapLichPhat} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageLapLichPhat;
