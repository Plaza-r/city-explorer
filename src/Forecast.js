import React from 'react';


class Forcast extends React.Component {
  render() {
    return (
      <li className='py-2'>
        <p className='p-0 m-0 '>{this.props.date}</p>
        <p className='p-0 m-0 h3'>{this.props.description}</p>
      </li>

  )
}

}
export default Forcast;