
# Git Commands Documentation

This guide covers the most commonly used Git commands for managing and collaborating on repositories. These commands are essential for day-to-day work with Git, including staging, committing, and synchronizing code with remote repositories.

---

## 1. `git init`
Initializes a new Git repository in the current directory. This command creates a hidden `.git` folder, setting up everything needed to start version controlling your files.

```bash
git init
```

## 2. `git clone <repository-url>`
Copies (clones) an existing Git repository from a remote source (e.g., GitHub, GitLab) to your local machine.

```bash
git clone <repository-url>
```

## 3. `git status`
Shows the current status of your repository. It displays untracked, modified, and staged files, helping you understand what changes need to be staged or committed.

```bash
git status
```

## 4. `git add <file>`
Stages changes in a specific file to be committed. You can stage all files with `.` instead of a specific filename.

```bash
git add <file>
```

To stage all files at once:

```bash
git add .
```

## 5. `git commit -m "commit message"`
Commits the staged changes with a descriptive message. Each commit creates a new entry in the repository’s history, representing a snapshot of your project at that time.

```bash
git commit -m "Add a descriptive message"
```

## 6. `git push origin <branch>`
Uploads your local commits to a remote repository, making them available to others. Specify the branch you want to push to, typically `main` or `master`.

```bash
git push origin <branch>
```

Example:

```bash
git push origin main
```

## 7. `git pull origin <branch>`
Fetches and merges changes from the specified branch on a remote repository into your local branch. This command helps you synchronize your work with updates made by others.

```bash
git pull origin <branch>
```

## 8. `git branch`
Lists all local branches in your repository. You can also use it to create a new branch or delete an existing branch.

To list all branches:

```bash
git branch
```

To create a new branch:

```bash
git branch <branch-name>
```

To delete a branch:

```bash
git branch -d <branch-name>
```

## 9. `git checkout <branch>`
Switches to the specified branch. This command changes the working directory to reflect the state of the chosen branch.

```bash
git checkout <branch>
```

To create and switch to a new branch in one command:

```bash
git checkout -b <new-branch-name>
```

## 10. `git merge <branch>`
Merges the specified branch into the current branch. This command incorporates changes from another branch, allowing you to combine development efforts.

```bash
git merge <branch>
```

## 11. `git log`
Displays a log of all commits made in the repository, including commit messages, authors, and dates. This is useful for reviewing the project’s history.

```bash
git log
```

## 12. `git diff`
Shows differences between the working directory, staged changes, and the latest commit. This command is helpful to see exactly what modifications have been made.

```bash
git diff
```

To compare staged changes with the latest commit:

```bash
git diff --staged
```

## 13. `git reset`
Unstages changes that have been added to the staging area. This is useful if you accidentally staged files and need to remove them from the staging area.

To unstage a specific file:

```bash
git reset <file>
```

To reset all staged files:

```bash
git reset
```

## 14. `git rm <file>`
Deletes a file from the working directory and stages the removal for the next commit.

```bash
git rm <file>
```

To remove a file only from the staging area but keep it in the working directory:

```bash
git rm --cached <file>
```

---

## Tips and Best Practices
- **Write Clear Commit Messages:** Commit messages should describe the changes made. A good format is: "Fix bug in X module" or "Add new feature Y".
- **Commit Often:** Frequent commits make it easier to understand changes and revert them if needed.
- **Keep Your Repository Updated:** Use `git pull` regularly to stay in sync with the main branch of your repository.
- **Use Branches for New Features or Fixes:** Isolate new features or bug fixes in separate branches, then merge them when ready.