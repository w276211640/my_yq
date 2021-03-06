import {FunctionComponent} from 'react';
import {InfoDetail} from './InfoDetail';
import {Explain} from './Explain';
import {nameTool} from '../tools/nameTool';


export const LeaveInfo: FunctionComponent = function () {
  
  return (
    <div className='leaveinfo pass' >
      <form >
        <div className='info gcp'
             data-target='/'
             data-form='form1'
             style={{position: 'relative'}} >
          <div className='avatar'
               style={{width: '45px', height: '45px', fontSize: '17px'}} >
            {
              nameTool().slice(1)
            }
          </div >
          <div className='name' >
            <span id='name_1'
                  style={{fontSize: '16px'}} >
              {
                nameTool()
              }
            </span >
            <span style={{fontSize: '12px', color: '#cac0c0fa'}} >审批已通过</span >
          </div >
          <div className='weui-cell__ft' />
        </div >
      </form >
      <InfoDetail />
      <Explain />
    </div >
  )
}