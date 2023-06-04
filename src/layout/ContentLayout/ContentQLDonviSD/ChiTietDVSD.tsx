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
import { Link, useHistory, useParams } from "react-router-dom";
import TableSelection from "../../../components/table/tbSelecttions";
import { IParams } from "../../../types";

const ContentChiTietDonViSD = () => {
  const history = useHistory();
  const { page, control, tag, id, action }: IParams = useParams();
  const linkpagechitietuser = `/${page}/${control}/dvsd-chitiet_user`;
  const tenDvsd = id?.slice(id.indexOf("_") + 1);
  const pathname = history.location.pathname;
  interface DataType {
    key: number;
    tenUser: string;
    role: string;
    email: string;
    tenDN: string;
    lastUpdate: string;
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
      title: "Tên người dùng",
      dataIndex: "tenUser",
      key: "tenUser",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Tên đăng nhập",
      dataIndex: "tenDN",
      key: "tenDN",
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Cập nhật lần cuối",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
    },

    {
      key: "actionHuy",
      render: (_, { trangThai }) => (
        <>
          <Space size="middle">
            <div>
              <Switch defaultChecked={trangThai} style={{ marginRight: 12 }} />
              {trangThai === true ? "Đang kích hoạt" : "Ngừng kích hoạt"}
            </div>
          </Space>
        </>
      ),
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${linkpagechitietuser}/${record.key}}`}>
            Xem Chi tiết
          </Link>
        </Space>
      ),
    },
  ];

  const handleAddUser2DVSD = () => {
    const actionpath = `/${page}/${control}/dvsd-add_user/${id}`;
    history.push(actionpath);
    console.log();
  };
  const actionsPageDVSD = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/Add.png")}
          width={32}
          alt="Thêm người dùng"
        />
      ),
      title: "Thêm người dùng",
      onClickItem: handleAddUser2DVSD,
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/trash-alt.png")}
          width={32}
          alt="Xóa"
        />
      ),
      title: "Xóa",
      onClickItem: () => {},
    },
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_users.png")}
          width={32}
          alt="Vai trò"
        />
      ),
      title: "Vai trò",
      onClickItem: () => {},
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,

      tenUser: "Nguyen Van A",
      role: "QC",
      email: "nguyenvanb@gmail.com",
      tenDN: "nguyenvanb",
      lastUpdate: "21/04/2021",
      trangThai: i > 2 ? false : true,
    });
  }
  return (
    <div className="Content-App">
      <ContentTitle title={`Đơn vị sử dụng - ${tenDvsd}`} />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <SearchComponent
            textHint={"Tên khoản giá trị, số hợp đồng,..."}
            width={517}
          />
          <TableSelection
            openTBEdit={true}
            rowSelection={rowSelection}
            columns={columns}
            data={data}
          />
          <ActionsPages dataRender={actionsPageDVSD} />
        </div>
      </div>
    </div>
  );
};

export default ContentChiTietDonViSD;
