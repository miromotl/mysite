---
title: in space
description: Shows a list of the austronauts in space at this time
layout: page.njk
---

{% if message == "success" %}
<h2 class="subtitle subtitle--xl">
    there are {{ number }} astronauts in space at this time.
</h2>

<table class="table table--stripped">
    <thead class="table__head">
        <tr class="table__row table__row--heading">
            <th class="table__cell">name</th>
            <th class="table__cell">craft</th>
        </tr>
    </thead>
    <tbody class="table__body">
    {%- for astronaut in people %}
        <tr class="table__row">
            <td class="table__cell">{{ astronaut.name }}</td>
            <td class="table__cell">{{ astronaut.craft }}</td>
        </tr>
    {%- endfor %}
    </tbody>
</table>
{% else %}
<div class="">{{ message }}</div>
{% endif %}

<div class="type-left padding-xxs padding-y">
<a href="https://www.nasa.gov/astronauts" target="blank">NASA current station crew</a>
</div>
