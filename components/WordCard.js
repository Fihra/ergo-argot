import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const WordCard = (props) => {
    const { word } = props;
    return (
        <Text>
            {word}<Text><FontAwesomeIcon icon={faX} style={{paddingRight: 12, color: "red"}}/></Text>
        </Text> 
    )
};

export default WordCard;
