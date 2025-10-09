import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function DelayedMessage() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
