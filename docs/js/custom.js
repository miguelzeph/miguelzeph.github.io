(() => {
  const oldProjectPath = "/yara-demon-hunter";
  const currentPath = window.location.pathname;

  if (currentPath === oldProjectPath || currentPath.startsWith(`${oldProjectPath}/`)) {
    window.location.replace("https://yara-demon-hunter.github.io/");
  }
})();
