---
title: Schedule
layout: page
permalink: /schedule/index.html
---
<h1 class="title">{{ page.title }}</h1>


<section class="list">
  {% for location in site.schedule %}
    <div class="item">
      <h2 class="title flush--bottom">{{ location.title }}</h2>
      {% if location.details %}
        <h6 class="detail flush--top push-bottom">{{ location.details }}</h6>
      {% endif %}
      {% for class in location.classes %}
        <p class="flush">{{ class.title }}: {{ class.time }}</p>
      {% endfor %}
      <p>{{ retreat.description }}</p>
    </div>
  {% endfor %}
</section>
