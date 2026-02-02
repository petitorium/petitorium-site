---
sidebar_position: 5
---

# Configuration

Petitorium stores its settings and data in standardized YAML files.

## File Locations

On most systems, configuration is stored in:
`~/.config/petitorium/`

### `config.yaml`

Contains main application settings, including the active theme and TUI preferences.

### `collections.yaml`

The core of your data. This file stores all your API requests, folders, and hierarchical collections.

### `expansion_state.yaml`

Petitorium remembers which folders were open or closed between sessions, storing that state here.

## Backup and Sync

Because these are plain text YAML files, it is easy to:

- **Version Control**: Keep your `collections.yaml` in a Git repo.
- **Sync**: Use tools like Dropbox or Resilio Sync to keep your collections consistent across machines.
- **Edit**: While you can edit them manually, we recommend using the Petitorium interface to ensure schema consistency.
