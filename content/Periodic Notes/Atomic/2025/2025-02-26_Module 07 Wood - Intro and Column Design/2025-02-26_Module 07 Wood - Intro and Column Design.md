---
excalidraw-plugin: parsed
excalidraw-open-md: true
tags:
  - excalidraw
  - note/atomic
title: 
description: 
date: 2025-02-26
name: Module 07 Wood - Intro and Column Design
slug: 2025-02-26_Module 07 Wood - Intro and Column Design
people: 
location: 
weekday: 
time: 
share: true
hide: true
---
%%[parents:: [[../../../../Courses/2025/ARC2046H/ARC2046H|ARC2046H]]]%%
# Module 07 Wood - Intro and Column Design

![[Periodic Notes/Atomic/2025/2025-02-26_Module 07 Wood - Intro and Column Design/2025-02-26_Module 07 Wood - Intro and Column Design.svg|Periodic Notes/Atomic/2025/2025-02-26_Module 07 Wood - Intro and Column Design/2025-02-26_Module 07 Wood - Intro and Column Design.svg]]

### Properties

- Wood
	- Hardwood
	- Softwood
		- Plentiful and faster to grow
		- 4 out of 30 common softwoods most commonly used
			- Spruce
				- Dimensional lumber, residential light framing
			- Pine
				- Trim work
			- Cedar
				- Decks and exterior applications
			- Douglass Fir
				- Heavy construction, glulam
		- 95% will be SPF
	- Dimensions
		- Dimensional Lumber
			- 2x4
				- 1 1/2 x 3 1/2
				- 38mm x 89 mm
			- 2x4
				- 1 1/2 x 5 1/2
			- 2x8
				- 1 1/2 x 7 1/4
			- 2x10
				- 1 1/2 x 9 1/4
			- 2x12
				- 1 1/2 x 11 1/4
			- 4x4
				- 3 1/2 x 3 1/2
				- 89mm x 89mm
- Applications
	- Joists and Studs
	- Beams
	- Built-up Beams
		- Screw multiple plys of dimensional lumber together
			- Always at least 2 members
			- "2 ply 2x8"
	- Posts
		- At least 4x4
	- Built-up Posts
		- Screw multiple plys of dimensional lumber together
		- Full sized hard to find
	- Plywood
		- 4'x8' sheets
			- Subfloor 1/4 | 6.4mm
			- Subfloor 3/8 | 9.5mm
			- Floor/Walls 1/2 | 12.7mm
			- Floor/Walls 5/8 | 15.9mm
			- Floor/Walls 3/4 | 19.1mm
			- Floor/Walls 7/8 | 22.2mm
			- Floor/Walls 1 | 25.4mm
	- I-Joists
	- PSL Parallel Strand Lumber
	- LVL Laminated Veneer Lumber
	- Glulam Glue Laminated Timber
	- CLT Cross Laminated Timber
- Factors that impact wood strength
	- Species
	- Grade
	- Size
	- System Effects
	- Load Duration
	- Service Condition (Wet/Dry)
	- Chemicals (Preservation, Fire Retardant)
	- Lateral Stability (Buckling)
- Typical Construction
	- ![[./Attachments/2025-02-26_Module 07 Wood - Intro and Column Design/image.webp|468x260]]
	- ![[./image-1.webp|308x466]]
	- ![[./Attachments/2025-02-26_Module 07 Wood - Intro and Column Design/image-1-1.webp|293x399]]
- Lumber Visual Grades
	- Select Structural
	- No. 1
	- No. 2
	- No. 3
	- Stud
	- ![[./image.webp|/Periodic Notes/Atomic/2025/2025-02-26_Module 07 Wood - Intro and Column Design/image.webp]]
