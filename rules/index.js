"use strict";

const errors = {
    ERROR_USE_STRICT_AT_TOP : "use strict must be at top of document"
};

/**
 * This is the error that shows up in the tooltip and CLI when eslint is running.
 * @param {object} context - eslint context, helpful for rules to do their job
 * @param {object} node - node being looked at in the AST
 * @param {string} message - error message
 * @param {function} [fix] - autofixes the code
 * @returns
 */
 function report ({ context, node, message, fix = new Function() }) {
    return context.report({
        node,
        message,
        fix
    });
}

module.exports = {
    rules : {
        "use-strict-at-top-of-document" : {
            meta : {
                type    : "problem",
                fixable : "code"
            },
            create : function (context) {
                return {
                    Program (node) {
                        const firstChild = node.body[0];

                        if (!firstChild) {
                            return;
                        }

                        if (firstChild.type !== "ExpressionStatement" || firstChild.expression.value !== "use strict") {
                            return report({
                                context,
                                node,
                                message : errors.ERROR_USE_STRICT_AT_TOP,
                                fix (fixer) {
                                    return fixer.insertTextBefore(node, `"use strict";\n\n`);
                                }
                            });
                        }
                    }
                };
            }
        }
    },
    errors
};
