import { ColumnsType } from "antd/es/table";
import React from "react";
import { useParams } from "react-router-dom";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import TableDefault from "../../../components/table/tbdefault";
import { IParams } from "../../../types";
import './styles.scss'

const ChiTietPPDoanhThu = () => {
  const { page, control, tag, id }: IParams = useParams();

  const keyPath = id?.slice(0, id.indexOf("_"));
  const sohd = id?.slice(id.indexOf("_") + 1);
  interface DataTypeBG {
    key: number;
    tenBH: string;
    soLuotPhat: string;
    doanhThu: string;
    phiHanhChinh: string;
    mucNB: string;
  }
  interface DataTypeDif {
    key: number;
    dvKhac: string;
    soLuotPhat: string;
    doanhThu: string;
  }

  const columnsBG: ColumnsType<DataTypeBG> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Bài hát",
      dataIndex: "tenBH",
      key: "tenBH",
    },

    {
      title: "Số lượt phát",
      dataIndex: "soLuotPhat",
      key: "soLuotPhat",
    },

    {
      title: "Doanh thu (VNĐ) ",
      dataIndex: "doanhThu",
      key: "doanhThu",
    },
    {
      title: "Hành chính phí (VNĐ)",
      dataIndex: "phiHanhChinh",
      key: "phiHanhChinh",
    },
    {
      title: "Mức nhuận bút (VNĐ)",
      dataIndex: "mucNB",
      key: "mucNB",
    },
  ];
  const columnsDif: ColumnsType<DataTypeDif> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Đơn vị khai thác",
      dataIndex: "dvKhac",
      key: "dvKhac",
    },

    {
      title: "Số lượt phát",
      dataIndex: "soLuotPhat",
      key: "soLuotPhat",
    },

    {
      title: "Doanh thu (VNĐ) ",
      dataIndex: "doanhThu",
      key: "doanhThu",
    },
  ];
  const dataBG: DataTypeBG[] = [];
  for (let i = 1; i < 50; i++) {
    dataBG.push({
      key: i,
      tenBH: "Hết thương cạn nhớ ",
      soLuotPhat: "1200",
      doanhThu: "365.000.000",
      phiHanhChinh: "365.000.000",
      mucNB: "365.000.000",
    });
  }
  const dataDif: DataTypeDif[] = [];
  for (let i = 1; i < 50; i++) {
    dataDif.push({
      key: i,
      dvKhac: "CTy TNHH A",
      soLuotPhat: "1200",
      doanhThu: "365.000.000",
    });
  }

  return (
    <div className="Content-App">
      <ContentTitle title={`Hợp đồng Ủy quyền ${sohd} - Quý 1`} />
      <div className="Content-body">
        <div className="ChiTietPPDoanhThu">
          <div className="ChiTietPPDoanhThu_Left">
            <div className="ChiTietPPDoanhThu-Title">
              <p>Danh sách bản ghi</p>
            </div>
            <SearchComponent width={442} textHint={"Nhập tên bài hát"} />
            <TableDefault data={dataBG} columns={columnsBG}  sizeTb ={1017}/>
          </div>

          <div className="ChiTietPPDoanhThu_Right">
            <div className="ChiTietPPDoanhThu-Title mb-4">
              <p>Danh sách bản ghi</p>
              <span className="ChiTietPPDoanhThu-SubTitle">
                Cuộc gọi nhỡ
              </span>
            </div>
            <TableDefault data={dataDif} columns={columnsDif}  sizeTb ={645}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietPPDoanhThu;
