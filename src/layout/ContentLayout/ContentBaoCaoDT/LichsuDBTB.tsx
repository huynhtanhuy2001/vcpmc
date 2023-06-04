import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TableDefault from "../../../components/table/tbdefault";
import "./styles.scss";

const LichsuDBTB = () => {
  interface DataTypeTB {
    key: number;
    tenTB: string;
    trangThai: number;
    timeDongBo: string;
    tongLP: string;
  }

  const columns: ColumnsType<DataTypeTB> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "tenTB",
      key: "tenTB",
    },
    {
      key: "actionHuy",
      render: (_, { trangThai }) => (
        <>
          <Space size="middle">
            <div>
              {trangThai === 1 ? (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Egreen.png")}
                    alt="hoạt động"
                  />
                  <p> Đang hoạt động </p>
                </div>
              ) : (
                <div className="Item-HLuc">
                  <img
                    src={require("../../../assets/image/status-icon/Ered.png")}
                    alt="Khóa"
                  />
                  <p>Không hoạt dộng</p>
                </div>
              )}
            </div>
          </Space>
        </>
      ),
    },
    {
      title: "Thời gian đồng bộ dữ liệu",
      dataIndex: "timeDongBo",
      key: "timeDongBo",
    },

    {
      title: "Tống số lượt phát",
      dataIndex: "tongLP",
      key: "tongLP",
    },
  ];
  const data: DataTypeTB[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenTB: "Device A12231",
      trangThai: i > 1 ? 0 : i,
      timeDongBo: "22/05/2021 22:15:00",
      tongLP: "70",
    });
  }



  interface DataTypeBH {
    key: number;
    dsBH: string;
    soLP: string
  }
  const columnsBH: ColumnsType<DataTypeBH> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Danh sách bài hát",
      dataIndex: "dsBH",
      key: "dsBH",
    },
  
    {
      title: "Số lượt phát",
      dataIndex: "soLP",
      key: "soLP",
    },

  ];
  const dataBH: DataTypeBH[] = [];
  for (let i = 1; i < 50; i++) {
    dataBH.push({
      key: i,
      dsBH: 'Dù ngay mai bão giông',
      soLP: '10'
    });
  }


  const actionsXuatfile = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/file-export.png")}
          width={32}
          alt="Xuất file"
        />
      ),
      title: "Xuất file",
      onClickItem: () => {},
    },
  ];

  return (
    <div className="Content-App">
      <ContentTitle title="Hợp đồng HD123 - Kỳ tháng 03/2021" />
      <div className="Content-body">
        <div className="Content-body_LichsuDBTBPage">
          <div className="Content-body_LichsuDBTBPage-Control">
            <h3>Danh sách thiết bị</h3>
            <SearchComponent textHint={"Nhập tên thiết bị"} width={500} />
            <div className="Content-body_LichsuDBTBPage-Control_wrap">
              <div className="Content-body_LichsuDBTBPage-Control_wrap-item">
                <label>Tổng thiết bị:</label>
                <span>8 thiết bị</span>
              </div>
              <div className="Content-body_LichsuDBTBPage-Control_wrap-item">
                <label>Tổng lượt phát:</label>
                <span>1784</span>
              </div>
            </div>
        
          </div>
          <div className="Content-body_LichsuDBTBPage-ListTable">
                <TableDefault columns={columns} data={data} sizeTb={917} heightTb={662}/>

                <TableDefault columns={columnsBH} data={dataBH} sizeTb={649} heightTb={662}/>
          </div>
        </div>
        <ActionsPages dataRender={actionsXuatfile}/>
      </div>
    </div>
  );
};

export default LichsuDBTB;
