import React from "react";
import { useParams } from "react-router-dom";

import ContentTitle from "../../../components/common/Content/contentTitle";
import TabPageChiTiet from "../../../components/tabbar/tabpageChiTiet";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import { IParams } from "../../../types";

const ContentChiTietHD= () => {
  const {id} :IParams= useParams()
  
  const keyPath = id?.slice(0, id.indexOf("_"))
  const sohd = id?.slice(id.indexOf("_")+1)
  

  return (
    <div className="Content-App">
      <ContentTitle title={`Chi tiết hợp đồng uỷ quyền bài hát - ${sohd}`} />
      <div className="Content-body">
      <TabPageChiTiet/>
      
      </div>
    </div>
  );
};

export default ContentChiTietHD;