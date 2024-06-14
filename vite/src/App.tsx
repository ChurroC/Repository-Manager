import { DragDropProvider } from "@dnd-kit/react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { Sortable } from "./Sortable";
import { MultipleSortable } from "./multipleSortable/MultipleSortable";

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
            <MultipleSortable></MultipleSortable>
        </DragDropProvider>
    );
}

export default App;
