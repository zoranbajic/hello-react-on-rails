import React from 'react';
import { Col, Divider, Layout, Row } from 'antd';

const { Footer } = Layout;

function BottomBar() {
  return (
    <Footer
      style={{
        textAlign: 'center',
        position: 'fixed',
        left: '0',
        bottom: '0',
        right: '0',
      }}
    >
      <Row
        justify='center'
        style={{
          paddingLeft: '27%',
          paddingRight: '27%',
        }}
      >
        <Col xs={12} md={6}>
          Github
        </Col>
        <Col xs={12} md={6}>
          LinkedIn
        </Col>
        <Col xs={12} md={6}>
          Portfolio
        </Col>
        <Col xs={12} md={6}>
          Contact
        </Col>
      </Row>
    </Footer>
  );
}

export default BottomBar;
