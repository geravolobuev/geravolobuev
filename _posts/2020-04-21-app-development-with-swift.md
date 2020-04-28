---
layout: post
title: App Development with Swift
date: 2020-04-21 19:00:00 +0000
description: Конспект книги
---

## App Development with Swift ##

Закончил чтение App development with Swift.  
Книгу посоветовали прочитать после собеседования на iOS разработчика. Книга построена по формату теория на практике. Видимо написана для людей не осиляющих «The Swift Programming Language». Наконец разобрался с MVC, closures, ООП на практике. Много хороших примеров написания чистого, поддерживаемого, не «вонючего» кода.  
Ниже выдержка из последней главы Project planning and prototyping.  

«The process of designing and planning an app is a process of narrowing in on a specific problem that an app can solve for a specific group of people. This design process involves brainstorming a number of different ideas, then focusing on one of those ideas and following an iterative pattern of planning, prototyping, and conducting user interviews to come up with a concrete design for your app.»

**Brainstorm**

«Brainstorming allows you to identify problems and come up with possible solutions. In this stage you might want to take some time to identify a few problems that you think an iOS app could solve. With these problems in mind, you can brainstorm a list of apps you’d like to build. These could be new ideas that you don't think anybody has thought of or they could be ideas for improving or personalizing existing apps. »

**Plan**

«As you sit down to plan your app, remember that simpler is almost always better. In its initial release, your polished, functional app should solve a problem for a particular group of users. Don't attempt to release version 10 on day one. Instead, it's better to do a great job creating the minimum viable product for your initial idea.

In this case, a minimum viable product refers to an app that meets the minimum required functionality to successfully accomplish its goals. As you brainstorm, don't get so attached to an idea that you aren't willing to postpone the feature or scrap it altogether. Allowing your original idea to be diluted by too many features is known among developers as scope creep—which delays the app's release and increases its chances of confusing your target users.»

«Before you dive into any more planning, it's important to create a persona that represents your target user.

But it's crucial that you recognize you are not the target user. Of course, you may end up using the app, but your audience may include people with characteristics very different from yours. The persona should describe your typical, or average, user. At the same time, you don't want your persona to be so average and abstract that it represents the entire world's population.»

«Now it's time to start brainstorming the basics of your app. At this point, try listing out any and all features that might help your defined persona solve the defined problem»

**Prototype**

«With your feature set clearly defined, it might be tempting to start writing code. But that's not the best path to a successful app. More often than not, your app will fail to appeal to your target users if you don't plan it out, get feedback on your designs, and iterate on those results.

The key to planning a successful app is to implement as many design cycles as possible before you launch your final first version by going through an iterative design process.»

«The first step in creating your prototype is to turn your list of features into workflows and visual representations of the app. This is where your app really starts to take shape. »

«At this point, you won't need to pin down one (and only one) workflow. In fact, it's a great idea to create simple visual representations of multiple options. That way, you can compare different workflows side by side and decide which will work best for your users (or let them decide).»

«Now that you have the skeleton for your prototype, it's time to make a more formal prototype. A prototype is a fake version of your app that you can show other people to get feedback. The key to good prototyping is to ask yourself three questions: What needs to be more real? What can I fake? Where will it be used?»

**Evaluate**

«Prototypes in hand, it's time to talk to as many possible users as you can.

How will you get their feedback? When you hand them the device with your app prototypes, it's important to allow their interactions to be natural and independent. Observe their responses and their interactions, then ask simple questions to help you understand what's working, what isn't, and what else might be important to consider adding to the app.»

«Again and again, you'll repeat the feedback process and rework the prototype until you have a polished design. With each iteration, you can make the prototype more real, more detailed, and closer to the final product.»

**Building interface**

«Iin programming, an interface can also reference the definition of properties and methods that make up a type.

As you work through this process, write down each type with its accompanying properties and methods. Keep in mind that your definitions will change as you go, so make sure it's easy to modify your list. »

[Canvas for app planning.pdf](/uploads/Canvas for app planning.pdf "Canvas for app planning.pdf")

«Here's a general approach for building most apps:

1. Build out the workflows, or navigation hierarchy, for navigating the app in a storyboard.
2. Implement the model definitions and enter sample data.
3. Build the view hierarchies for each scene.
4. Implement the view controllers and wire the interface to the sample data.
5. Implement model and helper controllers.
6. Update the view controllers to create or use real data instead of sample data.
7. Polish the visual design, including colors, typography, and animation.»
