"use strict";

const rule = require("../rules").rules["use-strict-at-top-of-document"];
const error = require("../rules").errors.ERROR_USE_STRICT_AT_TOP;
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions : { ecmaVersion : 2017 } });

ruleTester.run("use-strict-at-top-of-document", rule, {
    valid : [
        {
            code : `
"use strict";
function test() {}
`
        },
        {
            code : ""
        }
    ],
    invalid : [
        {
            code : `
function test() {}
`,
            output : `
"use strict";

function test() {}
`,
            errors : [{ message : error }]
        },
    ]
});
