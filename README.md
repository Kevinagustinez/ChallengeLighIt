# ChallengeLightIt - QA Automation Challenge

This repository contains a UI test automation challenge for the Demoblaze website(https://www.demoblaze.com/), using Playwright with TypeScript.

## 🚀 Quick Start

### Prerequisites

- **Visual Studio Code** (or any code editor)
- **Node.js** version 22 or higher
- **Git** for version control

### Installation & Execution

1. Clone the repository: `git clone https://github.com/Kevinagustinez/ChallengeLighIt.git`
2. Install dependecies : `npm install`
3. Run tests : `npx playwright test`

## 🔧 Architecture Overview

This project is built with the Playwright automation framework, using the "Page object model" to separate the pages and methods from the tests.

### BasePage Class
Acts as a wrapper for Playwright's native methods, providing:
- Custom reusable methods
- Protection against framework updates
- Consistent method signatures across pages

### Config Class
Centralized configuration management for:
- Test data and credentials
- Environment URLs
- Application-specific texts

### Fixture Pattern
Encapsulates page initialization for:
- Cleaner test code
- Reduced boilerplate
- Better reusability

## 🎯 Design Decisions

### Why Page Object Model?
- **Maintainability**: UI changes affect only page classes
- **Reusability**: Common actions encapsulated in BasePage
- **Readability**: Tests focus on behavior, not implementation

### Why TypeScript?
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Auto-completion and refactoring
- **Team Collaboration**: Clear interfaces and contracts

### In short, we have a solid code base that is reusable, easy to maintain in the future, solid framework structures, and, above all, quality in the tests we run.
