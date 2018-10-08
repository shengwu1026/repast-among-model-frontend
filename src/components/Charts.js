import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';

export default class Charts extends Component {
  render() {
    return (
      <div className='text-center charts-container'>
        <div className='row charts-container-body'>
          <Scatter
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                ],
                borderColor: [
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                  '#fff',
                ],
                borderWidth: 1
              }]
            }}/>
        </div>
      </div>
    )
  }
}