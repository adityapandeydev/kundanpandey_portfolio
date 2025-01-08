const articles = [
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
