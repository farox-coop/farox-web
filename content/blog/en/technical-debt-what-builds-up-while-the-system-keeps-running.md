---
title: "Technical Debt: What builds up while the system keeps running"
description: "In every software project, something called technical debt starts to emerge over time."
url_img: "/images/blog/technical-debt-what-builds-up-while-the-system-keeps-running.png"
date: "2026-05-13"
author: "Jonathan Cavia"
tags: ["Software", "Technical Debt", "Architecture"]
aliases: ["deuda-tecnica-lo-que-se-acumula-mientras-el-sistema-sigue-funcionando"]
tintasur: true
---

The system works, changes get shipped, the team keeps moving forward, but at some point, something else starts happening. Tasks become slower, changes become more uncomfortable, and certain parts of the system begin to reach a state that feels difficult to touch.
\
\
It's not broken, but it's not really okay either.

## We can think about debt in two categories

On one side there's entropic debt, which emerges over time due to external factors. It appears even when things are done correctly.
\
\
Things like:
- Libraries that stop being maintained  
- Software that becomes outdated  
- Operating systems that become insecure  
- Infrastructure that no longer supports current needs.

It's essentially chance working against us, while the infrastructure gradually stops supporting the work we do.
\
\
On the other side there's **incidental debt**. This one is more interesting, because it's the kind we build ourselves.
\
\
It appears through sustained development **without revision**, through changes to the original architecture, through modifications introduced intentionally, consciously or unconsciously.
\
\
Systems change -human systems and software systems alike-, business requirements constantly evolve, and those modifications accumulate on top of a foundation that may have worked well at one point, but no longer responds effectively to the current problem.
\
\
Things continue working, just not in the best possible way.
\
\
In software engineering, this is often called *erosion*. Sometimes I call it a ***toxic server***. That state of "don't touch me too much or I'll explode." As a consequence, nobody wants to touch anything.

## One system, two realities

This becomes especially visible when working on systems that have already been around for several years. Within the same project, you can find parts that work well and others where the passage of time is obvious.
\
\
For example, in one of the systems I've been working on recently, we developed a new module to manage payment defaults, unfinished payments, in other words, debt. Beyond the unpleasant nature of the real-world problem it was meant to solve.
\
\
This module was built from scratch. We were able to design it with a certain level of clarity, iterate with users, adjust requirements, and keep technical debt relatively under control.
\
\
At the same time, there were other areas of the system that had accumulated years of changes: new requirements, patches over patches, integrations with other systems, decisions that may have made sense at the time (not really, but that's another story), things that no longer fit particularly well.
\
\
**At that point, the problem stops being purely technical in the most direct sense.** It's no longer about writing more code, it's about understanding what can be changed without breaking everything else.

## When the problem stops being technical

Technical debt rarely appears as an obvious error. It usually appears as time and cost:
* Changes that once took hours now take days.  
* Simple tasks begin requiring additional validation.  
* Development efficiency starts being affected.

And eventually, it starts impacting larger decisions: what can be done, what should be postponed, and what simply should not be touched.
\
\
At that point, technical debt stops being an internal team issue and becomes a business constraint.

## When you pay for it

People often say that technical debt gets paid in one of two moments:
* When you choose to deal with it and take the necessary precautions (the best moment).  
* When it comes to collect.

Not necessarily in a dramatic way. Sometimes it's something simpler, for example a system that can no longer support the direction the business needs to move toward, an integration that stops working. A foundational platform that no longer tolerates certain changes.
\
\
The problem is not that technical debt exists, it always will. **The problem is not knowing where it is, how heavy it is, and what it means to sustain it over time.**
\
\
Working on technical debt is not only a matter of code. It's a matter of decisions. Decisions about:
* What gets prioritized.  
* What gets postponed.  
* What continues being sustained.

In systems with a long history, those decisions end up defining not only how the software works, but also how viable it is to keep building on top of it.

## How to deal with technical debt

One of the hardest things about working on systems with significant technical debt is not writing code, it's **rebuilding the confidence required to modify something**. Once a certain level of erosion is reached, every change creates uncertainty. You no longer fully understand what might break or how far the consequences could go.
\
\
One approach I found useful in these situations is adapting TDD (Test Driven Development) to existing systems. In other words, using tests more as protection mechanisms than simple validation tools.
\
\
Something similar to red-green-refactor, but with a slight twist:
\
\
**green → red → green → refactor**
\
\
First, I write tests on something that already works. (green)  
Then I intentionally break it.  
I run the tests and they fail. (red)  
I fix what I intentionally broke.  
I run the suite again and, wonderfully, it passes. (green)  
Only then do I start refactoring.
\
\
The goal is not to "do TDD correctly," but to reduce uncertainty.
\
\
The test stops being merely a technical verification and becomes protection. It starts functioning like a contract.
\
\
And when that contract accurately represents what the business actually needs, something appears that is often missing in systems with accumulated technical debt: the possibility of working on the system without fear.