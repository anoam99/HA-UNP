import {
  AppWrapper,
  Footer,
  Header,
  ModalContainer,
} from './components';
import { PaymentLinkGenerator } from './pages';

function App() {
  return (
    <AppWrapper>
      <Header />
      <PaymentLinkGenerator />
      <Footer />
      <ModalContainer />
    </AppWrapper>
  );
}

export default App;
