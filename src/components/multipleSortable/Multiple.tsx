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
        A: {
            388: "bob",
            237: "test",
            239: "9"
        },
        B: {
            234: "afwdw",
            300: "test",
            233: "ww"
        }
    };

    const githubItems: Record<string, string[]> = {
        A: ["388", "237", "239"],
        B: ["234", "300", "233"]
    };
    const [items, setItems] = useState(githubItems);
    console.log(items);
    // Ideas above fro onique id's
    // but what if for each item I have a list of all the containers their in and real id is a mix of container and id

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={({ active, over }) => {
                const oldContainer = Object.keys(items).find(key =>
                    items[key]!.includes(active.id.toString())
                );
                const newContainer = Object.keys(items).find(key =>
                    items[key]!.includes(over?.id.toString() ?? "")
                );

                if (!over || !oldContainer || !newContainer) {
                    return;
                }
                if (active.id !== over.id) {
                    setItems(items => ({
                        ...items,
                        [newContainer]: arrayMove(
                            items[newContainer]!,
                            items[oldContainer]!.indexOf(active.id.toString()),
                            items[newContainer]!.indexOf(over.id.toString())
                        )
                    }));
                }
                console.log({
                    ...items,
                    [newContainer]: arrayMove(
                        items[newContainer]!,
                        items[oldContainer]!.indexOf(active.id.toString()),
                        items[newContainer]!.indexOf(over.id.toString())
                    )
                });
            }}
            onDragOver={({ active, over }) => {
                const oldContainer = Object.keys(items).find(key =>
                    items[key]!.includes(active.id.toString())
                );
                const newContainer = Object.keys(items).find(key =>
                    items[key]!.includes(over?.id.toString() ?? "")
                );

                if (!over || !oldContainer || !newContainer) {
                    return;
                }
                if (active.id !== over.id) {
                    setItems(items => ({
                        ...items,
                        [newContainer]: arrayMove(
                            items[newContainer]!,
                            items[oldContainer]!.indexOf(active.id.toString()),
                            items[newContainer]!.indexOf(over.id.toString())
                        )
                    }));
                }
                console.log({
                    ...items,
                    [newContainer]: arrayMove(
                        items[newContainer]!,
                        items[oldContainer]!.indexOf(active.id.toString()),
                        items[newContainer]!.indexOf(over.id.toString())
                    )
                });
            }}
        >
            <div className="flex">
                {Object.entries(items).map(([containerKey, containerValue]) => (
                    <SortableContext
                        items={containerValue}
                        strategy={verticalListSortingStrategy}
                        key={containerKey}
                    >
                        <div>
                            {containerValue.map(id => (
                                <SortableItem key={id} id={id}>
                                    {githubApiData?.[containerKey]?.[id]}
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>
                ))}
            </div>
        </DndContext>
    );
}
/*
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

// Get data on server and just pass down once since we do not need to refetch
// Also modify the data to be represented using id as object like below
// makeu sure id is a string
const githubApiData: Record<
    string,
    {
        value: string;
        containers: string[];
    }
> = {
    388: {
        value: "bob",
        containers: ["A"]
    },
    237: {
        value: "test",
        containers: ["A", "B"]
    },
    239: {
        value: "9",
        containers: ["B"]
    },
    234: {
        value: "afwdw",
        containers: ["B"]
    },
    233: {
        value: "ww",
        containers: ["B"]
    }
};

export function MultipleSortableComponent() {
    const [items, setItems] = useState(githubApiData);

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
            <div className="flex">
                {Object.entries(githubItems).map(
                    ([itemKey, {value, containers}]) => (
                        <SortableContext
                            items={itemValue.cont}
                            strategy={verticalListSortingStrategy}
                            key={itemKey}
                        >
                            <div>
                                {containerValue.map(id => (
                                    <SortableItem key={id} id={id}>
                                        {githubApiData[containerKey][id]}
                                    </SortableItem>
                                ))}
                            </div>
                        </SortableContext>
                    )
                )}
            </div>
        </DndContext>
    );
}
*/
/*"use client";
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
            300: "test",
            233: "ww"
        }
    };

    // Got to have array in same order as rendered
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
    const githubItems = {
        cont1: ["388", "237", "239"],
        cont2: ["234", "300", "233"]
    };
    // maybe have other id just have key value pairs for id and this other that shows where catwegories are
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
            <div className="flex">
                {Object.entries(githubItems).map(
                    ([containerKey, containerValue]) => (
                        <SortableContext
                            items={containerValue}
                            strategy={verticalListSortingStrategy}
                            key={containerKey}
                        >
                            <div>
                                {containerValue.map(id => (
                                    <SortableItem key={id} id={id}>
                                        {githubApiData[containerKey][id]}
                                    </SortableItem>
                                ))}
                            </div>
                        </SortableContext>
                    )
                )}
            </div>
        </DndContext>
    );
}
*/
