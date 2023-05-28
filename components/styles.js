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
        padding: 5,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: -20
      },
      urbanContainer: {
        maxHeight: 180,
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
      },
      listButton: {
        justifyContent: 'flex-end',
        paddingHorizontal: 50
      }
});

export default styles;