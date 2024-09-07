import { PlusCircle } from '@phosphor-icons/react'
import {Header} from "./components/Header.tsx";
import {Button} from "./components/Button.tsx";
import { Input } from "./components/Input.tsx";

function App() {

    function handleAddTask(){
        console.log("Task added");
    }

  return (
    <main>
        <Header />
        <Input />
        <h1>Hello World</h1>
        <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </Button>

    </main>
  )
}

export default App
