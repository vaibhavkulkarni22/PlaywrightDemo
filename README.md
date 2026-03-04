# Playwright E2E Testing Project

This project contains end-to-end tests written using Playwright.

## Description

This is a sample project to demonstrate the capabilities of Playwright for end-to-end testing. It includes a variety of test scenarios covering different aspects of a web application.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/vaibhavkulkarni22/PlaywrightDemo.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd MiniProject-Playwright
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the tests

To run the tests, you can use the following command:

```bash
npx playwright test
```

This will run all the tests in the `tests` directory.

### Reporters

This project is configured with the following reporters:

- `html`: Generates an HTML report of the test results. The report can be found in the `playwright-report` directory.
- `allure-playwright`: Generates an Allure report. The results are stored in the `allure-results` directory.

### Viewing the reports

#### HTML Report

To view the HTML report, you can use the following command:

```bash
npx playwright show-report
```

#### Allure Report

To generate and view the Allure report, you can use the following commands:

1.  Generate the report:
    ```bash
    npm run allure:report
    ```
2.  Open the report:
    ```bash
    npm run allure:open
    ```

## Project Structure

- `tests/`: Contains all the test files.
- `playwright.config.ts`: Configuration file for Playwright.
- `package.json`: Contains the project's metadata and dependencies.
- `allure-report/`: Contains the generated Allure report.
- `allure-results/`: Contains the results of the Allure reporter.
- `playwright-report/`: Contains the generated HTML report.

## Test Scenarios

This project includes the following test scenarios:

- Login functionality
- Handling dropdowns
- Handling alerts
- Auto-suggestion
- Handling iframes
- Handling multiple windows
- Keyboard events
- Mouse hover
- File upload and download
- Verifying error messages
- Waiting for load state
