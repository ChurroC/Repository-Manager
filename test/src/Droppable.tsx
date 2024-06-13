import { DragDropProvider, useDroppable } from "@dnd-kit/react";

export function Droppable({ id, children }) {
    const { ref } = useDroppable({
        id
    });

    return (
        <DragDropProvider>
            <div ref={ref} style={{ width: 300, height: 300 }}>
                {children}
            </div>
        </DragDropProvider>
    );
}
