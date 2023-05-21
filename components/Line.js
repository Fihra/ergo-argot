import { Text, View} from 'react-native';

const Line = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
    </View>
  )
};

export default Line;
