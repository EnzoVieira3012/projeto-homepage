import { Button as ChakraButton } from '@chakra-ui/react';

interface IButtonProps {
  onClick: () => void;
  label: string;
}

export const Button = ({ onClick, label }: IButtonProps) => {
  return (
    <ChakraButton onClick={onClick} colorScheme="teal" size="sm" width="100%" marginTop="5px">
      {label}
    </ChakraButton>
  );
};