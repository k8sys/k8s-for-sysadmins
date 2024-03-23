# Overview

Kubernetes as a whole is a complex system, but while learning it helps to look past a lot of the abstractions to see what happens under the hood in ways that are more familiar to you. This documentation is meant to help you what is happening in the background relative to each resource, and how you apply your current knowledge to understanding and managing Kubernetes as a whole.

## What is Kubernetes?
At its core, Kubernetes is a system for managing applications and resources in a clustered environment. Much like Docker Compose is an abstraction layer over Docker, Kubernetes is an abstraction layer over one or many docker hosts, making sure containers are running in the right place and in the right way. It integrates with a lot of other services to configure networking, storage, configuration and other resources.

## How is k8s pronounced?
k8s is the short form of kubernetes (k(8 letters "ubernete")s), and the official pronounciation is "kubernetes". I will however always pronounce it "kates".

## What is Kubernetes for Sysadmins?
This is a series written by a sysadmin who has spent years learning, and is still learning, a lot about Kubernetes. It's meant to help you understand what Kubernetes is, how it works, and how you can use it to manage your applications and resources. It's not meant to be a comprehensive guide, but rather a starting point for you to learn more about Kubernetes and how it can help you manage your infrastructure.

I've chosen Github as the platform, because I'm fully aware that I am going to make mistakes and miss things, and I want you to correct me. The best case scenario for this series is that it becomes a community-driven resource that helps everyone learn more about Kubernetes, authors and readers alike. Writing instructions is a great way to learn, and I hope you'll join us on this journey.

## What is docker?
This tutorial will not provide a very deep insight into how docker(or container runtimes in general) works, but we might do a different series on that in the future.

## What is an abstraction layer, and why is it useful?
Even though many of us speak it fluently, some concepts are harder to understand for us who don't speak English natively. For me, "abstraction layer", "cluster orchestration" and "control plane" were some of those that didn't immediately click. Let's break it down a bit:

- **Abstraction layer**: An abstraction layer is a way to hide the complexity of a system behind a simpler interface. For example, when you use a computer, you don't need to know how the CPU works, you just need to know how to use the mouse and keyboard. Kubernetes is an abstraction layer over Docker (and/or other runtimes) and many other resources, which is an abstraction layer over the Linux kernel. It hides the complexity of managing containers and related resources behind a simple API. In short, one set of configuration for managing the entire complex ecosystem of your application - everything from configuration files and secrets, running, resource usage and monitoring, redundancy, load balancing and proxying, and more.

- **Cluster orchestration**: This is a fancy way of saying "managing a bunch of computers that are working together". Kubernetes is a system for managing a cluster of computers, making sure that the right containers are running on the right computers, that they can talk to each other, that they can access the right resources, and that they can be scaled up and down as needed. It's like a conductor in an orchestra, making sure that all the instruments are playing the right notes at the right time.

- **Control plane**: The control plane is the part of Kubernetes that manages the cluster. It's like the brain of the system, making decisions about where to run containers, how to route traffic, how to scale up and down, and so on. The control plane is made up of a number of components, including the API server, the scheduler, the controller manager, and the etcd database. These components work together to make sure that the cluster is running smoothly and that all the containers are doing what they're supposed to be doing.

