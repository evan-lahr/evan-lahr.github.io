---
layout: default
title: "Media"
permalink: "/Gallery/"
description: "Photos and video from fieldwork, instrumentation, and analysis."
---

<style>

.media-grid .col-6 {
  margin-bottom: 30px;
}

.video-thumb iframe {
  width: 100%;
  height: 180px;
  border-radius: 6px;
}

.gallery-thumb img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
}

.media-title {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 6px;
}

</style>



<div class="section">
<div class="container">

<h1 style="text-align:center; margin-bottom:40px;">Media</h1>



<h2 style="text-align:center;">Videos</h2>

<div class="row media-grid">

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='wmdEsEyisvE' %}</div>
<div class="media-title">Piston Coring</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='jTBrG067ZtU' %}</div>
<div class="media-title">Core Splitting</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='gRe01Z4lViI' %}</div>
<div class="media-title">Gravity Coring</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='mtFn_C7d8O0' %}</div>
<div class="media-title">Ballard Locks</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='TbxNyQCgbik' %}</div>
<div class="media-title">Dragonfly Software</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='htFtEYCcGoE' %}</div>
<div class="media-title">Shipek Grab</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='7YK_qkaYxh8' %}</div>
<div class="media-title">QGIS CRS</div>
</div>

<div class="col-6 col-md-3">
<div class="video-thumb">{% include youtube.html id='0vDXa3IU67c' %}</div>
<div class="media-title">QGIS Clasts</div>
</div>

</div>



<h2 style="text-align:center; margin-top:60px;">Gallery</h2>

<div class="row media-grid">

{% assign images = "
https://raw.githubusercontent.com/evan-lahr/photos/main/ak.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast10.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast11.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast13.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast14.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast15.jpeg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast2.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast3.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast4.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast5.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast6.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast7.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/ast8.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/aus1.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/aus2.jpeg,
https://raw.githubusercontent.com/evan-lahr/photos/main/aus3.jpeg,
https://raw.githubusercontent.com/evan-lahr/photos/main/crv1.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/crv2.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/crv3.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/crv4.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm1.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm2.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm3.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm4.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm5.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm7.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm8.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm9.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm10.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm11.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm12.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm13.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm14.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm15.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm16.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm17.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm18.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/mm19.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz1.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz2.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz3.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz4.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz5.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz6.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz7.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz8.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/nz9.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch1.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch2.jpg,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch3.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch4.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch5.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/tch7.JPG,
https://raw.githubusercontent.com/evan-lahr/photos/main/wa2.jpg
" | split: "," %}

{% for img in images %}
{% assign full = img | strip %}

<div class="col-6 col-md-3">

  <a href="{{ full }}" target="_blank" style="text-decoration:none;">

    <div class="gallery-thumb lazy-bg"
         data-src="{{ full }}"
         style="
           width:100%;
           height:180px;
           background-color:#111;
           background-size:cover;
           background-position:center;
           border-radius:6px;
           cursor:pointer;
         ">
    </div>

  </a>

</div>

{% endfor %}



</div>

</div>
</div>


<script>

document.addEventListener("DOMContentLoaded", function() {

  const lazy = document.querySelectorAll(".lazy-bg");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const el = entry.target;
        el.style.backgroundImage = `url('${el.dataset.src}')`;
        observer.unobserve(el);

      }

    });

  }, {
    rootMargin: "200px"
  });

  lazy.forEach(el => observer.observe(el));

});

</script>
