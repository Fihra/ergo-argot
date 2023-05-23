import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import useWord from '../context/WordContext';

const WordCard = (props) => {
    const { deleteWord } = useWord();
    const { word } = props;

    const handleClick = () =>{
        console.log("Clicked item");
        deleteWord(word);
    }

    return (
        <Text>
            {word}<Text onPress={handleClick}><FontAwesomeIcon icon={faX} style={{paddingRight: 12, color: "red"}}/></Text>
        </Text> 
    )
};

export default WordCard;
