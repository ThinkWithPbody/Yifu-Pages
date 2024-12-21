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
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
```
%%