"use client";
import { useState } from "react";
import {
    closestCenter,
    DndContext,
    DragOverlay,
    type DragStartEvent,
    type DragEndEvent,
    type DropAnimation,
    defaultDropAnimationSideEffects
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { Item } from "./Item";
import { InPortal } from "@/util/inPortal";

const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: "0.5"
            },
            dragOverlay: {
                backgroundColor: "red"
            }
        }
    })
};

export function SortableComponent() {
    // Get data on server and just pass down once since we do not need to refetch
    // Also modify the data to be represented using id as object like below
    // makeu sure id is a string
    const githubApiData: Record<string, string> = {
        "388": "bob",
        "237": "test",
        "239": "9"
    };

    const [activeId, setActiveId] = useState<string | null>(null);
    // Got to have array in same order as rendered
    const [items, setItems] = useState(Object.keys(githubApiData));

    return (
        <DndContext
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
                        {githubApiData[id]}
                    </SortableItem>
                ))}
            </SortableContext>
            <InPortal>
                <DragOverlay dropAnimation={dropAnimation}>
                    {activeId ? <Item>{githubApiData[activeId]}</Item> : null}
                </DragOverlay>
            </InPortal>
        </DndContext>
    );

    function handleDragStart(event: DragStartEvent) {
        setActiveId(event.active.id.toString());
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems(items => {
                const oldIndex = items.indexOf(active.id.toString());
                const newIndex = items.indexOf(over?.id.toString() ?? "");

                // If we moved the item to another position we move the id's in the array to match the indexes we moved it to
                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }
}
