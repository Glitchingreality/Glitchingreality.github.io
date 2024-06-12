___
title: " Bypassing aviation firewalls by disguising packets."
date: "2024/06/10"
***author: "Chance Bowers"***
___

# Bypassing aviation firewalls by disguising packets.



While traveling recently I was on a flight with complimentary in-flight wifi, the pilot came over the speaker to announce when it was available and made note that things like video calls wouldn't work and aren't supported.

 After carefully reviewing the terms of service and noticing some extremely questionable data use and storage policies I ticked the box and connected my laptop. After taking some time to review the code of my clean nmap python script I decided I wanted to try and remote into my home PC and run some automation programs I had set up to complete some tasks so they could be finished by the time I got home. 

After trying to connect with my remote client I was getting some errors notifying me that something was blocking the connection. Apparently the aviation firewall in use was blocking UDP traffic for whatever reason..so naturally I felt curious to try and find a way around and having read the terms of use already there was no mention forbidding disguising packets, mostly just telling you not to spread malware or connect to other peoples devices without permission. So I spun up my favorite VPN and connected to my preffered server utilizing their stealth protocol that Disguises traffic as HTTPS with TLS. Stealth protocol is an OpenVPN tunnel masked to look like HTTPS traffic. This protocol is very helpful on restrictive networks.

Some networks can enable tools to more accurately determine the kind of traffic being sent over the network, and this includes detecting VPN tunnels using OpenVPN. Stealth protocol is a way to try and get around this.

Stealth protocol uses Stunnel, an open-source library, to wrap your regular VPN connection within a layer of SSL encryption. By doing this, the connection ends up looking like any other secure web traffic in the case anyone were to analyze it. To block this traffic would mean blocking all secure web browsing on that network. It also connects on 11 different ports making it fairly versatile when it comes to getting around network VPN blocks. 

Keep in mind though, the extra layer of encryption and decryption that comes with Stealth can impact the VPN performance so internet speeds might slow down. It's recommended to only use Stealth when you can't use any of the other protocols to connect to the VPN.

To my amusement, it actually worked and I was able to connect through my remote client to my PC at home! A great success and an interesting lesson learned. A true testament to the power of curiosity and willingness to experiment with different protocols. 

---

*Thank you for reading!*


[Home](https://glitchingreality.github.io/index.html)
