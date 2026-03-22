import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/about.css";

export default function About() {

return (
<div className="page">
  <Navbar />


{/* ================= ABOUT INTRO ================= */}

<section className="section section-grey">

<div className="container about-container">

<h1>About the Centre</h1>

<p>
Rare diseases, most of which have a genetic basis, affect millions of individuals in India, 
posing a significant yet under-recognized public health challenge. The Center for Rare Disease Diagnosis, 
Research, and Training is a multi-institutional initiative established to address these challenges through 
an integrated program of clinical research, molecular investigation, and capacity building.
</p>

<p>
Our interdisciplinary team comprises clinicians with expertise in medical genetics, scientists 
experienced in cellular and molecular biology and multi-omics technologies, and computational 
biologists specializing in genomic data analysis. The centre establishes and sustains well-characterized 
patient cohorts and a biorepository, employing next-generation sequencing to identify genomic alterations 
associated with rare diseases. Functional validation of identified variants is carried out using cellular 
and animal models, coupled with transcriptomic, proteomic, and metabolomic analyses to elucidate disease mechanisms.
</p>

<p>
The centre aims to accelerate rare disease diagnosis, uncover novel disease–gene relationships, 
resolve variants of uncertain significance, and expand understanding of pathogenic mechanisms 
underlying newly described disorders. In parallel, it contributes to the creation of a rare disease 
registry and provides rigorous training for clinicians and scientists in genomic diagnosis and 
translational research. Dedicated initiatives such as the physician-scientist training program 
and a doctoral training track ensure sustained development of skilled professionals in rare disease 
research beyond the project’s funding period.
</p>

</div>
</section>


{/* ================= AIMS ================= */}

<section className="section section-light">

<div className="container">

<h2>Aims & Objectives </h2>

<div className="aim-grid">

<div className="aim-card">
<span>1</span>
<p>
  To establish a local clinical cohort and biorepository for rare genetic disorders
</p>
</div>

<div className="aim-card">
<span>2</span>
<p>
  To deploy whole exome sequencing, whole genome sequencing, and RNA sequencing to discover potential disease-causing variants
</p>
</div>

<div className="aim-card">
<span>3</span>
<p>
  To functionally characterize causal genes and variants in cells and model organisms through in vitro assays, proteomics, metabolomics, and lipidomics approaches to understand the potential disease mechanisms
</p>
</div>

<div className="aim-card">
<span>4</span>
<p>
  To establish a research-training program focused on rare diseases for physician-scientists (Clinical Research Training Program), scientists, and genetic counselors, integrating clinical and laboratory sciences
</p>
</div>

</div>

</div>
</section>


{/* ================= WORKFLOW ================= */}

<section className="section section-grey">

<div className="container">

<h2>Project Workflow</h2>

<img
src="/about_us/workflow.png"
alt="Rare disease workflow"
className="workflow-image"
/>

</div>

</section>


{/* ================= ADVISORY BOARD ================= */}

<section className="section section-light">

  <div className="container">

    <h2>Scientific Advisory Board</h2>

    <div className="sab-grid">

      <div className="sab-card">
        <h3>Dr. Shubha Phadke</h3>
        <p className="sab-role">Professor</p>
        <p>Department of Medical Genetics</p>
        <p>Bharati Vidyapeeth Deemed University</p>
        <p className="sab-location">Pune, India</p>
      </div>

      <div className="sab-card">
        <h3>Prof. Kerstin Kutsche</h3>
        <p className="sab-role">Professor</p>
        <p>Institute of Human Genetics</p>
        <p>University Medical Centre Hamburg-Eppendorf</p>
        <p className="sab-location">Germany</p>
      </div>

      <div className="sab-card">
        <h3>Dr. Madhulika Kabra</h3>
        <p className="sab-role">Emeritus Scientist</p>
        <p>Indian Council of Medical Research</p>
        <p className="sab-location">New Delhi, India</p>
      </div>

      <div className="sab-card">
        <h3>Dr. Kumarasamy Thangaraj</h3>
        <p className="sab-role">CSIR Bhatnagar Fellow</p>
        <p>CSIR-Centre for Cellular and Molecular Biology</p>
        <p className="sab-location">Hyderabad, India</p>
      </div>

    </div>

  </div>

</section>


{/* ================= COLLABORATORS ================= */}

<section className="section section-grey">

<div className="container">

<h2>Collaborators</h2>

{/* MAHE */}
<div className="collab-group">

<h3 className="collab-inst">
Manipal Academy of Higher Education (MAHE)
</h3>

<div className="collab-people">

<div className="person-card">
<h4>Dr. Shalini Nayak</h4>
<p className="person-role">Associate Professor</p>
<p>Department of Medical Genetics</p>
<p>Kasturba Medical College, MAHE</p>
<p className="person-location">Manipal, India</p>
</div>

<div className="person-card">
<h4>Dr. Vivekananda Bhat</h4>
<p className="person-role">Assistant Professor</p>
<p>Department of Medical Genetics</p>
<p>Kasturba Medical College, MAHE</p>
<p className="person-location">Manipal, India</p>
</div>

<div className="person-card">
<h4>Dr. Purvi Majethia</h4>
<p className="person-role">Assistant Professor</p>
<p>Department of Medical Genetics</p>
<p>Kasturba Medical College, MAHE</p>
<p className="person-location">Manipal, India</p>
</div>

<div className="person-card">
<h4>Dr. Sanjiban Chakrabarty</h4>
<p className="person-role">Associate Professor</p>
<p>Department of Public Health Genomics</p>
<p>Manipal School of Life Sciences</p>
<p className="person-location">Manipal, India</p>
</div>

</div>
</div>


{/* IOB */}
<div className="collab-group">

<h3 className="collab-inst">
Institute of Bioinformatics (IOB)
</h3>

<div className="collab-people">

<div className="person-card">
<h4>Dr. Anikha Bellad</h4>
<p className="person-role">Faculty Scientist</p>
<p>Institute of Bioinformatics</p>
<p className="person-location">Bangalore, Karnataka, India</p>
</div>

<div className="person-card">
<h4>Dr. Vishalakshi Nanjappa</h4>
<p className="person-role">Faculty Scientist</p>
<p>Institute of Bioinformatics</p>
<p className="person-location">Bangalore, Karnataka, India</p>
</div>

</div>
</div>


{/* DRILS */}
<div className="collab-group">

<h3 className="collab-inst">
Dr. Reddy's Institute of Life Sciences (DRILS)
</h3>

<div className="collab-people">

<div className="person-card">
<h4>Dr. Kiranam Chatti</h4>
<p className="person-role">Senior Principal Research Scientist – II & Head – CARS</p>
<p>Dr. Reddy's Institute of Life Sciences</p>
<p className="person-location">Hyderabad, Telangana, India</p>
</div>

<div className="person-card">
<h4>Dr. Kishore Parsa</h4>
<p className="person-role">Senior Principal Research Scientist – II & Head – CIMPS</p>
<p>Dr. Reddy's Institute of Life Sciences</p>
<p className="person-location">Hyderabad, Telangana, India</p>
</div>

</div>
</div>

</div>
</section>


{/* ================= FOOTER ================= */}

<footer className="footer">

<p>
© 2026 Centre for Rare Diseases  
<br/>
Manipal Academy of Higher Education
</p>

</footer>
</div>

);
}

