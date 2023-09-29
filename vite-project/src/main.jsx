import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



const anotherElement = (
  <a href="https://www.google.com" target='_blank'>visit to google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com'},
  'Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <reactElement /> 
)
