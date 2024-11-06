# Python Good Starting

When beginning your journey with Python, it’s crucial to set up your development environment properly to avoid potential conflicts and ensure a smooth experience. This guide will walk you through the steps of installing Python correctly using **pyenv**, managing different Python versions, and setting up a **virtual environment** for your projects.

---

# Table of Contents
- [Python Good Starting](#python-good-starting)
- [Why Learn Python Correctly from Scratch?](#why-learn-python-correctly-from-scratch)
- [Pyenv](#pyenv)
  - [1. To install `pyenv`](#1-to-install-pyenv)
  - [2. Configure Shell for `pyenv`](#2-configure-shell-for-pyenv)
  - [3. Restart Shell](#3-restart-shell)
  - [4. Check Available Python Versions](#4-check-available-python-versions)
  - [5. Install a Python Version with `pyenv`](#5-install-a-python-version-with-pyenv)
  - [6. Check Installed Python Versions](#6-check-installed-python-versions)
  - [7. Select a Python Version](#7-select-a-python-version)
- [VirtualEnv](#virtualenv)
  - [1. Install `virtualenv`](#1-install-virtualenv)
  - [2. Create a Virtual Environment with `virtualenv`](#2-create-a-virtual-environment-with-virtualenv)
  - [3. Activate the Virtual Environment](#3-activate-the-virtual-environment)
- [Install Dependencies](#install-dependencies)
- [Project Structure Overview](#project-structure-overview)


---

## Why Learn Python Correctly from Scratch?
- **Consistency Across Environments**: Setting up a consistent Python environment ensures that `your code runs the same way on different systems`.
- **Avoid System Conflicts**: Using tools like `pyenv` and `virtual environments` prevents conflicts with system-installed Python versions and other projects.
- **Manage Dependencies**: Virtual environments help you manage project-specific dependencies without affecting your `global Python installation` (useful for Linux users).

---

# Pyenv

`pyenv` is a tool that allows you to easily install and manage multiple versions of Python. It helps you avoid conflicts with the system Python and manage different versions for different projects.

### 1. To install `pyenv`:

On macOS/Linux:
```bash
curl https://pyenv.run | bash
```

### 2. Configure Shell for `pyenv`

After running the command, add the following lines to your shell startup file (`.bashrc`, `.zshrc`, etc.):

```bash
# Pyenv configuration
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

This step is also important to avoid pip conflicts. Create an alias in `.bashrc`, `.zshrc`, etc., to ensure you are using pip from the correct pyenv installation:

```bash
# Configure your PIP as well
alias pip='python -m pip'
```

### 3. Restart Shell

Restart your shell or run `source ~/.bashrc` (or the corresponding file) to apply the changes.

### 4. Check Available Python Versions:

To see the available Python versions that you can install with `pyenv`, use:

```bash
pyenv install --list
```

### 5. Install a Python Version with `pyenv`

To install a specific version of Python, use:

```bash
# Replace <version> with the desired version number (e.g., 3.9.1).
pyenv install <version>
```

### 6. Check Installed Python Versions

To see which Python versions are installed on your system and identify the active version:

```bash
pyenv versions

# Example Output:
  system # Python from your system
  3.7.17
* 3.11.9 # (the * represents the active version)
  3.12.0
```

### 7. Select a Python Version

```bash
pyenv global <python-version>
```

---

# VirtualEnv

`virtualenv` is a tool to create isolated Python environments, ensuring that dependencies for one project don’t interfere with those of another.

### 1. Install `virtualenv`

```bash
pip install virtualenv
```

### 2. Create a Virtual Environment with `virtualenv`

Select the directory where you will start your project (typically a new folder), then run:

```bash
# You don't need to specify the python version because pyenv is doing it when you
# choose the global version that you want to use on the previous steps. Of course
# if you want to change the python version, you have to do it on pyenv first before
# execute this command.
virtualenv --python=python <python-env-name>
# Recommended to use "env" as the environment name
```

### 3. Activate the Virtual Environment

```bash
source <python-env-name>/bin/activate
```

When the environment is active, its name appears at the beginning of your terminal prompt:

```bash
(<python-env-name>) user@machine:~/<project-directory>$
```

---

# Install Dependencies

After creating and activating the virtual environment, it’s a good practice to create a `requirements.txt` file listing the Python libraries required for the project:

```bash
# requirements.txt file
requests==2.25.1
selenium==4.4.1
bs4==0.0.2
klein_config==4.0.2
```

Install all dependencies at once from `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

# Project Structure Overview

Here’s an example of a simple, well-organized Python project structure:

```bash
my_project/
├── app/                 # Your application
├── env/                 # Virtual environment directory (exclude from version control)
├── requirements.txt     # List of project dependencies
├── .gitignore           # Files and directories to ignore in Git
└── README.md            # Project overview and documentation
```