---
title: What Every Developer Must Know About SSL and TLS
date: "2019-10-31"
draft: false
path: "/blog/ssl-and-tls"
---

<br/><br/><br/><br/>
![](https://i.ibb.co/Hn1cZP7/door-green-closed-lock.jpg "")<br/><br/>

SSL and TLS are often confused as if they are the same thing. But the truth is that SSL is the predecessor to TLS. New versions of TLS came up over the years to enhance security and support advance algorithms. 

#History
TLS was introduced back in 1999 as a new version of SSL 3.0. SSL died in 2014 due to the famous [Poodle Attack](https://en.wikipedia.org/wiki/POODLE). 

##Terminologies:
People still use the terminology of SSL, despite of the fact that it is what TLS that is being used.

The most important or the takeaway of this post if the mechanism of TLS Handshake that takes place between a client and a server.

It is rather a complex concept if we observe under the hood, but let's discuss the general concept for brevity.

##TLS Handshake:


![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/wo4uvkwt81n84hxpgne5.png)


This is also knows as TLS negotiation, after this process is completed the communication starts between client and server.

The first step is when client tries to initiate connection with server over network. Server in response sends a public key with an encrypted certificate (A certificate is a file that is digitally bind with a cryptographic key and signed by CA).The client has a list of valid certificates. The client verifies public key with certificates that it holds, if the public key is invalid and does not align with a certificate on client side the negotiation fails. If that succeeds, the client sends it back in encrypted form with the server's public key.

After the negotiation is successful, client and server communicate over an encrypted channel.


This is TLS handshake in general.


*THIS IS QUITE GENERAL OVERVIEW. THERE IS A TON OF DETAIL, BUT THIS IS TO BE KNOWN TO BE THE LEAST.*


> Good luck with your dev journey and don’t forget to like and share

> Have any questions? just want to say 👋 @MohammadHasham_

