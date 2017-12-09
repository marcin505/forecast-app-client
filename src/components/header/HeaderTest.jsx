import React, { Component } from 'react'
import PropTypes from 'prop-types';

const TodoTextInput = () => (
   <div className="footer content-wrapper">
      <p>
         Copyright Copyright
      </p>
   </div>
);
class HeaderTest extends Component {
   handleSave(text) {
      if (text.length !== 0) {
         this.props.addTodo(text)
      }
   }

   render() {
      return (
         <header className="header">
            <h1>todos</h1>
            <TodoTextInput
               newTodo={true}
               onSave={this.handleSave.bind(this)}
               placeholder="What needs to be done?"
            />
         </header>
      )
   }
}

HeaderTest.propTypes = {
   addTodo: PropTypes.func.isRequired
};

export default HeaderTest;