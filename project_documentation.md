# Project Documentation

This document provides instructions on how to generate and view the Allure test report.

## Allure Report

[Allure](https://allurereport.org/) is a flexible, lightweight multi-language test report tool that not only shows a very concise representation of what has been tested in a neat web report form, but also provides a deeper understanding of the product quality.

### Generating the Report

To generate the Allure report, run the following command:

```bash
npm run allure:report
```

This will generate a static HTML report in the `allure-report` directory.

### Opening the Report

To open the generated report in your default web browser, run the following command:

```bash
npm run allure:open
```

This will start a local web server and open the report.

### Serving the Report

Alternatively, you can generate the report and serve it in one command:

```bash
npm run allure:serve
```

This will start a local web server and open the report in your default browser. The server will keep running, and you can view the report by navigating to the URL provided in the console.
