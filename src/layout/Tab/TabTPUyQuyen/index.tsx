import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { MouseEventHandler, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import TabTacPhamEFooter from "../../../components/footer/tabTacPhamEditFooter";
import ModalActionHuy from "../../../components/modal/modalActionhuy";
import ModalActionThemBanGhi from "../../../components/modal/modalThemBanGhi";
import TableSelection from "../../../components/table/tbSelecttions";
import { DataTypeBanGhi, IParams } from "../../../types";
import CtrlTabTacPhamUYQuyen from "../../ControllerPageLayout/CtrlTabTacPhamUYQuyen";
import "./styles.scss";



const TabTPUyQuyen = () => {
  const [openEdit, SetOpenEdit] = useState(false);
  const [openModalTCBG, SetOpenModalTCBG] = useState(false);
  const [openModalThemBG, SetOpenThemBG] = useState(false);
  const { action }: IParams = useParams();
  const history = useHistory();
  const pathname = history.location.pathname;

  const handleTuChoiBanGhi = () => {
    SetOpenModalTCBG(true);

  };
  const handelCancelModal =()=>{
    SetOpenModalTCBG(false)
  }
const handleCancelThemBG =() =>{
  SetOpenThemBG(false)
}

const handleOpenThemBG = () =>{
  SetOpenThemBG(true)
}





  const actionsTCBG = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/fi_x.png")}
          width={32}
          alt ="Từ chối bản ghi"
        />
      ),
      title: "Từ chối bản ghi",
      onClickItem:handleTuChoiBanGhi
    },
  ];

  const OpenEditTable = () => {
    SetOpenEdit(true);
    if (!action) {
      history.push(`${pathname}/edit`);
    }
  };



  const actionsTPUQ = [
    {
      linkIcon: (
        <img
            src={require("../../../assets/image/action-icon/fi_edit.png")}
            width={32}
            alt= "Chỉnh sửa tác phẩm "
          />
      ),
      title: "Chỉnh sửa tác phẩm",
      onClickItem:OpenEditTable
    },
    {
      linkIcon: (
        <img
        src={require("../../../assets/image/action-icon/notes.png")}
        width={32}
        alt = "Gia hạn hợp đồng"
      />
      ),
      title: "Gia hạn hợp đồng",
      onClickItem: ()=>{}
    },
    {
      linkIcon: (
        <img
        src={require("../../../assets/image/action-icon/history.png")}
        width={32}
        alt ="Hủy hợp đồng"
      />
      ),
      title: "Hủy hợp đồng",
      onClickItem: ()=>{}
    },
    {
      linkIcon: (
        <img
            src={require("../../../assets/image/action-icon/Add.png")}
            width={32}
            alt="Thêm bản ghi"
          />
      ),
      title: "Thêm bản ghi",
      onClickItem:handleOpenThemBG
    },
  ];

// Table
const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  console.log("selectedRowKeys changed: ", newSelectedRowKeys);
  setSelectedRowKeys(newSelectedRowKeys);
};

const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
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
    title: "Mã ISRC",
    dataIndex: "ISRC",
    key: "ISRC",
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
    title: "Ngày Tải",
    dataIndex: "ngayTai",
    key: "ngayTai",
  },
  {
    title: "Tình Trang",
    key: "status",
    dataIndex: " status",
    render: (_, { status }) => (
      <>
        {/* 1 => mới
          2=> Còn thời hạn
          3=> hết hạn
          0 => hủy
      */}
        {status === 1 ? (
          <div className="Item-HLuc">
            <img
              src={require("../../../assets/image/status-icon/Egreen.png")}
            />
            <p>Mới</p>
          </div>
        ) : status === 2 ? (
          <div className="Item-HLuc">
            <img
              src={require("../../../assets/image/status-icon/Eblue.png")}
            />
            <p>Đã phê duyệt</p>
          </div>
        ) : (
          <div className="Item-HLuc">
            <img
              src={require("../../../assets/image/status-icon/Ered.png")}
            />
            <p>Bị từ chối</p>
          </div>
        )}
      </>
    ),
  },
  {
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Nghe</a>

       
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
  
  const CancelEditTable = () => {
    SetOpenEdit(false);
    history.push(pathname.slice(0, pathname.indexOf("/edit")));
  };
  return (
    <div className="TabTPUyQuyen">
      <CtrlTabTacPhamUYQuyen />
      <TableSelection 
      openTBEdit ={openEdit}
       rowSelection = {rowSelection} 
      data ={data}
      columns={columns}
       />
      {/* <TableTabTPUyQuyen openTBEdit={openEdit} /> */}
      {openEdit ? (
        <ActionsPages dataRender={actionsTCBG} />
      ) : (
        <ActionsPages dataRender={actionsTPUQ} />
        // <TacPhamUQActionsPage setTableEdit={OpenEditTable} />
      )}

      {openEdit ? <TabTacPhamEFooter cancelEdit={CancelEditTable} /> : ""}


      <ModalActionHuy
        title ={`Từ chối bản ghi`}
        holder = {`Cho chúng tôi biết lý do bạn muốn từ chối bản ghi này...`}
        txtBtnCancel ={" Hủy"}
        txtBtnSubmit ={ "Lưu"}
        isCancel={handelCancelModal}
        isOpenModal={openModalTCBG}

      />

      <ModalActionThemBanGhi 
      title="Thêm bản ghi mới" 
        isOpenModal ={openModalThemBG}
        isCancel ={handleCancelThemBG}
      />
    </div>
  );
};

export default TabTPUyQuyen;
