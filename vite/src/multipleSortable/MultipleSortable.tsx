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
        D: ["C0"]
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
            <div className="flex justify-around flex-wrap -ml-5 gap-y-5">
                {columnOrder.map((columnId, columnIndex) => (
                    <div className="basis-1/3 pl-5">
                        <Column
                            key={columnId}
                            id={columnId}
                            index={columnIndex}
                            className="flex flex-col rounded-md min-w-60 bg-neutral-100 opacity-70 border"
                        >
                            <div className="bg-white border-b pl-5 h-11 flex items-center justify-between">
                                {columnId}
                                <svg
                                    viewBox="0 0 20 20"
                                    width="12"
                                    className="fill-gray-800"
                                >
                                    <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
                                </svg>
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
                    </div>
                ))}
            </div>
        </DragDropProvider>
    );
}
