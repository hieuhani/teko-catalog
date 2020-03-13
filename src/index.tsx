import React from 'react'
import ReactDOM from 'react-dom'
import { setup } from './helpers/service-worker'
import App from './App'
import './assets/bootstrap-reboot.css'

ReactDOM.render(<App />, document.getElementById('root'))

setup()
