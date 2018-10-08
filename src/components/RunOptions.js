import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import ReactSVG from 'react-svg';

const Handle = Slider.Handle;

const handle = (props) => {
  const {value, dragging, index, ...restProps} = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const marks = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  60: 60,
  70: 70,
  80: 80,
  90: 90,
  100: 100
};

export default class RunOptions extends Component {
  handleSliderChange = (e) => {
  };

  render() {
    return (
      <div className='runoptions-container text-center'>
        <div className='runoptions-body row'>
          <div className='col-3'>
            <h4 className='runoptions-body-header'>Scheduled Options</h4>
            <p>
              <span style={{marginRight: '10px'}}>Pause At</span>
              <input type='number' step='1' defaultValue='0'/>
            </p>
            <p>
              <span style={{marginRight: '16px'}}>Stop At </span>
              <input type='number' step='1' defaultValue='0'/>
            </p>
          </div>

          <div className='col-3'>
            <h4 className='runoptions-body-header'>Run Options</h4>
            <div className='row'>
              <div className='col-2'><ReactSVG svgClassName='svgButtons' src='src/resources/buttons/setup.svg'/></div>
              <div className='col-2'><ReactSVG svgClassName='svgButtons' src='src/resources/buttons/run.svg'/></div>
              <div className='col-2'><ReactSVG svgClassName='svgButtons' src='src/resources/buttons/step-run.svg'/></div>
              <div className='col-2'><ReactSVG svgClassName='svgButtons' src='src/resources/buttons/stop.svg'/></div>
              <div className='col-2'><ReactSVG svgClassName='svgButtons' src='src/resources/buttons/reset.svg'/></div>
            </div>
          </div>

          <div className='col-3'>
            <h4 className='runoptions-body-header'>Schedule Tick Delay</h4>
            <Slider min={0} max={100} defaultValue={0} step={1}
                    handle={handle} marks={marks}
                    style={{margin: '30px 0'}}
            />
          </div>

          <div className='col-3'>
            <h4 className='runoptions-body-header'>Sparkline Options</h4>
            <p>
              <span style={{marginRight: '10px'}}>Sparkline Points</span>
              <input type='number' step='1' defaultValue='0'/>
            </p>
            <p>
              <input type='checkbox' checked={true}/>
              <span style={{marginLeft: '10px'}}>Sparklines are Drawn as Line Graphs</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}