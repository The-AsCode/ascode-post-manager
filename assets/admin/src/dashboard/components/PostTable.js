import React from 'react';
import { Table } from 'antd';

const dataSource = [
    {
      title: 'Hello',
      author: 'Author',
      categories: 'Categories',
      tags: '10 Downing Street',
      comments: '10 Downing Street',
      date: '10 Downing Street',
      key:1
    },
    {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },
      {
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },{
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },{
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },{
        title: 'Hello',
        author: 'Author',
        categories: 'Categories',
        tags: '10 Downing Street',
        comments: '10 Downing Street',
        date: '10 Downing Street',
        key:1
      },{
      title: 'Hello',
      author: 'Author',
      categories: 'Categories',
      tags: '10 Downing Street',
      comments: '10 Downing Street',
      date: '10 Downing Street',
      key:1
    },
  ];
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
      key: 'categories',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
    },
    {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
  ];
  
  

export default function PostTable() {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}
