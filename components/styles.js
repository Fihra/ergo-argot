import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: "relative",
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        
      },
      title: {
        position: "absolute",
        top: 30,
        fontSize: 24,
        fontWeight: 'bold',
        color: "white",
      },
      button: {
        width: 100,
        height: 100,
        flex: 1,
        paddingTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }
});

export default styles;