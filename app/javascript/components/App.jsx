import React from 'react';
import Hero from './Hero';
import BottomBar from './BottomBar';
import { Layout } from 'antd';

function App() {
  return (
    <Layout className='layout'>
      <Hero />
      <BottomBar />
    </Layout>
  );
}

export default App;
