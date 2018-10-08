import React, { Component } from 'react';
import Parameters from './Parameters';
import RunOptions from './RunOptions'
import Charts from './Charts'

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard-container'>
        <div className='dashboard-body row'>
          <div className='col-2'>
            <Parameters/>
          </div>
          
          <div className='col-10'>
            <RunOptions/>
            <Charts/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard