import { FC, PropsWithChildren } from 'react';
import { Card, Content, Wrapper } from './AppWrapper.styled';

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Card>
        <Content>{children}</Content>
      </Card>
    </Wrapper>
  );
};

export default AppWrapper;
