
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import CtrSelectDate from "../../../components/control/selectDate";
import "./styles.scss"

const CtrLichSuDoiSoat = () => {

  return (
    <>
    <div className="Control-LichSuDoiSoat">
      
      <div className="Control-LichSuDoiSoat_GroupSelect">
        <CtrSelectDate title="Theo Tháng" typepicker={"month"}/>
      </div>
      
      <div className="Control-LichSuDoiSoat_Search">
        <SearchComponent  textHint={"Nhập tên tài khoản quản trị"} width ={500} />
      </div>
    </div>
    <div className="Control-LichSuDoiSoat_TitleTable">
      <h3>Danh sách hợp đồng khai thác đã đối soát</h3>
    </div>
    </>
  );
};

export default CtrLichSuDoiSoat;
