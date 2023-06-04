import React, { useState } from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import type { ColumnsType } from "antd/es/table";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import TableDefault from "../../../components/table/tbdefault";
import TablePlayLits from "../../../components/table/tbPlaylist";
import CtrPlayList from "../../ControllerPageLayout/CtrPlayList";
import { Space, Switch } from "antd";
import { Link, useHistory } from "react-router-dom";
import TableSelection from "../../../components/table/tbSelecttions";

const ContentPageQLDonViSD = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenTK: string;
    soHD: string;
    admin: string;
    user : string;
    thietbi: string;
    ngayHenHan: string;
    trangThai: boolean;
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

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên tài khoản quản trị",
      dataIndex: "tenTK",
      key: "tenTK",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "soHD",
      key: "soHD",
    },

    {
      title: "Admin",
      dataIndex: "admin",
      key: "admin",
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Thiết bị được chỉ định",
      dataIndex: "thietbi",
      key: "thietbi",
    },
    {
      title: "Ngày Hết Hạn",
      dataIndex: "ngayHenHan",
      key: "ngayHenHan",
    },
    {
      key: "actionHuy",
      render: (_, {trangThai}) => (
        <>
          <Space size="middle">
            <div>
              <Switch defaultChecked={trangThai} style={{marginRight:12}}/>
              {trangThai ===true? "Đang kích hoạt" : "Ngừng kích hoạt"}
            </div>
          </Space>
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${pathname}/chitiet-dvsd/${record.key}_${record.tenTK}`}>Xem Chi tiết</Link>
        </Space>
      ),
    },
   
  ];
  const actionsPageDVSD= [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt="Xóa"
        />
      ),
      title: "Xóa",
      onClickItem: () => {},
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
     
    tenTK:'Cty TNHH TM DV ABCEDEF',
    soHD: 'HD123',
    admin: 'Admin 1',
    user : '21',
    thietbi:'15',
    ngayHenHan:'21/04/2021',
    trangThai: i>2 ? false : true
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách đơn vị sử dụng" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <SearchComponent textHint={"Tên khoản giá trị, số hợp đồng,..."} width={517}/>
          <TableSelection
            openTBEdit={true}
            rowSelection ={rowSelection}
            columns={columns}
            data={data}
          />
          <ActionsPages dataRender={actionsPageDVSD} />
        </div>
      </div>
    </div>
  );
};

export default ContentPageQLDonViSD;
