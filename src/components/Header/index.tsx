
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

// HeaderProps Interface
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}


// Header for the application
export function Header({ onOpenNewTransactionModal }: HeaderProps) {


  return (
      <Container>
        <Content>
          <img src={logoImg} alt='dtmoney' />
          <button type='button'
            onClick={onOpenNewTransactionModal}
          >
            Nova transação
          </button>
        
      </Content>
    </Container>
  );
}