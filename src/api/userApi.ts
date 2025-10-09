export interface User {
  id: string;
  name: string;
}

export const fetchUserData = async (userId: string): Promise<User> => {
  // pretend this calls a real API
  return { id: userId, name: 'John Doe' };
};

export const followUser = (userId: string): void => {
  console.log(`Followed user ${userId}`);
};
