import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import TodoDetail from '../components/TodoDetail';

const TodosList = ({title, todos}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={todos}
        keyExtractor={t => t.id.toString()}
        renderItem={({item}) => {
          return <TodoDetail todo={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default TodosList;