- Strength and Modulus of Elasticity
	- Look up table A-D [[../../../../Courses/2025/ARC2046H/Attachments/ARC2046H/SAWN LUMBER.pdf#page=5|SAWN LUMBER, p.5]]
		- ![[./image-8.webp|640x384]]
		- ![[./image-9.webp|640x306]]
		- ![[./image-10.webp|640x384]]
		- ![[./image-11.webp|640x379]]
	- Governed by Applications, Species, Grades
- $K_D$: Load Duration Factor
	- Short Term = 1.15
	- Standard Term = 1.00
	- Long Term = 0.65
	- ![[./image-2.webp|640x407]]
- $K_H$: System Factor
	- Post / Beam: 1.0
	- Joist / Stud: Part of a system sharing some loads
	- ![[./image-7.webp|640x275]]
	- Case 1 | Case 2
		- Most floors and walls are Case 2
		- ![[./image-3.webp|640x375]]
- $K_S$: Service Condition Factor
	- A pool would be wet
	- Always 1.0 if dry
	- ![[./image-6.webp|640x278]]
- $K_T$: Treatment Factor
	- Pressure treated unincised lumber doesn't lose strength
		- Lumber bathed in a preservative solution and pressurized
		- Incised meaning punching little holes in the lumber
	- Fire retardant treated
	- ![[./image-5.webp|640x403]]
- $K_Z$: Size Factor
	- The chances of a hidden defect becomes greater as lumber size increase
	- Built up members use individual member size to determine size factor - better performance than if the member was full-sized
	- ![[./image-12.webp|640x428]]
- $P_r=\phi_c F_c A K_{zc} K_c$: **Compression Resistance Design**
	- $\phi=0.8$: Resistance Factor for wood compression
	- $F_c=f_c(K_D K_H K_{SC} K_T)$:
		- $f_c$: Specified strength (stress) in compression parallel to grain, looked up from Table A-D [[../../../../Courses/2025/ARC2046H/Attachments/ARC2046H/SAWN LUMBER.pdf#page=5|SAWN LUMBER, p.5]]
		- $K_D K_H K_{SC} K_T$: Duration, system, service condition, treatment
	- $A$: Cross sectional area ($b\times d$ for rectangular section)
	- $K_{ZC}=6.3(dL_d)^{-0.13}=6.3(bL_b)^{-0.13}<=1.3$: Size Factor
	- $K_C=[1.0+\frac{F_C K_{ZC} C_C^3}{35 E_{05} K_{SE} K_T}]^{-1}$: Slenderness Factor ($\lambda$)
	- $C_C=Appropriate (L_b/b | L_d/d) < 50$
		- $L_b|L_d$: Effective length associated with width $b$ and depth $d$ respectively (unbraced)
	- Wood and Steel
		- $P_r=\phi \sigma A + Factors/Buckling$
		- $C_r=\phi \sigma A + Factors/Buckling$
		- Essentially the same
	- ![[./image-4.webp|352x274]]

### Calculations




---

# Excalidraw Data

## Text Elements
%%
## Drawing
```compressed-json
N4KAkARALgngDgUwgLgAQQQDwMYEMA2AlgCYBOuA7hADTgQBuCpAzoQPYB2KqATLZMzYBXUtiRoIACyhQ4zZAHoFAc0JRJQgEYA6bGwC2CgF7N6hbEcK4OCtptbErHALRY8RMpWdx8Q1TdIEfARcZgRmBShcZQUebQAObQBmGjoghH0EDihmbgBtcDBQMBKIEm4IAFliAElcABUkgAkAIQApAHYjGEIATQBRAEUAQRghAGkABVSSyFhECsdcfU5i

GdLMbmceDriABg74pKT4gDYeJL2AFlOATn5SmC2ki+S90/f4q55rgEY936nB6QCgkdTcS4AVgSv1+HVOHUhh1+PEhwKkCEIymk3B2HW0kJRiNOSSu8Mh5zRhUg1mUwW4e3RzCgpDYAGsEABhNj4NikCoAYl+CGFwvWkE0uGwbOUrKEHGI3N5/IkLOszDguEC2XFEAAZoR8PgAMqwekSQQeXXM1kcgDqYMkuKZLPZCFNMHN6Et5XRcuxHHCuTQjOp

EDYmuwaieaH+odmEFlwjgNWIwdQeQAuui9eRMqnuBwhEb0YQFVgKrg9rq5QrA8x00WS2Gwgg1rGOr8rii7qd4ujGCx2Fw0CSB0xWJwAHKcMTcOO3HjxHinK6l5gAEXSUDb3BZQgQ6M0wgV/WCmWy6az6KEcGIuB37dQcKue0hi/iy4pHXRRA4bMLYt8F/NhpV3NA9QIMJCgAXweYpSnKCRNBqTQECnNlej1NlCAAeTgSFND1AAlDgYDtX4Wl1eZx

HQQJsCiDg6SQdFNjQZwu0SL4DiXRFbnJc50RjVBth4X5tH4joklubtrj2PZpPRUFiHBNAXluAkbheCkjnfJJEXRSRMWxKBcQ6PZtB+STDheBSUSpBNaS9eNShtN0lT5QVRRFFiw0laUk3lRUeU81VyA4DUtSyUyc0NE0zVoiAfTWF1bQQB0VKdNA+BbV0OQ9L0kp5X0w39SR63TFzIAjKVo3neT0UClM03ybMw1zZYEALNAm2AsMy2ICsJFwX4ax

PYgKsA5sE1bJ8rhk2E7i+cch04bhITXMNB0nDgZw4OdY27SEkjhT8qrKTdt3A1B90PPzxrPDJoqvNqE1ve9H3nDpX3fJcvwRX8ywAnqgJAsCn0g/BoJKGDwFeiBcDgOBTQfWiEOgIzMgqIgTPWBhCAQCgWilGVa2C5VBT1Knqbx7ARG1KAah3fRTTSjyVXQIUfLFB4IDp0gGaZjJiYCsn2YqNUIs1Bnafp6Khf0AAxOKCsS5LZYF+XmdZt0MtU3h

ef5wXtby90EoqdXDbl7IFeI4QAyDBkrc1m3mfw2rYHqly+etxnmcVzgoEV5ZDWE/tCh9l2/YyAPsmNQgjFon5neNjJ6iwKBhhxkd0GCPUYojo2tYyFHSEzgW2AoIzcCfXqU+L/R+gVYYK6rkInwR1uNdT/QW9ZCh6ngNXJC1OA8eYbBWSNAANbhXyuSyLg2+z+NOCleYnqf8F6Oebm0G54kReEeFuaSrmO3mjDYAxuAQyB6AIA9cVg+vXYyO2gsm

i0R9IMfedlEg8dE64m9gA4gpoEBjzQA5SAYDKhsEGk3XAmhggQygndUoYDxZoDvhAFoPIO6kGUJKAAFGJH8vA4TUEoRQiykIACUupiIIGUMWLUFQiGkIuIyXglxqHcOoXQxhL9C6+x1hyfCUBhyNlBhHDqmRmHllIGWZQt8wxZGQagvcpADzomwEQKBN0dEYNKBwTq2jdFhmEFAP8tFboiNKHYAAVggBizBjRmLgPAxBZiUHXUhmEXmUopGMHqNf

fAaiEw0QtukBiw5dR02ZAYQeCwQbTVKLycG3AAkmMgPgUImc4mhPCVNfAsFwBwToAaYI6ZgCwxgkAA==
```
%%