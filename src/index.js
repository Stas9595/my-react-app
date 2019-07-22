import React from 'react'
import {render} from 'react-dom'

function Article() {
    const body = <section>body</section>
    return (
        <div className="App">
            <p>Hello</p>
            {body}
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article/>
        </div>
    )
}

render(<App/>, document.getElementById('root'));