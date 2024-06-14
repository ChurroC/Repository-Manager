"use client";
import { CollisionPriority } from "@dnd-kit/abstract";
import { useSortable } from "@dnd-kit/react/sortable";
import { closestCenter } from "@dnd-kit/collision";

export function Column({ children, id, index }) {
    // Basically allows us make this droppabel and ehck if items are being dragged over it
    // Since this is a colission proiotty low this won't be run if coloumn are drgaged over coloumn
    const { ref } = useSortable({
        id,
        index,
        type: "column",
        accept: ["item", "column"],
        collisionPriority: CollisionPriority.Low,
        collisionDetector: closestCenter
    });

    return (
        <div className="Column" ref={ref}>
            {children}
        </div>
    );
}
