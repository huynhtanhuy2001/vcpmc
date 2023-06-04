
import React from "react";
import SearchComponent from "../../../components/control/search";
import CtrSelect from "../../../components/control/select";
import "./styles.scss"

const CtrlQLHDKhaiThac = () => {

  return (
    <div className="Control-QLHDKhaiThac">
     <div className="Control-QLHDKhaiThac_Search">
        <SearchComponent  textHint={"Tên hợp đồng, tác giả,..."} width ={500} />
      </div>
    </div>
  );
};

export default CtrlQLHDKhaiThac;
