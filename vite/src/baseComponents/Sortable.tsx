import { useSortable } from "@dnd-kit/react/sortable";

export function Sortable({
    id,
    index
}: {
    id: string | number;
    index: number;
}) {
    const { ref } = useSortable({ id, index });

    return (
        <li
            ref={ref}
            className="m-1 w-52 text-nowrap rounded bg-stone-900 px-2 text-center text-white"
        >
            Item {id}
        </li>
    );
}
