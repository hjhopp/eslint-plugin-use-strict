# eslint-plugin-use-strict

Enforcing the use of strict mode in JS, one rule at a time.

The plugin will add it for you if it isn't there already.

## How to enable

```
// .eslintrc
{
    "plugins" : ["use-strict"],
    "rules" : {
        "use-strict/use-strict-at-top-of-document" : "error"
    }
}
```
