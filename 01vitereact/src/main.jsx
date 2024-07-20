import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
        <h1>Custom App!</h1>
        </div>
    )
}
// const reactElement = {
//     type : 'a',
//    //props is Object, having key value pair
//    props : {
//        href: 'https://google.com',
//        target: '_/blank'
//    },
//    children:'Click me to visit Google'
// }

const anotherElement = (
    <a href = "https://google.com" target='_/blank'>Visit Google</a>
)

const reactElement = React.createElement(
    // first parameter is expected to be tag ( p, header, a)
    'a',
    // second parameter is expected to be an object(key value pair or attributes) inside of {}
    {href : 'https://google.com', target:'_blank'},
    //third parameter should be direct text
    'Click me to visit Google'
    // Fourth is Evaluated Expression
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
)
 