---
title: earthquakes
description: Shows a list of earthquakes occured the last 24 hours
href: quakes
layout: page.njk
---

<h2 class="subtitle subtitle-xl">{{ metadata.title }}</h2>
<h3 class="subtitle subtitle-lg">Count: {{ metadata.count }}</h3>

<table class="table table--stripped">
    <thead class="table__head">
        <tr class="table__row table__row--heading">
            <th class="table__cell">time</th>
            <th class="table__cell">magnitude</th>
            <th class="table__cell">place</th>
            <th class="table__cell">url</th>
        </tr>
    </thead>
    <tbody class="table__body">
    {%- for quake in features %}
        <tr class="table__row">
            <td class="table__cell">{{ quake.properties.time/1000 | ticksToUtc }}</td>
            <td class="table__cell">{{ quake.properties.mag }}</td>
            <td class="table__cell">{{ quake.properties.place }}</td>
            <td class="table__cell">
                <a href="{{ quake.properties.url }}" target="_blank">
                    {{ quake.properties.url }}
                </a>
            </td>
        </tr>
    {%- endfor %}
    </tbody>
</table>
