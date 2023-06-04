
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import TabPagePQUSer from "../../../components/tabbar/TabpagePhanQuyenUser";
import "./styles.scss"

const CtrPQUser = () => {

  return (
    <div className="Control-PQUser">
      
      <div className="Control-PQUser_GroupSelect">
      <TabPagePQUSer/>
      </div>
      
      <div className="Control-PQUser_Search">
        <SearchComponent  textHint={"Nhập tên người dùng"} width ={500} />
      </div>
    </div>
  );
};

export default CtrPQUser ;
