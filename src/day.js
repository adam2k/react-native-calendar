/**
 * day.js
 * @flow
 */

import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

export default class Day extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.data.day.active
    }
  }
  _onPressButton = () => {
    this.setState({active: !this.state.active})
    this.props.updateManager(this.props.data.key)
  }

  _deactivate = () => {
    this.setState({active: false})
  }

  render () {
    console.log(this.props.data.day)
    if (this.props.data.day === 0) {
      return (<View style={{width: this.props.size.day.width}} />)
    }

    let active
    if (this.state.active) {
      active = {
        backgroundColor: '#d3d3d3'
      }
    }
    return (
      <TouchableOpacity
        onPress={this._onPressButton}
        underlayColor={'#d3d3d3'}
        style={[this.styles.touch, active]}
        disabled={this.props.data.disabled}
      >
        <Text style={this.styles.text}>
          {`${this.props.data.day}`}
        </Text>
      </TouchableOpacity>
    )
  }

  styles = {
    text: {
      top: 8,
      textAlign: 'center',
      height: this.props.size.day.height,
      fontSize: this.props.size.day.fontSize
    },
    touch: {
      width: this.props.size.day.width,
      height: this.props.size.day.height,
      borderRadius: this.props.size.day.height,
      overflow: 'hidden'
    }
  }
}
