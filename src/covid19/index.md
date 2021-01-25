---
title: covid-19
description: Shows some data about covid-19 infections
href: covid19
covid19Global: This is global
countries: [switzerland, austria, germany, italy, france, spain, uk, us, mexico]
layout: page.njk
---

<h2 class="subtitle subtitle--xl">world</h2>

total confirmed &nbsp; | new confirmed &nbsp; | total deaths &nbsp; | new deaths
:---: | :---: | :---: | :---: | 
{{ summary.Global.TotalConfirmed | withThousandsSeparator }} | {{ summary.Global.NewConfirmed | withThousandsSeparator }} | {{ summary.Global.TotalDeaths | withThousandsSeparator }} | {{ summary.Global.NewDeaths | withThousandsSeparator }}

<h2 class="subtitle subtitle--xl">country pages</h3>

{% for country in countries -%}
- [{{country}}]({{country}})
{% endfor %}
