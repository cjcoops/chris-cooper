---
date: "2019-11-22"
title: "Working With Conditional TypeScript Properties"
devTo: "https://dev.to/cjcoops/working-with-conditional-typescript-properties-en"
---

Today I came across a situation where I wanted to write a type for a list of feature toggles in my application. The feature toggles turn a feature on or off for an account and should have a default value.

However some accounts didn't have access to the feature and in those cases having a default value would be meaningless.

In other words, a feature should only have the `defaultValue` property if its `isAvailable` property was true. Here's some example data:

```ts
const features: { [key: string]: Feature } = {
    featureA: {
        isAvailable: false
    },
    featureB: {
        isAvailable: true,
        defaultValue: true
    },
    featureC: {
        isAvailable: true,
        defaultValue: false
    }
}
```

So how could I define the type for `Feature`? A crude way of typing this would be as follows:

```ts
interface Feature {
    isAvailable: boolean;
    defaultValue?: boolean;
}
```

However this would still allow an impossible situation where `isAvailable` is `false` but `isDefault` is `true`. Instead we can add full type safety by using [Union Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types):

```ts
type Feature = {
    isAvailable: false
} | {
    isAvailable: true,
    defaultValue: boolean
}
```

What this says is our feature either has `isAvailable` as false and no `defaultValue` property, or `isAvailable` as true and a required boolean `defaultValue` property - exactly what we wanted!

I don't think this approach would work well once the `Feature` object grows and has more conditionals. However I think it works well for this simple case and is easy for anyone on my team to understand without getting into more complex types. If you have a better solution which might scale better please let me know!
