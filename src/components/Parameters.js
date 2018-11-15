import React, { Component } from 'react';
import axios from 'axios';

function getParams() {
  return axios.get(`http://localhost:8080/parameters`)
    .then(response => (response.data))
}

export default class Parameters extends Component {
  state = {
    params: {}
  };

  componentDidMount() {
    getParams()
      .then(data => (this.setState({ params: data })));
  }

  onChange = () => {
  };

  render() {
    const params = this.state.params;

    return (
      <div className='parameters-container text-center'
           style={{ height: '100vh', overflow: 'hidden' }}
      >
        <div className='parameters-header'>
          <h3>Parameters</h3>
        </div>

        <div className='parameters-body row'>
          <div className='params-1 col-6'>
            <label>Aggregate Data Output</label>
            <p>
              <input type='checkbox' checked={params.aggregate == 'true'} onChange={this.onChange}/>
            </p>

            <label>File Output Enabled</label>
            <p>
              <input type='checkbox' checked={params.csv == 'true'} onChange={this.onChange}/>
            </p>

            <label>WebService Use WebParameters</label>
            <p>
              <input type='checkbox' checked={params.webService_useWebParameters == 'true'} onChange={this.onChange}/>
            </p>

            <label>CGT Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.CGTMagnitude} onChange={this.onChange}/>
            </p>

            <label>Capital Gains Tax Discount</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.cgt} onChange={this.onChange}/>
            </p>

            <label>Default Random Seed</label>
            <p>
              <input type='number' step='1' defaultValue={params.randomSeed} onChange={this.onChange}/>
            </p>

            <label>Demand Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockDemand} onChange={this.onChange}/>
            </p>

            <label>Demand Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.demandMagnitude} onChange={this.onChange}/>
            </p>

            <label>Households</label>
            <p>
              <input type='number' step='1' defaultValue={params.households} onChange={this.onChange}/>
            </p>

            <label>Income Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockIncome} onChange={this.onChange}/>
            </p>
          </div>

          <div className='params-2 col-6'>
            <label>Income Shock Magnitude</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.incomeMagnitude} onChange={this.onChange}/>
            </p>

            <label>NG Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.NGMagnitude} onChange={this.onChange}/>
            </p>

            <label>Negative Gearing</label>
            <p>
              <input type='number' step='1' defaultValue={params.ng} onChange={this.onChange}/>
            </p>

            <label>Policy Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.policyShock} onChange={this.onChange}/>
            </p>

            <label>Run</label>
            <p>
              <input type='number' step='1' defaultValue={params.run} onChange={this.onChange}/>
            </p>

            <label>Supply Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockSupply} onChange={this.onChange}/>
            </p>

            <label>Supply Shock Magnitude</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.supplyMagnitude} onChange={this.onChange}/>
            </p>

            <label>WebService Polling Interval</label>
            <p>
              <input type='number' step='1' defaultValue={params.webService_pollingInterval} onChange={this.onChange}/>
            </p>

            <label>Web Service Url</label>
            <p>
              <input type='text' step='0.2' defaultValue={params.webService_url} onChange={this.onChange}/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
