import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

export const PhoneInput = (
    <Select defaultValue="+7" className="select-before">
      <Option value="+7">+7</Option>
    </Select>
);