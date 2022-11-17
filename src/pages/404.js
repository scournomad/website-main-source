import React from 'react';
import { Button, Result } from 'antd';

export default () => (
  <div className="content">
    <Result
      status="404"
      title="404 Not found"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" href='/'>Back Home</Button>} />
  </div>
)
