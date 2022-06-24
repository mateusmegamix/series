import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import styles from './styles';

NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  toggleIsExpanded() {
    const {isExpanded} = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  render() {
    const {label = '', content = '-'} = this.props;
    const {isExpanded} = this.state;
    return (
      <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{label}</Text>
        <TouchableWithoutFeedback onPress={() => this.toggleIsExpanded()}>
          <View>
            <Text
              style={[
                styles.cell,
                styles.content,
                isExpanded ? styles.expanded : styles.collapsed,
              ]}>
              {content}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
