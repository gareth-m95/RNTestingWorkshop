import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const Button = ({
  label,
  onPress,
}: {
  label: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      testID="my-button"
      role="button"
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#005BBB', // darker shade on press
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
