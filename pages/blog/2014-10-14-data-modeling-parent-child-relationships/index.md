---
path: '/data-modeling-parent-child-relationships/'
layout: post
title: 'Data Modeling: Parent-Child Relationships'
date: 2014-10-14 11:21:29
author: resham
categories: ['Data Modeling', 'How Tos']
image: parent-child-relationships-e1412881958647.png
summary: "One of the more important concepts in database modeling is the notion of a parent-child (or hierarchical) relationship. A parent-child relationship is one in which one object (the parent) has other objects (the children) associated with it in a hierarchical arrangement. For example, a manager object can have worker objects associated with it."
---
<div>One of the more important concepts in database modeling is the notion of a parent-child (or <wbr />hierarchical) relationship. A parent-child relationship is one in which one object (the parent) has other objects (the children) associated with it in a hierarchical arrangement. For example, a manager object can have worker objects associated with it.</div>
<!--more-->
Typically, parent-child arrangements are modeled as one-to-many relationships, where each record in one table can be associated with multiple records in another table. (Other logical models include one-to-one and many-<wbr />to-many.) In the table designs, each row in the child table refers to a row in the parent table. For example:

Parent table: Managers
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>ID</td>
<td>First Name</td>
<td>Last Name</td>
<td>Department</td>
</tr>
<tr>
<td>101</td>
<td>Alan</td>
<td>Abromowitz</td>
<td>Sales</td>
</tr>
<tr>
<td>102</td>
<td>Betty</td>
<td>Brown</td>
<td>Operations</td>
</tr>
<tr>
<td>103</td>
<td>Charlie</td>
<td>Chang</td>
<td>Information Technology</td>
</tr>
<tr>
<td>104</td>
<td>Diana</td>
<td>Delaney</td>
<td>Human Resources</td>
</tr>
</tbody>
</table>
Child Table: Workers
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>ID</td>
<td>First Name</td>
<td>Last Name</td>
<td>Reports To</td>
</tr>
<tr>
<td>201</td>
<td>Edward</td>
<td>Escobar</td>
<td>102</td>
</tr>
<tr>
<td>202</td>
<td>Fran</td>
<td>Fitzgerald</td>
<td>103</td>
</tr>
<tr>
<td>203</td>
<td>George</td>
<td>Gompers</td>
<td>103</td>
</tr>
<tr>
<td>204</td>
<td>Heather</td>
<td>Hill</td>
<td>101</td>
</tr>
<tr>
<td>205</td>
<td>Ian</td>
<td>Iglesias</td>
<td>104</td>
</tr>
<tr>
<td>206</td>
<td>Joanne</td>
<td>Johnson</td>
<td>102</td>
</tr>
<tr>
<td>207</td>
<td>Kenneth</td>
<td>Kilgore</td>
<td>101</td>
</tr>
<tr>
<td>208</td>
<td>Lani</td>
<td>Lott</td>
<td>104</td>
</tr>
<tr>
<td>209</td>
<td>Michael</td>
<td>Miller</td>
<td>103</td>
</tr>
<tr>
<td>210</td>
<td>Nora</td>
<td>Nielsen</td>
<td>101</td>
</tr>
</tbody>
</table>
In both tables, there is an ID column. This column uniquely identifies each row in the table and is known as a primary key. Usually only one column is designated as the primary key, but sometimes combinations of columns can together serve as the primary key.

In the Workers table, notice that the Reports To column contains values that match the values in the ID column in the Managers table. The Reports To column is therefore a foreign key, because its values refer to primary key values in another table. A table could conceivably have many foreign keys; for example, if there were a Locations table with a unique identifier (primary key) for each office location (St. Louis, Toronto, Tokyo…), the Workers table could have a Location column that refers to values in the Locations table.

Notice that in this design, the parent (Managers table) doesn’t “know” anything about its children (rows in the Workers table). That is, there is nothing in the Managers table that refers to the child table. Only the child table “knows” about its parent(s).

A table can be both a parent and a child at the same time. For example, imagine that there is a Directors table, and the Managers table has a Reports To column that refers to rows in the Directors table. The Mangers table then becomes a child of the Directors table and a parent to the Workers table.

When dealing with parent-child database relationships, you should be aware of a concept called referential integrity. Referential integrity deals with what happens when you delete rows from tables. For example, you could delete Charlie Chang from the Managers table, but then you would have three rows in the Workers table that refer to a nonexistent row in the Managers table. Normally, if you ran a query against these tables, depending on database system of your choosing you could get errors and other undesirable behavior. On Syncano, removing Charlie Chang would just cause the Workers to no longer be associated with him.

Stay tuned for the next article in this series in which we show you how to create parent-child relationships on the Syncano platform.