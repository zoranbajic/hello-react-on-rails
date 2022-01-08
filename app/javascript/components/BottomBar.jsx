import React from 'react';
import { Button, Col, Divider, Layout, Row } from 'antd';

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
        <Col xs={12} md={6}>
          <Button type='link' href='https://github.com/ZoranBajic'>
            Github
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button type='link' href='https://linkedin.com/in/zoranbajic'>
            {' '}
            LinkedIn
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button type='link' href='https://www.zoranbajic.com'>
            Portfolio
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button type='link' href='mailto:contact@zoranbajic.com'>
            Contact
          </Button>
        </Col>
      </Row>
    </Footer>
  );
}

export default BottomBar;
