import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { randomImages } from '../helpers';

const TodoDetail = ({todo}) => {
  return (
    <View style={styles.container}>
      <Image
        source={randomImages[todo.imageId]}
        style={styles.image}
      />
      <Text style={styles.title}>{todo.title}</Text>
      <Text>{todo.completed ? 'Completed' : 'Current'} Todo</Text>
      <Text>Rating: {todo.rating}, Reviews: {todo.reviews}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,

  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
  }
});

export default TodoDetail;
