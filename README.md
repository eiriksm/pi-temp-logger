pi-temp-logger
===
A node js temp logger for the raspberry pi.

Extremely simple usage example:
```
node index.js >> log.txt
```
This will pipe the output to a file called log.txt

Remember to run these commands prior to executing something like this:
```
sudo modprobe wire
sudo modprobe w1-gpio
sudo modprobe w1-therm
```
