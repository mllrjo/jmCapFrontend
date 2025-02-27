https://github.com/mllrjo/jmCapBackend.git
https://github.com/mllrjo/jmCapFrontend.git

#Federal Agency Employee Tracker

#### Real-time tracking of volatile on-going federal agency restructuring.

## Description
The federal job market has been on a rollercoaster — firings, rehirings, political pressure, and public outcry all shaping who stays and who goes. Changes have been occurring on a daily basis and there is no official digital information source. FAET is a CRUD App to manipulate and exhibit data about an agency selected by a user. For now, the focus is on large personnel turnover.

An "event" is a firing or [re]hiring at an agency. Records include: date of event, agency, number of personnel fired, number of personnel rehired, total number of agency personnel before event, information source, brief summmary obtained from public media. For a given agency, events occurring on different dates comprise distinct records.

These events are unprecendented in the breadth, depth, and speed.

They will roil the US econommy, sow market upheaval, and generate continual uncertainty. Certain of them, for example those that have affected nuclear weapons security, wildfire control, and the CDC as measles and human bird flu cases are starting to proliferate, may be of immediate practical and geopolitical significance. If layoffs at the IRS increase by 10%, what happens to tax refund delays?  If SEC staff shrink, does that lead to less financial fraud enforcement?

Logging them at the earliest possible moment, designating them as "speculative" or "inferred" if necessary, could enable assessment of market impact.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used
* MongoDB
* Express
* React
* Nodejs
* JavaScript
* CSS3

## Features
*User "login" (partially functional)
*Select agency whose records to display (partially functional)
*CRUD the records (fully functional)

#### List of Future Features
* Enable each user to select their own agencies to track.
* Interface to LLM that recovers and agglomerates data from online sources in real time.
* Styling.
* Extend to agency chairs and officers.
* Extend to agency budget changes: what are the savings yielded by the cuts?
* Add dates to rehires.

* Refine LLM Query:
Extract employment change data for [the specified agency] since [date]
    Your response must follow this format:
    
    - agency: [specified agency] (String)
    - date: Date of layoffs/hiring event (String)
    - fired (number of personnel; String) This is approximate and inferred of course; that is understood)
    - rehired (number of personnel; String) This is approximate and inferred of course; that is understood)    
    - total_employees: Estimated total number of employees at the agency before layoffs (Number)
    - summary: Concise explanation of employment change event
    - source: News article or official report links: array of strings
    
    If no employment changes are found, state 'No reported changes.'
Date.
Agency.

## Special Mention: Supporters of the build
Bryan Santos, Jordan Wofford, Paul Chapman, Dylan Comeau, Per Scholas, my classmates, chatGPT.
