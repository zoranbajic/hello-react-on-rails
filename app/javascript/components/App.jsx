import React from 'react';
import Hero from './Hero';
import BottomBar from './BottomBar';
import { Layout } from 'antd';

function App() {
  return (
    <Layout
      className='layout'
      style={{
        background: 'rgb(131, 58, 180)',
        background:
          'linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 44%)',
        height: '100vh',
      }}
    >
      <Hero />
      <BottomBar />
    </Layout>
  );
}

export default App;
