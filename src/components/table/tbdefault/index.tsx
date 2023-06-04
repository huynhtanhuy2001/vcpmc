/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalActionHuyHD from "../../modal/modalActionhuy";
import ModalLyDoHuyHD from "../../modal/modalLyDoHuyHD";
import { Interface } from "readline";

const TableDefault: React.FC<{
  title?: string;
  columns: ColumnsType<any>;
  data?: any[];
  sizeTb?: number;
  pagesize?: number;
  heightTb?: number;
}> = (props) => {
  return (
    <div
      className="TableDefault"
      style={{
        width: props.sizeTb ? props.sizeTb : "1534px",
        height: props.heightTb ? props.heightTb : "680px",
      }}
    >
      {props.title ? (
        <div className="TableDefault_title">
          <h3>{props.title}</h3>
        </div>
      ) : (
        ""
      )}

      <Table
        columns={props.columns}
        dataSource={props.data}
        pagination={{ pageSize: props.pagesize ? props.pagesize : 13 }}
        style={{
          width: props.sizeTb ? props.sizeTb : "1534px",
          height: props.heightTb ? props.heightTb : "680px",
        }}
      />
    </div>
  );
};

export default TableDefault;
