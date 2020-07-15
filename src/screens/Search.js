import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import SearchBar from '../components/SearchBar';
import useTodos from '../hooks/useTodos';
import TodosList from '../components/TodosList';


const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchApi, todos, error] = useTodos();

  const filterTodosByCompleted = completed => {
    return todos.filter(t => t.completed === completed);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <SearchBar 
          searchTerm={searchTerm}
          onSearchTermChange={newSearch => setSearchTerm(newSearch)}
          onSubmit={searchApi}
        />

        <Text>We have found {todos.length} todos</Text>
        {error && <Text style={{color: 'red'}}>{error}</Text>}


        <TodosList 
          title="All Todos"
          todos={todos}
        />
        <TodosList 
          title="Current Todos"
          todos={filterTodosByCompleted(false)}
        />
        <TodosList 
          title="Completed Todos"
          todos={filterTodosByCompleted(true)}
        />

        <View style={styles.line} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: 'orange',
    height: 1,
    margin: 10
  }
});

export default Search;
