---
title: Introduction
---

Learn how to use @nuxt/content.
<!--more-->
Full amount of content beyond the more divider.
::hero
Default slot text

#description
This will be rendered inside the `description` slot.

  :::card
    A nested card
    ::card
      A super nested card
    ::
  :::
::

::the-title
A [rich text](/) will be **rendered** by the component.
::

# Title

:banner


::alert{type="warning"}
The **alert** component.
::

::icon-card 
---
icon: IconNuxt
description: Harness the full power of Nuxt and the Nuxt ecosystem.
title: Nuxt Architecture.
---
::

::dropdown{:items='["Nuxt", "Vue", "React"]'}
::

::dropdown{:items='[1,2,3.5]'}
::

::chart{:options='{"responsive": true, "scales": {"y": {"beginAtZero": true}}}'}
::

Hello [World]{.bg-blue-500}!

Hello [World]{.text-primary-500}!

Attributes works on:

- ![](/favicon.ico){.inline.m-0.bg-primary-800} image,
- [link](#attributes){.bg-primary-400}, `code`{.text-red-500},
- _italic_{.bg-primary-500} and **bold**{.bg-primary-500} texts.


Hello, this is a [Markdown]{.px-1 .bg-blue-200 .rounded-lg} file!

::div{.w-full .bg-green-200 .p-4}
Another way to use it!
::
