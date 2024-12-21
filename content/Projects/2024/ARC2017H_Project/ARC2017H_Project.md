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

## Embedded Files
6eaf1e00c4ad330598d8742d2ae278e8093d0d29: [[./Attachments/ARC2017H_Project/image.png|image]]

b91d81ebadfca4cce2ef5e49f77894c77d821c1c: [[./Attachments/ARC2017H_Project/image_0.png|image_0]]

9d6f4587f321b776aa12e43759596cfbf2fa91f6: [[./Attachments/ARC2017H_Project/image_1.png|image_1]]

b5ffd6b16741e0fca8bf6044bf211495238d958a: [[./Attachments/ARC2017H_Project/2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge).jpg|2024-10-22T08_41_25-05_00_TWP-X570-WIN10(msedge)]]

4a31c377c0c9465de90e7dd64af7a817bc5b7823: [[./Attachments/ARC2017H_Project/image_2.png|image_2]]

d6eba4033b9ec3b0e680492dafcf4449ef55607c: [[./Attachments/ARC2017H_Project/image_3.png|image_3]]

8c78cfabe6c5040cd67c401879dd13fed8d4271e: [[./Attachments/ARC2017H_Project/image-1.png|image-1]]

bb9fcc1cda578c0e60999bf17a2f7ff51ec7d265: [[./0/AnnasArchiveStudy.svg|100%]]

## Drawing
```compressed-json
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
```
%%