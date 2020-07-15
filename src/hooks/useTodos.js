import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { getUpgradedTodos } from '../helpers';

export default () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const searchApi = async () => {
    try {
      const response = await api.get('/todos');
      let upgradedTodos = getUpgradedTodos(response.data);
      
      setTodos(upgradedTodos);
      setError(null);
    } catch (err) {
      setError('Something went wrong. Error with \'searchApi\'')
    }
  }

  useEffect(() => {
    searchApi();
  }, [])

  return [
    searchApi,
    todos,
    error
  ];
}
