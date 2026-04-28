---
title: "Indoor Visible Light Positioning System"
description: "A low-cost visible light positioning prototype using frequency-modulated LEDs, a rotating light sensor, Arduino control, and AoA-based position estimation."
pubDate: "Apr 29 2026"
heroImage: "/project1.jpg"
badge: "graduation project"
tags: ["embedded-systems", "positioning", "optical-signals"]
---

This was my undergraduate graduation project at Queen Mary University of London.
The goal was to design and evaluate a low-cost indoor positioning system using
Visible Light Positioning (VLP), where LED light sources act as fixed location
references and a rotating photodetector estimates its own position from detected
signal angles.

![System architecture](../../projects/indoor-visible-light-positioning/system-architecture.jpg)

*System functional architecture: four modulated LED transmitters, a rotating
light sensor, Arduino control, position estimation, and LCD output.*

The prototype used four fixed LED modules, each flashing at a distinct
frequency. A TSL2561 light sensor was mounted on a 24BYJ48 stepper motor so it
could scan across a full 360-degree field. The Arduino controlled the motor,
sampled light intensity, identified the frequency zone of each detected LED, and
recorded the corresponding angle.

![Physical layout](../../projects/indoor-visible-light-positioning/physical-layout.jpg)

*Physical layout of the prototype, with LED zones arranged around a 50 cm by
50 cm test grid.*

For position calculation, the system converted detected zone-angle pairs into
directional lines and used a normal-form representation to avoid singularities
from vertical slopes. Intersections were solved using Cramer's Rule, and multiple
valid intersections were averaged to produce the final estimated position.

![Software flow](../../projects/indoor-visible-light-positioning/software-flow.jpg)

*High-level software flow for scanning, signal detection, frequency matching,
position calculation, and LCD display.*

The evaluation tested how accuracy changed with more accumulated zone-angle
pairs, how the system performed at central and peripheral grid positions, and
how robust it was under different ambient light levels. In the zone-angle
accumulation test, positioning error decreased from 20.09 cm with two pairs to
0.08 cm with 24 pairs, showing that averaging more valid detections improved
stability.

![Position error vs amount of zone-angle pairs](../../projects/indoor-visible-light-positioning/zone-angle-error.jpg)

*Positioning error decreased as more zone-angle pairs were accumulated.*

The final prototype achieved reliable positioning in controlled indoor
conditions. The central test area reached very low error, while peripheral
positions were more sensitive to angular distortion, mechanical alignment, and
ambient light interference.

![Peripheral accuracy](../../projects/indoor-visible-light-positioning/peripheral-accuracy.jpg)

*Accuracy test across centre and peripheral positions.*

This project connected embedded control, optical sensing, signal analysis,
mechanical design, and geometric position estimation. The main limitations were
line-of-sight dependency, open-loop motor drift, ambient-light sensitivity, and
manual calibration. Future improvements would include encoder feedback,
self-calibration, stronger LED transmitters, and better filtering on both the LED
driver and sensor side.
