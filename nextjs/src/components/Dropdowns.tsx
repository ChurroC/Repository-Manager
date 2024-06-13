"use client";

import {
    DndContext,
    useDraggable,
    useDroppable,
    type DragEndEvent
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";

export function Dropdowns() {
    const [isDropped, setIsDropped] = useState(false);

    return (
        <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? <Draggable /> : null}
            <Droppable>{isDropped ? <Draggable /> : "Drop here"}</Droppable>
        </DndContext>
    );

    function handleDragEnd(event: DragEndEvent) {
        if (event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }
}

function Draggable() {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: "unique-id"
    });
    const style = {
        transform: CSS.Translate.toString(transform)
    };

    return (
        <button
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="m-1 w-fit text-nowrap rounded bg-stone-900 px-2 text-white"
        >
            Draggable
        </button>
    );
}

function Droppable({ children }: { children: React.ReactNode }) {
    const { setNodeRef } = useDroppable({
        id: "droppable"
    });

    return (
        <div ref={setNodeRef} className="size-52 bg-gray-100">
            Droppable
            {children}
        </div>
    );
}
