---
path: '/blog/data-modeling-basics/'
layout: post
title: 'Data Modeling Basics: Definition and Usage'
date: 2014-08-29 11:21:29
author: resham
categories: ['How Tos']
image: MySQL_Workbench_Visual_Design_Mac-e1411727585654.png
summary: "Simply put, data modeling is the process of designing a database to meet the needs of a computer application. A complete data model identifies the data objects that are needed in an application, describes their characteristics, and shows the relationships between them. It is also an essential piece of the design of any application that involves obtaining, managing, storing, or querying sets of data—and these days, most applications do."
---
Simply put, data modeling is the process of designing a database to meet the needs of a computer application. A complete data model identifies the data objects that are needed in an application, describes their characteristics, and shows the relationships between them. It is also an essential piece of the design of any application that involves obtaining, managing, storing, or querying sets of data—and these days, most applications do.<!--more-->

Data modeling projects typically involve the development of three (sometimes more) different models, or views:
<ul>
	<li><strong>Conceptual or Business:</strong> Derived from the system requirements, this model is a high-level view of the data entities and the relationships between them. This model enables developers and business stakeholders to discuss how the data relationships address business needs, without getting into the technical details. Typically, a block diagram is sufficient for this type of model.</li>
</ul>
<ul>
	<li><strong>Logical:</strong> This model gets into the database design details, including tables, columns, column attributes, and indexes, and how these objects are related to each other. It is typically expressed in the form of an <em>entity relationship diagram</em> (ERD).</li>
</ul>
<ul>
	<li><strong>Physical:</strong> The physical model addresses how the logical model will be implemented in hardware and usually deals with performance and reliability issues. Among the concerns of the physical model are processing architecture, storage architecture, backups, network bandwidth, and fault recovery.</li>
</ul>
Some things that should be considered when developing data models include:
<ul>
	<li>Is this a one-off development effort, or will the business want to add functionality later on? The database should be designed to accommodate future functionality without a redesign.</li>
</ul>
<ul>
	<li>Will the system need to interface with other systems? The relationship with other systems will inform the design of this one; for example, data types and lengths may need to match those of the related systems to prevent errors and data corruption.</li>
</ul>
<ul>
	<li>Does the system stand alone, or is it a part of a larger system? An existing system may have logical or physical constraints that require some compromises in the model design.</li>
</ul>
<ul>
	<li>What are the system availability and reliability requirements? How quickly does the system need to recover from a problem? How much are we willing to spend for the desired uptime? These questions, and others like them, will determine the physical model.</li>
</ul>
In an application development project, defining the data models is just as important as defining the system architecture and user interface. The models should be documented in detail and agreed to by the business stakeholders before any coding begins. Business users also need to understand that after coding has begun, changing system requirements will impact the design of the program, the user interface, and the data model—potentially causing extensive delays and costly rework.

There are numerous resources available that describe common methodologies and best practices for data modeling. Here are some we recommend:
<ul>
	<li><a href="http://www.learndatamodeling.com/data_modeling_tutorial.php">http://www.learndatamodeling.com/data_modeling_tutorial.php</a></li>
	<li><a href="http://www.agiledata.org/essays/dataModeling101.html">http://www.agiledata.org/essays/dataModeling101.html</a></li>
	<li><a href="http://www.exforsys.com/tutorials/data-modeling.html">http://www.exforsys.com/tutorials/data-modeling.html</a></li>
</ul>
Have questions about data modeling or how Syncano fits into all this? <a href="mailto:info@syncano.com">Email us</a> or send us a tweet <a href="http://twitter.com/syncano">@syncano</a>.