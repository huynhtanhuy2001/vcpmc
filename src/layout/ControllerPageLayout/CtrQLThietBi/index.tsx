
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import "./styles.scss"

const CtrQLThietBi = () => {
  const dataNhomTK =[
  
    { label: 'Tất cả', value: 'all'},
    { label: 'Công ty TMCP Bách Hóa Xanh', value: 'Công ty TMCP Bách Hóa Xanh'},
    { label: 'Công ty TNHH XYZ', value: 'Công ty TNHH XYZ'},
    { label: 'Công ty TMCP Adora', value: 'Công ty TMCP Adora'},
  ]
  const dataColumn =[
    { label: 'Ẩn hiện cột', value: 'all'},
   
  ]
  return (
    <div className="Control-ThietBi">
      
      <div className="Control-ThietBi_GroupSelect">
      <CtrSelect  data={dataNhomTK} placeholder="Chọn nhóm tài khoản" w={274}/>
      <CtrSelect data={dataColumn} placeholder="Ẩn hiện cột"/>
      </div>
      
      <div className="Control-ThietBi_Search">
        <SearchComponent  textHint={"Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"} width ={500} />
      </div>
    </div>
  );
};

export default CtrQLThietBi;
