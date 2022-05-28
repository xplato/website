---
title: 'Write Maintainable Code the First Time'
excerpt: "Maintainability is a major aspect of programming. Get it right and you'll be worry-free. Get it wrong, however..."
date: '2021/11/14'
---

A major problem in software development is stale, unmaintainable code. We've all written atrocious code before. We know the signs: nested if-statements, 100-line functions, unstructured files, and so on.

Most of us seem to _know_ this code is bad. But why? What about it makes it unusable and equally unmaintainable? Let's look at an example:

![M1](/images/articles/maintainable-code/code/m-1.png)

I'm certain we can all agree that the above code is ugly, unmaintainable, and useless. Why?

## Investigating spaghetti code

Although the code above is logically structured, easy to follow, and so on, it's bad for a few reasons:

-   Changing the behvaior of the code is difficult. If we later decide to use strings instead of integers, we'd have to change it in at least 10 places.
-   The `main` function does much more than it needs to.
-   The names of the variables are useless and don't reveal too much. What if the `input` function had no argument? `arg = input()`. Someone reading the code has no idea what it's asking for.

### Maintainable code as a measure of how easy it is to change

Writing perfect code the "first time around" is often a fantasy. Things change over time. You develop new preferences, find better ways to do things, and so on. Refactoring code is quite common. More so, it's encouraged as a way of improving performance, making code cleaner, and improving readability.

The efficacy of any refactor, however, depends upon something very important: clean, changeable code. If it's not, it may often be easier to start from scratch: tearing down the current source code and manually moving the pieces over as they fit, refactoring the individual components along the way.

This is, unfortunately, a common practice of mine. When I take a look at some of my stale codebases—like the previous iteration of my personal website—I often have a stronger inclination to completely start over than to work to both maintain and understand the existing code.

While this practice of starting from scratch _can_ be extremely valuable to a project/codebase over time, it's not the preferred method. What is preferred, however, is to write maintainable code the first time.

Read that again: write **maintainable** code the first time, not **perfect** code. Programs, as a natural consequence of their nature, are meant to be changed and refactored.

#### How to write mutable code

Writing mutable code isn't a matter of writing code with "mutation" in mind. That's ambiguous and often unhelpful. Instead, we need to have **efficiency** in mind.

Take a look at the following example:

![M2](/images/articles/maintainable-code/code/m-2.png)

What's wrong with this code? It's hard to change.

What if, at some arbitrary point in time, we decide that `e`, `exit` makes more sense than `q`, `quit`? Well, we'd have to change the if-statement. What if the `get_help()` function also lists the `q`, `quit` commands? We'd have to navigate through the codebase, search for the ambiguous "q" and change it there.

What if the README also lists `q` as a command? What if... what if... what if...

There's too many if's there. This is what makes this code, and so many others, unmaintainable.

The standard approach for "changing something" in an unmaintainable codebase is similar to the following:

1. Find the main occurence and modify it.
2. Use a search feature (if the thing you want to change is specific) to find all other occurences and change it there.
   2a. Manually traverse the codebase looking for occurences.
3. Manually test the changes to make sure you didn't break anything.
4. Run your tests to make sure those all work. Moreover, modify all occurences of "the thing" within the tests.
5. Pray to God you didn't miss something and end up pushing an unworking commit.

There's too many steps and far too many things that can go wrong here. The main factor is this: the codebase wasn't built upon a solid foundation. There may be structure, sure, but superficial structure at that. If it were truly structured, truly maintainable, it'd look like so:

1. Find the **main** occurence and modify it. (Assume that this strongly typed "main" occurence is, in fact, the main entry point for the feature. All other uses of it pull directly from it.)
2. Manually test
3. Run tests

Linguistically, there's not much difference here. Programmatically, however, it makes a world of difference.

Let's take a look at two small examples to demonstrate this. Pretend we omit the `get_arg()` function from earlier.

![M3](/images/articles/maintainable-code/code/m-3.png)

Compare the above to:

![M4](/images/articles/maintainable-code/code/m-4.png)

These examples are worlds apart. The first represents an inexperienced, unmaintainable, ugly approach to the `get_help` method. The second, on the other hand, offers a cleaner, maintainable approach. If we want to replace `q`, `quit` with `e`, `exit`, we'd only need to change it in one place: modifying the tuple.

TL;DR: Be efficient about it. Leverage the powerful features of your language to write maintainable code. Don't "hard-code" everything.

---

### Separation of Concerns: The Single Responsibility Principle

Arguably one of the more difficult things for new programmers to get used to is the single responsibility principle (SRP). AKA: Each function, class, file, commit, etc., should serve only one purpose.

Let's switch to JavaScript for these examples. Consider the following:

![M5](/images/articles/maintainable-code/code/m-5.png)

