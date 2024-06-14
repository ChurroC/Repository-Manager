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
        C: []
    });
    const previousItems = useRef(items);
    const [columnOrder, setColumnOrder] = useState(Object.keys(items));

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
                const { source, target } = event.operation;

                if (event.canceled) {
                    if (source?.type === "item") {
                        setItems(previousItems.current);
                    } else if (source?.type === "column") {
                        setColumnOrder(Object.keys(previousItems.current));
                    }
                    return;
                }
            }}
        >
            <div className="Root">
                {columnOrder.map((columnId, columnIndex) => (
                    <Column key={columnId} id={columnId} index={columnIndex}>
                        {console.log(columnId, columnIndex)}
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

/*

            <div className="Root">
                {columnOrder.map((columnId, columnIndex) => (
                    <Column key={columnId} id={columnId} index={columnIndex}>
                        {console.log(columnId, columnIndex)}
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
            */
