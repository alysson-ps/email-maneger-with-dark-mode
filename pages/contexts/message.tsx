import React, { createContext, useState, FC } from 'react';

const MessageContext = createContext<IContext>({
  data: [],
  setData: data => console.log('inital'),
});

export const MessageProvider: FC = ({ children }) => {
  const [data, setData] = useState<Array<IMessage> | []>([]);
  return (
    <MessageContext.Provider value={{ data: data, setData }}> {children} </MessageContext.Provider>
  );
};

export default MessageContext;
