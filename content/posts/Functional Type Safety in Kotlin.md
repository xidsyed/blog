---
title: Functional Type Safety in Kotlin
date: 2024-08-22
tags:
  - Android
aliases:
  - functional-type-safety-in-kotlin
summary: Declare lambda signatures with this simple trick!
image:
  src: posts/attachments/functional_type_safety.jpg
  alt: Functional type safety in kotlin with functional interfaces
---
`<SCENE>`

*Crushing it, one bug at a time.*

*Sipping coffee, to fuel the ego.*

*Debugging, aka guessing.*

*One factory method at a time.*

*Interfaces. Interfaces. Interfaces.*

*Growing hair, because productivity.*

*Increasing productivity, said no one.*

---

**Oh!**

**Didn't see you there.**

**.**

**.**

**Umm... Ahem**

*![[posts/attachments/functional_type_safety_chad.png]]*

`</SCENE>`

*In the world of software development, type safety and type checking make writing and reading code a lot easier, eliminates bugs and reduces code complexity. Kotlin, a modern programming language, offers a rich set of features that enhance type safety, particularly in functional programming contexts. This article delves into Kotlin's powerful type system, exploring how it can be leveraged to create robust, flexible, and maintainable code.*

*We'll start by examining traditional approaches to handling state and actions, then progressively explore more advanced Kotlin features. Through this journey, we'll see how Kotlin's type sy*stem can transform code from brittle and error-prone to solid and expressive.

## 1. ☠️ Booleans and Nullables

Let's begin with a common scenario: handling the result of an operation. Traditionally, developers might use a combination of boolean flags and nullable types. Here's an example:

```kotlin
fun handleResult(success: Boolean, data: String?, error: String?) {
    if (success) {
        if (data != null) {
            println("Success: $data")
        } else {
            println("Success but no data")
        }
    } else {
        if (error != null) {
            println("Error: $error")
        } else {
            println("Failed, no error message")
        }
    }
}
```

While this approach works, it has several drawbacks:

1. It's prone to logical errors. What happens if `success` is true but `data` is null?
2. It doesn't enforce proper state combinations at compile-time. 
3. As complexity grows, the number of conditionals can explode, making the code hard to read and maintain.
4. It's not self-documenting – the function signature doesn't clearly communicate what combinations of parameters are valid.

## ✨Sealed Classes: A Type-Safe Alternative

Kotlin's sealed classes offer a more robust solution to this problem. Let's refactor our example:

```kotlin
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
}

fun handleResult(result: Result) {
    when (result) {
        is Result.Success -> println("Success: ${result.data}")
        is Result.Error -> println("Error: ${result.message}")
    }
}
```

This approach brings several benefits:

1. It eliminates invalid states. There's no way to create a "success" result without data, or an "error" without a message.
2. The `when` expression is exhaustive, ensuring all cases are handled.
3. The code is more self-documenting. The `Result` class clearly shows what outcomes are possible.
4. It's more extensible. If we need to add a new result type (e.g., `Loading`), we can do so easily, and the compiler will help us update all relevant code.

3. Advancing to Receiver Functions and DSLs


