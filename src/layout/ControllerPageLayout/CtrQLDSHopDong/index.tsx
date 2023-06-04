
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import "./styles.scss"

const CtrQLDSHopDong = () => {
  const datactrQSH =[
    { label: 'Tất cả', value: 'all'},
    { label: 'Người biểu diễn', value: 'nguoibieudien'},
    { label: 'Nhà sản xuất', value: 'nhaSX'},
  ]
  const dataHLHopDong =[
    { label: 'Tất cả', value: 'all'},
    { label: 'Mới', value: 'new'},
    { label: 'Còn thời hạn', value: 'contg'},
    { label: 'Hết thời hạn', value: 'hettg'},
    { label: 'Hủy', value: 'Hủy'},
  ]
  return (
    <div className="Control-DSHopDong">
      
      <div className="Control-DSHopDong_GroupSelect">
      <CtrSelect title="Quyền sở hữu" data={datactrQSH}/>
      <CtrSelect title="Hiệu lực hợp đồng:" data={dataHLHopDong}/>
      </div>
      
      <div className="Control-DSHopDong_Search">
        <SearchComponent  textHint={"Tên hợp đồng, số hợp đồng, người uỷ quyền..."} width ={500} />
      </div>
    </div>
  );
};

export default CtrQLDSHopDong;
