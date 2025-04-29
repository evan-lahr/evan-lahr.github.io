---
title: 'hardware: mooring anchors'
author: ejl
date: 2022-05-02 01:01:00 +0800
categories: [deployment hardware guide]
tags: [taught-wire mooring, anchors, mdd, matlab,train wheels]
---
Mooring anchors keep your gear in one place over the course of the deployment. To that end, they need to be heavy enough to counteract your floation tension **and** the added tension from the frictional drag induced by canyon currents. The stronger your currents, the heavier your anchor must be. PIs calculate requirements using Mooring Design & Dynamics ([MDD.m](https://www.mathworks.com/matlabcentral/fileexchange/1629-mooring-design-and-dynamics){:target="\_blank"}), a matlab script which predicts your weight on bottom, line tension, drag, and wire angle in the event of currents with speed X.

Anchors are left on bottom during recovery, so inert and cheap materials are a priority. Our lab uses train wheels. Wheel weight varies, with boxcars wheels at ~750#, and locomotive wheels at ~1000#. Wheel stacks are held together using a central core of welded pipe, round bar, and chain. See the diagram and photos below. In this design, the welds are not load bearing, and don't need to be perfect.

<img src="https://raw.githubusercontent.com/evan-lahr/photos/main/mooringanchor.png" style="height: 400px; width:600px;"/>