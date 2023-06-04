
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import "./styles.scss"

const CtrlTabTacPhamUYQuyen = () => {
  const dataSatus =[
    { label: 'Tất cả', value: 'all'},
    { label: 'Mới', value: '1'},
    { label: 'Đã phê duyệt', value: '2'},
    { label: 'Từ chối', value: '0'},
  ]

  return (
    <div className="Control-TabTacPhamUYQuyen">
      
      <div className="Control-TabTacPhamUYQuyen_GroupSelect">
      <CtrSelect title="Quyền sở hữu" data={dataSatus}/>
      
      </div>
      
      <div className="Control-TabTacPhamUYQuyen_Search">
        <SearchComponent  textHint={"Tên hợp đồng, số hợp đồng, người uỷ quyền..."} width ={500} />
      </div>
    </div>
  );
};

export default CtrlTabTacPhamUYQuyen
