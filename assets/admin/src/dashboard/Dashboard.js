import React from 'react';
import { Button, DatePicker, Space, version } from "antd";
import PostTable from './components/PostTable';


export default function Dashboard() {
  return (
    <div>
      <h3>All Posts</h3>
      <Space>
        <PostTable />
      </Space>
    </div>
  )
}
