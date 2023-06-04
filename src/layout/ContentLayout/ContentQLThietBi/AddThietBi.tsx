import React from "react";
import ContentTitle from "../../../components/common/Content/contentTitle";
import FrmAddThietBi from "../../../components/form/AddThietBi";

const AddThietBi = () => {
  return (
    <div className="Content-App">
      <ContentTitle title="Thêm thiết bị mới" />
      <div className="Content-body">
        <div className="Content-body_PlaylistPage">
          <FrmAddThietBi />
        </div>
      </div>
    </div>
  );
};

export default AddThietBi;
