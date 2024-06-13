import { useState } from "react";
import "./App.css";

function App() {
    return (
        <div>
            <NewSortableComponent />
        </div>
    );
}

export default App;

import { DragDropProvider, useDraggable } from "@dnd-kit/react";

export function Draggable({ children }) {
    const { ref } = useDraggable({
        id: "draggable"
    });

    return (
        <button
            ref={ref}
            className="m-1 w-52 text-nowrap rounded bg-stone-900 px-2 text-center text-white"
        >
            {children}
        </button>
    );
}
function NewSortableComponent() {
    const targets = ["A", "B", "C"];
    const [target, setTarget] = useState();
    const draggable = <Draggable>Drag me</Draggable>;

    return <DragDropProvider>{draggable}</DragDropProvider>;
}
