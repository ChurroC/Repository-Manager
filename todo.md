# Repository-Manager

Create a way for me to make lists of random repositoryes and a section for my own repos. This will help me replace the system I have now where I star all my projects and you the star list thing to order them.

Simple one page app.\
Github auth login\
Local sotrage to save info.\
Have multiple sections hotdog style that you can drag repos into. Propabably with the drag and drop api.\
Like project except with repos.\
You can also accses setting on the top rioght which opens up a popup menu.\
You can have a big search bar up top. This has a debounce timer probabaly lie Josh's\
You can add an item to many "folder" long johns.\
You can filter through each infividual folder with a search within which can come out through a ... on the top right of the folder. Just liek project in github.\
You can also like spotify right click and choose all the folder it's going to be in but checkmark style unlike spotify.\
Add an blank slot where it's an idea for a repo that hasn't been made yet. Or just do what I alreayd do and have a section for repos that haven't ebeen started.\
Add a database to keep github profile and their sleection together. Probabaly easy to do with a json text with section then repo for each or have the inverse and have all the sleection for a specific repo.\
For the database I coud either have it based of a speicifc repo and all the categories it's in and fill it in or do the opposite and fill in eachcategory at a time. It might be better to do speicfic repo if one category takes longer than the other.\
I'm thinking of doing multiple calls for each repo which makes the page seem like the data slowly flooding in but it might take longer and more requests. The problem with the other method of getting allt he data in one requets is it puts the user in fornt of a blank screen for longer.\
Also the repos that haven't been put into a category would appaear up top but we only figrue out what repos are not in categories after we send a call to gtihub and find differences between opr data and github. The problem with this is that these repo are going to load in last even though their up top.

Figured it out. I need repo to category to match any repos that have been delted.\
This is because first I would call github and find all the repos he's in. Then I randomly start trying to ping the user db for each repo. If a repo is in a category then it goes into that category else it goes to the top with category section.\
Then if any repo was deleted it wouldn't be asked for data so I coudl rewrite the entire repo db for that user with the current info.\
Shoudl I save all the repos that don't have category in db?
