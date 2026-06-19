# Chapter 19: Playwright Basics

Getting started with Playwright — project setup, Playwright as a dependency, and downloading PDF files via browser automation.

## Contents

| Entry | Description |
|-------|-------------|
| `package.json` | Playwright dependency (`^1.61.0`) |
| `playwright.config.ts` | Playwright Test configuration |
| `tests/` | Test specs (login flows, examples) |
| `pdfFiles/google.pdf` | Example PDF downloaded via Playwright |


## Playwright CLI Commands

| Command | Description |
|---------|-------------|
| `npm init -y` | Creates a `package.json` file |
| `npm install playwright` | Adds Playwright latest dependency |
| `npm install -g playwright@latest` | Installs latest Playwright globally |
| `playwright --version` | Shows Playwright version |
| `playwright open "https://google.com"` | Opens Google page in a browser |
| `playwright pdf "https://redbus.com" "google.pdf"` | Saves page as PDF |
| `playwright install-deps` | Installs browser dependencies |