import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
} from 'react';

const UserContext = createContext<{
  businessName: string | undefined;
  email: string | undefined;
  country: string | undefined;
}>({
  businessName: undefined,
  email: undefined,
  country: undefined,
});

export const UserContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <UserContext.Provider
      value={{
        businessName: 'Noam Test',
        email: 'noam@test.com',
        country: 'GB',
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): {
  businessName: string | undefined;
  email: string | undefined;
  country: string | undefined;
} => {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error(
      'The `useUserContext` hook must be called from a descendent of the `UserContext`.'
    );
  }

  return ctx;
};
