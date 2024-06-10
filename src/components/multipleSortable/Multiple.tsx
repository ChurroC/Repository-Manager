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

export function MultipleSortableComponent() {
    // Get data on server and just pass down once since we do not need to refetch
    // Also modify the data to be represented using id as object like below
    // makeu sure id is a string
    const githubApiData: Record<string, Record<string, string>> = {
        cont1: {
            388: "bob",
            237: "test",
            239: "9"
        },
        cont2: {
            234: "afwdw",
            237: "test",
            233: "ww"
        }
    };

    // Got to have array in same order as rendered
    /*
    items is gonna be
    {
        cont1: ["388", "237", "239"],
        cont2: ["234", "237", "233"]
    }
    maybe do this on the server
    const itemsData = {};
    Object.keys(githubApiData).forEach(
        key => (itemsData[key] = Object.keys(githubApiData[key]))
    );
    console.log(itemsData);
    */
    const githubItems = {
        cont1: ["388", "237", "239"],
        cont2: ["234", "300", "233"]
    };
    const [items, setItems] = useState(githubItems);
    // Ideas above fro onique id's
    // but what if for each item I have a list of all the containers their in and real id is a mix of container and id

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={({ active, over }: DragEndEvent) => {
                if (!over || active.id in items) {
                    return;
                }

                if (active.id !== over?.id) {
                    setItems(items => {
                        const oldIndex = items.indexOf(active.id.toString());
                        const newIndex = items.indexOf(
                            over?.id.toString() ?? ""
                        );

                        // If we moved the item to another position we move the id's in the array to match the indexes we moved it to
                        return arrayMove(items, oldIndex, newIndex);
                    });
                }
            }}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <div className="flex">
                    <div>
                        {items.map(id =>
                            id.startsWith("A") ? (
                                <SortableItem key={id} id={id}>
                                    {githubApiData[id]}
                                </SortableItem>
                            ) : null
                        )}
                    </div>
                    <div>
                        {items.map(id =>
                            id.startsWith("B") ? (
                                <SortableItem key={id} id={id}>
                                    {githubApiData[id]}
                                </SortableItem>
                            ) : null
                        )}
                    </div>
                </div>
            </SortableContext>
        </DndContext>
    );
}
