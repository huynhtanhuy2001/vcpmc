import { Form } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { useParams } from "react-router-dom";
import ActionsPages from "../../../components/actionpages/ActionPages";
import ContentTitle from "../../../components/common/Content/contentTitle";
import SearchComponent from "../../../components/control/search";
import CtrSelectDate from "../../../components/control/selectDate";
import TableDefault from "../../../components/table/tbdefault";
import { IParams } from "../../../types";
import './styles.scss'


const ChiTietLichSuDoiSoat = () => {
  const { id }: IParams = useParams();

  const sohd = id?.slice(id.indexOf("_") + 1, id.indexOf("-") - 1);

  interface DataType {
    key: number;
    tenBH: string;
    tongLuotPhat: string;
    tongDoanhThu: string;
    quyenBD: string;
    quyenSX: string;
    vcpmc: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên bài hát",
      dataIndex: "tenBH",
      key: "tenBH",
    },

    {
      title: "Tổng số lượt phát",
      dataIndex: "tongLuotPhat",
      key: "tongLuotPhat",
    },

    {
      title: "Tổng doanh thu",
      dataIndex: "tongDoanhThu",
      key: "tongDoanhThu",
    },
    {
      title: "Quyền biểu diễn ",
      dataIndex: "quyenBD",
      key: "quyenBD",
    },
    {
      title: "Quyền sản xuất",
      dataIndex: "quyenSX",
      key: "quyenSX",
    },
    {
      title: "VCPMC",
      dataIndex: "vcpmc",
      key: "vcpmc",
    },
  ];

  const data: DataType[] = [];
  for (let i = 1; i < 50; i++) {
    data.push({
      key: i,
      tenBH: "Let Us Be",
      tongLuotPhat: "365",
      tongDoanhThu: "365.000.000",
      quyenBD: "36.266",
      quyenSX: "36.266",
      vcpmc: "36.200",
    });
  }
  const actionsPageDS = [
    {
      linkIcon: (
        <img
          src={require("../../../assets/image/action-icon/file-export.png")}
          width={32}
          alt="Xuất file"
        />
      ),
      title: "Xuất file",
      onClickItem: () => {},
    },
  ];

  return (
    <div className="Content-App">
      <ContentTitle
        title={`Doanh thu theo hợp đồng - ${sohd} - Kỳ Tháng 03/2021 `}
      />
      <div className="Content-body">
        <div className="LSDoiSoatPage">
          <div className="LSDoiSoatPage_Left">
            <div className="LSDoiSoatPage_Left-Top">
              <div className="LSDoiSoatPage_Left-Title">
                <h3>Thông tin hợp đồng</h3>
              </div>
              <div className="LSDoiSoatPage_Left-Form">
                <Form>
                  <Form.Item label="Số hợp đồng:">
                    <span>HĐ123</span>
                  </Form.Item>
                  <Form.Item label="Đơn vị khai thác:">
                    <span>Công ty TNHH ABC</span>
                  </Form.Item>
                  <Form.Item label="Loại hợp đồng:">
                    <span>Trọn gói</span>
                  </Form.Item>
                  <Form.Item label="Hiệu lực từ:">
                    <span>01/01/2020</span>
                  </Form.Item>
                  <Form.Item label="Ngày hết hạn:">
                    <span>01/01/2022</span>
                  </Form.Item>
                  <Form.Item label="Giá trị hợp đồng:">
                    <span>730.000.000 VNĐ</span>
                  </Form.Item>
                  <Form.Item label="Giá trị phân phối theo ngày:">
                    <span>365.000.000 VNĐ</span>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="LSDoiSoatPage_Left-Bottom">
              <div className="LSDoiSoatPage_Left-Title">
                <h3>Thông tin đối soát</h3>
              </div>
              <div className="LSDoiSoatPage_Left-Form">
                <Form>
                  <Form.Item label="Ký đối soát:">
                    <span>01/01/2020</span>
                  </Form.Item>
                  <Form.Item label="Số bài hát:">
                    <span>13 bài</span>
                  </Form.Item>
                  <Form.Item label="Tổng số lượt phát:">
                    <span>200.000 lượt</span>
                  </Form.Item>
                  <Form.Item label="Tổng doanh thu:">
                    <span>300.000.000 VNĐ</span>
                  </Form.Item>
                  <Form.Item label="Doanh thu chưa phân phối:">
                    <span>1.000.000 VNĐ</span>
                  </Form.Item>
                  <Form.Item label="Trạng thái đối soát:">
                    <span>Chưa đối soát</span>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="LSDoiSoatPage_Right">
            <div className="LSDoiSoatPage_Right_Title">
              <h3>Danh sách bản ghi</h3>
            </div>
            <div className="LSDoiSoatPage_Right_Control">
              <CtrSelectDate title="Xem theo ngày/tuần:" />
              <SearchComponent textHint={"Nhập tên bài hát"}  width={435}/>
            </div>
            <TableDefault data={data} columns={columns} sizeTb={1000} />
          </div>
          <ActionsPages dataRender={actionsPageDS}/>
        </div>
      </div>
    </div>
  );
};

export default ChiTietLichSuDoiSoat;
