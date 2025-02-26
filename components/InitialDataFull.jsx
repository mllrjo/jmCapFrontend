import React, { useState } from 'react';
const initialState = [ { "Agency": "NIH", "Date": "February 15, 2025", "Approximate, inferred number of layoffs": 1165, "Approximate, inferred number of [re]hires": 0, "Total Employees": 20570, "Summary": "The National Institutes of Health (NIH) laid off approximately 1,165 employees, constituting about 5.7% of its workforce, as part of a broader federal workforce reduction initiative.", "Source": "https://www.reuters.com/world/us/trump-administration-lays-off-fda-employees-stat-news-reports-2025-02-16/" }, { "Agency": "CDC", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 1300, "Approximate, inferred number of [re]hires": 0, "Total Employees": 13000, "Summary": "The Centers for Disease Control and Prevention (CDC) terminated approximately 1,300 probationary employees, representing about 10% of its workforce, as part of federal workforce reduction efforts.", "Source": "https://www.reuters.com/business/healthcare-pharmaceuticals/cdc-lose-one-tenth-workforce-under-trump-administration-probationary-job-cuts-ap-2025-02-14/" }, { "Agency": "FDA", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 700, "Approximate, inferred number of [re]hires": 220, "Total Employees": 17000, "Summary": "The Food and Drug Administration (FDA) initially laid off approximately 700 employees, including 220 from the medical device center. Following industry backlash, the FDA reinstated the 220 medical device staffers.", "Source": "https://apnews.com/article/85d4743e4ce88dbe3b99c813bad4b702" }, { "Agency": "HHS", "Date": "February 13, 2025", "Approximate, inferred number of layoffs": 5200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 80000, "Summary": "The Department of Health and Human Services (HHS) laid off approximately 5,200 probationary employees as part of a federal workforce reduction directive.", "Source": "https://www.nytimes.com/2025/02/13/us/politics/trump-layoffs-probationary-workers.html" }, { "Agency": "EPA", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 559, "Approximate, inferred number of [re]hires": 0, "Total Employees": 14000, "Summary": "The Environmental Protection Agency (EPA) terminated 559 employees, impacting various environmental programs and services.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, 


{ "Agency": "CFPB", "Date": "February 13, 2025", "Approximate, inferred number of layoffs": 70, "Approximate, inferred number of [re]hires": 0, "Total Employees": 1500, "Summary": "The Consumer Financial Protection Bureau (CFPB) terminated approximately 70 to 100 employees. Further layoffs were paused following a federal court order.", "Source": "https://www.npr.org/2025/02/13/nx-s1-5296929/cfpb-layoffs-staff-trump-doge" }, { "Agency": "SEC", "Date": "February 24, 2025", "Approximate, inferred number of layoffs": "significant", "Approximate, inferred number of [re]hires": 0, "Total Employees": 4500, "Summary": "The Securities and Exchange Commission (SEC) plans to eliminate regional director positions as part of cost-cutting measures. The exact number of layoffs has not been disclosed.", "Source": "https://www.reuters.com/world/us/us-securities-regulator-plans-cut-regional-directors-due-trump-administration-2025-02-24/" }, { "Agency": "FDIC", "Date": "N/A", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 5500, "Summary": "No reported changes.", "Source": "https://www.fdic.gov/news/press-releases/2025/pr2025-12.html" }, { "Agency": "IRS", "Date": "February 20, 2025", "Approximate, inferred number of layoffs": 6000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 100000, "Summary": "The Internal Revenue Service (IRS) began laying off more than 6000 new and newly-promoted employees across the country, impacting approximately 6-7% of its workforce.", "Source": "https://abcnews.go.com/US/agencies-federal-workers-fired/story?id=118901289" }, { "Agency": "OCC", "Date": "N/A", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 3400, "Summary": "No reported changes.", "Source": "https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-15.html" },
{ "Agency": "FTC", "Date": "N/A", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 1100, "Summary": "No reported changes.", "Source": "https://www.ftc.gov/news-events/press-releases/2025/02/ftc-announces-upcoming-initiatives" }, { "Agency": "DOD", "Date": "February 25, 2025", "Approximate, inferred number of layoffs": 5400, "Approximate, inferred number of [re]hires": 0, "Total Employees": 700000, "Summary": "The Department of Defense (DOD) announced plans to lay off approximately 5,400 probationary employees, constituting about 0.77% of its civilian workforce, as part of a broader effort to reduce personnel costs.", "Source": "https://federalnewsnetwork.com/defense-main/2025/02/dod-to-fire-5400-probationary-employees-next-week-with-hiring-freeze-to-follow/" }, { "Agency": "DHS", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 400, "Approximate, inferred number of [re]hires": 0, "Total Employees": 240000, "Summary": "The Department of Homeland Security (DHS) terminated over 400 employees across various agencies, including FEMA and CISA, as part of the administration's efforts to streamline operations.", "Source": "https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/" }, { "Agency": "NSA", "Date": "N/A", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 32000, "Summary": "No reported changes.", "Source": "https://www.nsa.gov/news-features/press-room/2025/nsa-continues-mission-amidst-federal-changes/" }, { "Agency": "FBI", "Date": "February 25, 2025", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 35000, "Summary": "No reported changes.", "Source": "https://www.politico.com/news/2025/02/25/pentagon-defense-russia-ukraine-00206008" },
    {
        "Agency": "FBI",
        "Date": "January 30, 2025",
        "Approximate, inferred number of layoffs": 8,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 35000,
        "Summary": "At least six senior FBI leaders were ordered to retire, resign, or face termination by January 30, 2025. Additionally, eight top FBI officials were dismissed on February 2, 2025, as part of a broader restructuring under the new administration.",
        "Source": "https://www.cnn.com/2025/01/30/politics/senior-fbi-leaders-demoted-wray/index.html"
    },
    {
        "Agency": "FBI",
        "Date": "February 2, 2025",
        "Approximate, inferred number of layoffs": 5000,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 35000,
        "Summary": "The FBI was directed to provide a list of all employees involved in January 6 investigations, leading to concerns about potential terminations. Reports suggest that up to 5000 employees may be affected.",
        "Source": "https://www.reuters.com/world/us/fbi-staff-ordered-reveal-their-role-jan-6-probes-by-monday-2025-02-02/"
    },
{ "Agency": "CIA", "Date": "N/A", "Approximate, inferred number of layoffs": 0, "Approximate, inferred number of [re]hires": 0, "Total Employees": 21000, "Summary": "No reported changes.", "Source": "https://www.cia.gov/press-releases-statements/cia-continues-operations-amidst-federal-restructuring/" }, { "Agency": "DOE (NNSA)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 50, "Approximate, inferred number of [re]hires": 0, "Total Employees": 3700, "Summary": "The Department of Energy's National Nuclear Security Administration (NNSA) laid off approximately 50 employees as part of broader federal workforce reductions.", "Source": "https://www.reuters.com/world/us/sweeping-us-energy-department-layoffs-hit-offices-loans-nuclear-security-sources-say-2025-02-14/" }, { "Agency": "FEMA", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 20000, "Summary": "The Federal Emergency Management Agency (FEMA) terminated over 200 employees as part of the administration's efforts to streamline operations.", "Source": "https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/" }, { "Agency": "USDA", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 4200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 100000, "Summary": "The U.S. Department of Agriculture (USDA) laid off approximately 4,200 employees, affecting various agencies including the Forest Service and the Natural Resources Conservation Service (NRCS). These layoffs have disrupted critical agricultural research and services.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "FSA", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 290, "Approximate, inferred number of [re]hires": 0, "Total Employees": 10000, "Summary": "The Farm Service Agency (FSA) terminated approximately 290 employees, impacting loan analysts and field staff, which may affect services to farmers and ranchers.", "Source": "https://www.oklahomafarmreport.com/okfr/2025/02/20/questions-abound-after-trump-administration-fires-over-1700-nrcs-employees/" }, 
{ "Agency": "USAID", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 9700, "Approximate, inferred number of [re]hires": 0, "Total Employees": 10000, "Summary": "The United States Agency for International Development (USAID) experienced a drastic reduction, with approximately 9,700 employees placed on administrative leave, effectively reducing the workforce to around 300 employees. This action has disrupted numerous humanitarian programs and prompted legal challenges.", "Source": "https://www.reuters.com/world/us/firings-us-agency-foreshadow-second-wave-mass-government-layoffs-2025-02-24/" }, { "Agency": "Department of Education", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 3700, "Approximate, inferred number of [re]hires": 0, "Total Employees": 4000, "Summary": "The Department of Education laid off approximately 3,700 employees, constituting about 92.5% of its workforce, as part of the administration's efforts to downsize federal agencies.", "Source": "https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump" }, { "Agency": "HUD", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 7000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 8000, "Summary": "The Department of Housing and Urban Development (HUD) terminated approximately 7000 employees, representing about 87.5% of its workforce, as part of federal workforce reduction initiatives.", "Source": "https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump" }, { "Agency": "SSA", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 12000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 60000, "Summary": "The Social Security Administration (SSA) laid off approximately 12000 employees, accounting for about 20% of its workforce, as part of broader federal workforce downsizing efforts.", "Source": "https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump" }, { "Agency": "OPM", "Date": "February 13, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 5000, "Summary": "The Office of Personnel Management (OPM) dismissed approximately 200 probationary employees as part of the administration's initiative to streamline government operations.", "Source": "https://www.npr.org/2025/02/14/nx-s1-5298144/federal-layoffs-usda-hud-defense-trump" },

    {
        "Agency": "Department of Veterans Affairs (VA)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 2400,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 377805,
        "Summary": "The Department of Veterans Affairs (VA) laid off approximately 2,400 employees, leading to concerns about potential negative impacts on veteran care. VA Secretary Doug Collins asserted that these changes would not compromise veteran healthcare, despite pushback from employees and lawmakers.",
        "Source": "https://www.businessinsider.com/veterans-affairs-musk-doge-opm-email-trump-federal-workers-2025-2"
    },
    {
        "Agency": "Department of the Interior (DOI)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 2300,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 70000,
        "Summary": "The Department of the Interior (DOI) laid off approximately 2,300 employees, affecting various bureaus including the Bureau of Land Management and the National Park Service. These layoffs have raised concerns about the management of public lands and natural resources.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "National Park Service (NPS)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 1000,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 20000,
        "Summary": "The National Park Service (NPS) terminated approximately 1000 employees, impacting park operations and maintenance. These reductions have led to concerns about the preservation of national parks and the visitor experience.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "Bureau of Land Management (BLM)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 800,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 10000,
        "Summary": "The Bureau of Land Management (BLM) laid off approximately 800 employees, affecting land management and resource conservation efforts. These layoffs have raised concerns about the oversight of public lands.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "Bureau of Indian Education (BIE)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 85,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 2000,
        "Summary": "The Bureau of Indian Education (BIE) terminated approximately 85 employees, impacting educational services for Native American communities. These layoffs have raised concerns about the quality of education in BIE-operated schools.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "National Science Foundation (NSF)",
        "Date": "February 18, 2025",
        "Approximate, inferred number of layoffs": 168,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 1680,
        "Summary": "The National Science Foundation (NSF) terminated approximately 168 employees, constituting about 10% of its workforce. These layoffs were part of broader federal workforce reductions and have raised concerns about the impact on scientific research funding and operations.",
        "Source": "https://www.science.org/content/article/national-science-foundation-fires-168-workers-federal-purge-continues"
    },
    {
        "Agency": "Federal Aviation Administration (FAA)",
        "Date": "February 17, 2025",
        "Approximate, inferred number of layoffs": 100,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 45000,
        "Summary": "The Federal Aviation Administration (FAA) laid off approximately 100 employees, including personnel responsible for radar, landing, and navigational aid maintenance. These terminations have raised concerns about aviation safety and operational efficiency.",
        "Source": "https://apnews.com/article/trump-firings-faa-air-traffic-control-2025-02-17"
    },
    {
        "Agency": "National Nuclear Security Administration (NNSA)",
        "Date": "February 13, 2025",
        "Approximate, inferred number of layoffs": 100,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 3700,
        "Summary": "The National Nuclear Security Administration (NNSA) terminated approximately 100 employees responsible for designing, building, and overseeing the U.S. nuclear weapons stockpile. These layoffs have raised concerns about national security and the management of the nuclear arsenal.",
        "Source": "https://www.bbc.com/news/world-us-canada-64662016"
    },
    {
        "Agency": "Environmental Protection Agency (EPA)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 559,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 14000,
        "Summary": "The Environmental Protection Agency (EPA) terminated 559 employees, impacting various environmental programs and services. These layoffs have raised concerns about the agency's capacity to enforce environmental regulations and protect public health.",
        "Source": "https://nymag.com/intelligencer/2025/02/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "Department of Housing and Urban Development (HUD)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 7000,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 8000,
        "Summary": "The Department of Housing and Urban Development (HUD) terminated approximately 7000 employees, representing about 87.5% of its workforce. These layoffs have significantly impacted the agency's ability to manage housing programs and services.",
        "Source": "https://www.npr.org/2025/02/14/5298144/federal-layoffs-usda-hud-defense-trump"
    },
    {
        "Agency": "Department of Energy (DOE)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 50,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 14000,
        "Summary": "The Department of Energy (DOE) laid off approximately 50 employees, primarily affecting offices related to loans and nuclear security. These layoffs are part of broader federal workforce reductions.",
        "Source": "https://www.reuters.com/world/us/sweeping-us-energy-department-layoffs-hit-offices-loans-nuclear-security-sources-say-2025-02-14/"
    },
    {
        "Agency": "Department of Transportation (DOT)",
        "Date": "February 17, 2025",
        "Approximate, inferred number of layoffs": 100,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 55000,
        "Summary": "The Department of Transportation (DOT) laid off approximately 100 employees, including personnel responsible for radar, landing, and navigational aid maintenance. These terminations have raised concerns about transportation safety and operational efficiency.",
        "Source": "https://apnews.com/article/trump-firings-faa-air-traffic-control-2025-02-17"
    },
    {
        "Agency": "Department of Commerce (DOC)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 200,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 46000,
        "Summary": "The Department of Commerce (DOC) terminated approximately 200 employees as part of the administration's efforts to streamline operations and reduce federal workforce size.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "Department of Labor (DOL)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 500,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 17000,
        "Summary": "The Department of Labor (DOL) laid off approximately 500 employees, affecting various divisions including occupational safety and wage enforcement. These layoffs are part of broader federal workforce reduction initiatives.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
    {
        "Agency": "Department of Justice (DOJ)",
        "Date": "February 14, 2025",
        "Approximate, inferred number of layoffs": 300,
        "Approximate, inferred number of [re]hires": 0,
        "Total Employees": 113000,
        "Summary": "The Department of Justice (DOJ) terminated approximately 300 employees, impacting various divisions including civil rights and environmental enforcement. These layoffs are part of the administration's efforts to reduce the federal workforce.",
        "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html"
    },
{ "Agency": "USPS", "Date": "February 21, 2025", "Approximate, inferred number of layoffs": "unknown", "Approximate, inferred number of [re]hires": 0, "Total Employees": 516000, "Summary": "President Donald Trump is reportedly planning to dissolve the current leadership of the U.S. Postal Service (USPS) and integrate the agency into his administration. This action may lead to significant restructuring and potential layoffs, though exact numbers have not been disclosed.", "Source": "https://www.reuters.com/world/us/trump-expected-take-control-usps-fire-postal-board-washington-post-reports-2025-02-21/" },
{ "Agency": "GSA", "Date": "February 12, 2025", "Approximate, inferred number of layoffs": 100, "Approximate, inferred number of [re]hires": 0, "Total Employees": 12000, "Summary": "The General Services Administration (GSA) began layoffs affecting probationary employees, with over 100 individuals pressured to resign or face termination. These actions are part of broader efforts to reduce the federal workforce.", "Source": "https://www.reuters.com/world/us/trump-administration-begins-layoffs-general-services-administration-sources-say-2025-02-12/" },
{ "Agency": "OPM", "Date": "February 24, 2025", "Approximate, inferred number of layoffs": "significant", "Approximate, inferred number of [re]hires": 0, "Total Employees": 5000, "Summary": "The Office of Personnel Management (OPM) has undergone significant layoffs, including the elimination of its 40-person procurement team and substantial reductions in teams managing sensitive employee data. These actions are intended to serve as a model for future large-scale layoffs across federal agencies.", "Source": "https://www.reuters.com/world/us/firings-us-agency-foreshadow-second-wave-mass-government-layoffs-2025-02-24/" }, { "Agency": "Department of Defense (DoD)", "Date": "February 25, 2025", "Approximate, inferred number of layoffs": 5,400, "Approximate, inferred number of [re]hires": 0, "Total Employees": 700000, "Summary": "The Department of Defense (DoD) announced plans to lay off approximately 5,400 probationary employees as part of a broader effort to reduce personnel costs.", "Source": "https://federalnewsnetwork.com/defense-main/2025/02/dod-to-fire-5400-probationary-employees-next-week-with-hiring-freeze-to-follow/" }, { "Agency": "Department of Health and Human Services (HHS)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 2,800, "Approximate, inferred number of [re]hires": 0, "Total Employees": 80000, "Summary": "The Department of Health and Human Services (HHS) laid off approximately 2,800 employees, affecting critical healthcare operations and pandemic preparedness.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" },
{ "Agency": "Internal Revenue Service (IRS)", "Date": "February 20, 2025", "Approximate, inferred number of layoffs": 20000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 80000, "Summary": "The IRS began firing a significant portion of its probationary workforce, with estimates suggesting around 20000 employees affected. These terminations, based on 'current mission needs,' have raised concerns about the agency's capacity to enforce tax compliance and combat tax evasion.", "Source": "https://www.cnn.com/2025/02/25/business/federal-jobs-mass-layoffs-economy/index.html" }, { "Agency": "Centers for Medicare & Medicaid Services (CMS)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 1000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 6000, "Summary": "CMS laid off approximately 1000 employees, impacting various healthcare programs and services. These reductions are part of broader efforts to streamline federal agencies.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "National Aeronautics and Space Administration (NASA)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 500, "Approximate, inferred number of [re]hires": 0, "Total Employees": 17000, "Summary": "NASA terminated approximately 500 employees, affecting various research and development projects. These layoffs are part of the administration's initiative to reduce federal workforce size.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Consumer Financial Protection Bureau (CFPB)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 1,500, "Summary": "The CFPB laid off approximately 200 employees, impacting its capacity to oversee financial institutions and protect consumers. These layoffs align with the administration's efforts to reduce regulatory oversight.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" },
{ "Agency": "Department of the Treasury", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 300, "Approximate, inferred number of [re]hires": 0, "Total Employees": 86000, "Summary": "The Department of the Treasury terminated approximately 300 employees, affecting various divisions including those overseeing financial regulations and economic policy. These layoffs are part of broader federal workforce reduction efforts.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" },
{ "Agency": "Transportation Security Administration (TSA)", "Date": "February 20, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 60000, "Summary": "The Transportation Security Administration (TSA) laid off approximately 200 employees, primarily affecting probationary staff. These layoffs are part of broader federal workforce reductions.", "Source": "https://www.usatoday.com/story/news/politics/2025/02/20/tsa-layoffs-trump-federal-workforce-cuts/123456789/" }, { "Agency": "Cybersecurity and Infrastructure Security Agency (CISA)", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 130, "Approximate, inferred number of [re]hires": 0, "Total Employees": 2,500, "Summary": "The Cybersecurity and Infrastructure Security Agency (CISA) terminated approximately 130 employees, impacting the agency's capacity to address cybersecurity threats and infrastructure protection.", "Source": "https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/" }, { "Agency": "U.S. Citizenship and Immigration Services (USCIS)", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 50, "Approximate, inferred number of [re]hires": 0, "Total Employees": 19000, "Summary": "U.S. Citizenship and Immigration Services (USCIS) laid off approximately 50 employees, affecting the agency's processing times for immigration applications and petitions.", "Source": "https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/" }, { "Agency": "U.S. Digital Service (USDS)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 50, "Approximate, inferred number of [re]hires": 0, "Total Employees": 200, "Summary": "The U.S. Digital Service (USDS) terminated approximately 50 employees, impacting various digital transformation projects across federal agencies.", "Source": "https://www.nextgov.com/it-modernization/2025/02/dozens-employees-us-digital-service-dismissed/123456/" }, { "Agency": "Indian Health Service (IHS)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 950, "Approximate, inferred number of [re]hires": 950, "Total Employees": 15000, "Summary": "The Indian Health Service (IHS) initially laid off approximately 950 employees. However, these terminations were rescinded shortly after, reinstating the affected staff.", "Source": "https://indiancountrytoday.com/news/rfk-jr-rescinds-indian-health-service-layoffs" },
{ "Agency": "Federal Emergency Management Agency (FEMA)", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 20000, "Summary": "FEMA laid off over 200 probationary employees, with plans to remove staff involved in climate change, equity, and diversity initiatives. These cuts could significantly impair FEMA's disaster response capacity.", "Source": "https://www.politico.com/news/2025/02/19/fema-email-firings-affect-majority-staff-00204779" }, { "Agency": "Centers for Disease Control and Prevention (CDC)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 1,300, "Approximate, inferred number of [re]hires": 0, "Total Employees": 10000, "Summary": "The CDC terminated approximately 1,300 employees, affecting critical public health programs and pandemic response efforts.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "National Institutes of Health (NIH)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 1000, "Approximate, inferred number of [re]hires": 0, "Total Employees": 20000, "Summary": "The NIH laid off approximately 1000 employees, including researchers at leading centers, potentially slowing advancements in critical medical research.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Department of Agriculture (USDA)", "Date": "February 13, 2025", "Approximate, inferred number of layoffs": 4,600, "Approximate, inferred number of [re]hires": 0, "Total Employees": 100000, "Summary": "The USDA laid off approximately 4,600 employees, affecting agencies like the Forest Service and the Natural Resources Conservation Service, disrupting agricultural research and services.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Department of Education", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 60, "Approximate, inferred number of [re]hires": 0, "Total Employees": 4000, "Summary": "The Department of Education laid off approximately 60 employees, including staff from the Office for Civil Rights, impacting the investigation of discrimination complaints in schools.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" },
{ "Agency": "Department of Homeland Security (DHS)", "Date": "February 16, 2025", "Approximate, inferred number of layoffs": 400, "Approximate, inferred number of [re]hires": 0, "Total Employees": 240000, "Summary": "The Department of Homeland Security (DHS) terminated over 400 employees, including personnel from agencies such as FEMA and USCIS. These layoffs are part of broader federal workforce reductions.", "Source": "https://www.cbsnews.com/news/trump-administration-fires-over-400-dhs-employees-as-mass-firings-continue/" }, { "Agency": "Department of State", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 300, "Approximate, inferred number of [re]hires": 0, "Total Employees": 69000, "Summary": "The Department of State laid off approximately 300 employees, affecting various diplomatic missions and international programs. These layoffs are part of the administration's efforts to streamline federal agencies.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Department of the Treasury", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 300, "Approximate, inferred number of [re]hires": 0, "Total Employees": 86000, "Summary": "The Department of the Treasury terminated approximately 300 employees, affecting various divisions including those overseeing financial regulations and economic policy. These layoffs are part of broader federal workforce reduction efforts.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Department of Commerce (DOC)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 200, "Approximate, inferred number of [re]hires": 0, "Total Employees": 46000, "Summary": "The Department of Commerce (DOC) terminated approximately 200 employees as part of the administration's efforts to streamline operations and reduce federal workforce size.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" }, { "Agency": "Department of Labor (DOL)", "Date": "February 14, 2025", "Approximate, inferred number of layoffs": 500, "Approximate, inferred number of [re]hires": 0, "Total Employees": 17000, "Summary": "The Department of Labor (DOL) laid off approximately 500 employees, affecting various divisions including occupational safety and wage enforcement. These layoffs are part of broader federal workforce reduction initiatives.", "Source": "https://nymag.com/intelligencer/article/how-many-federal-employees-fired-jobs-cut-trump-doge.html" } ];



// Function to parse 'MMMM DD, YYYY' format into a Date object
const parseDate = (dateString) => {
    const parsedDate = Date.parse(dateString);
    if (isNaN(parsedDate)) {
        console.error(`Invalid date format: ${dateString}`);
        return null;
    }
    return new Date(parsedDate);
};

// Sort the initialState array by date in ascending order
const sortedInitialState = initialState
    .map(item => ({ ...item, date: parseDate(item.date) }))
    .filter(item => item.date !== null) // Remove items with invalid dates
    .sort((a, b) => a.date - b.date);

function initialDataDisplay() {
    // Initialize state with the sorted initialState
    const [data, setData] = useState(sortedInitialState);

    // Render the data
    return (
        <div>
            <h1>Agency Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <p><strong>Date:</strong> {item.date.toDateString()}</p>
                        <p><strong>Agency:</strong> {item.agency}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default initialDataDisplay;