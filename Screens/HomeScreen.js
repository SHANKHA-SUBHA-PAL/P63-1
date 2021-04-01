import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Homescreen extends React.Component {

  constructor() {

    super()

    this.state = {

      text: "",
      isSearchedPressed: false,
      word: "",
      lexicalCategory: null,
      examples: [],
      definition: null

    }

  }


  getWord = (word) => {

    var searchKeyword = word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"

    return fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return data.json()
        }
        else 
        {
          return null
        }
      })
      .then((response) => {

        var responseObject = response

        if (responseObject) {

          var wordData = responseObject.definition[0]
          var definition = wordData.description
          var lexicalCategory = wordData.wordtype
console.log(responseObject.definition[0])

          this.setState({

            "word": this.state.text,
            "definition": definition,
            "lexicalCategory": lexicalCategory

          })
        }
        else {
          this.setState({

            "word": this.state.text,
            "definition": "NOT FOUND",

          })
        }
      })
  }
  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: '',
              examples: [],
              definition: ""
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity

          onPress={() => {

            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text)

          }}

        >
          <Text>SEARCH</Text>
        </TouchableOpacity>

        <View>
          <Text>WORD:{''}</Text>
          <Text>{this.state.word}</Text>
        </View>
        <View> 
          <Text>TYPE:{''}</Text>
          <Text>{this.state.lexicalCategory}</Text>
          </View>
        <View> 
          <Text>DEFINITION:{''}</Text>
          <Text>{this.state.definition}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abff19',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: "20%",
    height: 35,
    alignSelf: 'center',
    borderColor: '#ff7f50',
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 20,
    padding: 10,


  }

});
