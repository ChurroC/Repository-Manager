import { DragDropProvider } from "@dnd-kit/react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { Sortable } from "./Sortable";

function App() {
    const items = [2, 1, 4, 3];
    return (
        <DragDropProvider>
            <Draggable></Draggable>
            <Droppable>s</Droppable>
            <ul>
                {items.map((id, index) => (
                    <Sortable key={id} id={id} index={index} />
                ))}
            </ul>
        </DragDropProvider>
    );
}

export default App;
