import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
  //  testMatch: ["tests/basicsinteraction.test.ts" ],
    use:{
        headless:false,
        screenshot: "on",
        video: "on"
    },
    retries: 0,
    reporter:[["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }]]
        // }], ["html", {
    //     open:"always"
    // }]]
};

export default config;