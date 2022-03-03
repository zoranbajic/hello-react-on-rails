import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

function Hero() {
  return (
    <Content
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Title style={{ color: '#FFFFFF' }}>Hello React on Rails!</Title>
    </Content>
  );
}

export default Hero;
