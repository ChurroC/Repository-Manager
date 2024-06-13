import { DragDropProvider, useDraggable } from "@dnd-kit/react";

export function Draggable() {
    const { ref } = useDraggable({
        id: "draggable"
    });

    return (
        <DragDropProvider>
            <button ref={ref}>Draggable</button>
        </DragDropProvider>
    );
}
