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
        top: 50,
        fontSize: 24,
        fontWeight: 'bold'
      },
      mainSection: {
        position: "absolute",
        top: 50
      }, 
      button: {
        width: 160,
        height: 80,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderRadius: 50,
      },
      urbanContainer: {
        maxHeight: 150,
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 50
      },
      listButton: {
        justifyContent: 'flex-end',
        paddingHorizontal: 50
      }
});

export default styles;