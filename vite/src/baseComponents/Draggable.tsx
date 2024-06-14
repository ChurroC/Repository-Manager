import { useDraggable } from "@dnd-kit/react";

export function Draggable() {
    const { ref } = useDraggable({
        id: "draggable"
    });

    return (
        <button
            ref={ref}
            className="m-1 w-52 text-nowrap rounded bg-stone-900 px-2 text-center text-white"
        >
            Draggable
        </button>
    );
}
