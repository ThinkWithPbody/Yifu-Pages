---
title: ARC2017H_Project
tags:
  - project
start: 2024-11-22
due: 2024-11-22
completion: 2024-12-20
status: TODO
priority: medium
share: true
excalidraw-plugin: parsed
excalidraw-open-md: true
---
# Decentralizing the Digital Archive:
A framework for Preserving Born-Digital Architectural Artifacts

## Visual Material


![[./ARC2017H_Project.png|ARC2017H_Project]]

## Problem Statement

The rapid digitalization of architectural practice has produced an unprecedented volume of born-digital artifacts, challenging traditional archival methods. While institutions like the Canadian Centre for Architecture have pioneered projects such as "Archaeology of the Digital," these efforts remain labor-intensive and difficult to scale. Current preservation strategies often rely on centralized institutions, facing resource limitations and risks of data loss or cyber attacks. Moreover, the rich contextual information embedded in digital files, including design processes and algorithmic components, is frequently lost due to inadequate metadata standards.

This research proposes a decentralized, open-source approach to architectural archiving, drawing inspiration from blockchain technology and platforms like Anna's Archive. The proposed system would invite architectural firms, institutions, and individuals to contribute to a distributed network, ensuring data integrity and longevity while democratizing the preservation process. Central to this proposal is the development of comprehensive metadata standards tailored to architectural workflows, capable of capturing the multi-dimensionality of digital projects.

By combining decentralized storage with standardized metadata, this approach aims to revolutionize the preservation and study of digital architectural heritage. The research will explore the feasibility, challenges, and potential impacts of this system, addressing issues of data privacy, copyright, and the changing role of architectural archives in a decentralized landscape.

## Research Questions

How might a decentralized archiving system shift power dynamics in architectural preservation, and what are the potential implications for research, education, and practice?

How can blockchain technology be leveraged to create a secure, tamper-resistant system for preserving born-digital architectural artifacts?

What metadata standards and protocols need to be developed to capture the full context and support the longevity of digital architectural files across various software platforms and design stages?

## Research Methods

This research addresses the pressing challenge of preserving born-digital architectural artifacts in an era of rapid digitalization. Traditional archival methods struggle to keep pace with evolving digital design processes, proprietary software formats, and the sheer scale of data produced. To address these challenges, this study employs a mixed-methods approach combining qualitative analysis and technological prototyping. The research methods include a comprehensive literature review, case studies of existing digital preservation initiatives, prototyping of a decentralized archiving system, and interviews with key stakeholders. This multifaceted approach aims to develop a novel, decentralized framework for preserving and accessing digital architectural heritage.

To effectively explore my research questions, the literature review will focus on three key areas: digital preservation in architecture, decentralized archiving systems, and metadata standards for digital artifacts. Key authors and sources include Tim Walsh's work on the Canadian Centre for Architecture's "Archaeology of the Digital" project, which highlights the challenges of preserving complex digital materials and the limitations of current approaches, the Smithsonian Institution Archives' strategies for born-digital material preservation, and Konrad Krahn's thesis on metadata regulation and standardization across different systems. Additionally, Victoria Lemieux's critical examination of blockchain technology for ensuring the trustworthiness of digital records will be explored.

A three-step method has been developed to address the research questions by providing a comprehensive understanding of current and potential preservation practices, gathering insights from targeted users and experts, and exploring innovative technological solutions.

### Case Studies

First, a critical analysis of three case studies will be conducted: CCA's "Archaeology of the Digital" project, the Internet Archive, and Anna's Archive - from institutional methods to decentralized systems. The analysis will focus on comparing preservation strategies, evaluating user interfaces and accessibility, and assessing metadata handling and file format support. This comparative analysis aims to identify best practices for preserving complex digital artifacts, understand the challenges of implementing decentralized systems, and evaluate strategies for ensuring long-term accessibility and integrity of digital records.

### Interviews

Then, interviews will be conducted with practicing architects and firms using digital design tools, digital archivists specializing in architectural records, and technologists with expertise in distributed systems and blockchain. In the interviews, identify the short comings of current practices in preserving digital architectural records, challenges in maintaining long-term accessibility of digital designs, attitudes towards decentralized preservation methods, metadata needs for comprehensive documentation of design processes, and ethical considerations in preserving and sharing architectural data - including obtaining informed consent and ensuring confidentiality and anonymity where needed.

