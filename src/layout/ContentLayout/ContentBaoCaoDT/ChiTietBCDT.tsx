import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import ModalConfirmDoanhThu from "../../../components/modal/modalConfirmDT";
import TableDefault from "../../../components/table/tbdefault";
import { IParams } from "../../../types";
import CtrBCDoanhThu from "../../ControllerPageLayout/CtrBaoCaoDoanhThu";

const ChiTietBaoCaoDT = () => {
  const [openModalDT, setOpenModalDT] = useState(false);
  const history = useHistory()
  const pathname = history.location.pathname


  const { page, control, tag, id, action }: IParams = useParams();
  const linkpagechitietDoanhthu = `/${page}/${control}/dt-chitiet_doanhthu`;
  const linkpagelsDb = `/${page}/${control}/dt-lichsu_dongbotb`;
  const handleOpenModalDT = ()=>{
    setOpenModalDT(true)
  }
  const handleCanCelModalDT = ()=>{
    setOpenModalDT(false)
  }
  interface DataType {
    key: number;
    soHD: string;
    donViKT: string;
    hanHD: string;
    loaiHD: string;
    soTB: string;
    tongSLP: string;
    ngayDSoat: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "soHD",
      key: "soHD",
    },

    {
      title: "Đơn vị khai thác",
      dataIndex: "donViKT",
      key: "donViKT",
      width: "15%",
    },

    {
      title: "Thời hạn hợp đồng",
      dataIndex: "hanHD",
      key: "hanHD",
      width: "15%",
    },
    {
      title: "Loại hợp đồng",
      dataIndex: "loaiHD",
      key: "loaiHD",
    },
    {
      title: "Số thiết bị đã đồng bộ",
      dataIndex: "soTB",
      key: "soTB",
    },
    {
      title: "Tổng số lượt phát",
      dataIndex: "tongSLP",
      key: "tongSLP",
    },
    {
      title: "Ngày chốt đối soát",
      dataIndex: "ngayDSoat",
      key: "ngayDSoat",
    },
    {
      key: "actionCN",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${linkpagechitietDoanhthu}/${record.key}_${record.soHD}`}>Chi tiết doanh thu</Link>
        
        </Space>
      ),
      width: "15%",
    },
    {
      key: "actionCT",
      render: (_, record) => (
        <Space size="middle">
         
          <Link to={`${linkpagelsDb}/${record.key}_${record.soHD}`}>Lịch sử đồng bộ trên thiết bị</Link>
        </Space>
      ),
      width: "15%",
    },
  ];
  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      soHD: "HD123" + 1,
      donViKT: "CTY TNHH MTV XYZ",
      hanHD: "01/04/2021 - 09/02/2025",
      loaiHD: "Trọn gói",
      soTB: "8/8",
      tongSLP: "321.000",
      ngayDSoat: "22/04/2021",
    });
  }

  const actionsPageCTBC = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/filecheck-alt.png")}
          width={32}
          alt="Chốt doanh thu"
        />
      ),
      title: "Chốt doanh thu",
      onClickItem: handleOpenModalDT,
    },
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
      <ContentTitle title={"Doanh thu theo hợp đồng khai thác"} />
      <div className="Content-body">
        <div className="Content-body_PageChiTietBC">
          <CtrBCDoanhThu />
          <TableDefault data={data} columns={columns} />
        </div>
        <ActionsPages dataRender={actionsPageCTBC} />
        <ModalConfirmDoanhThu title="Chốt doanh thu" isOpenModal={openModalDT} isCancel={handleCanCelModalDT}/>
      </div>
    </div>
  );
};

export default ChiTietBaoCaoDT;
