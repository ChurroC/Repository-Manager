"use client";
import { DragDropProvider, useDraggable } from "@dnd-kit/react";

export function Drag() {
    const { ref } = useDraggable({
        id: "draggable"
    });

    return (
        <DragDropProvider>
            <button
                ref={ref}
                className="m-1 w-52 text-nowrap rounded bg-stone-900 px-2 text-center text-white"
            >
                Dropable
            </button>
        </DragDropProvider>
    );
}
