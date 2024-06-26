import { MultipleSortable } from "./multipleSortable/MultipleSortable";

function App() {
    return (
        <main className="m-auto w-2/3 max-w-3xl bg-white/60 backdrop-blur">
            <h1 className="pt-10 text-center text-3xl tracking-tighter">
                Repo Manager
            </h1>
            <input
                type="text"
                className=" my-10 w-full rounded-md border-2 bg-neutral-50"
            />
            <MultipleSortable />
        </main>
    );
}

export default App;
