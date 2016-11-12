---
title: Events
layout: page
permalink: /events/index.html
---
<h1 class="title">{{ page.title }}</h1>

<section class="list">
  {% for event in site.events %}
    <div class="item--push">
      <h2 class="title flush--bottom">{{ event.title }}</h2>
      <h4 class="flush--top">{{ event.date }}</h4>
      <p>
        {% if event.image %}
          {% capture thecycle %}{% cycle 'odd', 'even' %}{% endcapture %}
          {% if thecycle == 'odd' %}
            <img src="/assets/images/{{ event.image }}" class="image--left" alt="">
          {% else %}
            <img src="/assets/images/{{ event.image }}" class="image--right" alt="">
          {% endif %}
        {% endif %}
        {{ event.description }}
      </p>
    </div>
  {% endfor %}
</section>
