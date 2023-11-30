import React from 'react';
import { Flex, Table, Tag, Pagination, Select, } from 'antd';
import CertificateHeader from '../CertificateHeader';
import { EyeOutlined, FileZipOutlined } from '@ant-design/icons';
import '../../../index.css';
const columns = [
    {
        title: 'Request ID',
        dataIndex: 'requestId',
        filters: [
            {
                text: '#5031',
                value: '#5031',
            },
            {
                text: '#5032',
                value: '#5032',
            },
            {
                text: '#5043',
                value: '#5043',
            },
            {
                text: '#5033',
                value: '#5033',
            },
        ],
        render: (text) => <a><Flex gap={6} align='center'>
            <div style={{ padding: "18px", display: "flex", justifyContent: "center", alignItems: "center", width: "32px", height: "30px", borderRadius: "12px", background: "black", backgroundColor: "antiquewhite" }}>
                <FileZipOutlined style={{ fontSize: "22px" }} /></div>{text}</Flex></a>,
        onFilter: (value, record) => record.requestId.indexOf(value) === 0
    },
    {
        title: 'Serial No.',
        dataIndex: 'serialNo',
    },
    {
        title: 'Cert Subject Name',
        dataIndex: 'certSubjectName',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        filters: [
            {
                text: 'Active',
                value: 'Active',
            },
            {
                text: 'Not-Active',
                value: 'Not-Active',
            },
        ],
        render: (_, { status }) => (
            <>
                {status.map((tag) => {
                    return (
                        <Tag key={tag} style={{ background: "palegoldenrod", color: "green", minWidth: "60px", borderRadius: "20px", textAlign: "center" }}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
        onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
        title: 'Expiration Date',
        dataIndex: 'expirationDate',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        render: () => <EyeOutlined style={{ fontSize: "18px" }} />,
    },
];
const data = [
    {
        key: '1',
        requestId: '#5031',
        serialNo: 101278203,
        certSubjectName: 'Test Apir 18 - 5',
        status: ['Active'],
        expirationDate: '14/10/2023',
    },
    {
        key: '2',
        requestId: '#5032',
        serialNo: 101452563,
        certSubjectName: 'Test Apir 11 - 2',
        status: ['Active'],
        expirationDate: '22/11/2023',
    }, {
        key: '3',
        requestId: '#5031',
        serialNo: 152203,
        certSubjectName: 'Test Apir 18 -5',
        status: ['Not-Active'],
        expirationDate: '14/10/2023',
    }, {
        key: '4',
        requestId: '#5033',
        serialNo: 84561203,
        certSubjectName: 'Test Apir 28 - 11',
        status: ['Not-Active'],
        expirationDate: '14/10/2023',
    },
    {
        key: '5',
        requestId: '#5043',
        serialNo: 15341203,
        certSubjectName: 'Test Apir 7 - 2',
        status: ['Active'],
        expirationDate: '14/10/2023',
    },
];

const CertificateTable = () => {
    return (
        <div>
            <CertificateHeader />
            <Flex justify='flex-end' style={{ marginBottom: "20px" }}>
                <Select
                    defaultValue="Status"
                    style={{ width: 120 }}
                    options={[]}
                />
            </Flex>
            <Table columns={columns} dataSource={data} rowClassName="custom-row" pagination={false} />
            <Flex justify='center' style={{ marginTop: "20px" }}>
                <Pagination size="small" total={500} />
            </Flex>
        </div>
    )
}

export default CertificateTable