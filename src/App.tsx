import * as React from 'react';
import {
  useHistory,
  Switch,
  Route
} from 'react-router-dom';
import BraftEditorCom from './BraftEditor';
import CKEditorCom from './CKEditor';

const App: React.FC<any> = () => {
  const h = useHistory();

  const changeRoute = React.useCallback((path: string) => {
    console.log(h, path);
    h.push(path);
  }, []);

  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <button style={{ position: 'sticky' }} onClick={() => changeRoute('/ck')}>CKEditor</button>
        <button onClick={() => changeRoute('/bf')}>BraftEditor</button>
      </div>
      <Switch>
        <Route path="/ck" component={CKEditorCom} />
        <Route path="/bf" component={BraftEditorCom} />
      </Switch>
    </>
  );
};

export default App;
