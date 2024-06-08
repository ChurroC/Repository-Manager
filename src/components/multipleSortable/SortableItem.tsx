"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Item } from "./Item";
import React from "react";

export function SortableItem({
    id,
    children
}: {
    id: string | number;
    children: React.ReactNode;
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isOver } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </Item>
    );
}
