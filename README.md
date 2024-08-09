# Freelance Resource Page

The **Freelance Resource Page** is designed to assist freelancers in finding resources, tools, and strategies to optimize their freelance work. Built with ![Python 3.11](https://img.shields.io/badge/python-3.11-blue), this project offers a modern and efficient way to access essential freelance information.

## Installation

### Requirements

- **Python 3.11:** Make sure you have Python 3.11 installed on your machine.
- **Pip:** The Python package manager.

### Installation Steps

1. **Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/freelance-resource-page.git
cd freelance-resource-page
```


### Create a Virtual Environment

It's recommended to use a virtual environment to manage dependencies:

```bash
python3.11 -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

### Install Dependencies

Install the required dependencies using the provided requirements.txt file:

```bash
pip install -r requirements.txt
```

## MkDocs Setup

The project uses MkDocs to generate and serve the documentation. Here’s how you can build and view the documentation locally:

### Install MkDocs

Ensure MkDocs is installed on your system:

```bash
pip install mkdocs
Build the Documentation
```

Serve the Documentation Locally

To view the documentation in your browser, run:

```bash
mkdocs serve
```

Open http://localhost:8000 in your web browser to explore the documentation.


### Publishing on GitHub Pages
To publish your documentation on GitHub Pages, follow these steps:

1. Make sure you are working on **master** branch

2. Build the documentation using the MkDocs command:

```bash
mkdocs build
```

3. Run the following command:

```bash
mkdocs gh-deploy
```

4. `Add` & `commit` & `push` the changes in the **master** branch

5. Go to branch **gh-pages** that was created by the comand **gh-deploy**
```bash
git checkout gh-pages
```

6. Push the changes to **gh-pages**
P.S. This command you just need to do the first time you used the `mkdocs gh-deploy` because it will create the branch **gh-pages** locally and you need just to push it the first time to create the branch remotally.
```bash
git push origin gh-pages
```

7. Go to github -> Settings -> Pages: Change exchange the branch **master** per **gh-pages**


Your documentation will be deployed to the gh-pages branch and available via GitHub Pages.

`P.S. So now you will make the changes in the **master** branch and when you want to update your github page you just need to use the commands **mkdocs build** & **mkdocs gh-deploy** and your page will be updated automatically.`