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
# Decentralizing the Digital Archive: A framework for Preserving Born-Digital Architectural Artifacts

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

#### Abstract (Revised from Part 3)

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

#### Paper Outline (Revised from Part 3)

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

## Embedded Files
6eaf1e00c4ad330598d8742d2ae278e8093d0d29: [[./Attachments/ARC2017H_Project/image.png|image]]

b91d81ebadfca4cce2ef5e49f77894c77d821c1c: [[./Attachments/ARC2017H_Project/image_0.png|image_0]]

9d6f4587f321b776aa12e43759596cfbf2fa91f6: [[./Attachments/ARC2017H_Project/image_1.png|image_1]]

b5ffd6b16741e0fca8bf6044bf211495238d958a: [[./Attachments/ARC2017H_Project/2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge).jpg|2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge)]]

4a31c377c0c9465de90e7dd64af7a817bc5b7823: [[./Attachments/ARC2017H_Project/image_2.png|image_2]]

d6eba4033b9ec3b0e680492dafcf4449ef55607c: [[./Attachments/ARC2017H_Project/image_3.png|image_3]]

8c78cfabe6c5040cd67c401879dd13fed8d4271e: [[./Attachments/ARC2017H_Project/image-1.png|image-1]]

0f4203113966438e58f979d2f5a7a41959130985: [[./0/AnnasArchiveStudy.svg|AnnasArchiveStudy.excalidraw]]

## Drawing
```compressed-json
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=
```
%%