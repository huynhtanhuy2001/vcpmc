import { Select } from "antd";
import React from "react";
import { ISelect } from "../../../types";
import "./styles.scss";

const CtrSelect: React.FC<ISelect> = (props) => {
  const handleChange = (value: string) => {
    if (props.onValue) {
      props.onValue(value);
    }
  };

  return (
    <div className="Control-Select">
      {props.title ? (
        <div className="Label-Select">
          <h4>{props.title}</h4>
        </div>
      ) : (
        ""
      )}

      <Select
        defaultValue={props.placeholder ? props.placeholder : "Tất cả"}
        style={{ width: props.w ? props.w : 160, height: 40 }}
        suffixIcon={<img src={require("../../../assets/image/Vector.png")} />}
        //   onChange={handleChange}
        options={props.data?.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        dropdownStyle={{
          backgroundColor: "#3E3E5B",
          color: "#ffffff",
        }}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default CtrSelect;
