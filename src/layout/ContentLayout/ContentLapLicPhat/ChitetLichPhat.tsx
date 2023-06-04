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
import { Link, useHistory, useParams } from "react-router-dom";
import { IParams } from "../../../types";

const ContentChiTietLichPhat = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const { tag }: IParams = useParams();
  const tenLich = tag?.slice(tag.indexOf("_") + 1);

  interface DataType {
    key: number;
    tenPlaylist: string;
    ngayPhat: string;
    timePhat: Array<string>;
    chuKy: Array<string>;
    thietBi: Array<string>;
  }
  const columnsLapLichPhat: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên Playlist",
      dataIndex: "tenPlaylist",
      key: "tenPlaylist",
    },
    {
      title: "Ngày phát Playlist",
      dataIndex: "ngayPhat",
      key: "timePhat",
    },
    {
      title: "Bắt đầu - Kết thúc",
      dataIndex: "timePhat",
      key: "timePhat",
      render: (_, { timePhat }) => (
        <>
          <Space size="middle">
            <div className="TimePhat_List">
              {timePhat.map((item) => (
                <div className="TimePhat_List-item">
                  <span>{item}</span>
                 
                </div>
              ))}
            </div>
          </Space>
        </>
      ),
    },
    {
      key: "chuKy",
      dataIndex: "chuKy",
      title: "ChuKy",
      render: (_, { chuKy }) => (
        <>
          <Space size="middle">
            <div className="ThietBi_List">
            <ul>
              {chuKy.map((item) => (
              
                  <li>{item}</li>
            
          
              ))}
                  </ul>
            </div>
          </Space>
        </>
      ),
    },
    {
      key: "thietBi",
      dataIndex: "thietBi",
      title: "Thiết bị",
      render: (_, { thietBi }) => (
        <>
          <Space size="middle">
            <div className="ThietBi_List">
            <ul>
              {thietBi.map((item) => (
              
                  <li>{item}</li>
            
          
              ))}
                  </ul>
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
          src={require("../../../assets/image/action-icon/fi_edit.png")}
          width={32}
          alt="Chỉnh sửa lịch phát"
        />
      ),
      title: "Chỉnh sửa lịch phát",
      onClickItem: () => {},
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenPlaylist:'Top USUK 2021',
    ngayPhat:'22/05/2021 - 30/05/2021',
    timePhat:['06:00:00 - 08:00:00' , '13:00:00 - 15:00:00'],
    chuKy: ['Thứ 3 ' , 'Thứ 6'],
    thietBi: ['Thiết bị 1 ' ,' Thiết bị 2',' Thiết bị 3',' Thiết bị 4',' Thiết bị 5']
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title={`${tenLich}`} />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <TableDefault
            title="Danh sách Playlist"
            columns={columnsLapLichPhat}
            data={data}
          />
          <ActionsPages dataRender={actionsPageLapLichPhat} />
        </div>
      </div>
    </div>
  );
};

export default ContentChiTietLichPhat;
