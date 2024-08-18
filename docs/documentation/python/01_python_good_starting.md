# 01 - Python Good Starting

When beginning your journey with Python, it’s crucial to set up your development environment properly to avoid potential conflicts and ensure a smooth experience. This guide will walk you through the steps of installing Python correctly using **pyenv**, managing different Python versions, and setting up a **virtual environment** for your projects.

### Why Learn Python Correctly from Scratch?
- **Consistency Across Environments**: Setting up a consistent Python environment ensures that `your code runs the same way on different systems`.
- **Avoid System Conflicts**: Using tools like `pyenv` and `virtual environments` prevents conflicts with system-installed Python versions and other projects.
- **Manage Dependencies**: Virtual environments help you manage project-specific dependencies without affecting your `global Python installation` (useful for linux users).

# Pyenv

pyenv is a tool that allows you to easily install and manage multiple versions of Python. It helps you avoid conflicts with the system Python and manage different versions for different projects.

* 1.To install pyenv:

On macOS/Linux:
```bash
curl https://pyenv.run | bash
```

* 2.After running the command, you will need to add the following lines to your shell startup file (.bashrc, .zshrc, etc.):

```bash
# Pyenv configuration
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

```

This step below is also important, to avoid conflict of which pip version are you using, create this alias on .bashrc, zshrc, etc files. This way you will guarantee you are using the pip from the correct pyenv instalation.

```bash
# Configure your PIP as well
alias pip='python -m pip'
```

* 3.Then restart your shell or run source ~/.bashrc (or the corresponding file) to apply the changes.


* 4.Check the List of Python Versions:

To see the available Python versions that you can install with pyenv, use:

```bash
pyenv install --list
```

* 5.Install a Python Version with pyenv

To install a specific version of Python, use:

```bash
# Replace <version> with the desired version number (e.g., 3.9.1).
# Check the python version available in the command list above.
pyenv install <version>
```

* 6.Check python versions you have installed in your system and also which one are you using at the moment.
```bash
pyenv versions

# Output example:
  system # Python from your system
  3.7.17
* 3.11.9 # (the * represent the version you are using at this moment)
  3.12.0
```


* 7.Select one python version listed before
```bash
pyenv global <python-version>
```

# VirtualEnv

virtualenv is a tool to create isolated Python environments. It ensures that dependencies for one project don’t interfere with those of another project. Follow below how set it up.

* 1.To install virtualenv, run:
```bash
pip install virtualenv
```

* 2.Create a virtual environment using virtualenv and specify the Python version if needed:

P.S. select the place you will start your project, generally create a new folder and execute the command in project root.

```bash
# You don't need to specify the python version because pyenv is doing it when you
# choose the global version that you want to use on the previous steps. Of course
# if you want to change the python version, you have to do it on pyenv first before
# execute this command.
virtualenv --python=python <python-env-name>
# P.S. I recommend use "env" as name of your virtualenv
```

* 3.Activate pyenv

```bash
source <python-env-name>/bin/activate
```

If the environment has been activated correctly, you will notice that the environment name appears at the beginning of your terminal prompt, as shown below as example:

```bash
(<python-env-name>) user@machine:~/<project-directory>$
```

# Install Dependencies
After create activate the virtualenv is a good pratice always create a `requirements.txt` file with the python libraries you need for the project. Have a look at the example of `requirements.txt` below:

```bash
# requirements.txt file
requests==2.25.1
selenium==4.4.1
bs4==0.0.2
klein_config==4.0.2
```

So instead of install one by one manually you can install all in one go directly from requirements.txt:

```bash
pip install -r requirements.txt
```

# Project Structure Overview
Here's an example of a simple, well-organized Python project structure:

```bash
my_project/
├── app/ # Your application.
├── env/ # Virtual environment directory (should be excluded from version control)
├── requirements.txt # List of project dependencies
├── .gitignore # Files and directories to ignore in Git
└── README.md # Project overview and documentation
```