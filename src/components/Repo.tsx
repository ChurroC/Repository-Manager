import type Repo from "@/types/repo";

export function Repo({ repo }: { repo: Repo }) {
    return (
        <li
            key={repo.id}
            className="m-1 w-fit text-nowrap rounded bg-stone-900 px-2 text-white"
        >
            <a href={repo.html_url} className=" ">
                {repo.name}
            </a>
        </li>
    );
}