What's wrong with the above function? It's properly structured, properly spaced, properly commented, properly named, etc.. Anyone reading it should have no trouble understanding what it does. So what makes this code unmaintainable? It does too much.

Yeah, it has one ambiguous purpose: "getPostById." But it's not the abstract and/or ambiguous purpose we're looking at. Instead, we're looking at what the code itself does, and why it does too much.

I've often seen people "get around" the SRP by saying, "well, this function has one _purpose_." Of course, as expected, they define this principle by the purpose of the method, not "how many things it does."

This is an important thing I should explain further. In the first year or so of my being a programmer, I often caught myself saying, "well, the X function only does one thing." I wasn't talking about the quantity of opreations. Worse, I was talking about how many things _I thought_ this function was doing. Names can often be decieving.

Imagine a `getUserById` function that has to query the database, search through the results, find a user with that ID, and return it. That's 3 or 4 operations, depending on who you ask. This is is a **one purpose** function, **not** a function that **does one thing.**

So then, how do we group related functions?

The most obvious (and verbose) is by file. You can place these functions in a `query/user.ts` file. Additionally, you could create a class to organize all of these methods. This is usually what I prefer to do. A new `UserQuery` class would do just fine. If you're not object-oriented, you may also separate functions with a wrapping comment.

Now, back to the code:

---

We could easily extract the above function into a variety of different, easily testable methods:

![M6](/images/articles/maintainable-code/code/m-6.png)

Yes, separating this method into several different ones added more characters and made the overall implementation more verbose, I won't disagree.

Besides that, it made this code far more maintainable. We can now very easily write tests for each function, to ensure they each do the thing they were designed to do.

Imagine testing the first example `getPostById` method. What if it fails? What part of it failed? How do you start debugging? There's too many if's here.

Which error message would you prefer:

1. `'selected' is undefined at getPostById`; or
2. `'selected' is undefined at selectPostByRequestId`

The second tells you exactly which part of the code failed. You no longer have to debug a multi-line method to determine which part of it went wrong. Instead, you can logically follow the call hierarchy and determine which individual method failed, instead of the entire method as a whole.

TL;DR: Keep your functions small. It makes them easier to test, easier to use, and easier to debug.

### Writing code for others

There are two primary phrases almost all programmers are aware of:

-   You'll read more code than you write; and
-   Write comments!

Programming, espescially in the open-source community, is very much a communal field. One of the primary purposes of source control management systems like Git is to allow programmers to easily and efficiently work together on projects.

While bad code quality doesn't _always_ directly affect the quality of the interactions with other programmers, it certainly, either consciously or subconsciously, makes the project move more slowly as a result of the mental blockage when having to work with and around stale, unmaintainable code.

This section is the shortest within my article, but arguably one of the most important. If you're working on an open-source project, you _must_ write code that others can understand.

Contrary to the popular "don't use 7 words if 4 will do" tactic in social engineering, it's directly the opposite in programming: don't use 1 line if 4 can be more easily understood. Let's go through a popular example.

Let's say we want to modify all instances of `op` with `at` in all text files in our home directory.

Use this string for reference: `A cop sop on a mop with a hop.`

![M7](/images/articles/maintainable-code/code/m-7.png)

Even though this code doesn't work, you can easily understand what's going on, even if you don't know Python very well. Walk the directory tree, find all files, replace `op` with `at.` Simple!

Let's see.... how can we make this code worse? Easy!

![M8](/images/articles/maintainable-code/code/m-8.png)

Great! We can now say we've made a "perfect one-liner!" Except, we haven't. Sure, the code works, but anyone reading this code would either think it's a joke or would simply close the file and leave the project.

I don't need to continue further. Don't boast your "one-line" solutions when they make things more difficult to understand. What's the point of a 5-line comment about a 1-line solution when a 5-line solution without comments would make more sense?

I digress.

---

> What if I don't work with other programmers?

No matter, you'll still want the comments. Re-visiting some of _your own_ projects a few years later can be a trip down a nearly unfamiliar codebase. You can forget how things work, forget the structure of the project, and so on. This is why in-code documentation is unbelievably useful.

TL;DR: Write code as if you know someone will be reading it. Use comments. Drop the uneccessary one-liners when 5-liners, for example, would make more sense.

## Conclusion

Sometimes, the eagerness to start writing code can backfire drastically. Later on, you may find youself stuck. You may come to find that the structure of your application isn't suitable for long-term maintenance. Worse, you may begin to develop problem after probelm as you work to salvage the little good code you have.

This is why planning in development projects is of upmost importance. Don't just jump-in to a new project that you've never tried before without properly thinking about it. Later on, you'll wish you did.

Finally, the answer to "how do I prevent my codebase from becoming stale?" is:

**Write maintainable code _the first time._**

Thanks for reading.
