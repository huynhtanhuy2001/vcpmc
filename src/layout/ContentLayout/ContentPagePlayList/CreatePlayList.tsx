import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import ActionsPages from '../../../components/actionpages/ActionPages';
import ContentTitle from '../../../components/common/Content/contentTitle'
import FormCreatePlayList from '../../../components/form/FormCreatePlayList';
import TableDefault from '../../../components/table/tbdefault';
import { DataTypeBanGhi } from '../../../types';
import './styles.scss'

const CreatePlayList = () => {
  const history = useHistory()
  const currentpath = history.location.pathname
  const handleAddBanGhi =()=>{
    history.push(`${currentpath}/addbanghi`)
  }
  const actionsCreatePlayList = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/Add.png")}
          width={32}
          alt="Thêm bản ghi"
        />
      ),
      title: "Thêm bản ghi",
      onClickItem:handleAddBanGhi,
    },
  ];


  const columns: ColumnsType<DataTypeBanGhi> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameBG",
      key: "nameBG",
      render: (_, record) => (
        <div className="RecordNameTPUQ">
          <div className="RecordNameTPUQ_Name">
            <p>{record.nameBG}</p>
          </div>
          <div className="RecordNameTPUQ_SubName">
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.phongcachBG}</span>
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.typeBG}</span>
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <img
                src={require("../../../assets/image/status-icon/Eblue.png")}
              />
            </div>
            <div className="RecordNameTPUQ_SubName-item">
              <span>{record.timeBG}</span>
            </div>
          </div>
        </div>
      ),
    },
 
    {
      title: "Ca sĩ",
      dataIndex: "casi",
      key: "casi",
    },
    {
      title: "Tác giả",
      dataIndex: "tacgia",
      key: "tacgia",
    },
    {
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Nghe</a>
  
         
        </Space>
      ),
    },
    {
      key: "actionGo",
      render: (_, record) => (
        <Space size="middle">
          <a>Gỡ</a>
  
         
        </Space>
      ),
    },
  ];
  const data: DataTypeBanGhi[] = [];
    for (let i = 1; i < 50; i++) {
      data.push({
        key: i,
        nameBG: "Gorgeous Wooden Bike",
        phongcachBG: "Ballad",
        typeBG: "Audio",
        timeBG: "3:12",
        ISRC: "VNA1423525",
        casi: "Vương Anh Tú",
        tacgia: "Vương Phong",
        ngayTai: "01/04/2021 15:53:13",
        status: i > 2 ? 0 : i,
      });
    }
  return (
    <div className="Content-App">
    <ContentTitle title="Thêm Playlist" />
    <div className="Content-body">
      <div className="Content-body_PlaylistPage">
        <div className="Content-body_PlaylistPage-Create">
            <FormCreatePlayList/>
            <TableDefault columns={columns} data={[]} sizeTb={1234} heightTb={680}/>
        </div>
        <div className="btn-group">
        <Link to={'/khobanghi/list'}>
        <Button
          type="primary"
          danger
          ghost
          className="btn-default"
          // onClick={handleCancel}
        >
          Hủy
        </Button>
        </Link>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit btn-default"
          // onClick={handleOpenModalSuccess}
        >
         Lưu
        </Button>
      </div>
        
        <ActionsPages dataRender={actionsCreatePlayList} /> 
      </div>
    </div>
  </div>
  )
}

export default CreatePlayList