### Prototyping

Lastly, a small-scale prototype of a decentralized archiving system for born-digital architectural artifacts will be developed. This system incorporates insights from interviewees to preserve the multi-dimensional nature of architectural design processes, with a particular focus on capturing the algorithmic components and design intelligence that are at risk of being lost due to inadequate metadata, and software obsolescence. The prototype should also demonstrate how a similar system could empower architects as active participants and curators in the preservation process - it will utilize distributed ledger technology inspired by blockchain for record integrity, a distributed storage, and an open-source version control system for tracking design iterations. The prototype will be tested with various file formats including CAD, BIM, and algorithmic design files. Evaluation methods will include simulated archiving of architectural projects of diverse focus, stress testing with large file sizes and complex metadata or versioning, user experience testing with architects and archivists, and preliminary security and integrity checks. A significant challenge in developing this decentralized archiving system is the resource-intensive nature of prototype iterations. Even at a small scale, each iteration can require hundreds of hours of development time. This raises the potential need for external funding or partnerships, which may conflict with the project's core aim of empowering architects and democratizing the preservation process. Balancing the need for resources with the goal of maintaining an open, accessible system for architects presents a complex dilemma that must be carefully navigated.

## Case Study: Anna's Archive

> [!warning] Note To Instructors
> It is important to be aware that Anna's Archive is considered a shadow library and has been involved in legal disputes due to copyright infringement concerns. Accessing this site may be viewed as engaging with pirated content, which could have legal implications. Please exercise caution when considering whether to access Anna's Archive for research purposes. 
> 

URL: https://annas-archive.org/

This case study examines Anna's Archive as a model for decentralized digital preservation, focusing on its potential adaptation for architectural artifacts. Through a visual Framework Analysis, Metadata Structure Adaptation, and Co-hosting Feature Adaptation, we explore how Anna's Archive's innovative approaches can be leveraged to address the unique challenges of preserving and sharing born-digital architectural content.

### Framework Analysis

![[./0/AnnasArchiveStudy.svg|AnnasArchiveStudy.excalidraw]]

### Metadata Structure Adaptation

Anna's Archive uses a standardized container format called AAC (Anna's Archive Container) for metadata and binary data. For architectural artifacts, we can adapt and enhance this structure:

Expanded Metadata Fields
- Collaborators and organizations
- Project phases and iterations with time stamps
- Design software used and file format compatibility
- Special fields for parametric design elements, generative algorithms, and adaptive fields for parameters
- Implement a system to represent the hierarchical nature of architectural projects, linking related documents and versions, and potentially geospatial information

### Co-hosting Feature Adaptation

Anna's Archive employs a sophisticated co-hosting feature that enhances the resilience and accessibility of its digital collection. This decentralized approach utilizes a network of mirror sites and alternative domains to ensure continuous availability of resources. By implementing a failover mechanism at the domain level, users can seamlessly transition between different hosts if one becomes unavailable. This architecture not only protects against legal challenges and technical failures but also distributes the load across multiple servers, improving overall performance. In the context of architectural archiving, this model empowers architects and firms to contribute to a shared network of design knowledge while retaining control over their intellectual property. Such a system could transform the field of architecture by fostering collaboration, preserving digital design assets, and democratizing access to architectural information across various contexts.

1. Distributed Project Hosting
	- Enable architectural firms to host their own project data while contributing to a broader, decentralized network. This preserves data ownership while ensuring redundancy
2. Version Control & Access Control Layers
	- Implement a Git-like version control system tailored for architectural files, allowing for efficient storage and retrieval of project iterations
		- Unlike Anna's Archive, which provides static content access, this system would support dynamic, iterative design processes typical in architecture
	- Implement granular access controls to manage intellectual property concerns while promoting open-source collaboration where appropriate
		- Implement review processes for the release of documents into public domain
3. Collaborative Spaces
	- Create virtual collaborative environments where multiple collaborators can access and contribute to project archives simultaneously
