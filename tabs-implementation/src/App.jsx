import React from 'react';

import { Tabs } from './Tabs/Tabs';
import ItemRow from './ItemRow/ItemRow';
import Modal from './Modal/Modal';
import './Tabs/Tabs.css';
import data from './data/sample.json';
import { differenceInDays } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      show: false,
      selectedPrice: null,
    };
    this.openCalander = this.openCalander.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
  toggleModal(name) {
    const data = this.state.data.data.find(x => (x.name === name))
    this.setState(state => ({...this.state, show: !this.state.show, selectedPrice: this.state.show ? null : data}))
  }
  render() {
    const a = this.state.data.data;
    return (
      <div className="main-page">
        <h1 className="header">Manage Campaigns</h1>
        <Modal className="modal"
               show={this.state.show}
               close={this.toggleModal}>
                <div>
                  <div className="modal-head-container">
                    <img src={this.state.selectedPrice && this.state.selectedPrice.image_url} alt=""/> &nbsp;
                    <div className="modal-name-country-container">
                      <div>{this.state.selectedPrice && this.state.selectedPrice.name}</div>
                      <div>{this.state.selectedPrice && this.state.selectedPrice.region}</div>
                    </div>
                  </div>
                  <div>
                    <div style={{paddingTop: '15px'}}>Pricing</div>
                    <div className="modal-price-container">
                      <div>1 Week - 1 Month</div>
                      <div>{this.state.selectedPrice && this.state.selectedPrice.monthPrice} $500</div>
                    </div>
                    <div className="modal-price-container">
                      <div>6 Months</div>
                      <div>{this.state.selectedPrice && this.state.selectedPrice.sixMonthPrice}$700</div>
                    </div>
                    <div className="modal-price-container">
                      <div>1 Year</div>
                      <div>{this.state.selectedPrice && this.state.selectedPrice.yearPrice}$5000</div>
                    </div>
                  </div>
                </div>
        </Modal>
        <Tabs>
          <div label="Upcoming Campaigns">
            {a.filter(x => differenceInDays(x.createdOn, new Date()) > 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} toggleModal={this.toggleModal} />)}
          </div>
          <div label="Live Campaigns">
          {a.filter(x => differenceInDays(x.createdOn, new Date()) === 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} toggleModal={this.toggleModal} />)}
          </div>
          <div label="Past Campaigns">
          {a.filter(x => differenceInDays(x.createdOn, new Date()) < 0).map(row => <ItemRow {...row} priceText="View Pricing" key={row.name} handleSelect={this.handleSelect} handleChange={this.handleChange} isCalendarOpen={row.isCalendarOpen} openCalander={this.openCalander} toggleModal={this.toggleModal} />)}
          </div>
        </Tabs>
      </div>
    );}
}


export default App;
