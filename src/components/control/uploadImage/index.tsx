import { UploadFile, UploadProps } from 'antd';
import Upload, { RcFile } from 'antd/es/upload';
import React, { useState } from 'react'
import './styles.scss'
const UploadImage = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    listType="picture-card"
    fileList={fileList}
    onChange={onChange}
    onPreview={onPreview}
   
  >
    {fileList.length < 1 && 
      <div className="Upload_render">
        <img src={require("../../../assets/image/action-icon/upload.png")} alt='upload'/>
        <span> Tải lên</span>

      </div>
    }
  </Upload>
  )
}

export default UploadImage