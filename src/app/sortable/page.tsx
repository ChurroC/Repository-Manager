import { SortableComponent } from "@/components/multipleSortable/SortableComponent";
import { MultipleSortableComponent } from "@/components/multipleSortable/Multiple";

export default function Slots() {
    return (
        <main className="m-auto flex w-2/3 max-w-3xl flex-col items-center gap-4 bg-white/60 backdrop-blur">
            <h1 className="pt-10 text-center text-3xl tracking-tighter">
                Repo Manager
            </h1>
            <div>
                <SortableComponent />
            </div>
            <div>
                <MultipleSortableComponent />
            </div>
        </main>
    );
}
