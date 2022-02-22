import './Model.css'
import ReactDOM from 'react-dom'

export default function Model({ children, handleSwitch }) {
  return ReactDOM.createPortal((
    <div className='model-backdrop'>
      <div className='model'>
        {children}
        <button onClick={handleSwitch}>Close</button>
      </div>
    </div>
  ), document.body)
}
