import React, { Component, PropTypes } from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Modal,
  TouchableOpacity
} from 'react-native'
import { getFontSize, dynamicSize } from '../../utils/DynamicSize'
import { VIEWPORT } from '../../constants'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ModalBox extends Component {

  renderHeading () {
    const { cancellationFee } = this.props
    if (cancellationFee > 0) {
      return (
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}> {'ARE YOU SURE?'} </Text>
          <Text style={styles.headingText}>
            A <Text style={{ color: '#EAA0B3' }}>${cancellationFee}</Text> cancellation fee
          </Text>
          <Text style={styles.headingText}> {'will be charged to your card'} </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}> {'ARE YOU SURE?'} </Text>
        </View>
      )
    }
  }

  render () {
    const { showModal, onCancel, onApply } = this.props
    return (
      <Modal
        animationType={'fade'}
        transparent
        visible={showModal}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.closeX}>
              <TouchableOpacity
                onPress={onCancel}
                style={styles.closeButton}
                >
                <Icon
                  name={'ios-close'}
                  size={40}
                  color={'#666'}
                  backgroundColor={'transparent'}
                  style={styles.img}
                  />
              </TouchableOpacity>
            </View>
            {this.renderHeading()}
            <View style={styles.buttonsContainer}>
              <TouchableHighlight
                onPress={onApply}
                style={styles.cancelButtonStyle}>
                <Text style={styles.cancelButtonText}>YES, I NEED TO RESCHEDULE</Text>
              </TouchableHighlight>
            {/* <TouchableHighlight
                onPress={onCancel}
                style={styles.noCancelButton}
              >
                <Text style={styles.noCancelText}>NO</Text>
              </TouchableHighlight>
            */}
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

// PropTypes and default props
ModalBox.defaultProps = {

}

ModalBox.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  cancellationFee: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    // backgroundColor: 'lightgreen',
    justifyContent: 'center'
  },
  innerContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: dynamicSize(25),
    borderWidth: 1,
    borderColor: '#9B9B9B',
    shadowColor: '#000000',
    shadowRadius: 12,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 15},
  },
  headingContainer: {
    paddingVertical: dynamicSize(25),
    alignItems: 'center'
  },
  headingText: {
    // marginTop: 4,
    color: '#5B5D68',
    fontSize: getFontSize(18),
    textAlign: 'center'
  },
  buttonsContainer: {
    paddingBottom: dynamicSize(35),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButtonStyle: {
    paddingVertical: dynamicSize(13),
    paddingHorizontal: dynamicSize(25),
    // borderRadius: dynamicSize(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5B5D68',
    borderWidth: 1,
    marginRight: dynamicSize(10)
  },
  cancelButtonText: {
    fontSize: getFontSize(14),
    color: '#5B5D68'
  },
  noCancelButton: {
    marginLeft: dynamicSize(10),
    borderRadius: dynamicSize(4),
    backgroundColor: '#FBD6CA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dynamicSize(13),
    paddingHorizontal: dynamicSize(40)
  },
  noCancelText: {
    fontWeight: '500',
    fontSize: getFontSize(14),
    color: 'white'
  },
  closeButton: {
    // alignItems: 'center',
    // justifyContent: 'flex-end'
  },
  closeX: {
    // height: VIEWPORT.height * 0.000001,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    marginRight: 15,
    // backgroundColor: 'pink'
  },
})
