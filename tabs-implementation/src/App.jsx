import React from 'react';

import { Tabs } from './Tabs/Tabs';
import ItemRow from './ItemRow/ItemRow';
import './Tabs/Tabs.css';
import data from './data/sample.json';
import { differenceInDays } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
    this.openCalander = this.openCalander.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.setState(state => ({data}));
  }
  handleChange(date, name) {
    const data = {
      data: this.state.data.data.map(x => {
        if (x.name === name) {
          x.createdOn = date;
          x.isCalendarOpen = false;
        }
      return {...x};
      })
    }
    this.setState(state => ({data}));
  }
  openCalander(name) {
    const data = {
      data: this.state.data.data.map(x => {
        if (x.name === name) {
          x.isCalendarOpen = true;
        }
      return {...x};
      })
    }
    this.setState(state => ({data}));
  }
  render() {
    const a = this.state.data.data;
    return (
      <div className="main-page">
        <h1 className="header">Manage Campaigns</h1>
      <Tabs>
        <div label="Upcoming Campaigns">
          {a.filter(x => differenceInDays(x.createdOn, new Date()) > 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} />)}
        </div>
        <div label="Live Campaigns">
        {a.filter(x => differenceInDays(x.createdOn, new Date()) === 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} />)}
        </div>
        <div label="Past Campaigns">
        {a.filter(x => differenceInDays(x.createdOn, new Date()) < 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} />)}
        </div>
      </Tabs>
      </div>
    );}
}


export default App;
