---
title: "Ethernet to the rescue"
description: "Spent 3 hours wrestling with Ubuntu, but now my k3s cluster is live and kicking"
author: "Karl"
authorImage: "@/images/blog/karl.jpeg"
authorImageAlt: "Avatar Description"
pubDate: 2024-04-25
cardImage: "@/images/blog/blogpost2.jpeg"
cardImageAlt: "Homelab image"
readTime: 5
tags: ["homelab", "ethernet", "ubuntu" ]
contents: [
        "As I stated, I bought 3 minipcs for my homelab. I installed Ubuntu 24.04 (beta) on the first 2 no problem. Setup ssh via keypair shortly after, and then I opened the third minipc and tried installing Ubuntu. 3 hours later, it still wasn't installed. I went to bed, and the next morning I woke up to an \"installation failed\" error.",
        "I tried installing it again, and this time it worked but took almost 3 hours. I then ran a speedtest after it installed and found out why it took so long: less than 1 Mbps download speed. The other 2 servers are running at 200 mbps, which is expected with my low tier Verizon FIOS plan. I was about to return the box, then I realized why not plug in ethernet? I got 300 mbps download speed and I was good to go. The nerds on discord urged me to just return it to Amazon since the wifi driver is cooked, but I'm going to keep it.",
        "After all that, I installed Ansible on my laptop, ran a security playbook (https://github.com/karlazzampersonal/ansible-security) that does things like change the SSH port and turn auto updates on. Even though these are private IP addresses and noone can attempt to port scan.",
        "I then wrote an Ansible playbook to deploy a 3 node k3s cluster (lightweight kubernetes cluster) as it's just a single binary. Here is the code for that (https://github.com/karlazzampersonal/ansible-k3s). It has a playbook to create a cluster and also destroy the cluster. I made them all control nodes so that its HA (highly available). Next up, I'm going to tinker with it so I can add an external load balancer, swap the ingress controller to ngxinx, and do a few other fun things.",
]
---
