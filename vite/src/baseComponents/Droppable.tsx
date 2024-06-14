import { useDroppable } from "@dnd-kit/react";

export function Droppable({ children }: { children: React.ReactNode }) {
    const { ref } = useDroppable({
        id: "id"
    });

    return (
        <div ref={ref} className="size-52 bg-gray-100">
            {children}
        </div>
    );
}
