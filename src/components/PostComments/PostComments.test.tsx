import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Post from './'; 

describe('Teste para a inserção de dois comentários', () => {
  test('Deve inserir dois comentários corretamente', () => {
    render(<Post />);

    
    const textArea = screen.getByTestId('campo-tarefa');

    
    fireEvent.change(textArea, { target: { value: 'Primeiro Comentário' } });
    fireEvent.click(screen.getByTestId('btn-cadastrar'));

    
    fireEvent.change(textArea, { target: { value: '' } });

    
    fireEvent.change(textArea, { target: { value: 'Segundo Comentário' } });
    fireEvent.click(screen.getByTestId('btn-cadastrar'));

    
    expect(screen.getByText('Primeiro Comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo Comentário')).toBeInTheDocument();
  });
});
