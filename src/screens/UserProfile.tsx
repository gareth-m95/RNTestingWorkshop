import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { followUser, fetchUserData, User } from '../api/userApi';

interface UserProfileProps {
  userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [following, setFollowing] = useState<boolean>(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserData(userId);
        setUser(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  const handleFollow = () => {
    followUser(userId);
    setFollowing(true);
  };

  if (loading) {
    return <ActivityIndicator testID="loading" />;
  }

  return (
    <View>
      <Text testID="username">{user?.name}</Text>
      <Button
        title={following ? 'Following' : 'Follow'}
        onPress={handleFollow}
        testID="follow-button"
      />
    </View>
  );
};

export default UserProfile;
