import React from 'react';
import { Button, Col, Layout, Row } from 'antd';

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
        backgroundColor: 'transparent',
      }}
    >
      <Row
        justify='center'
        style={{
          paddingLeft: '27%',
          paddingRight: '27%',
        }}
      >
        <Col xs={24} sm={12} md={6}>
          <Button
            type='text'
            href='https://github.com/ZoranBajic'
            style={{ color: '#FFFFFF', fontWeight: 'bold' }}
          >
            Github
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button
            type='text'
            href='https://linkedin.com/in/zoranbajic'
            style={{ color: '#FFFFFF', fontWeight: 'bold' }}
          >
            LinkedIn
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button
            type='text'
            href='https://www.zoranbajic.com'
            style={{ color: '#FFFFFF', fontWeight: 'bold' }}
          >
            Portfolio
          </Button>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button
            type='text'
            href='mailto:contact@zoranbajic.com'
            style={{ color: '#FFFFFF', fontWeight: 'bold' }}
          >
            Contact
          </Button>
        </Col>
      </Row>
    </Footer>
  );
}

export default BottomBar;
