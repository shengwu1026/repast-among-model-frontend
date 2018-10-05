import React, { Component } from 'react';

export default class Parameters extends Component {
  render() {
    return (
      <div className='parameters-container text-center'
           style={{height: '100vh', overflowY: 'scroll'}}>
        <div className='parameters-header' style={{margin: '20px'}}>
          <h3>Parameters</h3>
        </div>
        <div className='parameters-body'>
          <label>Aggregate Data Output</label>
          <p>
            <input type='checkbox' checked={true}/>
          </p>
          
          <label>CGT Shock Magnitude</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Capital Gains Tax Discount</label>
          <p>
            <input type='number' step='0.2' defaultValue='0'/>
          </p>
          
          <label>Default Random Seed</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Demand Shock</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Demand Shock Magnitude</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>File Output Enabled</label>
          <p>
            <input type='checkbox'/>
          </p>
          
          <label>Households</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Income Shock</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Income Shock Magnitude</label>
          <p>
            <input type='number' step='0.2' defaultValue='0'/>
          </p>
          
          <label>NG Shock Magnitude</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Negative Gearing</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Policy Shock</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Run</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Supply Shock</label>
          <p>
            <input type='number' step='1' defaultValue='0'/>
          </p>
          
          <label>Supply Shock Magnitude</label>
          <p>
            <input type='number' step='0.2' defaultValue='0'/>
          </p>
        </div>
      </div>
    )
  }
}