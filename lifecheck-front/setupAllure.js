const { JasmineAllureReporter } = require("jest-allure");

jasmine.getEnv().addReporter(
  new JasmineAllureReporter({
    resultsDir: "allure-results",
  })
);
