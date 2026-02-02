---
sidebar_position: 3
---

# Keybindings

Petitorium is optimized for keyboard navigation. Most actions have Vim-style shortcuts.

## Global Navigation

| Key         | Action                                  |
| :---------- | :-------------------------------------- |
| `Tab`       | Cycle focus forward through main panels |
| `Shift+Tab` | Cycle focus backward                    |
| `Ctrl+w`    | Show workspace menu                     |
| `q` / `Q`   | Quit application                        |

## Collections Panel

| Key       | Action                               |
| :-------- | :----------------------------------- |
| `j` / `k` | Navigate up/down in tree             |
| `h`       | Collapse collection / Move to parent |
| `l`       | Expand collection / Select request   |
| `g` / `G` | Go to top / bottom of tree           |
| `N`       | Create new collection                |
| `n`       | Create new request                   |
| `D`       | Duplicate selected request           |
| `r`       | Rename selected item                 |
| `m`       | Move selected item                   |
| `d`       | Delete selected item                 |

## Request Panel

| Key                | Action                                         |
| :----------------- | :--------------------------------------------- |
| `1`, `2`, `3`, `4` | Switch tabs (Body, Auth, Query, Headers)       |
| `Left` / `Right`   | Previous / Next tab                            |
| `i`                | Enter insert mode (inline edit)                |
| `F4`               | Open in external editor (defined by `$EDITOR`) |
| `Enter`            | Send HTTP request (when on Send button)        |

## Response Panel

| Key                | Action                                            |
| :----------------- | :------------------------------------------------ |
| `j` / `k`          | Scroll down / up                                  |
| `g` / `G`          | Go to top / bottom                                |
| `d` / `u`          | Half-page scroll down / up                        |
| `f`                | Open response in [`fx`](https://fx.wtf)           |
| `1`, `2`, `3`, `4` | Switch tabs (Preview, Headers, Cookies, Timeline) |
| `Left` / `Right`   | Previous / Next tab                               |
