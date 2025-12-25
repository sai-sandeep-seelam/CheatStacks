
## Getting started


### Introduction


[Claude Code](https://claude.ai/code) is an AI-powered CLI assistant for software engineering tasks. This reference covers the most commonly used commands and features.

- [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code) _(docs.anthropic.com)_
- [GitHub repository](https://github.com/anthropics/claude-code) _(github.com)_

### Installation & Setup

```bash
# Install Claude Code
npm install -g @anthropics/claude-code

# Login with API key
claude auth login

# Check authentication status
claude auth status
```

### Quick Start

```bash
# Start interactive session
claude

# Run a single command
claude "help me write a Python function"

# Resume previous session
claude --resume
```

## Core Commands


### Interactive Mode


| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `claude`                   | Start interactive session          |
| `claude --resume`          | Resume last session                |
| `claude --memory`          | Start with memory enabled          |
| `/help`                    | Show help and available commands   |
| `/clear`                   | Clear current conversation         |
| `/exit`                    | Exit interactive mode              |


### File Operations

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `claude "read file.py"`    | Read and analyze a file            |
| `claude "edit file.py"`    | Edit an existing file              |
| `claude "create file.py"`  | Create a new file                  |
| `claude "fix tests"`       | Fix failing tests                  |
| `claude "refactor code"`   | Refactor existing code             |


### Git Integration

| Command                         | Description                        |
| ------------------------------- | ---------------------------------- |
| `claude "create commit"`        | Create git commit with message     |
| `claude "create PR"`            | Create pull request                |
| `claude "review changes"`       | Review git changes                 |
| `claude "fix merge conflicts"`  | Help resolve merge conflicts       |


## Advanced Features


### Memory Management

```bash
# Enable memory for current session
claude --memory

# View memory contents
claude "show memory"

# Clear memory
claude "clear memory"
```

### Extended Thinking

```bash
# Enable deeper analysis
claude --think

# Complex problem solving
claude "analyze this codebase and suggest improvements"
```

### Image Analysis

```bash
# Analyze screenshot or diagram
claude "analyze this screenshot" --image path/to/image.png

# Paste image from clipboard
claude "explain this diagram" # then paste image
```

## Slash Commands


### Session Management

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `/help`      | Show available commands              |
| `/clear`     | Clear conversation history           |
| `/reset`     | Reset conversation state             |
| `/exit`      | Exit interactive mode                |
| `/version`   | Show Claude Code version             |


### Settings

| Command        | Description                        |
| -------------- | ---------------------------------- |
| `/settings`    | Show current settings              |
| `/model`       | Change AI model                    |
| `/memory on`   | Enable memory                      |
| `/memory off`  | Disable memory                     |


### Productivity

| Command        | Description                        |
| -------------- | ---------------------------------- |
| `/save`        | Save conversation                  |
| `/load`        | Load previous conversation         |
| `/export`      | Export conversation to file        |


## Common Workflows


### Code Review

```bash
# Review specific file
claude "review this code for bugs" file.py

# Review all changes
claude "review my git changes"

# Check code quality
claude "suggest improvements" src/
```

### Testing

```bash
# Generate tests
claude "write tests for this function"

# Fix failing tests
claude "fix these test failures"

# Test coverage analysis
claude "analyze test coverage"
```

### Documentation

```bash
# Generate README
claude "create README for this project"

# Add code comments
claude "add documentation to this function"

# API documentation
claude "generate API docs"
```

### Debugging

```bash
# Debug error
claude "help debug this error: [error message]"

# Performance analysis
claude "why is this code slow?"

# Code explanation
claude "explain how this works" complex_function.py
```

## IDE Integrations


### VS Code

```bash
# Install VS Code extension
code --install-extension anthropic.claude-code

# Open in VS Code
claude --vscode

# VS Code commands
Ctrl+Shift+P -> "Claude: Ask"
Ctrl+Shift+P -> "Claude: Review"
```

### Configuration

```bash
# Set default editor
claude config set editor code

# Set working directory
claude config set workdir /path/to/project

# View all settings
claude config list
```

## Best Practices


### Effective Prompting

```bash
# Be specific about requirements
claude "write a Python function that validates email addresses with regex"

# Provide context
claude "in this Django project, add user authentication"

# Ask for explanations
claude "explain this code and suggest improvements"
```

### Project Structure

```bash
# Analyze entire project
claude "analyze project structure and suggest improvements"

# Focus on specific areas
claude "review the database models in models.py"

# Architecture decisions
claude "should I use async here?"
```

### Security

```bash
# Security review
claude "check this code for security vulnerabilities"

# Best practices
claude "make this code more secure"

# Audit dependencies
claude "review package.json for security issues"
```

## CLI Options


### Global Options

| Option              | Description                        |
| ------------------- | ---------------------------------- |
| `--help`            | Show help information              |
| `--version`         | Show version number                |
| `--resume`          | Resume previous session            |
| `--memory`          | Enable memory                      |
| `--think`           | Enable extended thinking           |
| `--no-color`        | Disable colored output             |
| `--verbose`         | Verbose logging                    |


### Authentication

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `claude auth login`  | Login with API key                 |
| `claude auth logout` | Logout current session             |
| `claude auth status` | Check authentication status        |
| `claude auth whoami` | Show current user info             |


### Configuration

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `claude config set`    | Set configuration value          |
| `claude config get`    | Get configuration value          |
| `claude config list`   | List all configuration           |
| `claude config reset`  | Reset to default configuration   |


## Troubleshooting


### Common Issues

```bash
# Clear authentication
claude auth logout && claude auth login

# Reset configuration
claude config reset

# Clear cache
claude --clear-cache

# Debug mode
claude --verbose --debug
```

### Network Issues

```bash
# Check connectivity
claude "test connection"

# Use proxy
claude --proxy http://proxy:8080

# Timeout settings
claude config set timeout 30
```

### Memory Issues

```bash
# Clear memory
claude "clear memory"

# Disable memory
claude --no-memory

# Memory usage
claude "show memory usage"
```

## Environment Variables

| Variable              | Description                        |
| --------------------- | ---------------------------------- |
| `CLAUDE_API_KEY`      | API key for authentication         |
| `CLAUDE_MODEL`        | Default model to use               |
| `CLAUDE_MEMORY`       | Enable memory by default           |
| `CLAUDE_EDITOR`       | Default text editor                |
| `CLAUDE_WORKDIR`      | Default working directory          |
| `NO_COLOR`            | Disable colored output             |

## Also see


- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code) _(docs.anthropic.com)_
- [GitHub repository](https://github.com/anthropics/claude-code) _(github.com)_
- [Claude API docs](https://docs.anthropic.com/en/api) _(docs.anthropic.com)_
- [Community discussions](https://github.com/anthropics/claude-code/discussions) _(github.com)_