import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  // Cria um mock para o window.alert
  const mockAlert = jest.fn();
  beforeAll(() => {
    window.alert = mockAlert;
  });

  it('deve exibir mensagem de boas-vindas ao clicar no botão', () => {
    render(<App />);
    const button = screen.getByText('Entrar');

    // Simula o clique no botão
    fireEvent.click(button);

    // Verifica se o alert foi chamado com a mensagem correta
    expect(mockAlert).toHaveBeenCalledWith('Bem-vindo ao Dio Bank!');
  });
});