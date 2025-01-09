const articles = [
    {
        href: "https://india.mongabay.com/2021/05/where-are-indian-states-participating-in-net-zero-debate/",
        target: "_blank",
        topic: "Climate Change, Governance",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/4058016973_92c370b7f0_k.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "11",
            suffix: "th",
            month: "May",
            year: "2021"
        },
        title: "Net zero debate: Where do Indian states stand on the decarbonisation pathway?",
        description: "Announcing a timeline for net-zero emissions has been the buzzword in the global climate change debate and India has been under intense pressure to announce it as well. Indian has not followed suit but Prime Minister Narendra Modi recently reiterated the country’s commitment ..."
    },
    {
        href: "https://india.mongabay.com/2023/02/are-cities-smart-enough-to-leverage-municipal-bonds/",
        target: "_blank",
        topic: "Urban Governance, Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/1620px-Necklace_road_during_Ganesh_Nimajjanam_2019.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "21",
            suffix: "st",
            month: "February",
            year: "2023"
        },
        title: "Are cities ‘smart’ enough to leverage municipal bonds?",
        description: "Indore’s Municipal Corporation (IMC) received an overwhelming response from institutional and corporate investors when it issued a green bond last week. This development set a positive tone for similar resource-scarce urban bodies looking for investments to meet civic needs and ambition. ..."
    },
    {
        href: "https://india.mongabay.com/2023/04/with-increasing-climate-related-threats-farmers-gear-up-for-adaptation/",
        target: "_blank",
        topic: "Agriculture",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/3686006791_d99b95e16f_k-e1680597925981-2048x890.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "4",
            suffix: "th",
            month: "April",
            year: "2023"
        },
        title: "With increasing climate-related threats, farmers gear up for adaptation",
        description: "In late February, the Indian Institute of Wheat and Barley Research (IIWBR), a leading scientific institute for wheat, released an advisory recommending farmers in India to spray potassium chloride on wheat crops in case of a sudden rise in temperature. This was ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/health/treated-but-not-cured-52039",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.01679000_1449558274_18-20151215.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "December",
            year: "2015"
        },
        title: "Treated but not cured",
        description: "In December <span class='in'>2005</span>, the Indian government declared it had fewer than one case of leprosy per <span class='in'>10,000</span> people. This announcement of elimination, as defined by the World Health Organization (WHO), brought relief to a country known to have the highest burden of the disease. But the sense of relief is disappearing fast. ..."
    },
    {
        href: "https://india.mongabay.com/2023/08/on-a-bumpy-road-to-net-zero-trucks-shift-gear-to-reduce-emissions/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/Konkan_-_Western_Ghats_-_Scenes_from_Indias_Konkan_Railway_21.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "14",
            suffix: "th",
            month: "August",
            year: "2023"
        },
        title: "On a bumpy road to net zero, trucks shift gear to reduce emissions",
        description: "Anjar Ahmed, a truck driver in his fifties, recently embarked on a journey from Dispur in Assam to deliver tiles to Muzaffarpur, Bihar. Over the course of this trip, his <span class='in'>12</span>-wheel truck guzzled approximately <span class='in'>250</span> litres of diesel, costing Rs. <span class='in'>23,000</span>. The truck would have emitted around <span class='in'>670</span> kilograms of carbon dioxide ..."
    },
    {
        href: "https://india.mongabay.com/2023/04/latest-rbi-guidelines-to-help-mobilise-domestic-capital-towards-green-activities/",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/Banner-for-kundan-sotry.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "23",
            suffix: "rd",
            month: "April",
            year: "2023"
        },
        title: "Latest RBI guidelines to help mobilise domestic capital towards green activities",
        description: "With an increasing trend of commercial banks launching ‘green deposit’ schemes for retail investors, the Reserve Bank of India (RBI) has released a framework to shape the emerging market, including provisions to restrict greenwashing. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/economy/why-we-need-a-circular-economy-65122",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.27166500_1560771655_44-20190630-english.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "27",
            suffix: "th",
            month: "June",
            year: "2019"
        },
        title: "Why we need a circular economy",
        description: "Rwanda has a reason for opposing used clothes. Pushed by flawed trade regimes and myopic policies, these goods have nearly decimated the textile, apparel and leather industries in Africa. But elsewhere, a movement of sorts has gained momentum with celebrities urging consumers to choose second-hand clothes for a sustainable future. ..."
    },
    {
        href: "https://india.mongabay.com/2021/01/agrarian-distress-climate-change-farm-income-farmers-protest-ministry-of-agriculture/",
        target: "_blank",
        topic: "Agriculture",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/Vendors-in-Azadpur-Mandi-in-New-Delhi-1-scaled.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "28",
            suffix: "th",
            month: "January",
            year: "2021"
        },
        title: "GrAMs: Market access scheme for farmers still weighed down after three years",
        description: "After braving the chilling winter on the border of the national capital for around two months, hundreds of thousands of farmers entered Delhi on India’s Republic Day on January <span class='in'>26</span> to protest against the three agriculture laws that the government had passed in the Parliament. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/health/paramedics-show-the-way-51469",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.63769500_1444726041_52-20151015.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "October",
            year: "2015"
        },
        title: "Paramedics show the way",
        description: "Two girls, in their late <span class='in'>20</span>s, knock on the door of Subhash Barman, a fisherman living in Gopinathpur Malopada village, about <span class='in'>35</span> km from Dhaka. The family welcomes them warmly. Shilpi Barman, wife of Subhash, is in her seventh month of pregnancy. These girls cut Shilpi’s nails and check her blood pressure. They then inspect her bedroom to check whether the bedsheets are clean and also collect her ..."
    },
    {
        href: "https://india.mongabay.com/2023/09/study-reveals-g20-nations-increased-fossil-fuel-investments-in-2022-defying-climate-goals/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/G20-banner-image.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "1",
            suffix: "st",
            month: "September",
            year: "2023"
        },
        title: "Study reveals G20 nations increased fossil fuel investments in 2022, defying climate goals",
        description: "Amid the upcoming G<span class='in'>20</span> summit in New Delhi, where global leaders are poised to deliberate on critical topics including climate change, a study reveals a conflicting trend. Attending countries had substantially increased financial support for fossil fuels in <span class='in'>2022</span> ..."
    },
    {
        href: "https://india.mongabay.com/2023/05/rbi-report-examines-implications-of-climate-change-on-economic-growth-and-financial-stability/",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/long_vehicle_vehicle_lorry_wind_turbine_blade_transport_automobile_highway_truck-975962.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "11",
            suffix: "th",
            month: "May",
            year: "2023"
        },
        title: "RBI report examines implications of climate change on economic growth and financial stability",
        description: "The Reserve Bank of India (RBI) has focussed on climate change as the primary theme in its Report on Currency and Finance (RCF) for <span class='in'>2022-23</span>, a theme-based annual report on contemporary issues concerning central banking and macroeconomic issues in India. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/economy/circular-economy-s-potential-remains-unrealised-65123",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.26976400_1561693666_waste.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "28",
            suffix: "th",
            month: "June",
            year: "2019"
        },
        title: "Circular economy's potential remains unrealised",
        description: "At the industrial estate road in Vapi, the hub of paper mills in south Gujarat, there is feverish activity. Lorries carrying imported wastepaper make a beeline. Mountains of trash can be seen heaped inside the mills, ready to be recycled. In what can be considered a golden example of the circular economy model, ..."
    },
    {
        href: "https://india.mongabay.com/2021/03/pesa-the-wait-for-reforms-on-the-ground-continues-even-after-25-years/",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/Bazzar.jpeg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "4",
            suffix: "th",
            month: "March",
            year: "2021"
        },
        title: "PESA: The wait for reforms on the ground continues even after <span>25</span> years",
        description: "It is the silver jubilee year of the Panchayat (Extension to the Scheduled Areas) Act, <span class='in'>1996</span> that was passed by the Indian parliament to empower people living in the fifth schedule areas, which are mostly dominated by tribal communities. However, the law popularly known as PESA remains ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/agriculture/punjab-s-marginalised-communities-struggle-for-their-right-to-cultivate-common-lands-63005",
        target: "_blank",
        topic: "Agriculture, Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.61456800_1548742596_17-20190215-english.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "7",
            suffix: "th",
            month: "February",
            year: "2019"
        },
        title: "Punjab's marginalised communities struggle for their right to cultivate common lands",
        description: "Bant Kaur is content with life. On a chilly January morning, the 50-something widow is busy feeding luscious green fodder to her buffalo, milking it and cooking for her <span class='in'>15</span>-year-old son before leaving for work at 8 in the morning. Resident of Punjab’s Balad Kalan ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/shifting-care--48568",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20150228-20.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "28",
            suffix: "th",
            month: "February",
            year: "2015"
        },
        title: "Shifting care",
        description: "The initial euphoria around the proposed national health policy seems to be fading ever since the document was placed in the public domain for comments. The draft National Health Policy, <span class='in'>2015</span>, (NHP <span class='in'>2015</span>) is being introduced <span class='in'>13</span> years after the last policy was drafted. The primary aim of the policy is to strengthen ..."
    },
    {
        href: "https://india.mongabay.com/2023/05/storing-or-reusing-captured-carbon-is-emerging-as-tool-in-energy-transition/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/800px-Petrol_truck_India-e1684734426192.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "22",
            suffix: "nd",
            month: "May",
            year: "2018"
        },
        title: "Storing or reusing captured carbon is emerging as tool in energy transition",
        description: "Public sector oil and gas companies in India are actively embracing emission-reduction strategies such as Carbon Capture, Utilisation, and Storage (CCUS) as India targets net zero by <span class='in'>2070</span>. <br> <br> CCUS is a common strategy across India’s oil ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/climate-change/blue-economy-at-risk-60613",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.65744800_1526971737_africa-fishin.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "22",
            suffix: "nd",
            month: "May",
            year: "2018"
        },
        title: "Rising surface temperature threatens Africa's blue economy",
        description: "Sitting on Ghana’s Apam beach, fisherman Nana Ekow Pasnin is worried about his family’s future. His canoe just returned without a single fish, after spending a marathon <span class='in'>12</span> hours in the sea. He has never seen such an acute fish shortage in the Atlantic Ocean in his <span class ='in'> 40</span> years of fishing. “Earlier, we could easily fill up the <span class='in'>150</span> crates in our canoe in every trip. Today, ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/agriculture/india-in-a-microcosm-will-covid-19-reverse-migrants-pick-up-the-plough-again-palanpur-throws-up-a-question-72392",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.83256300_1595323981_main.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "21",
            suffix: "st",
            month: "July",
            year: "2020"
        },
        title: "India in a microcosm: Will COVID-<span>19</span> reverse migrants pick up the plough again? Palanpur throws up a question",
        description: "Usman has been unemployed since March, <span class='in'>2020</span>. The <span class='in'>28</span>-year-old worked as a carpenter in national capital New Delhi for <span class='in'>10</span> years. That was before the novel coronavirus disease (COVID-<span class='in'>19</span>) pandemic struck — rendering him and his brother jobless, shattering their dream of starting their own business. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/health/-they-stole-my-womb-doctors-mislead-thousands-of-women-to-get-their-uterus-removed-69579",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.69458100_1584007502_carousel-(39).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "12",
            suffix: "th",
            month: "March",
            year: "2020"
        },
        title: "‘They stole my womb’: Doctors mislead thousands of women to get their uterus removed",
        description: "It was intriguing that Vandana Khandale, a traditional sugarcane cutter in Maharashtra’s Beed district, was sitting at home in January, the peak time for sugarcane harvesting. “I have developed severe joint pain and feel tired all the time. I get irrigated far too often, and working on the fields has become difficult,” she says. ..."
    },
    {
        href: "https://india.mongabay.com/2022/10/india-needs-legal-framework-for-closing-mines-and-power-plants/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/coal-mining-12.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "25",
            suffix: "th",
            month: "October",
            year: "2022"
        },
        title: "India needs legal framework for closing mines and power plants",
        description: "India is on the way to decommissioning thermal power plants (TPP) and disposing of coal mines at a large scale in the coming few years. However, the country has no legal framework on how this transition will take place. Estimates say that due to these measures, millions of people will lose their livelihood, ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/forests/why-zoonotic-diseases-are-spreading-to-humans-at-a-faster-rate-60598",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.63396800_1526902627_nipah-monkey.png",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "21",
            suffix: "st",
            month: "May",
            year: "2018"
        },
        title: "Why zoonotic diseases are fast spreading to humans",
        description: "The National Institute of Virology, Pune confirmed on Sunday that the <span class='in'>11</span> deaths in Kerala were due to Nipah virus (NiV) outbreak. The epicentre of the outbreak is Kozhikode where seven people lost their lives. Rest four died in Malappuram and at least <span class='in'>10</span> are being treated in different hospitals across Kozhikode. ..."
    },
    {
        href: "https://www.downtoearth.org.in/interviews/governance/throwback-at-the-time-of-covid-19-1897-plague-caused-distancing-but-there-was-a-socially-cohesive-mass--70303",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.43776000_1586354340_kancha_ilaiah_klf-18-(2).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "8",
            suffix: "th",
            month: "April",
            year: "2020"
        },
        title: "Throwback at the time of COVID-<span>19</span>: ‘<span>1897</span> plague caused distancing but there was a socially cohesive mass’",
        description: "Kancha Ilaiah Shepherd's family escaped the plague pandemic of <span class='in'>1897</span> and scripted a new life. As a child he inherited all the stories of his family’s and the society’s experiences with the pandemic. We see a resemblance in the present pandemic’s impacts on us ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/antibiotic-for-superbugs-48448",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/44-20150215.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "February",
            year: "2015"
        },
        title: "Antibiotic for superbugs",
        description: "The world has not seen a new class of antibiotics in the past <span class='in'>27</span> years. And bacteria are increasingly becoming resistant to the existing group of antibiotics. Now a group of Boston-based researchers claim to have finally discovered a new drug, which they call teixobactin. Better still, the technology developed by these researchers could pave the way for the discovery of many new classes of ..."
    },
    {
        href: "https://india.mongabay.com/2022/09/coal-will-stay-strong-when-solar-shines-in-indias-energy-transition/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/800px-High_Relief_Mural_-_Mock-up_Coal_Mine_Entranceway_-_Birla_Industrial__Technological_Museum_-_Kolkata_2010-06-18_6172-e1663754329692.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "21",
            suffix: "st",
            month: "September",
            year: "2022"
        },
        title: "Coal will stay strong even as solar shines in India’s energy transition",
        description: "In India’s energy transition, solar will emerge as a dominant source of energy, but coal is still going to be the mainstay of the country’s energy sector. In the coming decade, at least <span class='in'>40</span>% more coal consumption is estimated in India. These trends are reflected in the draft version of the National Electricity Plan (NEP) ..."
    },
    {
        href: "https://india.mongabay.com/2022/11/govt-releases-framework-for-sovereign-green-bonds/",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/IMG_20221105_075235-1200x890.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "22",
            suffix: "nd",
            month: "November",
            year: "2022"
        },
        title: "A framework for sovereign green bonds a step in the right direction but has miles to go",
        description: "Moving a step ahead towards boosting investor confidence in financing climate action, the Government of India (GoI) has developed a framework for Sovereign Green bonds (SGrB), in which it defines the ‘green’ sector and the process to ensure that investments will be directed to it. The government has sought an ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/water/lake-chad-forgotten-crisis-56974",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.54680600_1486116800_30-20160215-dte.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "February",
            year: "2017"
        },
        title: "Lake Chad's forgotten crisis",
        description: "Last year when Nigeria declared a nutrition emergency in Borno, indicating acute food insecurity in the state, and said the region stands to lose <span class='in'>80</span> children every day, it caught the world's attention. More than a dozen humanitarian organisations working in West Africa issued a joint statement, saying the ongoing conflict with the jihadist militant group Boko Haram has ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/governance/india-s-population-1-37-billion-and-not-counting-69013",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/0.35311100_1581404707_carousel-(34).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "11",
            suffix: "th",
            month: "February",
            year: "2020"
        },
        title: "India's population: <span>1.37</span> billion and not counting",
        description: "Be it a political meeting, a hot TV debate or just a healthy tea-time chat, the topic would most often veer around population. That was about four decades back. Prime Minister Narendra Modi has brought the debate back to the discussion table after he used the term “population explosion” in his Independence Day speech last year. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/right-diagnosis-wrong-pills-48434",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/18-20150215(1).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "February",
            year: "2015"
        },
        title: "Right diagnosis, wrong pills",
        description: "WITH THE hope of making healthcare affordable, the Centre on December <span class='in'>24</span> last year allowed 100 per cent foreign direct investment (FDI) in medical devices sector. The policy also recognised medical devices as a separate category for the first time which was till now a part of drugs. V K Subburaj, secretary, Department of Pharmaceuticals, says ..."
    },
    {
        href: "https://india.mongabay.com/2022/10/big-gaps-in-green-financing-could-hamper-indias-energy-transition/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/SI-Raghavan-Mettu-Pirancheri-scaled-2400x890-1665980998.jpeg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "17",
            suffix: "th",
            month: "October",
            year: "2022"
        },
        title: "Big gaps in green financing could hamper India’s energy transition",
        description: "October, a month that is typically associated with celebration and festive fervour in India, came with some unexpected news for those who track global finance. In the first week, reports said that one of the top American national banks, JPMorgan Chase & Co., has held off on including India in its global bond index, a semi-annual review of its emerging-market debt index which is a useful indicator for investors. ..."
    },
    {
        href: "https://india.mongabay.com/2022/08/rbi-gears-up-to-deal-with-climate-related-financial-risks/",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/Cropped-Reserve_Bank_of_India_RBI_building_September_2011-2400x890.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "19",
            suffix: "th",
            month: "August",
            year: "2022"
        },
        title: "RBI gears up to deal with climate-related financial risks",
        description: "In a bid to make India’s financial system resilient to climate-related risks, the Reserve Bank of India (RBI) is mulling over possible regulations. As a start, the central bank has come up with a discussion paper on climate risk and sustainable finance and has asked for feedback from concerned stakeholders about the possible regulatory system in the near future. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/weaving-trouble-49985",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/18-20150615-1.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "June",
            year: "2015"
        },
        title: "Weaving trouble",
        description: "KASHMIR'S FABLED handcrafted pashmina shawls could soon be a thing of the past. The proliferation of machine-made pashmina products has become a big threat to the livelihood of the state’s artisans who have been spinning and weaving pashmina for ages. According to the Jammu and Kashmir handicraft department, the export of pashmina shawls fell from ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/real-threats-of--virtual-world-47823",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/46-20141231.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "31",
            suffix: "st",
            month: "December",
            year: "2014"
        },
        title: "Real threats of virtual world",
        description: "It all began when he was in the <span class='in'>11</span>th standard. His inquisitive mind led him towards the Internet, and he started spending more time in front of the computer. Long hours of sitting took a toll on his health and he developed back pain. Yet the <span class='in'>16</span>-year-old boy in Pune could not stay away from the virtual world. By the end of that year, he had downloaded data worth Rs <span class='in'>12,000</span>. One day, when his mother tried ..."
    },
    {
        href: "https://india.mongabay.com/2022/07/video-can-a-waste-to-energy-plant-address-piling-concerns-from-a-landfill-site/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/banner-2-bandhwari.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "1",
            suffix: "st",
            month: "July",
            year: "2022"
        },
        title: "[Video] Can a waste-to-energy plant address piling concerns from a landfill site?",
        description: "On June <span class='in'>13</span>, the National Human Rights Commission (NHRC) issued a notice to the Haryana government regarding inaction over hazardous waste contaminating the groundwater near the Bandhwari landfill. <br> The waste dumping site, located near the Delhi and Haryana border, has been in ..."
    },
    {
        href: "https://india.mongabay.com/2022/02/sebi-proposes-regulation-of-esg-ranking-providers/",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/1280px-BSE_building_at_Dalal_Street.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "10",
            suffix: "th",
            month: "February",
            year: "2022"
        },
        title: "With plans to standardise ESG rating, India’s market regulator takes a step towards sustainable finance",
        description: "There are two emerging trends visible in the Indian capital market for the past couple of years. The first is the sharp increase in the number of retail investors and the second is the increasing demand for sustainable finance. In line with these trends, there is an emerging market of ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/shit-its-profitable-47389",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/24-20141130.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "November",
            year: "2014"
        },
        title: "Shit, it's profitable",
        description: "Farmer raj Anna has been making unprecedented profits from his farmland since the past few years. The <span class='in'>42</span>-year-old earns more than Rs <span class='in'>15</span> lakh a year. Ask him how he manages such a handsome income and he replies—through human excreta. Anna is one of the <span class='in'>1,000</span>-odd farmers in Bengaluru who have revived the lost practice of using human excreta as manure. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/food/madhya-pradesh-s-egg-centric-problem-choose-between-nutrition-and-hegemony-68366",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/down-to-earth_import_library_large_2019-12-11_0.94151700_1576070677_new.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "11",
            suffix: "th",
            month: "December",
            year: "2019"
        },
        title: "Madhya Pradesh’s egg-centric problem: Choose between nutrition and hegemony",
        description: "A strange protest is shaping up in Madhya Pradesh (MP) over the Kamal Nath government’s recent decision to provide eggs under the supplementary food programme. <br> “We plan a postcard campaign to reach each and every school and tell students to not participate in the programme on the days eggs are distributed,” said ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/access-denied-47385",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/14-20141130.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "November",
            year: "2014"
        },
        title: "Access denied",
        description: "The fight against HIV/AIDS in India is becoming tougher by the day as patients continue to face an acute shortage of antiretroviral drugs. This is an alarming situation for a country with the third-highest number of HIV+ people in the world—<span class='in'>2.1</span> million. In <span class='in'>2012</span>, about <span class='in'>140,000</span> people in India died of AIDS. Such is the demand-supply ..."
    },
    {
        href: "https://india.mongabay.com/2021/03/using-fossil-fuel-as-a-cash-cow-a-big-obstacle-in-indias-energy-transition/",
        target: "_blank",
        topic: "Energy Transition, Green Finance/Economy",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/nilima-jangid-O9h6ZoaAJN4-unsplash-scaled.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "31",
            suffix: "st",
            month: "March",
            year: "2021"
        },
        title: "Using fossil fuel as a cash cow: A big obstacle in India’s energy transition",
        description: "The Covid-<span class='in'>19</span> pandemic has laid bare the Indian government’s dependence on fossil fuels for revenue generation and this could impact the country’s plans for large-scale adoption of clean energy at a time when a ‘just’ energy-transition is crucial to address climate change. For the most part of <span class='in'>2020</span>, when the economy was in the doldrums, the rise in prices of petrol ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/work-of-friction-49720",
        target: "_blank",
        topic: "Climate Change",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/down-to-earth_import_dte_userfiles_images_24-201505-31.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "12",
            suffix: "th",
            month: "May",
            year: "2015"
        },
        title: "Work of friction",
        description: "What makes the Himalayan region a hotbed of seismic activities? The answer lies in the processes which led to the formation of the mountain range. The youngest range in the world, the Himalayas were formed due to the collision of the Indian plate with the Eurasian plate <span class='in'>40-50</span> million years ago. The Indian plate has been sliding under the Eurasian plate ever since. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/governance/the-rise-of-the-rurals-59569",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/2018-01-25_0.94308300_1516863710_p08-09dlpix-p1140735.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "25",
            suffix: "th",
            month: "January",
            year: "2018"
        },
        title: "The rise of the rurals",
        description: "By the end of May <span class='in'>2014</span>, Gujarat had stopped being a living state. It assumed an identity—almost reaching mythical levels—called the “Gujarat Model”. It fuelled over <span class='in'>800</span> million voters’ aspiration, cutting across the rural and urban segments. Expectedly, this ensured India’s first post-independence born Prime Minister Narendra Modi storming Parliament with a historic win. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/health/emergency-call-45804",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/22-20140831.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "August",
            year: "2014"
        },
        title: "Emergency call",
        description: "Kailash Jha, <span class='in'>46</span>, a resident of Purnia in Bihar, has been immobile for almost six months now. In February, while returning home from a pilgrimage to Deoghar in Jharkhand, a truck hit the vehicle he was travelling in. When Jha regained consciousness two days later, he realised a spinal cord injury had left him bed-ridden. ..."
    },
    {
        href: "https://india.mongabay.com/2021/04/covid-19-will-make-modern-energy-far-from-poor-in-india/",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Mongabay",
        imgSrc: "Images/6768393401_62fc96076b_o-1.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "27",
            suffix: "th",
            month: "April",
            year: "2021"
        },
        title: "30 years of liberalisation: Existing poor energy access may dive down further with Covid-19",
        description: "It was the year <span class='in'>1991</span> when India decided to open its economy. Hakki Bai, a five-year-old girl then, used to go to nearby forests with her mother to pick woods for fuel. Her mother would use it as firewood to prepare food for her and her father. <span class='in'>30</span>-years later, Hakki Bai, now a mother, ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/economy/covid-19-wto-pushes-long-term-agenda-of-liberalising-msmes-71564",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/1.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "4",
            suffix: "th",
            month: "June",
            year: "2020"
        },
        title: "COVID-<span>19</span>: WTO pushes long-term agenda of liberalising MSMEs",
        description: "The novel coronavirus disease (COVID-19) pandemic has bruised several sectors of the Indian economy, but the micro, small and medium enterprises (MSMEs) has been particularly badly hit. Calling for a revival, the World Trade Organization (WTO) in an information note on June <span class='in'>3</span>, <span class='in'>2020</span>, pushed ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/health/why-is-private-healthcare-opposing-the-clinical-establishments-act-59766",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/2.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "22",
            suffix: "nd",
            month: "February",
            year: "2018"
        },
        title: "Why is private healthcare opposing the Clinical Establishments Act?",
        description: "Why, after all, is the medical fraternity afraid of the Clinical Establishments (Registration and Regulation) Act? Back in <span class='in'>2010</span>, when the law, henceforth referred to as CEA, was notified, it was hailed as a model one. The law, which is applicable to all types of health establishments and all streams of medicine, ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/health/gm-flies-promise-a-good-night-45808",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/3.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "August",
            year: "2014"
        },
        title: "GM flies promise a good night",
        description: "The thought of the world being rid of mosquitoes is enough to give many a good night’s sleep. The idea is close to being a possibility. Scientists from Imperial College, London, have successfully demonstrated a genetic vector control strategy that wiped out most of the female mosquitoes in a cage. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/energy/will-new-categorisation-of-hydropower-plants-lead-to-sector-s-revival--65074",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/4.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "13",
            suffix: "th",
            month: "June",
            year: "2019"
        },
        title: "Will new categorisation of hydropower plants lead to sector's revival?",
        description: "How does one quickly increase the share of renewable energy in a country’s total energy mix? Going by the government of India, it requires a simple file order. On March <span class='in'>6</span>, the renewables sector accounted for <span class='in'>20.6</span> per cent of India’s total energy production, ..."
    },
    {
        href: "https://www.downtoearth.org.in/interviews/economy/poor-no-longer-moving-to-higher-income-bracket-pronab-sen-67523",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/5.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "31",
            suffix: "st",
            month: "October",
            year: "2019"
        },
        title: "Poor no longer moving to higher income bracket: Pronab Sen",
        description: "Kundan Pandey: Is there low demand in the economy? Pronab Sen: The demand is not low. The crisis is that the demand is not growing. For a long time, people from lower income groups were earning more and moving into the higher income bracket. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/governance/victims-of-rehabilitation-54129",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/6.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "31",
            suffix: "st",
            month: "May",
            year: "2016"
        },
        title: "Victims of rehabilitation",
        description: "In the bucolic uplands of Dhar district in Madhya Pradesh, a new chapter in the controversial Sardar Sarovar Dam is unfolding. And this one is beyond imagination. Before the displaced people of the dam could be rehabilitated, in recent months anti-dam protesters have detected a new group of displaced people. But they have been displaced not by the backwater of the reservoir but by ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/how-to-cure-corruption-in-healthcare-45570",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/38-20140815.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "31",
            suffix: "st",
            month: "July",
            year: "2014"
        },
        title: "How to cure corruption in healthcare",
        description: "Corruption in the healthcare sector is old news. Almost everybody in the country has been a victim of some form of graft or malpractice—be it inflated bills, wrong diagnosis, or substandard treatment. So it comes as little surprise when a foreigner who has worked in the Indian medical system says, “kickbacks and bribes oil every part of the Indian healthcare machinery”. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/energy/nuclear-s-unclear-leap-58190",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/7.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "3",
            suffix: "rd",
            month: "July",
            year: "2017"
        },
        title: "Nuclear's unclear leap",
        description: "For <span class='in'>12</span> years, three governments and two prime ministers invested high political and diplomatic stakes to enable foreign investment in India’s nuclear power sector. So when the Union government on May <span class='in'>17</span> decided to go indigenous and approved <span class='in'>10</span> nuclear plants to be built by the Nuclear Power Corporation of India Ltd (NPCIL), there were as many surprises as questions. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/economy/economics-of-population-61076",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/8.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "9",
            suffix: "th",
            month: "July",
            year: "2018"
        },
        title: "Economics of population",
        description: "Setting up of the Finance Commission always makes the states uneasy. For this is the constitutional mechanism to share the Central tax pool with states. But the <span class='in'>15</span>th Finance Commission has let out a paroxysm of political protests, particularly by the southern states, literarily dividing the states on north-south line. At the core of this lies a change in the base year for population figure ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/food/black-magic-54002",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/9.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "18",
            suffix: "th",
            month: "May",
            year: "2016"
        },
        title: "Revival of Kadaknath: rare breed of black chicken from Madhya Pradesh",
        description: "When Shruti Bai Parmar was elected sarpanch of Saad village last year, she had an unusual ally to thank: black chickens called Kadaknath. She says she could bear the election expense because of the profit from selling the almost extinct poultry breed endemic to Jhabua district of Madhya Pradesh. A few years earlier, Parmar had been struggling to sustain her family of five. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/delivering-safety-44037",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20140436.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "April",
            year: "2014"
        },
        title: "Delivering safety",
        description: "Lal Mohan, a daily wage labourer, has no clue what took his wife’s life. Sarita Devi, <span class='in'>25</span>, was expecting her third child, and was on way to a good hospital at Bhagalpur district in Bihar. “She was normal all through the nine months of pregnancy,” he says. “When labour pains began, we took her to a community health centre (CHC), <span class='in'>15</span> km from our house in Godda district in Jharkhand. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/nuclear-shield-for-mncs-48565",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20150228-14.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "13",
            suffix: "th",
            month: "February",
            year: "2015"
        },
        title: "Nuclear shield for MNCs",
        description: "THE CIVIL nuclear energy cooperation agreement between India and the US, announced on January <span class='in'>25</span>, was hailed as the highlight of the US President Barack Obama’s recently concluded visit. Although former prime minister of India Manmohan Singh and then US president George Bush had signed a landmark civilian nuclear deal in <span class='in'>2008</span>, the two countries could not do business because the US did not agree to ..."
    },
    {
        href: "https://www.downtoearth.org.in/interviews/economy/-centre-using-finance-commission-to-promote-its-flagship-programmes--60864",
        target: "_blank",
        topic: "Green Finance/Economy",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/10.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "June",
            year: "2018"
        },
        title: "‘Centre using finance commission to promote its flagship programmes’",
        description: "There have been controversies in the past, too, but this time the magnitude is high. The order, in which ToR is stated, definitely raises eyebrows. This is a badly drafted ToR. The constitutional requirement of FC, which is vertical and horizontal devolution of taxes, comes as third or fourth position in ToR. It should have been on the first position. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/environment/dam-the-drought-53051",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/11.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "3",
            suffix: "rd",
            month: "March",
            year: "2016"
        },
        title: "Dam the drought",
        description: "A village in Jharkhand has been hiding a secret for more than <span class='in'>30</span> years. The state government has declared all its <span class='in'>24</span> districts drought-affected. But Sato in Gumla district is an oasis of water security. In a stark contrast to villages around, farmers there grow at least two crops of paddy, wheat or maize each year. “Earlier, my family could produce only <span class='in'>400-480</span> kg of rice. Now we are producing <span class='in'>800-1,000</span> kg on our <span class='in'>1.6</span> ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/nicotine-anywhere-43624",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/18-20140315.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "28",
            suffix: "th",
            month: "February",
            year: "2014"
        },
        title: "Nicotine anywhere",
        description: "What’s the worst that could happen to India’s campaign against tobacco? Manufacturers of tobacco products join the campaign, market the idea and make a fortune selling a product which they claim helps addicts quit tobacco.<br>India’s largest tobacco product manufacturer ITC Limited did exactly that when it launched its nicotine chewing gum, KwikNic, in the last quarter of <span class='in'>2013</span>. ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/waste/govt-must-take-stock-of-piling-up-solar-panel-waste-63580",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/12.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "March",
            year: "2019"
        },
        title: "Govt must take stock of piling up solar panel waste",
        description: "A stairway to Moon can be built by simply joining the <span class='in'>24</span> billion solar photovoltaic (PV) modules that would be installed on Earth by <span class='in'>2050</span>. But there is an ominous flip side to the revolution in solar energy. A solar panel has a lifespan of <span class='in'>20-25</span> years, so what will happen to this waste and how will it be discarded? ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/governance/net-profit-52597",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/13.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "25",
            suffix: "th",
            month: "January",
            year: "2016"
        },
        title: "Net profit",
        description: "AFFLUENCE IS not a word one would normally associate with Jharkhand’s Jamukhadi village, which falls in one of India’s <span class='in'>250</span> most backward districts. But almost all the houses in the village have TV sets, computers and motorbikes. 'There were only a few pucca (brick) houses in our village till <span class='in'>2000</span> when the state was created. Today, <span class='in'>80</span> per cent of the houses are pucca,' says Rameshwar Paswan, ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/neoaddiction-43369",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/14.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "30",
            suffix: "th",
            month: "January",
            year: "2014"
        },
        title: "Neo-addiction",
        description: "ELECTRONIC or e-cigarettes are smartly marketed as a healthier alternative to smoking because they are smokeless—a liquid solution containing nicotine and flavourings is vaporised to simulate tobacco smoking in them. Recent researches, however, show that these battery-powered cigarettes are doing more harm than good by getting youngsters addicted to nicotine. The studies have also not found any ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/at-atoms-mercy-48245",
        target: "_blank",
        topic: "Energy Transition",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/56-20150531.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "January",
            year: "2015"
        },
        title: "At atom's mercy",
        description: "Every working day between <span class='in'>8</span> am and <span class='in'>6</span> pm, a placard-holding protestor stands in front of the United Nations World Health Organization’s (WHO’s) headquarters in Geneva. In the past seven years, more than <span class='in'>300</span> protestors have taken turns to maintain this vigil. They are sentinels of the international collective, Independent WHO—Health and Nuclear Power, who demand that the world’s premier ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/governance/cast-away-49742",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/14-1-201505-31.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "13",
            suffix: "th",
            month: "May",
            year: "2015"
        },
        title: "Cast away",
        description: "MOHAMMAD AMIN'S name is well-known, even five kilometres away from his village of Gulzarpora in Kashmir’s Pulwama district. One just has to ask the address 'of the sarpanch (head of the village) who was killed last year'. And out comes the story. On the night of April <span class='in'>15</span>, <span class='in'>2014</span>, four people in army uniform came at around <span class='in'>10</span> and asked Amin to guide them to militants supposedly hiding in the village. After <span class='in'>15</span> minutes, ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/muted-response-43257",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/38-20140131.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "January",
            year: "2014"
        },
        title: "Muted response",
        description: "Thirty-five-year-old James (name changed) from Meghalaya was shattered when he was diagnosed with Hepatitis C in <span class='in'>2009</span>. He got another shock when he found that the treatment, which lasts around one year, would cost over Rs <span class='in'>10,000</span> per week. Working as a counsellor with a non-profit for Rs <span class='in'>7,000</span> a month, the expense was beyond his reach. He is one of the millions of Hepatitis C patients in India. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/agriculture/land-for-ladies-44973",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20140715_55.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "29",
            suffix: "th",
            month: "June",
            year: "2014"
        },
        title: "Land for ladies",
        description: "Breaking the stereotype of rural women, <span class='in'>39</span>-year-old Suresho Saini proudly drives a tractor to plough <span class='in'>1.6</span> hectares (ha) of agricultural land in Rahimpur village in Uttar Pradesh’s Saharanpur district. The plot belongs exclusively to her. 'Women working in agricultural fields are a common sight in India; yet when we think of a farmer, we always think of a man. Even our imagination is biased. Why?' she asks, ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/discomfort-zone-41203",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20130515_40(2).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "30",
            suffix: "th",
            month: "May",
            year: "2013"
        },
        title: "Discomfort zone",
        description: "Sixty packets of sanitary napkins are far too many to distribute in a village that has <span class='in'>165</span> adolescent girls, says Sunaina Devi. It’s not that she is too lazy an accredited social health activist (ASHA) to go house to house at Konhi, her village in Bihar’s Buxar district. One packet costs Rs <span class='in'>6</span> but people want it free of cost, say ASHAs. Government provides contraceptives and foodgrain ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/agriculture/stock-option-52136",
        target: "_blank",
        topic: "Governance",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/15.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "December",
            year: "2015"
        },
        title: "Stock option",
        description: "When the eldest daughter of Rubina Begum asked for her tuition fees, Rubina was in a quandary. She and her husband work as agriculture labourers in Darjji Para village in Bangladesh’s Rangpur division. But it was August and the sowing period of paddy was over. They had little money left to pull through the lean season that continues till harvesting begins in November. Rubina approached the paddy bank in her village, ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/publics-private-peeve-40326",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/18_20130228.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "14",
            suffix: "th",
            month: "February",
            year: "2013"
        },
        title: "Public’s private peeve",
        description: "Despite protests by health activists, the Chhattisgarh government seems determined to take the private route for medical diagnostic services.<br>On January <span class='in'>31</span>, people held protests in Raipur, demanding the government scrap the public-private partnership (PPP) for radiology and laboratory services. They say it will undermine the state’s public health system and make medical ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/water/an-open-problem-58809",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/16.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "5",
            suffix: "th",
            month: "October",
            year: "2017"
        },
        title: "An open problem",
        description: "Ghana, Africa's most stable democracy and one of the fastest-growing countries on the Human Development Index, got a jolt this July when Unicef said that the country would take <span class='in'>500</span> years to become open defecation free. According to Unicef, the country loses about US $<span class='in'>79</span> million a year due to lack of access to safe sanitation.<br>The news was also ominous for Africa, because if Ghana, a rising economy, ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/health/why-india-remains-malnourished-42697",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/p22DLpix.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "15",
            suffix: "th",
            month: "November",
            year: "2013"
        },
        title: "Why India remains malnourished",
        description: "Two-and-a-half-year-old Rabina weighs <span class='in'>6.5</span> kg. A healthy child of her age should weigh at least <span class='in'>8</span> kg. But Rabina could not escape the curse of being born in Shivpuri district of Madhya Pradesh—ill-famed as one of the highly malnourished districts of the country for the past <span class='in'>30</span> years.<br>Rabina was not always so. At birth, she was healthy and weighed just right—a little more than <span class='in'>2.5</span> kg. ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/bloodless-ban-42568",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20131115_26.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "30",
            suffix: "th",
            month: "October",
            year: "2013"
        },
        title: "Bloodless ban",
        description: "Over <span class='in'>30</span> per cent maternal deaths in the country happen due to the unavailability of blood in emergency cases. A high percentage of road accident deaths also happen for the same reason.<br>Health activists believe that legalising unbanked direct blood transfusion (UDBT) can arrest the growing number of deaths because of the unavailability of blood units. Under UDBT, doctors test potential ..."
    },
    {
        href: "https://www.downtoearth.org.in/coverage/whos-to-blame-42310",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/20131015-22.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "30",
            suffix: "th",
            month: "September",
            year: "2013"
        },
        title: "WHO’s to blame?",
        description: "This defies logic. Despite rapid economic growth, India has often been placed below sub-Saharan African countries that have a very high number of malnourished children. But the government has no data to clarify its position. In the first week of September, Parliament’s Committee on Estimates criticised the government, saying: “The committee is surprised to note that in the modern era of Information and ..."
    },
    {
        href: "https://www.downtoearth.org.in/news/environment/these-three-areas-in-and-around-delhi-give-tell-tale-accounts-of-the-state-of-affairs-pan-india-65709",
        target: "_blank",
        topic: "Public Health",
        language: "English",
        publication: "Down To Earth",
        imgSrc: "Images/17.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "18",
            suffix: "th",
            month: "July",
            year: "2019"
        },
        title: "These three areas in and around Delhi give tell-tale accounts of the state of affairs pan-India",
        description: "Last year, <span class='in'>45</span>-year-old Hardwari Lal earned Rs <span class='in'>18,000</span> from the wheat he grew on his farmland. He had invested Rs <span class='in'>15,000</span> on seeds, fertilisers, and irrigation. The amount does not include labour cost. He will have to put in a similar amount on the next crop. In no way can Lal run his family of five with such a meagre annual income. ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/06/25/niti-aayog-sdg-ranking-includes-climate-related-data-but-adds-to-confusion/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/8320713187_b061fa00ba_k-2048x890.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "MONGABAY",
            day: "25",
            suffix: "",
            month: "जून",
            year: "2021"
        },
        title: "एसडीजी रैंकिंग में पर्यावरण से भी जुड़े मुद्दे पर नीति आयोग के तरीके ने बढ़ाई उलझन",
        description: "कम से कम <span class='in'>12</span> राज्यों और केंद्र शासित प्रदेशों में इक्स्ट्रीम वेदर ईवेंट जैसे बाढ़, लू, बिजली गिरने इत्यादि से या तो कोई मौत हुई नहीं है या इन राज्यों में इन मौतों की गिनती के लिए कोई व्यवस्था नहीं है। हाल ही में आई नीति आयोग की रिपोर्ट से यही बात निकलती है जबकि केंद्र सरकार के अपने आंकड़े बताते हैं कि बिहार, गोवा या झारखंड में ऐसी कई मौतें हुई हैं। ये वही राज्य हैं जिन्होंने नीति आयोग के हालिया रिपोर्ट में मौसम की मार ..."
    },
    {
        href: "https://hindi.mongabay.com/2020/12/02/control-over-poaching-led-to-increase-tiger-population-in-pilibhit/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/61a7526a-4bbc-4fc3-81d8-d37c2414bb4e-1.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "MONGABAY",
            day: "2",
            suffix: "",
            month: "दिसम्बर",
            year: "2020"
        },
        title: "उत्तरप्रदेश के पीलीभीत में जब खत्म हुए शिकारी तो तिगुना हुआ बाघ का कुनबा",
        description: "माना जाता है कि बाघ की दहाड़ करीब तीन किलोमीटर तक सुनी जा सकती है। विडंबना यह है कि अपनी बहादुरी के लिए चर्चित यह सुंदर जीव भी खतरे में है। पूरे विश्व में बाघों की संख्या घटकर कुछेक हजार पर सिमट गई है। ऐसी स्थिति कैसे आई और कैसे पुरानी स्थिति बहाल हो- इस वैश्विक समस्या और उसके समाधान का एक छोटा सा नमूना पेश करता है पीलीभीत का टाइगर रिजर्व ..."
    },
    {
        href: "https://hindi.mongabay.com/2020/12/22/pradhan-mantri-ujjwala-yojana-fails-to-introduce-clean-fuel-in-kitchen/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/IMG_20190322_174248-scaled.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "22",
            suffix: "",
            month: "दिसम्बर",
            year: "2020"
        },
        title: "सरकारी सर्वेक्षण से खुली प्रधानमंत्री उज्जवला योजना की पोल, बहुत कम इस्तेमाल हो रहा एलपीजी",
        description: "देश के प्रधानमंत्री नरेंद्र मोदी की कुछ बड़ी उपलब्धियों में ‘प्रधानमंत्री उज्जवला योजना’ की गिनती होती है। सरकार दावा करती है कि इस कार्यक्रम की मदद से देश के 98 फीसदी घरों में एलपीजी सिलेंडर उपलब्ध कराया जा चुका है। इस योजना को स्त्री सशक्तिकरण के मद्देनजर चलाए जा रहे सामाजिक आंदोलन के तौर पर भी ..."
    },
    {
        href: "https://hindi.mongabay.com/2024/03/27/crafting-a-sustainable-future-for-artisans-using-bamboo/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/Banner-image.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "27",
            suffix: "",
            month: "मार्च",
            year: "2024"
        },
        title: "बांस के जरिए कारीगरों के लिए बेहतर भविष्य बनाने की कोशिश",
        description: "ज्योत्सना देवनाथ का छोटी उम्र में पश्चिम त्रिपुरा के ब्रज नगर में नया सफर शुरू हुआ। यहां उनकी शादी हुई और वह एक ऐसे परिवार का हिस्सा बन गईं, जो बांस के उत्पाद बनाकर अपनी आजीविका चलाने के लिए जाना जाता था। उनके पति राजकुमार देवनाथ ने उन्हें कारोबार के कौशल में प्रशिक्षित किया। यानी बांस खरीदने से लेकर उत्पाद बनाने और इन्हें स्थानीय बाजार में बेचने तक। ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/01/11/part-of-heritage-gangetic-dolphin-facing-existential-threat/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/A-surfacing-Gangetic-river-dolphin.-Photo-by-Ravindra-Sinha..jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "11",
            suffix: "",
            month: "जनवरी",
            year: "2021"
        },
        title: "जिस गंगा डॉल्फिन का जिक्र पौराणिक कथाओं में उसे क्यों भूलने लगे हम",
        description: "पिछले सप्ताह एक बेचैन करने वाला विडियो वायरल हुआ जिसमें कुछ लोग एक डॉल्फिन पर लाठी, डंडे और कुल्हाड़ी जैसे हथियार से अंधाधुंध हमला करते दिखे। उसपर हमला करने वाले ये लोग उत्तर प्रदेश के प्रतापगढ़ जिले से हैं। शारदा नदी से जुड़े नहर में दिसंबर में हुए इस घटना में स्थानीय पुलिस ने अब तक तीन लोगों को गिरफ्तार कर लिया है और अन्य लोगों की तलाश जारी ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/03/04/pesa-fails-to-mark-its-existence-even-in-25-year-since-it-came-in-existence/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/53083477_2130172720352692_6037181712599875584_n-1.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "4",
            suffix: "",
            month: "मार्च",
            year: "2021"
        },
        title: "[वीडियो] पच्चीसवें साल में पेसा: ग्राम सभा को सशक्त करने के लिए आया कानून खुद कितना मजबूत!",
        description: "पेसा यानी पंचायत (अनुसूचित क्षेत्रों में विस्तार) क़ानून को आए पच्चीस साल पूरे होने वाले हैं। आदिवासी बहुल इलाकों में स्थानीय समाज को मजबूती देने के लिए लाया गया यह कानून आज खुद की प्रासंगिकता के सवालों से जूझ रहा है। ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/01/28/an-idea-mooted-to-empower-farmers-by-building-grams-remains-on-paper/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/A-woman-selling-farm-produce-in-local-haat-in-Jhabua-district-1200x800-1.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "28",
            suffix: "",
            month: "जनवरी",
            year: "2021"
        },
        title: "ग्राम: छोटे किसानों को सही दाम दिलाने के लिए तीन साल पहले लायी गयी योजना कागजों तक सीमित",
        description: "करीब दो महीने तक राजधानी की सीमा के बाहर हाड़ कंपा देने वाले सर्दी में संघर्ष करने के बाद लाखों किसानों गणतंत्र दिवस के दिन दिल्ली की सीमा में ट्रैक्टर जुलूस के साथ प्रवेश कर पाए। केंद्र सरकार द्वारा लाए गए  तीन कृषि कानूनों  का विरोध का विरोध कर रहे किसानों में से एक की मौत हो गयी और पुलिस के लाठी चार्ज में ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/03/31/using-fossil-fuel-as-a-cash-cow-a-big-obstacle-in-indias-energy-transition/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/26739688217_2e98e7b378_o-scaled-e1617181245819.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "31",
            suffix: "",
            month: "मार्च",
            year: "2021"
        },
        title: "पेट्रोल-डीजल से होती है सरकार को मोटी कमाई, फिर कैसे होगा एनर्जी ट्रांजिशन!",
        description: "हाल में हुए पेट्रोल-डीजल के दामों में बेतहाशा वृद्धि ने कई तरह के सवाल खड़े किए। तब भी पेट्रोल-डीजल के दाम बढ़े रहे जब अंतर्राष्ट्रीय बाजार में कच्चे तेल की कीमत रही। ऐसा इसलिए हुआ क्योंकि सरकार ने इसपर करीब 60% का कर लगा रखा है। इसकी वजह से बढ़ती महंगाई और पेट्रोल डीजल की कीमत के सैकड़ा छूने की तो काफी चर्चा हो रही है। लेकिन एक बात पर चर्चा नहीं हो पा रही है ..."
    },
    {
        href: "https://hindi.mongabay.com/2021/05/11/where-are-we-in-net-zero-debate/",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Mongabay",
        imgSrc: "Images/49012565232_56dcf074e5_c.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Mongabay",
            day: "11",
            suffix: "",
            month: "मई",
            year: "2021"
        },
        title: "बहस नेट जीरो की: कार्बन उत्सर्जन की लड़ाई में भारत के राज्य कहां खड़े हैं!",
        description: "संयुक्त राज्य अमेरिका के नव निर्वाचित राष्ट्रपति जो बाइडेन के आह्वान पर, अप्रैल में लगभग <span class='in'>40</span> देशों ने नेट-जीरो हासिल करने के लिए समय-सीमा की घोषणा की। भारत के प्रधानमंत्री नरेंद्र मोदी ने ऐसी कोई घोषणा तो नहीं की लेकिन उसी वर्चुअल मुलाकात में 2030 तक अक्षय क्षमता के 450 गीगावाट स्थापित करने की अपनी प्रतिबद्धता दोहराई। इन सबको देखते हुए भारत ..."
    },
    {
        href: "https://www.downtoearth.org.in/hindistory/health/communicable-disease/sufferers-then-sufferers-now-70318",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/18.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "8",
            suffix: "",
            month: "अप्रैल",
            year: "2020"
        },
        title: "महामारी से तब भी पीड़ित थे, अब भी पीड़ित हैं : कांचा इलैया",
        description: "जाने-माने लेखक, राजनीतिक विश्लेषक और कार्यकर्ता कांचा इलैया शेपहर्ड के दादा-दादी <span class='in'>1897</span> के बुबोनिक प्लेग के शिकार हुए थे। इस महामारी ने अविभाजित भारत की करीब <span class='in'>6</span> प्रतिशत आबादी को लील लिया था। कांचा को इससे जुड़ी कहानियां विरासत में मिलीं। कुंदन पांडे के साथ बातचीत में वह उनके संघर्षों और जीवित रहने की रणनीतियों को याद कर रहे हैं। ये संघर्ष और ..."
    },
    {
        href: "https://www.downtoearth.org.in/hindistory/health/women-health/doctors-mislead-women-to-get-their-uterus-removed-69745",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/0.69458100_1584007502_carousel-(39).jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "8",
            suffix: "",
            month: "मार्च",
            year: "2020"
        },
        title: "कोख की चोरी: डॉक्टरों ने हजारों महिलाओं को भ्रम में रखकर गर्भाशय निकालवाए",
        description: "जनवरी में गन्ने की कटाई के समय भरी दोपहरी में गन्ना खेत मजदूर वंदना खंडाले अपने घर पर खाली बैठी हुई है। पूछने पर कहती है कि उसके घुटनों में भयानक दर्द हो रहा है और हमेशा थकान रहती है। खेत में काम करते हुए थक जाती है और इतनी झुंझलाहट होती है कि काम करना मुश्किल हो गया है। ..."
    },
    {
        href: "https://hindi.downtoearth.org.in/wildlife-biodiversity/tribals/%E0%A4%AA%E0%A4%A5-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%BF%E0%A4%A4-63615",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/0.61456800_1548742596_17-20190215-english.jpg",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "18",
            suffix: "",
            month: "अप्रैल",
            year: "2019"
        },
        title: "सामुदायिक भूमि पर अधिकार के लिए दलितों का आंदोलन",
        description: "जनवरी की हाड़ कंपाती सर्दी और पंजाब की सुबह। करीब 5 बजे का वक्त। संगरूर जिले के बालदकलां गांव में ज्यादातर लोग नींद की गिरफ्त में थे पर बंत कौर उठ चुकी थीं। पचास की उम्र पार कर चुकीं विधवा बंत कौर हड़बड़ी में इधर-उधर दौड़कर रोजमर्रा के कामों को तेजी से निपटा रही थीं। उन्हें आठ बजे तक भैंस को खिला-पिलाकर दुहना था, खुद और पंद्रह साल के बेटे के लिए ..."
    },
    {
        href: "https://www.downtoearth.org.in/hindistory/governance//%E0%A4%86%E0%A4%9C%E0%A4%BE%E0%A4%A6%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A4%82%E0%A4%98%E0%A4%B0%E0%A5%8D%E0%A4%B7-60131",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/19.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "10",
            suffix: "",
            month: "अप्रैल",
            year: "2018"
        },
        title: "आजादी का संघर्ष",
        description: "झारखंड में इन दिनों आदिवासियों और प्रशासन के बीच शीत युद्ध जैसा माहौल है। एक तरफ गांव स्वशासन की घोषणा करते जा रहे हैं, दूसरी तरफ सरकार इसे गैरकानूनी और सख्ती से कुचलने की बात कह रही है। इस तनावपूर्ण माहौल में किसी भी दिन सरकार और आदिवासियों के बीच संघर्ष छिड़ सकता है। कुंदन पाण्डेय और भागीरथ की रिपोर्ट ..."
    },
    {
        href: "https://www.downtoearth.org.in/hindistory/health/child-health/%E0%A4%AE%E0%A4%A7%E0%A5%8D%E0%A4%AF-%E0%A4%A6%E0%A5%87%E0%A4%B6-%E0%A4%95-45-00-000-%E0%A4%95%E0%A5%81%E0%A4%AA%E0%A5%8B%E0%A4%B7%E0%A4%BF%E0%A4%A4-%E0%A4%AC%E0%A4%9A%E0%A5%8D%E0%A4%9A%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A5%80-%E0%A4%A4%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A5%80%E0%A4%B0-57608",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/20.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "17",
            suffix: "",
            month: "अप्रैल",
            year: "2017"
        },
        title: "एमपी अजब है",
        description: "जब तक मैंने मध्य प्रदेश के आदिवासी बहुल जिलों की अपनी तीन दिन कि यात्रा पूरी की तब तक मुझे इतने बच्चे कुपोषण का शिकार दिखे जो मेरी डायरी में लिखे शब्दों से कहीं अधिक थे। गांव के गांव, घर के घर और परिवार के परिवार कुपोषित! बेहद बेचैन कर देने वाली तस्वीर! जिससे भी बात करो यही बताता कि जन्म के बाद से ही बच्चा सूखने लगता है और साल भर का होते-होते मरने की स्थिति में आ जाता है। मुझे ये सारी बातें लिखने की ..."
    },
    {
        href: "https://www.downtoearth.org.in/hindistory/health/women-health/%E0%A4%B5%E0%A4%BE%E0%A4%A6%E0%A4%BE-%E0%A4%95%E0%A5%81%E0%A4%9B-%E0%A4%87%E0%A4%B0%E0%A4%BE%E0%A4%A6%E0%A4%BE-%E0%A4%95%E0%A5%81%E0%A4%9B-62162",
        target: "_blank",
        topic: " ",
        language: "Hindi",
        publication: "Down To Earth",
        imgSrc: "Images/21.avif",
        imgAlt: "Image 1",
        details: {
            publicationName: "Down To Earth",
            day: "19",
            suffix: "",
            month: "नवंबर",
            year: "2018"
        },
        title: "क्या छलावा है प्रधानमंत्री मातृ वंदन योजना?",
        description: "नाजरीन की बेटी ढाई महीने की हो चुकी है। बच्ची का जन्म सातवें महीने में ही हो गया, इस वजह से वह बेहद कमजोर नजर आ रही है। नाजरीन अपनी बच्ची के साथ उत्तर प्रदेश के गाजियाबाद स्थित एक सामुदायिक स्वास्थ्य केंद्र में डॉक्टर का इंतजार कर रही हैं। मार्च में नाजरीन ने प्रधानमंत्री मातृ वंदन योजना (पीएमएमवीवाई) के लिए पंजीकरण करवाया था। यह केंद्र सरकार की मातृ कल्याण योजना है जो गर्भवती महिलाओं और ..."
    }
];
