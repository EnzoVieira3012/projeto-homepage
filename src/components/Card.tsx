import { Input, Center, Box, VStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Button } from './Button';

interface ICardProps {
  onLogin: (email: string) => void;
}

export const Card = ({ onLogin }: ICardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    onLogin(email);
  };

  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="25px"
      maxWidth="400px"
      margin="0 auto"
    >
      <Center>
        <Heading as="h2" size="lg" marginBottom="20px">
          Faça o Login
        </Heading>
      </Center>
      <VStack spacing={4}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} label="Entrar" />
      </VStack>
    </Box>
  );
};