Now, that's cool and all, but what about functional types? Specifically lambdas. Kotlin is a modern language meant for modern developers. Gone are the days of Uncle Bob's OOPS supremacy. The modern developer demands higher order functions. Not just that but, explicitly typed higher order functions! Kotlin treats functions as [first class citizens](https://kotlinlang.org/docs/lambdas.html) and that means you can do cool things like this

```kotlin
val sum1 = fun Int.(other: Int): Int = plus(other)     // Anonymous Function 
val sum2: Int.(other: Int) -> Int = { plus(it) }       // Function Literal  
fun Int.sum3(other: Int) = plus(other)                 // Standard Extension Function  
  
fun run() {  
   val result = 1.sum1(2)  
   val alsoResult = 1.sum2(2)  
   val alsoAlsoResult = 1.sum3(2)  
}
```

Ah yes, quite the *[[peek/lies|first class citizen treatment]]* . **BUT!!** I hear you exclaim in bold, all caps. **It can be quite clunky to write out function signatures `Int.(Int) -> Int`**. 

Firstly there's no need to yell. Second, kotlin provides us with the nifty little feature of `typealias` and it supports function signatures! all you have to do is declare your type alias on a method signature and you are off to the races

```kotlin
typealias IntAction = (Int) -> Int

fun intAdder (action :  IntAction) : Int{
 	return action(Random.nextInt())
 }
 
 intAdder { int-> 10 + int }
```

See? Now we can pass method signatures as type-aliases for better readability. But something's still missing, what about type checking and safety. As a first class citizen shouldn't functions also have type safety? abstraction? sealed implementations? and everything else?

You might wonder why would that be necessary. So first, let's consider the following example : 

```kotlin
sealed class ReceiverState {
    class Engine(val buildAction: Engine.() -> Unit) : ReceiverState() {
        fun checkEngineOil() { println("Checking Engine Oil") }

        fun replaceSparkPlugs() { println("Replacing Spark Plugs") }

        fun run() { buildAction() }
    }

    class Interior(val buildAction: Interior.() -> Unit) : ReceiverState() {
        fun cleanInterior() { println("Cleaning Interior") }

        fun replaceSeats() { println("Replacing Seats") }

        fun run() { buildAction() }
    }

    object Default : ReceiverState()
}

class CarManager {
    var currentReceiver: ReceiverState = ReceiverState.Default
    
    fun engine(action: ReceiverState.Engine.() -> Unit) {
        currentReceiver = ReceiverState.Engine(action)
    }
    
    fun interior(action: ReceiverState.Interior.() -> Unit) {
        currentReceiver = ReceiverState.Interior(action)
    }
    
    fun car(action: CarManager.() -> Unit) { action() }
}
```

This structure allows us to create a type-safe DSL for car management:

```kotlin
fun main() {
    val carManager = CarManager()
    
    carManager.car {
        engine {
            checkEngineOil()
            replaceSparkPlugs()
        }
        interior {
            cleanInterior()
            replaceSeats()
        }
    }
}
```

Here's what makes this approach powerful:

1. Context-Dependent Type Safety: The receiver (`this`) changes based on the context. Inside the `engine` block, `this` is of type `Engine`, while inside `interior`, it's of type `Interior`.
2. Scoped Functions: Each receiver class (`Engine`, `Interior`) defines its own set of functions, which are only available within the appropriate context.
3. Extensibility: New components (like `Exterior` or `Electronics`) can be added easily without breaking existing code.

Now what else do we in our functional toolbelt to deal with this use-case : 

```kotlin
// Functional Interface
fun interface IntAction {  
   operator fun invoke(i: Int): Int  
}

// Class Inheriting from an implicit functional interface 
class DoubleIntAction : (Int) -> Int {
 	override operator fun invoke(i: Int): Int = i * 2
 }


fun run () {
	// Kotlin SAM Conversion
	val intAction : IntAction{ it + 1 }  
	intAction(1)
	
	val action = DoubleIntAction()
	action(2)
}

```

Functional Interfaces in kotlin are exactly that. Interfaces for functions. They are also called as [SAM Interfaces](https://kotlinlang.org/docs/fun-interfaces.html). Kotlin also provides us with a neat lambda syntax, to declare instances of our functional interfaces look super clean. These allow us to reuse and structure our methods and method implementations easily!

Equipped with our toolbelt now, It would be really useful now to have some way to switch states and track the current state of the receiver from the pervious example. Consider the following code :

```kotlin
sealed interface ReceiverAction {
    fun interface EngineAction : Engine.() -> Unit, ReceiverAction
    fun interface InteriorAction : Interior.() -> Unit, ReceiverAction
}

sealed class ReceiverState {
    class Engine(val action: ReceiverAction.EngineAction) : ReceiverState() {
        fun checkEngineOil() { println("Checking Engine Oil") }
        fun replaceSparkPlugs() { println("Replacing Spark Plugs") }
        fun run() { action.invoke(this) }
    }

    class Interior(val action: ReceiverAction.InteriorAction) : ReceiverState() {
        fun cleanInterior() { println("Cleaning Interior") }
        fun replaceSeats() { println("Replacing Seats") }
        fun run() { action.invoke(this) }
    }

    object Default : ReceiverState()

    companion object {
        fun switchReceiverState(action: ReceiverAction): ReceiverState {
            return when (action) {
                is ReceiverAction.EngineAction -> Engine(action)
                is ReceiverAction.InteriorAction -> Interior(action)
            }
        }
    }
}

```

1. Functional Interfaces: `IntAction` and `StringAction` are functional interfaces that also extend a sealed interface. This allows them to be used both as function types and as part of a sealed hierarchy.

2. Sealed Hierarchies: Both `ReceiverAction` and `ReceiverState` are sealed, allowing for exhaustive when expressions and compile-time safety.

3. Dynamic State Switching: The `switchReceiverState` function can create different state objects based on the type of action provided, all while maintaining type safety.

4. Flexible Action Definitions: Actions can be defined inline (as with `IntAction { p1 -> p1 + 1 }`) or as separate classes (like `DoubleIntAction`), providing flexibility in how behaviors are encapsulated.

5. Type Inference and Smart Casts: Kotlin's type inference and smart casts make the `when` expression in `switchReceiverState` concise and type-safe.

Kotlin's type system is like a secret weapon for creating code that's not just strong, but also super flexible and easy to maintain. With sealed classes that help you avoid those annoying invalid states, receiver functions that make your code feel like a custom DSL, and functional interfaces that let you mix things up while staying type-safe, Kotlin lets you handle complex logic without breaking a sweat.

Using these tools, you can write code that's not only less likely to crash but also more intuitive and easier to tweak. We've seen how these patterns can be your go-to for everything from simple error handling to managing complex states like a pro.

And trust me, we've just scratched the surface. Kotlin's type system gets even more powerful when you start playing with generics, delegation, and coroutines. The more you dive into Kotlin, the more you'll find yourself solving tough problems in ways that are both slick and safe.

So, the real takeaway here? It's not just about writing code that works—it's about writing code that clearly shows what you're trying to do, is hard to mess up, and can easily adapt when things change. Kotlin's got your back with all the functional and type-safe goodies to make that happen, helping you build software that's both powerful and ready for whatever comes next.


✌️