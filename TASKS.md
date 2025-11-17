# Practice Tasks (Static Website)

1) Initialize a repo and push to GitHub (main branch).
2) Create a feature branch `feature/add-faq` and add `faq.html`. Commit and open PR.
3) Create two branches `feature/a` and `feature/b`. Edit the second paragraph of `about.html` differently in both branches. Push both and open PRs. Merge one, then resolve conflict for the other locally.
4) Make 4 small commits on a branch and squash them into one with interactive rebase.
5) Simulate a broken JS: add `throw new Error("test")` in `script.js` on main, tag previous commit `v0.1.0` as good, then use `git bisect` to find the bad commit.
6) Use `git stash` to save WIP changes, switch branch, then pop stash later.
7) Add an `images/` folder, commit an image, then practice using Git LFS (optional).
8) Create a `gh-pages` branch or enable GitHub Pages from `main` and publish the site.
9) Create a `hotfix` branch to quickly fix a typo on `index.html`, merge to main and tag a release `v0.1.1`.
10) Add a pre-commit hook that rejects commits that include the word "WIP" in staged changes.
