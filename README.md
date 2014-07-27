UPHackathon
===========

2014 Union Pacific hackathon code

Sleep Station App

Implented in AngularJS, Javascript, and Jquery, this app was wrapped in Phonegap and exported for
Android devices. The download is found here: https://build.phonegap.com/apps/1024154/share
(It can very easily be wrapped for iOS--we just didn't want to pay for certificates.)

This app takes into account the amount of sleep you've had over the past few days and is intended for
daily use in order to maintain an accurate algorithm.

It determines if you are safe to work your next shift. If you are not, you must alert your manager.
It will graph your sleep score over the days.

Future goals:
-Hook up with some API that can actually track your sleep, rather than allow for user input
-Implement an alarm clock
-Allow prediction of best shift times, or shift time calculation