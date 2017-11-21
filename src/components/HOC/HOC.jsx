import React, {Component} from 'react';

const HOC = (WrappedComponent) => {
   return class PP extends Component {
      constructor(props) {
         super(props)
         this.state = {
            nameHOC: ''
         };

      }

      onNameChangeHOC = (text) => {
         this.setState({nameHOC: text},
            () => console.log(this.state.nameHOC)
         );
      };

      render() {
         const newProps = {
            nameHOC: this.state.nameHOC,
            onNameChangeHOC: this.onNameChangeHOC,
         };
         return <WrappedComponent {...this.props} {...newProps}/>
      }
   }
};

export default HOC;
