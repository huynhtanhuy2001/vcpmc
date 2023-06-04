import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect } from "react";

import ContentTitle from "../../../components/common/Content/contentTitle";
import TabPageQl from "../../../components/tabbar/tabpageQL";
import { db } from "../../../firebase/cofig";
import { useAppDispatch } from "../../../redux/hooks";
import { addItemsHDKhaiThac, addItemsHDUyQuyen } from "../../../redux/slice/HopDongSlice";

function compareNumbers(a :any, b : any) {
  return a.key - b.key;
}
const ContentPageQLy = () => {

  const dispatch = useAppDispatch()
  const fectchValueHDUyQuyen = async () => {
    const q = query(collection(db, "HopDongUyQuyen"));
    const data: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ index: `${doc.id}`, ...doc.data()});
      
    });
    data.sort(compareNumbers)
    dispatch(addItemsHDUyQuyen(data));

  };
  const fectchValueHDKhaiThac = async () => {
    const q = query(collection(db, "HopDongKhaiThac"));
    const data: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ index: `${doc.id}`, ...doc.data() });
    });
    data.sort(compareNumbers)
    dispatch(addItemsHDKhaiThac(data));
  };
  useEffect(()=>{

    fectchValueHDUyQuyen();
    fectchValueHDKhaiThac();
  }, [])
  
  return (
    <div className="Content-App">
      <ContentTitle title="Danh sách hợp đồng" />
      <div className="Content-body">
        <TabPageQl/>
      </div>
    </div>
  );
};

export default ContentPageQLy;
