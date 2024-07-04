---
title: Untitled
date: 2023-12-18
tags:
  - Android
aliases: 
summary: How to follow UDF best practices sending one-time navigation events from the viewmodel, in jetpack compose using nested navgraphs.
image:
  src: ""
  alt: ""
---
https://github.com/xidsyed/HiltScopeExample.git

Talk about how scoping in hilt is a little confusing. Show how simple example clears the confusion. 

Also how not matching the scope annotation with the component is not allowed


### Injecting dependencies without defining a Module
With Hilt, injecting a simple dependency like `MyDependency` into a `ViewModel` is straightforward and doesn't require defining a `@Module`. By annotating the constructor of `MyDependency` with `@Inject`, Hilt can automatically provide it. Then, you can use the `@HiltViewModel` annotation for your `ViewModel` and inject `MyDependency` directly into its constructor using `@Inject`. This eliminates the need for additional configuration, allowing Hilt to manage the dependency injection seamlessly. Here's a quick example:

```kotlin
class MyDependency @Inject constructor() {
    fun someFunction(): Boolean = true
}

@HiltViewModel
class MyViewModel @Inject constructor(
    private val myDependency: MyDependency
) : ViewModel() {
    fun checkDependency(): Boolean = myDependency.someFunction()
}
```

This setup allows `MyDependency` to be injected into `MyViewModel` effortlessly, leveraging Hilt's capabilities to reduce boilerplate code.



### What are components in Hilt?
There are different Components that are tied to Android Framework Objects for their lifecycle and scoping, that you can install modules in using `@Module` and `@Installin`.

`@Module @Installin(ActivityComponent::class)` for example will install the module in the Acitivty component. So everytime an activity or any of its children (fragment / view) requires an object of this module, it will be given a reference to a single instance maintained for all of them in that activity.

Or as the documentation puts it : 
> For each Android class in which you can perform field injection, there's an associated Hilt component that you can refer to in the `@InstallIn` annotation. Each Hilt component is responsible for injecting its bindings into the corresponding Android class.


### List all the Hilt Components used as Injectors for their corresponding Android Classes

Hilt provides the [following](https://developer.android.com/training/dependency-injection/hilt-android#generated-components) components to inject bindings into the corresponding Android Classes
![|550](https://i.imgur.com/gi3QtoN.png)

### What are the lifetimes of each of those components?
Hilt automatically creates and destroys instances of generated component classes following the lifecycle of the corresponding Android classes [as shown](https://developer.android.com/training/dependency-injection/hilt-android#component-lifetimes)


![|725](https://i.imgur.com/T8JSl1y.png)