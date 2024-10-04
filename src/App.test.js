import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('To-Do List App', () => {
  test('Отображение заголовка "Список задач (To-Do List)"', () => {
    render(<App />);
    const heading = screen.getByText(/Список задач/i);
    expect(heading).toBeInTheDocument();
  });

  test('Добавление новой задачи в список', () => {
    render(<App />);

    // Находим поле ввода и кнопку "Добавить"
    const input = screen.getByPlaceholderText(/Введите задачу.../i);
    const addButton = screen.getByText(/Добавить/i);

    // Вводим текст и кликаем на кнопку
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.click(addButton);

    // Проверяем, что задача добавлена в список
    const taskItem = screen.getByText('Новая задача');
    expect(taskItem).toBeInTheDocument();
  });

  test('Удаление задачи из списка', () => {
    render(<App />);

    // Находим поле ввода и кнопку "Добавить"
    const input = screen.getByPlaceholderText(/Введите задачу.../i);
    const addButton = screen.getByText(/Добавить/i);

    // Добавляем задачу
    fireEvent.change(input, { target: { value: 'Удаляемая задача' } });
    fireEvent.click(addButton);

    // Проверяем, что задача добавлена
    const taskItem = screen.getByText('Удаляемая задача');
    expect(taskItem).toBeInTheDocument();

    // Нажимаем на кнопку "Удалить" для этой задачи
    const deleteButton = screen.getByText(/Удалить/i);
    fireEvent.click(deleteButton);

    // Проверяем, что задача удалена
    expect(taskItem).not.toBeInTheDocument();
  });

  test('Не добавляется пустая задача', () => {
    render(<App />);

    // Находим кнопку "Добавить" без ввода текста
    const addButton = screen.getByText(/Добавить/i);
    fireEvent.click(addButton);

    // Проверяем, что список остается пустым
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });
});
