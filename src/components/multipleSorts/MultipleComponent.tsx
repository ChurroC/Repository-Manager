"use client";
import { useState } from "react";
import {
    closestCenter,
    DndContext,
    DragOverlay,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragStartEvent,
    type DragEndEvent
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { Item } from "./Item";
import { InPortal } from "@/util/inPortal";

export function MultipleComponent() {
    const [activeId, setActiveId] = useState<string | null>(null);
    // Got to have array in same order as rendered
    const [items, setItems] = useState(["1", "2", "3"]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                {items.map(id => (
                    <SortableItem key={id} id={id}>
                        {id}
                    </SortableItem>
                ))}
            </SortableContext>
            <InPortal>
                <DragOverlay>
                    {activeId ? <Item>{activeId}</Item> : null}
                </DragOverlay>
            </InPortal>
        </DndContext>
    );

    function handleDragStart(event: DragStartEvent) {
        const { active } = event;

        setActiveId(active.id.toString());
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems(items => {
                const oldIndex = items.indexOf(active.id.toString());
                const newIndex = items.indexOf(over?.id.toString() ?? "");

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }
}
