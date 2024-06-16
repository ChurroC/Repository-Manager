import { useRef, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import "./Styles.css";

import { Column } from "./Column";
import { Item } from "./Item";

export function MultipleSortable() {
    const [items, setItems] = useState({
        A: ["A0", "A1", "A2"],
        B: ["B0", "B1"],
        C: ["C0"],
        D: ["D0"],
        E: ["E0"],
        F: ["F0"],
        G: ["G0"],
        t: ["t0"]
    });
    const previousItems = useRef(items);
    const [columnOrder, setColumnOrder] = useState(
        Object.keys(items) as (keyof typeof items)[]
    );

    return (
        <DragDropProvider
            onDragStart={() => {
                previousItems.current = items;
            }}
            onDragMove={event => {
                const { source, target } = event.operation;
                if (source?.type === "item") {
                    return setItems(items => move(items, source, target));
                } else if (source?.type === "column") {
                    return setColumnOrder(column =>
                        move(column, source, target)
                    );
                }
            }}
            onDragEnd={event => {
                const { source } = event.operation;

                if (event.canceled) {
                    if (source?.type === "item") {
                        setItems(previousItems.current);
                    } else if (source?.type === "column") {
                        setColumnOrder(
                            Object.keys(
                                previousItems.current
                            ) as (keyof typeof items)[]
                        );
                    }
                    return;
                }
            }}
        >
            <div className="grid grid-cols-3 gap-5">
                {columnOrder.map((columnId, columnIndex) => (
                    <Column
                        id={columnId}
                        index={columnIndex}
                        className="flex flex-col rounded-md min-w-60 bg-neutral-100 opacity-70 border"
                        key={columnId}
                    >
                        <div className="bg-white border-b pl-5 h-11 flex items-center">
                            {columnId}
                        </div>
                        {items[columnId].map((id, index) => (
                            <Item
                                key={id}
                                id={id}
                                index={index}
                                column={columnId}
                            />
                        ))}
                    </Column>
                ))}
            </div>
        </DragDropProvider>
    );
}
