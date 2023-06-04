import React, { useState } from 'react'
import type { UploadFile, UploadProps , } from 'antd';
import { Button, message, Upload } from 'antd';
import './styles.scss'
import { storage } from '../../../firebase/cofig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';




const UploadFileComponent = () => {
 
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //     // uid: '',
    //     // name: '',
    //     // status: 'done',
    //     // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);

  const props: UploadProps = {
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload(file){
      const storageRef = ref(storage, `fileHD/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {  
        getDownloadURL(storageRef)
          .then((url) => {
            setFileList([{
              uid: snapshot.ref.fullPath,
              name: snapshot.ref.name,
              status: 'done',
              url: url,
          }])
          
          })
          .catch((error) => {
            console.log(error)
          });
      });
    },
  
    
    onChange (fileList) {
      console.log(fileList)
    }, onPreview(file) {
      console.log(file)
    },
      // if (info.file.status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (info.file.status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully`);
      // } else if (info.file.status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
 
  
  };
  return (
    <Upload{...props}>
    <Button className='btn-upload' icon={<img src={require("../../../assets/image/action-icon/upload.png")}/>}>Tải lên</Button>
  </Upload>
  )
}

export default UploadFileComponent