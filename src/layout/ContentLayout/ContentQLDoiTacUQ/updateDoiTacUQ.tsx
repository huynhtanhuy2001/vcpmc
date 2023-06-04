import React from 'react'
import ContentTitle from '../../../components/common/Content/contentTitle'
import FrmUpdateDoiTacUQ from '../../../components/form/UpdateDoiTacUQ'


const UpdateDoiTacUQ = () => {
  return (
    <div className="Content-App">
    <ContentTitle title="Cập nhật thông tin" />
    <div className="Content-body">
      <div className="Content-body_PlaylistPage">
        <FrmUpdateDoiTacUQ/>
      </div>
    </div>
  </div>
  )
}

export default UpdateDoiTacUQ