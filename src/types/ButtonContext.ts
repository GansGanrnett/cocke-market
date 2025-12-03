import { createContext } from 'react';

type ButtonContextType = {
  text: string;
  onClick: () => void;
};

export const ButtonContext = createContext<ButtonContextType>({
  text: '',
  onClick: () => {},
});
