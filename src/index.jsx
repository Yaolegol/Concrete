// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'app/index.jsx'
import { store } from 'app/store.jsx'
import 'styles/index.less'

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
