import React from 'react';
import './App.css';
import '@fontsource/chakra-petch';
import { Button, ConfigProvider } from 'antd';
/**
 *
 * @returns {React.FC} - app
 */
const App = () => {
  return (
    <ConfigProvider>
      <Button type="primary">welcome</Button>
    </ConfigProvider>
  );
};

export default App;
