---
date: "04/07/2024"
***author: "Chance Bowers"***


# Reverse Engineering for fun & for (intellectual) Profit


As a Cybersecurity Analyst or Network Engineer, one of the tools commonly deployed is the famous Nmap Network Mapper. A free and open-source utility for network discovery and security auditing. This tool provides numerous benefits to the IT practitioner deploying the tool including being able to determine what hosts are available on a network, what services are running and what operating system they are running, as well as what type of packet filters/firewalls are being used, in addition to providing many more useful possible insights into the network topology.

Upon my frequent utilization of the tool I quickly came to realize that the walls of text returned to the terminal after being run from the command line didn't do a very good job of presenting the data after a scan in a way that would make the parsing of the data efficient. Efficient in the sense that you could easily determine at a glance the information you required for you assessment, as opposed to having to glean over the entire monochromatic output line by line. Maybe it's my A.D.D or perhaps my brain just wanted more dopamine from the terminal that I spend so much time staring into, either way, I knew there had to be a better way..

So I did what any die-hard techno-enthusiast super wizard of the internet would do.. I googled it.. I searched around to see if there was a setting or a program or tool or script that someone had developed already that I could use to solve my quandary.. While to my surprise there wasn't a lot out there, I was able to discover an old, now defunct, GitHub project that shared my sentiment of enhancing output of the famous Nmap tool. It was a Python script, developed by Zach Fleming in 2018 on an older version of Python.

Having little prior experience with Python myself, I decided to see if the thing would run - it wouldn't. I was getting tons of errors and issues, and so I said to myself that I would explore and reverse engineer the code, debugging things along the way. I spent the night working on it and before I knew it I had spent the week working on it. After several hundred iterations I had a mostly working script with some minor errors, so I published to GitHub to save my progress but by then I was hooked and just wanted to keep improving it. Eventually I had something free from errors that seemed to function quite well.

Unfortunately at some point during my development I experienced a brief yet catastrophic oversight and completely deleted all the beautifully and painstakingly crafted code, beyond any chance of recovery. It's a shame really, but at the end of the day I still completed the goals that I set out to accomplish; To see if I could successfully reverse engineer and debug a Python script. For that I pat myself on the back.

Overall it was a great learning experience and I would encourage anyone else to not be intimidated to get their hands dirty and try new things, you never know - you might just end up having fun or enjoying the feeling of a sense of accomplishment like I did !

---

*Thank you for reading!*


[Home](https://glitchingreality.github.io/index.html)
