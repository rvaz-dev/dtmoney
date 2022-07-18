import { Container } from './styles';
import { Summary } from '../Summary';
import { Transactionstable } from '../Transactionstable';

// Componente Dashboard
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transactionstable />
    </Container>
  );
}

