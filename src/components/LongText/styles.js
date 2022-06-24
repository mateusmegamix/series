import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  line: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#C5C5C5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  content: {
    flex: 3,
    textAlign: 'justify',
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    paddingBottom: 8,
    color: 'black',
  },
  longLabel: {
    fontSize: 12,
    color: 'black',
  },
  collapsed: {
    maxHeight: 65,
    color: 'black',
  },
  expanded: {
    flex: 1,
    color: 'black',
  },
});

export default styles;
