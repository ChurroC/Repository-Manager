"use client";
import { useSortable } from "@dnd-kit/react/sortable";

export function Item({ id, index, column }) {
    const { ref } = useSortable({
        id,
        index,
        type: "item",
        accept: "item",
        group: column
    });

    return (
        <button ref={ref} className="Item">
            {id}
        </button>
    );
}
