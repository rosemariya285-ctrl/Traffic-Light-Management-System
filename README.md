# Traffic Light Vehicle Queue Management System

## Description
A menu-driven Java mini project demonstrating the Queue data structure in a traffic-signal scenario. It follows FIFO (First In, First Out): the first vehicle added is the first vehicle removed.

## Features
- Add a vehicle to the queue (enqueue)
- Turn the signal green and allow the front vehicle to pass (dequeue)
- View the next vehicle (peek)
- Display all waiting vehicles in FIFO order
- Check whether the queue is empty
- Turn the signal red

## Technology
Java, `Queue`, `LinkedList`, and `Scanner`.

## Requirements
Java JDK 8 or later.

## How to Compile and Run
Open a terminal in this folder and run:

```bash
javac TrafficLightQueueSystem.java
java TrafficLightQueueSystem
```

## Queue Operations
- `offer()` adds a vehicle to the rear.
- `poll()` removes the front vehicle.
- `peek()` views the front vehicle without removing it.
- `isEmpty()` checks whether the queue is empty.
- `size()` returns the number of waiting vehicles.

## Example
Add KL-05-A-1111, then KL-05-B-2222. The first vehicle shown as next will be KL-05-A-1111. When the signal turns green, KL-05-A-1111 passes first. This demonstrates FIFO.

## Note
This is an educational simulation, not a system connected to real traffic lights.