4. Algorithmic Preservation
	- Develop specialized containers for preserving not just static files, but also the algorithmic processes and parameters used in generative design
5. Render Farm Integration
	- Include provisions for distributed rendering capabilities, allowing the network to process and preserve high-fidelity visualizations of architectural projects using integrated infrastructure
	- See [SheepIt Render Farm](https://www.sheepit-renderfarm.com)

## Research Communication

Each engagement method exemplified offers unique opportunities to disseminate and explore the proposed decentralized archiving system for born-digital architectural artifacts. An exhibition could provide an immersive, interactive experience, allowing visitors to engage directly with the prototype system and visualize the preservation of digital architectural projects. A zine could creatively communicate the core concepts and potential impacts of the system to a broader audience, using visual storytelling to make complex technological ideas more accessible. A podcast series could feature in-depth discussions with architects, archivists, and technologists, exploring the nuances of digital preservation challenges and the proposed solutions. 

While all these methods have merit, a conference paper has been chosen as the primary focus for several reasons. It allows for a comprehensive presentation of the research methodology, findings, and proposed framework to an academic and professional audience. The conference setting facilitates immediate feedback, peer review, and potential collaborations with experts in the field. Moreover, a paper provides a citable, permanent record of the research, contributing to the scholarly discourse on digital preservation in architecture. The rigorous format of a conference paper also aligns well with the technical and theoretical depth of the project, allowing for a detailed exploration of the system's architecture, metadata standards, and potential implications for architectural practice and research.

### Conference Paper

#### Title

Decentralizing the Digital Archive:
A framework for Preserving Born-Digital Architectural Artifacts

#### Abstract (Revised from Part 2)

The rapid digitalization of architectural practice has produced an unprecedented volume of born-digital artifacts, challenging traditional archival methods. While institutions like the Canadian Centre for Architecture have pioneered projects such as "Archaeology of the Digital," these efforts remain labor-intensive and difficult to scale. Current preservation strategies often rely on centralized institutions, facing resource limitations and risks of data loss or cyberattacks. Moreover, the rich contextual information embedded in digital files—including design processes and algorithmic components—is frequently lost due to inadequate metadata standards.

This research proposes a decentralized, open-source approach to architectural archiving, drawing inspiration from blockchain technology and platforms like Anna's Archive. The proposed system would invite architectural firms, institutions, and individuals to contribute to a distributed network, ensuring data integrity and longevity while democratizing the preservation process. Central to this proposal is the development of comprehensive metadata standards tailored to architectural workflows, capable of capturing the multi-dimensionality of digital projects across various software platforms and design stages.

By combining decentralized storage with standardized metadata protocols, this approach aims to revolutionize the preservation and study of digital architectural heritage. The research employs a mixed-methods approach, including case studies of existing preservation initiatives, interviews with architects and archivists, and prototyping a decentralized archiving system. Key challenges addressed include data privacy, copyright concerns, scalability, and ethical considerations in preserving sensitive architectural data.

This paper explores the feasibility and implications of implementing such a system, examining how it could shift power dynamics in architectural preservation while empowering architects as active participants in safeguarding their digital legacies. Ultimately, this framework seeks to redefine the role of archives in a decentralized landscape, ensuring sustainable access to born-digital architectural artifacts for future generations.

#### Key Words

- Born-Digital Architectural Artifacts
- Architectural Documentation
- Digital Archiving Technologies
- Decentralized Archiving
- Digital Format Interoperability

#### Paper Outline (Revised from Part 2)

- [[ARC2017H_Project#^e6566f|Introduction]] (Research Question)
- Background
	- Overview of current digital preservation challenges in architecture
	- Existing initiatives
	- Decentralized systems and blockchain technology in archiving
- Methodology
	- Case Studies - Analysis of CCA's "Archaeology of the Digital," Internet Archive, and Anna's Archive
	- Interviews - Insights from architects, digital archivists, and blockchain technologists
	- Prototype - Small-scale decentralized archiving system for architectural artifacts
- Framework Proposal
	- Decentralized Storage and Distribution
		- Blockchain-inspired distributed ledger for data integrity
		- Peer-to-peer network for resilient, distributed storage
		- Open-source version control for tracking design iterations
	- Comprehensive Metadata Standards
		- Tailored metadata schema for capturing multi-dimensional aspects of architectural projects
		- Protocols for preserving algorithmic components and design intelligence
		- Standardization across various software platforms and design stages
	- User Empowerment and Participation
		- Architects as active curators in the preservation process
		- Democratized contribution model for firms, institutions, and individuals
		- Balancing open access with copyright and privacy considerations
	- Implications and Challenges
		- Shifting power dynamics in architectural preservation
		- Impact on research, education, and practice
		- Technical challenges: scalability, interoperability, and long-term sustainability
		- Ethical considerations: data privacy, intellectual property, and consent
- [[ARC2017H_Project#^2152f3|Conclusion]]


> [!NOTE] Introduction
> The digital revolution in architecture has generated an unprecedented volume of born-digital artifacts, challenging traditional archival methods. This paper addresses the urgent need for innovative preservation strategies that can capture the full context of digital architectural projects, including design processes and algorithmic components.

^e6566f

> [!NOTE] Conclusion
> This paper presents a framework for a decentralized, open-source approach to architectural archiving that promises to revolutionize the preservation and study of digital architectural heritage. By addressing current limitations in digital preservation, this system has the potential to significantly enhance our understanding and documentation of contemporary architectural practice

^2152f3

## Bibliography

##### Primary Sources:

###### Walsh, Tim. 2016. "Archaeology of the Digital and Born-Digital Archives at CCA." Digital Archivist, Canadian Centre for Architecture. April 18, 2016. https://www.unisa.edu.au/contentassets/f41f469f020c461a982043a129d79479/tw_adelaide_18april2016_text.pdf

Presentation by Tim Walsh - in-depth overview of CCA's new approach to preserving and exhibiting born-digital architectural records. Introduces the "Archaeology of the Digital" project, a ==long-term, multifaceted program curated by Greg Lynn and initiated by the CCA in 2012== [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=2&selection=26,31,27,28|(p.2)]] - multi-year initiative exploring 25 key digital architecture projects from the 1980s to 2000s. The document highlights the need for knowledge of obsolete computing hardware, software, and file systems in archiving complex digital materials. [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=14&selection=9,13,18,80|(p.14)]] It also demonstrates its highly selective and potentially biased nature. It is evident that their process is labor-intensive and resource-demanding, making it difficult to scale, and any future iteration of the system must demand a certain standard. [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=14&selection=5,13,9,12|(p.14)]] Also outlined challenges in preserving and accessing CAD and 3D modeling files [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=16&selection=5,20,6,14|(p.16)]], including the long-term accessibility risks from a reliance on proprietary software and specific hardware.


> [!PDF|]+ [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=4&selection=21,0,23,47|Archaeology of the Digital and Born-Digital Archives at CCA, p.4]]
> The first show consisted of records and artefacts in numerous formats: CAD files in digital and printed paper form, physical models, textual records, and some computing hardware contemporary to the projects being investigated

> [!PDF|]+ [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=14&selection=2,0,5,12|Archaeology of the Digital and Born-Digital Archives at CCA, p.14]]
> The biggest lesson to be learned from this example is that the size of the archive does not necessarily correlate to the size of the challenge in investigating, researching, and exploring its records.

> [!PDF|]+ [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=14&selection=5,13,9,12|Archaeology of the Digital and Born-Digital Archives at CCA, p.14]]
> CCA’s interest in the early and experimental can greatly increase the amount of work involved in recovering content from obsolete media and combatting file format obsolescence

> [!PDF|]+ [[./Attachments/ARC2017H_Project/Archaeology of the Digital and Born-Digital Archives at CCA.pdf#page=14&selection=9,13,18,80|Archaeology of the Digital and Born-Digital Archives at CCA, p.14]]
>  This underscores the need for knowledge of obsolete computing hardware, software, and file systems; and also the need to have clear file format policies and preservation plans for this type of material: given the amount of work involved in making this material accessible in 2016, we can safely say that unless we take action on these files now to prolong their longevity, such as migrating them to new file formats – there will be no way a researcher in 10 or 20 years will be able to interact with files in the archive.

###### Digital Preservation Coalition. 2015. "Digital Preservation Handbook, 2nd Edition." [https://www.dpconline.org/handbook](https://www.dpconline.org/handbook).

A guide to digital preservation practices and strategies. It covers preservation planning, metadata, file formats, and storage. Practical approach and up-to-date information on emerging technologies and standards in digital preservation. Also includes a "Data Curation Lifecycle" diagram. 
<img src="https://libapps.s3.amazonaws.com/accounts/156763/images/lifecycle_web2.png">

###### Krahn, Konrad. "Looking Under the Hood: Unraveling the Content, Structure, and Context of Functional Requirements for Electronic Recordkeeping Systems" Master's thesis, University of Manitoba, 2012. https://mspace.lib.umanitoba.ca/server/api/core/bitstreams/181da32e-e109-4a38-9813-116bfa3506c0/content.

Historical context on how the archival field has approached electronic records preservation challenges and examines existing centralized approaches to digital preservation - their limitations and complexities. Insights in how metadata fields should be regulated and maintained - describes a need for standardization across different systems and institutions to ensure interoperability and how to design them to capture essential contextual information about digital objects. What is the lifecycle management of digital records? How to implement comprehensive metadata while keeping the platform accessible for a decentralized approach? No architectural perspective.

> [!PDF|]+ [Functional Requirements for Electronic Recordkeeping Systems](https://mspace.lib.umanitoba.ca/server/api/core/bitstreams/181da32e-e109-4a38-9813-116bfa3506c0/content)
>   Often misunderstood or simply ignored, the recordkeeping requirements at the heart of these specifications are crucial for ensuring the creation, maintenance, and preservation of electronic or digital records over time, for operational, accountability, archival, and historical purpose

##### Secondary Sources:

###### Sedrez, Maycon. “The Future of Architects' Digital Records: How to Preserve Algorithmic Design.” SIGraDI, 2018. https://www.academia.edu/40364459/The_future_of_architects_digital_records_how_to_preserve_algorithmic_design

Digital records preservation with a specific focus on algorithmic design. The main argument is that while the architectural community has begun to address the preservation of digital files, there is a pressing need to develop strategies for preserving the memory of the design process, particularly for algorithmic and parametric design - algorithms contain valuable, reusable design intelligence that is at risk of being lost due to software obsolescence and lack of proper archiving methods. Essentially, how to treat architectural archives as multi-dimensional objects, capable of preserving not just the final product but the entire design process. Does not offer a solution but the discussion is very relevant for what I want to achieve. Importantly Sedrez talks about Harvey's idea of architects taking responsibility for preserving one's own work, rather than relying solely on archivists and librarians, which aligns with my vision for the new platform, since they have the best knowledge of the complexities of their projects and what they wish to preserve. Solutions include iterations, duplicates, and alternatives of a project; documenting the entire chain from design to production; an easy method to also archive the codes, scripts, and algorithms used to generate a final geometry; in-line comments that explain the design methods, tools, and strategies used throughout the process similar to best coding practices.

> [!PDF|]+ [[./Attachments/ARC2017H_Project/The_future_of_architects_digital_records.pdf#page=1&selection=184,51,194,11|The_future_of_architects_digital_records, p.1]]
> Rothenberg (1999) states “our digital documents are far more fragile than paper” due to accessibility of files and fast changes on technologie

> [!PDF|]+ [[./Attachments/ARC2017H_Project/The_future_of_architects_digital_records.pdf#page=2&selection=290,0,308,1|The_future_of_architects_digital_records, p.2]]
> The quantity, fragility and ephemerality of digital architectural documents needs to be tackled by using different archiving strategies for each type of file. Moreover, architects need to plan how to protect and preserve their own work, as stated by Harvey (2005) “[r]esponsibility for the preservation of these digital materials must be shared among creators and users of digital information, and not remain solely the concern of librarians and archivist”

> [!PDF|]+ [[./Attachments/ARC2017H_Project/The_future_of_architects_digital_records.pdf#page=2&selection=310,0,311,4|The_future_of_architects_digital_records, p.2]]
> Factors influencing the preservation of digital architecture file

![[./Attachments/ARC2017H_Project/The_future_of_architects_digital_records.pdf#page=3&rect=298,230,539,344|The_future_of_architects_digital_records, p.3]]

![[./Attachments/ARC2017H_Project/The_future_of_architects_digital_records.pdf#page=5&rect=302,615,537,753|The_future_of_architects_digital_records, p.5]]

###### Smithsonian Institution Archives. "Preservation Strategies for Born-Digital Material." Accessed October 19, 2024. https://siarchives.si.edu/what-we-do/digital-curation/preservation-strategies-born-digital-materials.

Short page that outlines key approaches in preserving digital collections that begins with "stabilization and ingest". A different mindset that demands a Three Strategies response, including Bit-level Preservation, Migration, and Emulation. Where appropriate, a migration strategy is applied and the results kept in a parallel set of files - resource intensive and hard to automate. When migration is not appropriate and the bit-level-preserved original format is not accessible with easily accessible equipment, an emulation strategy is appropriate, useful for complex digital packages including computer games, digital art, multimedia, and executables that rely on specific hardware, operating systems, and software to perform and render accurately. Also outlines some acceptable preservation format such as uncompressed TIFF. 

> [!PDF|]+ [Preservation Strategies for Born-Digital Materials](https://siarchives.si.edu/what-we-do/digital-curation/preservation-strategies-born-digital-materials)
>  The electronic records are transferred to a temporary location on a network server shortly after acquisition to avoid relying on hardware and operating systems that are already obsolete or will be in a few years’ time. Multiple backups of the working environment and its contents ensure redundancy ([LOCKSS - Lots of Copies Keep Stuff Safe](https://www.lockss.org/about/what-is-lockss/)), and offline copies provide a means of disaster recovery should it ever be required.

###### Library of Congress. 2023. "Recommended Formats Statement: VIII. Design and 3D." Accessed November 22, 2024. [https://www.loc.gov/preservation/resources/rfs/TOC.html](https://www.loc.gov/preservation/resources/rfs/TOC.html).

Format guidelines for preserving digital and print images, as well as 3D scanned objects. The recommendations focus primarily on static image formats and 3D scans, which do not capture the full range of data and metadata crucial for preserving the design intelligence embedded in contemporary architectural digital artifacts. Does not address the complex, multi-dimensional nature of architectural design files - CAD models, BIM data, and algorithmic design processes. 

###### Anna's Archive. 2024. "Anna's Archive." Accessed September 23, 2024. https://annas-archive.org/

An open-source search engine and digital library for books, papers, comics, magazines, and other texts, aiming to provide free access to knowledge regardless of geographical, economic, or institutional barriers, challenging traditional copyright and paywalled academic publishing models. Demonstrates a successful implementation of a large-scale, decentralized digital archive. The co-hosting feature of Anna's Archive is particularly noteworthy, allowing individuals to mirror specific collections or the entire archive, creating a distributed network of hosts. It inspired me to envision a system that ensures the survival of the archive and its at-risk collections based on research interests, even if the original provider can no longer maintain it. Though, the technical barrier of Anna's archive is too high for unskilled contributors, and verifying the integrity of contributions requires human intervention, opening it up to biases and malicious attacks. The infrastructure also does not allow for comprehensive metadata or a multi-dimensional project to exist in parallel. In any case, a decentralized system that leverages community interest would be an interesting solution to my research questions. 

###### Internet Archive. 2024. "Internet Archive: Digital Library of Free & Borrowable Texts, Movies..." Accessed September 23, 2024.

A non-profit digital library offering free access to millions of books, movies, software, music, websites, and more. It includes the Wayback Machine, which archives web pages over time. Interestingly, in the very recent few days, the Internet Archive was hit with two consecutive DDoS and cyberattacks, with one stealing its user authentication database, exposing the data of tens of millions of the site's users. Their services have been temporarily suspended due to the attacks. They also recently lost an appeal in a lawsuit over Ebook copyrights brought against it by a group of book publishers. Last year, music publishers Sony Music and Concord filed a similar suit against Internet Archive for $621 million in damages for copyright infringement. (https://www.rollingstone.com/music/music-features/internet-archive-major-label-music-lawsuit-1235105273/)

##### Theoretical Sources:
###### Lemieux, Victoria L. 2016. "Trusting Records: Is Blockchain Technology the Answer?" Records Management Journal 26 (2): 110-139.

Lemieux's article critically examines the potential of blockchain technology for ensuring the trustworthiness of digital records. It explores the challenges of maintaining authenticity and reliability in digital recordkeeping systems and evaluates whether blockchain can address these issues. Highly relevant for understanding the intersection of emerging technologies and traditional recordkeeping principles. P2P systems based on blockchain technology could provide secure and controlled access to architectural records, ensuring that only authorized parties can view or modify sensitive information.


%%
# Excalidraw Data
## Text Elements
Digitalization of Architectural Practice ^m2F4a2yS

Challenges of Archiving ^n0Ekyf9a

Inadequate Metadata Standards ^lfdcjVoZ

Resource Limitations ^EkRZvgZq

Data Loss and Cyber Attacks ^AzGkB4E3

Opportunities for Preservation ^Bs1CaO14

Proposed Decentralized Open-Source Approach ^aHWBuAHn

Contribution from Firms and Individuals ^GzJONkHo

Peer-to-Peer Technologies ^OcBweJwD

Development of Metadata Standards ^atXzm2Gu

Distributed Network ^rAynwP6C

Capturing Design Processes ^rWsPUraZ

Documenting Iterations ^sDvlU1fN

Including Algorithmic Components ^MyliRt28

Empowering Architects in Preservation ^XjzFuumW

Enhancing Research Value ^Gfdmnq9t

Revolutionizing Digital Architectural Heritage ^caL9dAbg

Feasibility, Challenges, and Impacts ^7cY7vzgA

Data Security / Privacy ^801LRe8G

Copyright / Authorship ^cWaoqPe3

Changing Roles of Architectural Archives ^6XFiXzLp

CCA & Others ^e36So8k9

Data Digital Objects or Databases ^hRaCJoHh

Representation Information ^WXK14UqS

Description ^wcCkpCHH

Preservation Planning ^jo2re68l

Transform ^cmzgaHZH

Create or Receive ^l2uDF43b

Appraise & Select ^rAoY2wSz

Ingest ^sdvGYHBc

Preserve ^26ijUhK7

Preservation Action ^CeYEfP4w

Store ^9k8pRuQm

Access, Use & Reuse ^fB0IkzUa

Dispose ^cv8aefg4

Reappraise ^ID1xxvty

Conceptualise ^y4VxORe0

Migrate ^ijqMvzqV

Problem Identification ^etObN5CN

Literature Review ^M3S2hMcd

Research Questions ^Zj5S4A3H

Methodology Design ^ql8AFJqY

Case Studies ^VQLrFKHX

Interviews ^80PNYoe4

Prototyping ^tVICYkNr

Comparative Analysis ^dvzgcKCV

User Insights ^nq2f6FvP

System Development ^rT2UgBEl

Best Practices ^FTKhYg7i

User Requirements ^qftdMbEH

Prototype Testing ^yIqfLQ2Y

Framework Development ^tkN6hk1i

Evaluation ^GMkExCwa

Framework ^7fl3uY3p

Potential Outcomes ^uSoJNWIb

Decentralized Preservation ^5ICwUbgE

Empowered Architects ^kuChIwrA

Enhanced Metadata ^Vuzu1WGh

Long-term Accessibility ^84K44bsE

Advantages ^4RH2baCK

Democratized Archiving ^jxtAezNK

Preserved Design Intelligence ^CGXPyOQZ

Improved Research Access ^xhWAQ0da

Problem Statement ^f2k1DwgA

Research Questions ^QZQiX5sL

Research Methods ^poeXuZ7b

Literature Review ^ggtSGaBP

Case Studies ^PIRNLgV6

Interviews ^jfFNMrpC

Prototyping ^IaDpxWbB

Digital Preservation in Architecture ^7f4Rd0T1

Decentralized Archiving Systems ^hjhBaBtz

Metadata Standards ^Sz0OZ90p

CCA's Archaeology of the Digital ^IVIPgFqN

Internet Archive ^3693ElOZ

Anna's Archive ^YmNC5gsn

Architects ^k3VaqUlR

Digital Archivists ^xG1NFYk6

Technologists ^4eqwWvPR

Distributed Ledger Technology ^hiQIiRo3

Distributed Storage ^WxjtWhIW

Version Control System ^7tZP1sxf

Testing and Evaluation ^lDtvlz5l

Demonstrates efficient indexing and retrieval of digital artifacts, crucial for accessing complex architectural files. ^4B9mnScD

Provides transparency and user education, essential for engaging architects and researchers in the archiving process. ^XqCKoDzi

Search ^soFUeNls

Anna's Archive Framework ^62BjSCJs

Search ^fnB8yOpd

FAQ ^HZqPuo7T

Improve Metadata ^blksPSae

Volunteering & Bounties ^mFGfplII

Datasets ^2XJNG8Ck

Torrents ^ZHzlaKVH

Codes Explorer ^EQYgmPCI

LLM Data ^LriOtTtL

What is Anna's Archive? ^rEKIaM9D

How can I help? ^BTUOKGnh

Donation FAQ ^FehrAZlp

Background ^kmjMCv9G

Open Library linking ^MQDfMB1C

Light volunteering work ^3wgxj3lT

Heavy volunteering work ^KZjgklcd

Source libraries ^fXEEq76x

Metadata-only sources ^LbJ6UOIf

Stats ^ciF8iKuo

Torrent List Generator ^JkdK3iwe

How we can help ^NkALV25P

Enterprise-level access ^9wCLIDlw

Data enrichment ^chMNfqnA

Access restricted ^Rz87zvuJ

Telegram volunteers chat ^L4Por0zE

Matrix channel ^BSzcDYzW

Bounties ^zhwuNrGG

Seeding priorities ^12k9FmII

High-speed access ^30zQoGMQ

Unreleased collections ^riWmyRIb

OCR ^ulGnOEZC

Deduplication ^aLa4T06f

Text and metadata extraction ^aNVJxYUt

Individual Researchers ^q8CvUDPH

Preservation Contributors ^NnRHnvTE

Organizations ^VS8jCy8W

Open-Source Developers ^wpMpij5e

Users ^dQtRaO4W

Demonstrates efficient indexing and retrieval of digital artifacts, crucial for accessing complex architectural files. ^wRDpfUyR

Provides transparency and user education, essential for engaging architects and researchers in the archiving process. ^Vsjblolq

Highlights the importance of standardized, comprehensive metadata for architectural projects, enabling better context preservation. ^QDOwJ0xf

Collaborators ^QA3ER034

Consumers ^E268Mvti

Offers a model for community engagement, potentially involving architects in the curation and maintenance of the archive. ^jzbUEtOX

Illustrates methods for bulk data management, critical for handling large-scale architectural project files and associated data. ^pwO6W19U

Showcases decentralized file distribution, ensuring resilience and accessibility of architectural archives across multiple locations. ^Uz5163eQ

Could be adapted to navigate through different versions of architectural software or file formats. ^9PqbWNYR

Suggests potential for AI integration in analyzing and categorizing architectural data, valuable for identifying and rectifying missing or incorrect metadata in architectural archives. ^hVjNWiQv

## Embedded Files
6eaf1e00c4ad330598d8742d2ae278e8093d0d29: [[./Attachments/ARC2017H_Project/image.png|image]]

b91d81ebadfca4cce2ef5e49f77894c77d821c1c: [[./Attachments/ARC2017H_Project/image_0.png|image_0]]

9d6f4587f321b776aa12e43759596cfbf2fa91f6: [[./Attachments/ARC2017H_Project/image_1.png|image_1]]

b5ffd6b16741e0fca8bf6044bf211495238d958a: [[./Attachments/ARC2017H_Project/2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge).jpg|2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge)]]

4a31c377c0c9465de90e7dd64af7a817bc5b7823: [[./Attachments/ARC2017H_Project/image_2.png|image_2]]

d6eba4033b9ec3b0e680492dafcf4449ef55607c: [[./Attachments/ARC2017H_Project/image_3.png|image_3]]

8c78cfabe6c5040cd67c401879dd13fed8d4271e: [[./Attachments/ARC2017H_Project/image-1.png|image-1]]

## Drawing
```compressed-json
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
```
%%