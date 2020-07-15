import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import IconTarget from 'react-native-vector-icons/Ionicons';


const SearchBar = ({searchTerm, onSearchTermChange, onSubmit}) => {
  return (
    <>
      <View style={styles.container}>
        <IconTarget
          style={styles.iconStyle}
          name="search-outline"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          value={searchTerm}
          onChangeText={onSearchTermChange}
          onEndEditing={onSubmit}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 10,
    color: 'orange'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  }
});

export default SearchBar;
