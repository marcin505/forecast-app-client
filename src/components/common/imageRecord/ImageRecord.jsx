import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import han from 'assets/images/people/han_solo.png';

class ImageRecord extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    setNominatedPersonId: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const userId = `user-${this.props.user.get('id')}`;
    setTimeout(()=>{ReactDOM.findDOMNode(this.refs[userId]).style.opacity = '0.5'}, 200);
  }

  render() {
    const {user} =this.props;
    const id = user.get('id');
    const name = user.get('name');
    const surname = user.get('surname');
    return (
      <div className="image-record" ref={`user-${id}`} onClick={() => this.props.setNominatedPersonId(id)}>
        <h1 className="image-record__heading">{`${name} ${surname}`}</h1>
        <img className="image" src={han} alt="e2"/>
        <div className="arrow"/>
      </div>
    )
  };
}

export default ImageRecord;