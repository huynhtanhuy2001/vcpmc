import React from 'react'
import SearchComponent from '../../../components/control/search';
import CtrSelect from '../../../components/control/select'
import './styles.scss'

const CtrPlayListAddBG = () => {
    const dataThLoai = [
        { label: "Tất cả", value: "all" },
        { label: "Video", value: "Video" },
        { label: "Audio", value: "Audio" },
      ];
      const dataPLmau = [
        { label: "Tất cả", value: "all" },
        { label: "Playlist 1", value: "Playlist 1" },
        { label: "Playlist 2", value: "Playlist 2" },
      ];
  return (
    <div className="Control-PlayList">
        <div className="Control-PlayList_Title">
            <p>Kho bản ghi</p>
        </div>
      <div className="Control-PlayList-AddKhoBG_GroupSelect">
            <CtrSelect title='Thể loại' data={dataThLoai}/>
            <CtrSelect title='Playlist mẫu' data={dataPLmau} placeholder ='Playlist mẫu'/>
      </div>
      <div className="Control-PlayList_BG_Search">
        <SearchComponent textHint={'Tên bản ghi, ca sĩ...'}/>
      </div>
    </div>
  )
}

export default CtrPlayListAddBG