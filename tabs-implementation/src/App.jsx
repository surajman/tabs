import React from 'react';

import { Tabs } from './Tabs/Tabs';
import Table from './Table/Table';
import './Tabs/Tabs.css';

function App() {
  return (
    <div>
      <h1 className="header">Tabs Demo</h1>
     <Tabs>
      <div label="Upcoming Campaigns">
        <Table columns={[{name: 'Upcoming first column', value: 'a'}, {value: 'b', name: 'Upcoming second column'}]} rows={[{a: 'abcd', b: 'test1'}, {a: 'abcd2', b: 'test2'}]}/>
      </div>
      <div label="Live Campaigns">
      <Table columns={[{name: 'Live first column', value: 'a'}, {value: 'b', name: 'Live second column'}]} rows={[{a: 'abcd', b: 'test1'}, {a: 'abcd2', b: 'test2'}]}/>
      </div>
      <div label="Past Campaigns">
      <Table columns={[{name: 'Past first column', value: 'a'}, {value: 'b', name: 'Past second column'}]} rows={[{a: 'abcd', b: 'test1'}, {a: 'abcd2', b: 'test2'}]}/>
      </div>
    </Tabs>
    </div>
  );
}


export default App;
