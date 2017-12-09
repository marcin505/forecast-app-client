import React, { Component } from 'react';
import { getUser } from 'api/github.js';
import './ApiTest.css';

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class ApiTest extends Component {
   constructor (props) {
      super(props)
      this.state = { user: {} }
   }

   componentDidMount () {
      getUser('vnglst').then(data => {
         this.setState({ user: data.entity })
      })
   }

   render () {
      const { user } = this.state
      return (
         <div className='api-test'>
            <div className="content-wrapper">
               <h1>this is API test</h1>
            </div>
            <ul style={{ listStyle: 'none' }}>
               {
                  // Loop over the object keys and render each key
                  Object.keys(user).map(key => renderLine(user, key))
               }
            </ul>
         </div>
      )
   }
}

export default ApiTest