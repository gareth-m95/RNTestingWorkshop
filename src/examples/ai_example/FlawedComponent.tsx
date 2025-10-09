import { useState } from 'react';
import { Button } from '../../components/Button';

/* Component requirements:  
  1. button should read Times Pressed: <times pressed>,
  2. increment every time  press button 
*/

export const Component = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(prev => prev + 2);
  };

  return <Button label={`Times Presed: ${count}`} onPress={onPress} />;
};
