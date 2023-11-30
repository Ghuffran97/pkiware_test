import React from 'react'
import { Typography, Flex, Button, Input } from 'antd'
import { PlusOutlined, PoweroffOutlined } from '@ant-design/icons';

const { Title } = Typography
const { Search } = Input;
const CertificateHeader = () => {
    return (
        <Flex justify='space-between' align='baseline' style={{ marginBottom: "30px" }}>
            <Title level={3} > My Certificate </Title>
            <Search
                placeholder="Search Certificate"
                allowClear
                style={{ width: 304 }}
            />
            <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ height: "40px", background: "teal" }}
            >
                Request Certificate
            </Button>
        </Flex>
    )
}

export default CertificateHeader