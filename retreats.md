---
title: Retreats
layout: page
permalink: /retreats/index.html
---
<h1 class="title">{{ page.title }}</h1>

<section class="list">
  {% for retreat in site.retreats %}
    <div class="item--push">
      <h2 class="title flush--bottom">{{ retreat.title }}</h2>
      <h4 class="flush--top">{{ retreat.date }}</h4>
      <p>
        {% if retreat.image %}
          {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
          {% if thecycle == 'odd' %}
            <img src="/assets/images/{{ retreat.image }}" class="image--left" alt="">
          {% else %}
            <img src="/assets/images/{{ retreat.image }}" class="image--right" alt="">
          {% endif %}
        {% endif %}
        {{ retreat.description }}
      </p>
    </div>
  {% endfor %}
</section>
