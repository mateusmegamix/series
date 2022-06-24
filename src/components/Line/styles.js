import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  content: {
    flex: 3,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
  longLabel: {
    fontSize: 12,
    color: 'black',
  },
});

export default styles;
