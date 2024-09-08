import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header.tsx";
import { Button } from "./components/Button.tsx";
import { Input } from "./components/Input.tsx";
import { useState } from "react";

import styles from './App.module.css'

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) {
      return;
    }
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.container}>
          <Input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
