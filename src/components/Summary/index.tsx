import { Container } from './styles';

import depositImg from '../../assets/deposit.svg';
import withdrawImg from '../../assets/withdraw.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
          <div>
              <header>
                  <p>Entradas</p>
                  <img src={depositImg} alt='Entradas'/>
              </header>
              <strong>R$1000</strong>
          </div>
          <div>
              <header>
                  <p>Saidas</p>
                  <img src={withdrawImg} alt='Saidas'/>
              </header>
              <strong>R$500</strong>
          </div>
          <div className='highlight-background'>
              <header>
                  <p>Total</p>
                  <img src={totalImg} alt='Total'/>
              </header>
              <strong>R$500</strong>
          </div>
    </Container>
  );
}