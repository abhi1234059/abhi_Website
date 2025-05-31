
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

---

## Pushing this Project to GitHub

Follow these steps to push your project code to your GitHub repository (e.g., `https://github.com/abhi1234059/abhi_Website.git`).

**Prerequisites:**

1.  **Git Installed:** Git should already be available in your Firebase Studio terminal environment.
2.  **GitHub Repository Created:** Make sure you have already created a new, empty repository on GitHub.com. For example, named `abhi_Website` under your `abhi1234059` account.
    *   When creating it on GitHub, **do not** initialize it with a README, .gitignore, or license, if your project already has these files. If you did initialize it with files, you might encounter a "refusing to merge unrelated histories" error later, which is covered in the troubleshooting section.

**Commands to run in your project's terminal (in Firebase Studio):**

1.  **Initialize Git (if your project isn't already a Git repository):**
    *   Most Firebase Studio projects are already Git repositories. You can check by running `git status`. If it says "fatal: not a git repository" or something similar, then run the following:
    ```bash
    git init
    ```

2.  **Set your main branch name (optional but good practice):**
    *   If you just initialized Git or want to ensure your main branch is called `main`:
    ```bash
    git branch -M main
    ```

3.  **Add all your project files to the Git staging area:**
    *   This command respects the rules in your `.gitignore` file.
    ```bash
    git add .
    ```

4.  **Commit your files:**
    *   This creates a snapshot of your project. If `git status` shows "nothing to commit, working tree clean", it means your latest changes are already committed, and you can skip this step or it will do nothing.
    ```bash
    git commit -m "Initial commit of AbhiConnect project"
    ```

5.  **Add your GitHub repository as the remote origin:**
    *   Replace the URL with your actual repository URL from GitHub.
    ```bash
    git remote add origin https://github.com/abhi1234059/abhi_Website.git
    ```
    *   If you get an error like "remote origin already exists", you might need to update it if it's pointing to the wrong place:
        ```bash
        git remote set-url origin https://github.com/abhi1234059/abhi_Website.git
        ```
        Or, if it's a very old/incorrect origin you want to remove first:
        ```bash
        git remote rm origin
        git remote add origin https://github.com/abhi1234059/abhi_Website.git
        ```

6.  **Push your code to GitHub:**
    *   This uploads your committed files to your GitHub repository. The `-u` flag sets the upstream branch so that future pushes can be done with just `git push`.
    *   ```bash
        git push -u origin main
        ```
    *   **Troubleshooting Push Issues:**
        *   **If you see `! [rejected] main -> main (fetch first)`:** This means your GitHub repository has changes that your local project doesn't. You need to pull those changes first. Try:
            ```bash
            git pull origin main --no-rebase
            ```
        *   **If `git pull` then says `fatal: refusing to merge unrelated histories`:** This often happens if the GitHub repository was initialized with files (like a README from GitHub's side) and your local project also has its own independent history. To resolve this, use:
            ```bash
            git pull origin main --no-rebase --allow-unrelated-histories
            ```
            This command tells Git to merge the two unrelated histories. It might open a text editor for a merge commit message; if so, you can usually save and close it with the default message (e.g., `Ctrl+O`, `Enter`, `Ctrl+X` for nano; `:wq` for vim).
        *   **After a successful `pull`** (and resolving any merge conflicts if they occur), try the `git push -u origin main` command again.

After running these commands, your project files should appear in your GitHub repository!
