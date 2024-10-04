import React, { useState } from 'react';

function App() {
  // Состояние для хранения списка задач и текста новой задачи
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Функция для обработки добавления новой задачи
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Функция для удаления задачи
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Todoist React</h1>

      {/* Форма для добавления новой задачи */}
      <div style={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите задачу..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Добавить</button>
      </div>

      {/* Отображение списка задач */}
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            {task}
            <button onClick={() => removeTask(index)} style={styles.removeButton}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Простое оформление стилей для приложения
const styles = {
  container: {
    width: '1000px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  input: {
    padding: '8px',
    width: '100%',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '8px 12px',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    marginBottom: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px'
  }
};

export default App;
