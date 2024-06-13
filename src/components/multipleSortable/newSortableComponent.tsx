"use client";
import { DragDropProvider, useDraggable } from "@dnd-kit/react";
import { useState } from "react";

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
export function NewSortableComponent() {
    const targets = ["A", "B", "C"];
    const [target, setTarget] = useState();
    const draggable = <Draggable>Drag me</Draggable>;

    return <DragDropProvider>{draggable}</DragDropProvider>;
}
/*"use client";
import { DragDropProvider, useDraggable, useDroppable } from "@dnd-kit/react";
import { useState } from "react";

function Draggable({ children }) {
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

function Droppable({ id, children }) {
    const { ref } = useDroppable({
        id
    });

    return (
        <div
            ref={ref}
            style={{ width: 300, height: 300 }}
            className="m-1 w-fit text-nowrap rounded bg-stone-900 px-2 text-white"
        >
            {children}
        </div>
    );
}

export function NewSortableComponent() {
    const targets = ["A", "B", "C"];
    const [target, setTarget] = useState();
    const draggable = <Draggable>Drag me</Draggable>;

    return <DragDropProvider>{draggable}</DragDropProvider>;
}
*/
