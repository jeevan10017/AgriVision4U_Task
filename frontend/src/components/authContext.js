import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around parts of your app that need access to the auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulating user login and setting up user details
  useEffect(() => {
    // Normally, you would fetch this from an authentication service
    const fetchUser = async () => {
      // Here you can make an API call to check the current user
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      } else {
        // Simulate a logged-in user for this example
        const fetchedUser = {
          email: 'testUser@example.com',
          username: 'testUser',
        };
        setUser(fetchedUser);
        localStorage.setItem('user', JSON.stringify(fetchedUser));
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
