---
title: "Why I'm building a homelab"
description: "Why I'm building a homelab"
author: "Karl"
authorImage: "@/images/blog/karl.jpeg"
authorImageAlt: "Avatar Description"
pubDate: 2024-04-24
cardImage: "@/images/blog/homelab2.jpeg"
cardImageAlt: "Homelab image"
readTime: 2
tags: ["homelab", "hobby" ]
contents: [
        "As a backend SWE, I haven't always had the scope and responsibility (and bandwidth) to handle the ops side of things in my career. I usually learn ops and networking in my spare time with hobby projects on AWS. However, AWS doesn't offer a free tier for AWS EKS so I've always deployed my hobby projects cheaply (< $5/ month) using AWS ECS and spot instances.",
        "As a result, even with using k8s (kubernetes) at work, I never really understood how k8s works since I can't play around with it on AWS. So I decided the next long term cheap (cost upfront) option to learn k8s is to start a homelab.",
        "After doing a bit of research on what to buy for my homelab, I bought 3 S12 pro N100 mini-pcs. I bought 3 so I can have a 3 node k8s cluster without having to launch VMs in one and just install Ubuntu on bare-metal. Total cost is around $540 usd, which I found acceptable.",
        "I plan on using IaC (infrastructure as code) to deploy everything. I will post all the steps on the documentation part of this website as I progress, and also publish my whole IaC stack on github, stay tuned!",
]
---
