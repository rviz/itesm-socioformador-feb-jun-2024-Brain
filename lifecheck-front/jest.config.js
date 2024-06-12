require("dotenv").config();

module.exports = {
  reporters: [
    "default",
    [
      "jest-qase-reporter",
      {
        mode: "testops",
        testops: {
          api: {
            token: process.env.QASE_TESTOPS_API_TOKEN,
          },
          project: process.env.QASE_PROJECT,
        },
      },
    ],
  ],
};
