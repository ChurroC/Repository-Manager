import type RepoType from "@/types/repo";
import { Repo } from "@/components/Repo";

export async function Repos() {
    // check for not foudn latyer
    const repos = (await (
        await fetch("https://api.github.com/users/churroc/repos")
    ).json()) as RepoType[];

    console.log(repos);

    return (
        <>
            <ul className="flex flex-wrap justify-center">
                {repos.map(repo => (
                    <li
                        key={repo.id}
                        className="m-1 w-fit text-nowrap rounded bg-stone-900 px-2 text-white"
                    >
                        <a href={repo.html_url} className=" ">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
