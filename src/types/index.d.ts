


export interface IParams {
    page?: string
    control?: string
    tag?: string
    id?: string
    action? : string
  }
  export interface DataTypeBanGhi {
    key: number;
    nameBG: string;
    phongcachBG: string;
    typeBG: string;
    timeBG: string;
    ISRC: string;
    casi: string;
    tacgia: string;
    ngayTai: string;
    status: number;
  }
  export interface ICurrentUSer {
    id:string
    name : string
    ngaySinh?:string
    email?:string
    phone?: string
    role?: string
    avatar?:string
  }
  export interface ISelect {
    title?: string 
    w? : number
    data? : Array<{value: string, label: string}>
    placeholder? : string
    onValue?: Function
  }

  interface DataTypeKhobG {
    key: number;
    tenBG: string;
    maISRC: string;
    thoiLuong: string;
    casi: string;
    tacgia: string;
    theLoai: string;
    dinhDang: string;
    hieuLuc: number;
    ngayHetHan: string;
    soHD: string
  }
  interface DataTypePlayList {
    key: number;
    title: string;
    soBG: string;
    thoiLuong: string;
    chuDe: Array<string>;
    ngayTao: string;
    nguoiTao: string;

  }
  export interface IDataCharts {
    x?: string
    y?: number
  }
  
  
  export interface ItemCharts {
    data : Array<IDataCharts>
  }

export interface DataTypeHDUyQuyen {
  key: number;
  soHD: string;
  nameHD: string;
  nguoiUyQuyen: string;
  quyenSH: string;
  hieuLuc: number;
  ngayTao: string;
  ngayHieuLuc: string;
  ngayHH: string;
  lydoHuy?: string;
  infoUQ: {
    pNUQ : string;
    nguoiUyQuyen : string;
    gioiTinh : string;
    ngaySinh : string;
    quocTich : string;
    sdt : string; 
    CCCD : string; 
    ngayCap : string; 
    noiCap : string; 
    maSoThue : string; 
    diaChi : string; 
    email : string;
     taiKhoan : string;
     matKhau : string;
     stk : string;
     nganHang: string;
  }
}
export interface DataTypeHDKhaiThac {
  key: number;
  soHD: string;
  khachHang: string;
  ngayTao: string;
  ngayHieuluc: string;
  ngayHetHan: string;
  hieuLuc: number;
}
