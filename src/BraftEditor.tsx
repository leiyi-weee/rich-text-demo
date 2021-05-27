import * as React from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './index.less';

const BraftEditorCom = () => (
  <div className="bf-editor-container">
    <BraftEditor
      language="en"
    />
  </div>
);

export default BraftEditorCom;
