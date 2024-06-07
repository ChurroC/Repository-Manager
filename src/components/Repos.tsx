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
                    <Repo key={repo.id} repo={repo} />
                ))}
            </ul>
        </>
    );
}
