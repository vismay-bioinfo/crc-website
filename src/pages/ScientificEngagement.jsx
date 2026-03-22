import React, { useState, useMemo } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/scientificengagement.css";
import { piPresentations, teamPresentations } from "../data/globalStage";


export default function Engagement(){

  const [showAllPI, setShowAllPI] = useState(false);
  const [showAllTeam, setShowAllTeam] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const monthMap = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};


const parseMonthYear = (str) => {
  if (!str) return new Date(0);

  const match = str.match(
    /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*[^\d]*(\d{2,4})/i
  );

  if (!match) return new Date(0);

  const month = match[1].slice(0, 3);
  const year = match[2].length === 2 ? `20${match[2]}` : match[2];

  return new Date(year, monthMap[month]);
};

const sortedPI = useMemo(() => {
  return [...piPresentations].sort((a, b) =>
    parseMonthYear(b.date) - parseMonthYear(a.date)
  );
}, [piPresentations]);

const sortedTeam = useMemo(() => {
  return [...teamPresentations].sort((a, b) =>
    parseMonthYear(b.date) - parseMonthYear(a.date)
  );
}, [teamPresentations]);


return(

<div className="page">

<Navbar/>

{/* HERO */}

<section className="engagement-hero">

<div className="container">

<h1>Connecting Communities, Sharing Knowledge</h1>

<p>
The centre’s mission extends beyond the laboratory and clinic. 
We are committed to fostering a vibrant ecosystem for rare disease 
research and care by actively engaging with scientists, clinicians, 
patient communities, and the public. Through conferences, workshops, 
public outreach activities, and digital initiatives, we aim to share 
knowledge, build collaborations, and highlight the importance of rare 
disease research in India
</p>

</div>

</section>


{/* ================= SCIENTIFIC EVENTS ================= */}

<section className="section section-light">

<div className="container">

<h2>Scientific Events</h2>

<div className="event-block">

<h3>Rare Disease Research Summit</h3>

<p className="event-meta">
February 28, 2023 | Dr. Reddy’s Institute of Life Sciences, Hyderabad
</p>

<p>
An interdisciplinary gathering that fostered innovation in rare disease research 
through invited talks and poster sessions, encouraging dialogue across clinical 
and basic science disciplines
</p>

<div className="event-gallery">

<img src="/scientificengagement/Scientific_Event_1.1.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Scientific_Event_1.2.png" onClick={(e) => setLightboxImg(e.target.src)}/>

</div>

</div>


<div className="event-block">

<h3>Manipal Genetics Update VII</h3>

<p className="event-meta">
January 18–20, 2024 | Manipal
</p>

<p>
An international conference with over 200 participants, 
focusing on cellular and animal models for rare genetic disorders, 
and featuring national and international experts in medical genetics research
</p>

<div className="event-gallery">

<img src="/scientificengagement/Scientific_Event_2.1.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Scientific_Event_2.2.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Scientific_Event_2.3.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>

</div>

</div>


<div className="event-block">

<h3>SMRM Conference</h3>

<p className="event-meta">
October 9–11, 2025 | Manipal
</p>

<p>
Co-hosted by the Department of Medical Genetics, Kasturba Medical College, 
Manipal Academy of Higher Education, this conference on “Mitochondria in Health, 
Disease and Ageing” brought together approximately 160 participants and 32 invited 
speakers, including 10 international experts, representing diverse areas of mitochondrial research
</p>

<div className="event-gallery">

<img src="/scientificengagement/Scientific_Event_3.1.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Scientific_Event_3.2.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>

</div>

</div>

</div>

</section>



{/* ================= AWARENESS ================= */}

<section className="section section-grey">

<div className="container">

<h2>Raising Awareness</h2>
<p>
  Public engagement is essential to improve understanding of genetic disorders, 
  address social stigma, and build a supportive community for patients and their 
  families. The centre actively designs and participates in outreach initiatives 
  that bring the science of medical genetics directly to the communities it serves
</p>
<div className="event-block">

<h3>Open Day – Department of Medical Genetics</h3>

<p className="event-meta">
May 25, 2024 | Manipal
</p>

<p>
An open invitation for the public to explore laboratory facilities, 
interact with researchers and clinicians, and learn about ongoing work 
in rare disease diagnosis and research
</p>

<div className="event-gallery">

<img src="/scientificengagement/Raising_Awareness_1.1.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Raising_Awareness_1.2.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Raising_Awareness_1.3.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>

</div>

</div>


<div className="event-block">

<h3>Rare Disease Day 2025</h3>

<p className="event-meta">
February 27, 2025 | Manipal
</p>

<p>
A public street play designed to raise awareness about recognizing the symptoms 
of rare diseases, reaching out to an expert, misconceptions around consanguinity, 
the importance of genetic counselling, and the role of family support systems for 
affected individuals
</p>

<div className="event-gallery">

<img src="/scientificengagement/Raising_Awareness_2.1.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Raising_Awareness_2.3.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>
<img src="/scientificengagement/Raising_Awareness_2.4.jpg" onClick={(e) => setLightboxImg(e.target.src)}/>

</div>

</div>

</div>

</section>



{/* ================= DIGITAL SHARING ================= */}

{/* ================= SHARING KNOWLEDGE ================= */}

<section className="section section-light">

<div className="container">

<h2>Sharing Knowledge</h2>

<p className="section-intro">
The centre leverages digital platforms to extend its reach to a global
audience of researchers, students, healthcare professionals and families.
This section archives recordings, interviews and educational resources
from online engagements
</p>


{/* EVENT 1 */}

<div className="event-block">

<h3>Webinar: Insights from Dr. Anju Shukla on Rare Genetic Disorders</h3>

<p className="event-meta">
August 13, 2024
</p>

<p>
A webinar featuring Dr. Anju Shukla, focusing on the diagnosis and management 
of rare genetic disorders and the critical role of genetic counselling
</p>

<div className="video-frame">

<iframe
src="https://www.youtube.com/embed/pvaQcP0WMWM"
title="Rare Genetic Disorders Webinar"
allowFullScreen
/>

</div>

</div>


{/* EVENT 2 */}

<div className="event-block">

<h3>Namma TV Interview: Dr. Vivekananda Bhat on Rare Diseases</h3>

<p className="event-meta">
September 13, 2025
</p>

<p>
A televised discussion covering rare disease identification,
prevalence and the role of prenatal testing in early diagnosis
</p>

<div className="video-frame">

<iframe
src="https://www.youtube.com/embed/cGpatp0q3tk"
title="Rare Diseases Interview"
allowFullScreen
/>

</div>

</div>


{/* EVENT 3 */}

<div className="event-block">

<h3>"Genome Diaries" — IIT Madras Shaastra Magazine</h3>

<p className="event-meta">
September 2025
</p>

<p>
An article featuring Dr. Anju Shukla’s perspectives on how research 
in India is transforming rare disease diagnosis and care
</p>
<div className="single-image">
  <img src="/scientificengagement/genome_diaries.png"/>
</div>
<a
className="resource-link"
href="https://www.shaastramag.iitm.ac.in/lead-story/genome-diaries"
target="_blank"
>
Read Article
</a>

</div>


{/* EVENT 4 */}

<div className="event-block">

<h3>10 Women, 10 Questions – Dr. Aarti Sevilimedu</h3>

<p className="event-meta">
IndiaBioscience | November 15, 2025
</p>

<p>
An interview highlighting Dr. Aarti Sevilimedu’s career journey and
contributions to rare disease research
</p>
<div className="single-image">
  <img src="/scientificengagement/10womens.webp"/>
</div>
<a
className="resource-link"
href="https://indiabioscience.org/columns/education/10-women-10-questions-aarti-sevilimedu"
target="_blank"
>
Read Interview
</a>

</div>


</div>

</section>



{/* ================= GLOBAL STAGE ================= */}

<section className="section section-grey">

<div className="container">

<h2>Research on the Global Stage</h2>
<p>
  This section serves as an archive of scientific posters and oral presentations 
  delivered by centre members at national and international conferences, showcasing 
  ongoing research and fostering global scientific exchange
</p>

<h3 className="table-title">By PIs & Collaborators</h3>

<div className="table-wrapper">

<table className="engagement-table">

<thead>
<tr>
<th>Presenter</th>
<th>Title</th>
<th>Event</th>
<th>Place</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{(showAllPI ? sortedPI : sortedPI.slice(0,5)).map((item, i) => (

<tr key={i}>
<td className="col-presenter">{item.presenter}</td>
<td className="col-title">{item.title}</td>
<td className="col-event">{item.event}</td>
<td className="col-place">{item.place}</td>
<td className="col-date">{item.date}</td>
</tr>

))}

</tbody>

</table>

</div>

{sortedPI.length > 5 && (
<button
className="view-more-btn"
onClick={() => setShowAllPI(!showAllPI)}
>
{showAllPI ? "Show Less" : `View More (${sortedPI.length})`}
</button>
)}


<h3 className="table-title">By Team</h3>
<div className="table-wrapper">

<table className="engagement-table">

<thead>
<tr>
<th>Presenter</th>
<th>Title</th>
<th>Event</th>
<th>Place</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{(showAllTeam ? sortedTeam : sortedTeam.slice(0,5)).map((item, i) => (

<tr key={i}>
<td className="col-presenter">{item.presenter}</td>
<td className="col-title">{item.title}</td>
<td className="col-event">{item.event}</td>
<td className="col-place">{item.place}</td>
<td className="col-date">{item.date}</td>
</tr>

))}

</tbody>

</table>

</div>

{sortedTeam.length > 5 && (
<button
className="view-more-btn"
onClick={() => setShowAllTeam(!showAllTeam)}
>
{showAllTeam ? "Show Less" : `View More (${sortedTeam.length})`}
</button>
)}

</div>

</section>

{lightboxImg && (
  <div className="lightbox" onClick={() => setLightboxImg(null)}>
    
    <span className="lightbox-close">&times;</span>

    <img 
      src={lightboxImg} 
      alt="preview" 
      className="lightbox-img"
      onClick={(e) => e.stopPropagation()}  // prevents closing when clicking image
    />

  </div>
)}

<Footer/>

</div>

)

}