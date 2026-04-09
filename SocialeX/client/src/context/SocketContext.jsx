import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketContextProvider');
  }
  return context;
};

export const SocketContextProvider = ({ children, user }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Only establish connection if a user is authenticated
    if (user) {
      // Connect to the WebSocket backend server
      const newSocket = io('http://localhost:5000', {
        query: {
          userId: user._id, // Pass user ID securely on connection if required
        },
      });

      setSocket(newSocket);

      // Verify connection on the client terminal
      newSocket.on('connect', () => {
        console.log('Successfully connected to Socket SERVER with ID:', newSocket.id);
      });

      // Cleanup mechanism on unmount
      return () => {
        newSocket.disconnect();
      };
    } else {
      // Terminate connection if the user logs out
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [user]); // Re-run whenever user status updates

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
