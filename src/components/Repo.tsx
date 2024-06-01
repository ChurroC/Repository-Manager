import type Repo from "@/types/repo";

export function Repo({ repo }: { repo: Repo }) {
    return (
        <li className="">
            <a href={repo.html_url}>{repo.name}</a>
        </li>
    );
}
