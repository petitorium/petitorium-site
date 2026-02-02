---
sidebar_position: 2
---

# Usage

Petitorium is designed to be intuitive for terminal users. Here is the basic workflow for testing your APIs.

## Starting Petitorium

Simply run the command in your terminal:

```bash
petitorium
```

## Sending HTTP Requests

1. **Select a request**: Navigate through the collections panel on the left.
2. **Choose HTTP method**: Use the method dropdown (e.g., GET, POST).
3. **Enter URL**: Type or paste your endpoint URL.
4. **Headers**: Add necessary headers in the **Headers** tab.
5. **Body**: For POST/PUT requests, write your payload in the **Body** tab.
6. **Send**: Press `Enter` on the **Send** button or navigate to it and press `Enter`.

## Body Editing Workflow

Petitorium provides a flexible editing experience:

- **Inline Editing**: Press `i` to enter insert mode and edit the body directly within the TUI.
- **External Editor**: Press `F4` to open the request body in your system's `$EDITOR` (e.g., Vim, Nano, VS Code). This is ideal for complex JSON or multi-line payloads.
- **Save**: In inline mode, use `Ctrl+s` to save your changes.

## JSON Exploration

For large JSON responses, Petitorium integrates with `fx`. Press `f` while viewing a response to open it in `fx` for advanced searching and folding.

## Workspace Support

Manage multiple independent workspaces for different projects. Use `Ctrl+w` to show the workspace menu and switch contexts instantly.
