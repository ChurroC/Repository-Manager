import type RepoType from "nextjs/src/types/repo";
import { Repo } from "nextjs/src/components/Repo";

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
