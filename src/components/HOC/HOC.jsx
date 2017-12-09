import React, {Component} from 'react';

const HOC = (WrappedComponent) => {
   return class PP extends Component {
      constructor(props) {
         super(props)
         this.state = {
            nameHOC: ''
         };

      }

      onNameChangeHOC = (e) => {
         e.preventDefault();
         this.setState({nameHOC: e.target.value},
            () => console.log(this.state)
         );
      };

      render() {
         const newProps = {
            nameHOC: {
               value: this.state.name,
               onChange: this.onNameChangeHOC
            }
         };

         return <WrappedComponent {...newProps} {...this.props} />
      }
   }
};

export default HOC;
