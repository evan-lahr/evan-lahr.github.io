---
layout: project-right
title: "Micromooring sensors"
description: "Set-and-forget sensors for UAV deployment"
date: 2018-12-20
weight: 2
thumbnail: "/assets/images/gen/projects/micromoor.png"
image: "/assets/images/gen/projects/micromoor.png"

gallery:
  - image: "/assets/images/gen/projects/moor-dsign.png"
    caption: "<strong>Hardware design.</strong> Schematic of the instrument housing, showing primary components: RF-transparent endcap and L-band antenna for satellite communication, o-ring and titanium pipe pressure housing, internal electronics, power source, and release endcap with drop link for anchor release upon recovery."
    max_width: "65%"

  - image: "/assets/images/gen/projects/micromoor.png"
    caption: "<strong>Life cycle.</strong> (1) Device configuration on a laptop. (2) Deployment into the ocean from a vessel or drone. (3) Data logging of hydrodynamic and sediment parameters while moored to the seabed. (4) A trigger condition releases the device from the seafloor (programmed time, battery level, or detected event). (5) The platform ascends and transmits the recorded data to a satellite."

---

One of my PhD side-projects has been developing a low-cost benthic sensor to monitor sediment transport, which I call the micromooring. This sensor is geared towards being compact, low-cost, and open-source, and is designed for monitoring of near-seafloor hydrodynamics and suspended sediment. Each unit integrates four common sensors into a package weighing <1 kg which records wave dynamics, current velocities, and sediment transport over extended periods. Its small footprint and low cost make it scalable for large arrays.

The sensor platform is relatively energy-efficient, enabling data logging for months without maintenance. Custom circuit boards, waterproof housings, and low-power firmware work together to maximize reliability and minimize cost, making seabed timeseries data more accessible than through traditional methods. Components are designed to be readily sourced, assembled, and modified, supporting iteration and deployment by resource-limited research teams.The platform's firmware, schematics, and deployment protocols are also open-source, allowing other scientists and institutions to replicate the design. By combining affordability, robustness, and modularity, the MicroMooring provides a new tool for seafloor observation.

<div class="col-12 col-md-12">
<div class="video-thumb">{% include youtube.html id='mfWfvRRMP4k'%}</div>
<div class="media-title">Programming the MicroMooring</div>
</div>

<div class="col-12 col-md-12">
<div class="video-thumb">{% include youtube.html id='drKk3v11mMw'%}</div>
<div class="media-title">Deploying a MicroMooring Prototype</div>
</div>
