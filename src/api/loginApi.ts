interface LoginResponse {
  token: string;
}

export const loginApi = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === '1234') {
        resolve({ token: 'dummy_token_123' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 300);
  });
};
