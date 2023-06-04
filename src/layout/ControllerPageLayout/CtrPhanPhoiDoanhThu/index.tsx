
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import CtrSelectDate from "../../../components/control/selectDate";
import "./styles.scss"

const CtrPhanPhoiDT = () => {

  return (
    <>
    <div className="Control-PhanPhoiDT">
      
      <div className="Control-PhanPhoiDT_GroupSelect">
        <CtrSelectDate title="Theo Tháng" typepicker={"month"}/>
      </div>
      
      <div className="Control-PhanPhoiDT_Search">
        <SearchComponent  textHint={"Nhập tên bài hát"} width ={500} />
      </div>
    </div>
    <div className="Control-PhanPhoiDT_TitleTable">
      <h3>Danh sách hợp đồng ủy quyền</h3>
    </div>
    </>
  );
};

export default CtrPhanPhoiDT;
