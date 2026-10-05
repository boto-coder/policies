---
layout: null
permalink: /
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scelestic.com</title>
<meta name="description" content="Scelestic.com is under construction.">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="{{ '/assets/favicon.png' | relative_url }}" type="image/png">
<link rel="stylesheet" href="{{ '/assets/style.css' | relative_url }}">
</head>
<body>

<div class="grid-bg" aria-hidden="true"></div>
<div class="glow glow-a" aria-hidden="true"></div>
<div class="glow glow-b" aria-hidden="true"></div>

<main class="stage">

  <div class="logo-wrap">
    <img class="logo" src="{{ '/assets/scelestic-mark.svg' | relative_url }}" alt="Scelestic logo" width="132" height="132">
  </div>

  <h1 class="brand">
    <span class="typed" data-text="Scelestic.com"></span><span class="caret" aria-hidden="true"></span>
  </h1>

  <p class="tagline">Tools for developers. Built slowly, on purpose.</p>

  <div class="progress" role="img" aria-label="Site under construction">
    <div class="bar"><span class="fill"></span></div>
    <p class="pct"><span class="num">0</span>% built</p>
  </div>

  <section class="status" aria-label="Build status">
    <div class="row"><span class="dot" data-state="done"></span><span class="k">Brand &amp; logo</span><span class="v">done</span></div>
    <div class="row"><span class="dot" data-state="done"></span><span class="k">Privacy policy</span><span class="v">done</span></div>
    <div class="row"><span class="dot" data-state="done"></span><span class="k">Terms of use</span><span class="v">done</span></div>
    <div class="row"><span class="dot" data-state="busy"></span><span class="k">The interesting tools</span><span class="v">building</span></div>
  </section>

  <nav class="links">
    <a href="{{ '/privacy.html' | relative_url }}">Privacy policy</a>
    <span class="sep" aria-hidden="true">&middot;</span>
    <a href="{{ '/terms.html' | relative_url }}">Terms of use</a>
  </nav>

</main>

<footer class="foot">
  <p>Site under construction. Content here is general information only.</p>
</footer>

<script src="{{ '/assets/progress.js' | relative_url }}"></script>
</body>
</html>
