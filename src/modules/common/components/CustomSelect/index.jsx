// @flow
import Select, { Option } from "rc-select";
import React from "react";
import "./index.less";

export const CustomSelect = (): React$Node => {
    return (
        <div className="custom-select">
            <Select menuItemSelectedIcon={false} showArrow={false}>
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="yiminghe">yiminghe</Option>
            </Select>
        </div>
    );
};
