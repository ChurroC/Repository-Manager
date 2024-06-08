"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Item } from "./Item";

export function SortableItem({ id }: { id: string | number }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
            a
        </Item>
    );
}
