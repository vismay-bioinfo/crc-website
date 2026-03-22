import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/crcregistry.css";

export default function Registry(){

return(

<div className="page">

<Navbar/>

{/* Banner */}

<section className="registry-banner">
<h1>Registry Coming Soon</h1>
<p>Registry Will Be Live Soon — Stay Tuned for Updates</p>
</section>


{/* About */}

<section className="section section-light">

<div className="container registry-container">

<h2>About the Registry</h2>

<p>
The Centre for Rare Disease Diagnosis, Research and Training is developing a 
comprehensive patient registry, a powerful resource designed to accelerate the pace 
of rare disease research in India and beyond. The registry is a secure, centralized 
database that systematically collects and organizes clinical and genomic data from the 
families who participate in our work.
</p>

<p>
Our vision is to create a valuable, controlled-access research resource that empowers researchers, clinicians, 
and healthcare professionals to make new discoveries, identify patterns in disease, and ultimately drive 
improvements in patient care and outcomes on a global scale.
</p>

</div>

</section>


{/* Data Categories */}

<section className="section section-grey">

<div className="container">

<h2>Data to Drive Discovery</h2>

<p>
  The Registry will house a rich dataset of de-identified clinical and genetic information. 
  By making this standardized data available, we aim to foster collaborative research and provide 
  the scientific community with the tools needed to investigate the complexities of rare disorders.
  </p>
  <p>
  Each registry entry will include de-identified information across the following domains:
</p>

<div className="registry-grid">

<div className="registry-card">Demographics</div>

<div className="registry-card">Genomic Details</div>

<div className="registry-card">Clinical Information</div>

<div className="registry-card">Variant Classification</div>

</div>

</div>

</section>


{/* Ethics */}

<section className="section section-light">

<div className="container">

<h2>Our Commitment to Data Privacy</h2>

<p>
  Trust is the foundation of our relationship with the patients and families who 
  partner with us. We are deeply committed to the highest standards of data security, 
  privacy, and ethical conduct. 
</p>

<div className="ethics-grid">

<div className="ethics-card">
<h3>Consent is Paramount</h3>
<p>Participation in our research and the inclusion of data in the registry is entirely voluntary. 
  Every family is taken through a detailed briefing and provides explicit written informed consent 
  before any information is collected. Families have the right to withdraw from the study at any time.</p>
</div>

<div className="ethics-card">
<h3>Protecting Patient Identity</h3>
<p>We use a process called pseudonymization to protect patient privacy. All personal identifiers 
  (such as name and other personal details) are removed from the data and replaced with a unique 
  identification number. The link between this number and the patient's personal information is held 
  in the strictest confidence and is accessible only to the core clinical team at Manipal Academy of 
  Higher Education (MAHE). This identifying information is never shared with other researchers or collaborators.</p>
</div>

<div className="ethics-card">
<h3>A Resource for Collaboration</h3>
<p>Because rare diseases are uncommon, data sharing is essential for scientific progress. 
  We welcome collaborations with researchers from India and around the world. Approved 
  researchers can be granted access to the de-identified data in our registry, helping 
  to accelerate discoveries that will benefit all patients with rare diseases.</p>
</div>

</div>

</div>

</section>


{/* Access */}

<section className="section section-grey">

<div className="container registry-container">

<h2>Who Can Access the Registry?</h2>

<p>
Access to de-identified registry data is granted to approved researchers following a 
formal review process. All data access requests are evaluated to ensure ethical use, 
scientific merit, and alignment with the Centre’s data governance and data-sharing policies.
</p>

</div>

</section>


<Footer/>

</div>

);

}