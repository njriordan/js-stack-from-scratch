// @flowtype

import { connect } from 'react-redux'

import { sayHello } from '../actions/hello'
import Button from '../components/button'

const mapStateToProps = () => ({
  label: 'Say hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello Niall!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
