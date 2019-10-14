---
title: "Redis 101: Foundation and Core Concepts"
date: "2019-10-14"
draft: false
path: "/blog/redis101"
---

<br/><br/><br/><br/>
![](https://miro.medium.com/max/1200/1*i1d88Q8NNrRv6kjf7Ssw4g.png "Redis")<br/><br/>


Redis has been in the database game for quite a while now. The popularity has been increasing due to various factors that are discussed below. But before starting we should understand what is Redis actually.
So as per the docs state


> Redis is an open source (BSD licensed), in-memory data structure  store, used as a database, cache and message broker.
<br/>

![alt text](https://miro.medium.com/max/6016/1*lRAAu4ztCpoY0Iim9gJctg.jpeg "Photo by Ben White on Unsplash")




Now to be honest, the definition is difficult to understand. But I am quite sure that by the end of this article you would comprehend it properly.

Let’s start by understanding what are **NoSQL Databases** in general. NoSQL databases are used to store data in any other format than rows and columns. These are widely used to store data that is non relational in nature.

For example, consider two tables **Person** and **Mobile_Phones**, the two tables tend to have a relation (A person can have one or many mobile phones). So in scenarios where we need to relation among data SQL Databases are preferred.

Consider another scenario where the data to be stored has entries for two schemas such as **Furniture** and **Mobile_Phones**. It is quite evident that there is no such relation in above data. So storing this type of data in NoSQL database may increase overall performance.

Examples for relational databases consist of MySQL,PostgreSQL. On the other hand, MongoDB,Redis,Neo4j etc are examples for NoSQL databases.
<br/><br/><br/>



![alt text](https://miro.medium.com/max/1920/1*AbmNmFHTOmIUA1Vw_JFv_w.png "Google Images")

---

Redis has different data structures to store data. Let’s explore them one by one.

## Strings

This is the base type of all the types. Every single value can be stored as strings.

```js
SET name “fido”
```

We are storing the string as a key value pair.


<br/><br/>

## Key-Value Pair

The most easy and used data structure for Redis is storing string in key-value pair.

```js

SET name “fido”
GET name
// fido
```

If you are familiar with Javascript objects or Python dictionaries. You can think of it as:

```js
{
  name: "fido"
}
```
<br/><br/>

## Lists

![alt text](https://miro.medium.com/max/750/1*mMN5zxOZo1XjHNGgyirKxg.png "Google Images")

Lists are actually lists of strings stored in a particular order. Lists are also good when we want just to create a collection of N items where usually we access just the top or bottom items, or when N is small. Because random access is slow and takes O(N) time to complete.

Lists have several commands such as **RPUSH, LPUSH, LLEN, LRANGE, LPOP, and RPOP**. These commands help to perform specific operations lists.

```js
# RPUSH puts the new value at the end of the list.
RPUSH friends "Alice"
# LPUSH puts the new value at the start of the list.
LPUSH friends "Bob"
```
<br/>

**LRANGE** gives a subset of the list. It takes the index of the first element you want to retrieve as its first parameter and the index of the last element you want to retrieve as its second parameter.

```js
LRANGE friends 0 -1
```
<br/>

**LLEN** returns the length of linked list

```js
LPUSH friends "Alice"
LPUSH friends "Bob"
LLEN friends  # => 2
```

<br/>

**LPOP** and **RPOP** removes (pops) elements from start and end respectively.

```js
# RPOP pops the value from the end of the list.
RPOP friends
# LPOP pops the value at the start of the list.
LPOP friends "Bob"
```
<br/><br/>
## Sets

Among differences between sets and lists is that sets store unique elements unlike lists.

Sets are an unordered data collection. Sets perform fast iteration than lists across elements.

Sets support complex operations like intersections, unions, and so forth, so this is a good data structure for using Redis in a “computational” manner, when you have data and you want to perform transformations on that data to obtain some output.

In sets adding, removing and lookup for an element takes O(1) constant time.

Small sets are encoded in a very efficient way.

Among many commands for Sets we will discuss **SADD, SREM, SISMEMBER, SMEMBERS**.
<br/>

**SADD** adds a member to a set

```js
SADD superpowers "flight"
```
<br/>

**SREM** removes a member from a set

```js
SREM superpowers "flight"
```
<br/>

**SISMEMBER** tests if the given value is in the set. It returns 1 if the value is there and 0 if it is not.

```js
SISMEMBER superpowers "flight"  # => 1
SISMEMBER superpowers "height"  # => 0
```
<br/>

**SMEMBERS** returns all elements from a set.

```js
SMEMBERS superpowers # => "flight", "height"
```
<br/><br/>
## Sorted Sets

> Sorted sets are the only other data structures, besides lists, to maintain ordered elements.

Sorted sets are like more powerful lists where inserting, removing, or getting ranges from the the middle of the list is always fast. But they use more memory, and are O(log(N)) data structures.

**ZADD** command is used to add all the specified members with the specified scores to the sorted set stored at key. **ZRANGE** displays all elements within the set -1 indicates the last index of set.

```js
ZADD mycolorset 1 white
ZADD mycolorset 2 black
ZRANGE mycolorset 0 -1

#white
#black
```
<br/>

Suppose if we insert another element at index 2. The element placed at index 2 will be shifted to the next index and the new element would take the place.

```js
ZADD mycolorset 2 yellow
ZRANGE mycolorset 0 -1
#white 
#yellow
#black
```
<br/>
To remove an element, we can use ZREM as:

```js
ZREM mycolorset yellow
```

This would remove the element from the sorted set.
<br/><br/>

## Hashes

Hashes are used to store collective information about something. Let’s discuss an example to get better understanding.

They act as maps between the string fields and the string values. Hence, they are the perfect data type to represent objects.

In Redis, every hash can store up to more than 4 billion field-value pairs.

```js
HMSET person name "John Doe" 
designation "Backend Engineer" likes 20 shares 23
```

In the above code snippet, we are using **HMSET** to store a hash. As we can see there are different fields associated with **person.**

Let’s retrieve all the data with **HGETALL** as

```js
HGETALL person 
1) name
2) John Doe
3) designation
4) Backend Engineer
5) Likes
6) 20
7) shares
8) 23
```
<br/><br/>

---
<br/>

Now that we have covered the basic data types. Let’s discuss the use cases for Redis.

Apart from it’s many use cases, there are some popular use cases for Redis such as

- Caching Layer Database
- Pub/Sub
- Get top analysis for something
- Message Queues

Let’s discuss each of them briefly,

## Caching Layer Database:
Redis being an in-memory store can be used as cache for storing user session or other relevant details. 
Redis is highly performant to read data, which is one of the reasons of using it as a caching layer database 
on top of the main database.

![alt text](https://miro.medium.com/max/756/1*JMiqEDklGtz5_L2mFB-zNg.png "Google Images")

## Pub/Sub:
Redis Pub/Sub implements the messaging system where the publishers sends the messages while the subscribers receive them.
The link by which the messages are transferred is called channel.A subscriber can subscribe to multiple publishers bases on scenario.

```js
PUBLISH chat “Hi there”
SUBSCRIBE chat
```
<br/>

![alt text](https://miro.medium.com/max/731/1*SbYWnSywngh8z_UpM_FiEQ.png "Google Images")

## Get top analysis for something:

We can get top users, top trends or anything on edges. By edges, that means anything that lies on top or bottom of our list.
For example suppose we have some users and they have some scores. So we can easily store this in a sorted set and query as:

```js
ZRANGE user_scores 0 10 WITHSCORES
```

The above query would return top 10 users with their scores respectively. In scenarios like this Redis is the go to database.
<br/><br/>
## Message Queues:

Redis has the same concept of queues as in general programming. Message queues can be implemented with push and pop if there are multiple processes running.

<img src="https://miro.medium.com/max/600/1*WVxrzV6O4tAtipIV8p7PGA.png" style="display:block;margin:0 auto">
<br/><br/><br/>

There are many libraries that provide ease and enhanced functionalities to work with Redis queues.

---

This was a brief introduction to the world of Redis there is a lot to [explore](https://redis.io/documentation). I would highly recommend to give a shot to [this](https://try.redis.io/).

> **Good luck and don’t forget to share**
<br/><br/><br/>