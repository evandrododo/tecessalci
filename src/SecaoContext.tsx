import { createContext, ReactNode, useState } from 'react';

export const SecaoContext = createContext([] as any);

export const SecaoContextProvider = ({ children }: { children: ReactNode }) => {
  const [secaoAtiva, setSecaoAtiva] = useState(1)

  const setProximaSecaoAtiva = async () => {
      setSecaoAtiva(secaoAtiva + 1)
  };

  return (
    <SecaoContext.Provider
      value={{ secaoAtiva, setSecaoAtiva, setProximaSecaoAtiva }}
    >
      {children}
    </SecaoContext.Provider>
  );
};
