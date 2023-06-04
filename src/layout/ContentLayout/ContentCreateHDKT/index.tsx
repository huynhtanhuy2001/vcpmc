import React from "react";
import { useParams } from "react-router-dom";

import ContentTitle from "../../../components/common/Content/contentTitle";
import FormCreateHD from "../../../components/form/FormCreateHD";
import FormCreateHDKT from "../../../components/form/FormCreateHDKT";
import TabPageChiTiet from "../../../components/tabbar/tabpageChiTiet";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import { IParams } from "../../../types";

const ContentCreateHDKT= () => {
  const {id} :IParams= useParams()
  
  const keyPath = id?.slice(0, id.indexOf("_"))
  const sohd = id?.slice(id.indexOf("_")+1)
  

  return (
    <div className="Content-App">
      <ContentTitle title={`Thêm hợp đồng khai thác mới`} />
      <div className="Content-body">
    
      <FormCreateHDKT/>
      </div>
    </div>
  );
};

export default ContentCreateHDKT;