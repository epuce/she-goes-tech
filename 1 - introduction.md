# Intro
- How familiar are you with development/coding?

- Our arsenal of weapons: vscode, terminal, git, JavaScrip, CSS, HTML and some others
- 10-15min break every 50min
- Don't be afraid to ask

## How to contact me:
- email: info.epuce@gmail.com
- discord: edm.puce#8897

# - Setup -

### Create a [discord profile](https://discord.com/)
* stream link: [link](https://discord.com/channels/997059705048412261/998607360400572526)
### Download visual studio code: [link](https://code.visualstudio.com/download)
### Create a github profile: [link](https://github.com/signup)
* Download git: [link](https://git-scm.com/downloads)

* Add the ssh key
    * run "ssh-keygen -t rsa -b 4096 -C "your_email@example.com" [link](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    * press enter on all the questions
    * run "eval "$(ssh-agent -s)""
    * run "ssh-add ~/.ssh/id_rsa"
    * copy all the content printed out "cat ~/.ssh/id_rsa.pub"
    * add the kay in github [link](https://github.com/settings/keys)

* Checkout the project that was created: 
```bash
git clone git@github.com/epuce/girls-go-tech.git
```

* Create your own branch were all your work will be stored
```bash
git checkout -b your-name-surname
```
* Get local changes to remote branch

```bash
git add . 
git commit -m "Your message"
git push origin your-name-surname 
```

* Other commands
    * git log (looks at commit history on current branch)
    * git reflog (changes made on branch)
    * git diff (not staged file changes)
    * git status (look at files that hav changed)
    * git reset HEAD~1 (1 - commits to be reset, can use hash instead)
    * git checkout ./path/to/file.html (revert changes that are made to file)
    * git fetch (sync change references with origin)
    * git branch -d branch-name

* Get latest changes
    * on top of your changes - git pull
    * on top of branch you are pulling from - git pull --rebase origin branch-name

* .gitignore
    * file where we state the files, directories are stated to be ignored from git (cache, logs, packages)

### Git checkup
* Create new project
* Get it locally on your machine
* Create a new file
* Push two different commits to origin/master
* Create new branch based on current master
* Add one commit to newly created branch
* Push to newly created branch
* Create pull (merge) request and merge the changes
* Switch back to local master branch
* Get newly merged changes
* Push new commit to origin/master

-- add a new file to the project where your-name-surname branch is located with the name `task-1.txt` and push the changes to remote