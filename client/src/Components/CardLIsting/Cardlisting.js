import React from 'react'
import { Card, Row } from 'antd';
import {  Col } from 'antd';

const { Meta } = Card;


export default function CardListing() {
    return (
        <Row justify="space-around" align="middle">
            <Col sm={24} xl={6}>
            <Card  hoverable style={{ width: 300 }}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      
            </Col>
            <Col sm={24} xl={6}>
            <Card hoverable style={{ width: 300 }}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      
            </Col>
            <Col sm={24} xl={6}>
            <Card  hoverable style={{ width: 300 }}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      
            </Col>
        </Row>
        
        
     
    )
}
