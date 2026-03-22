import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/training.css";

export default function Training() {

return (

<div className="page">

<Navbar />

{/* HERO */}

<section className="training-hero">

<div className="container">

<h1>Training & Capacity Building</h1>

<p>
A core pillar of the centre’s mission is to cultivate a new generation of scientists and clinicians 
equipped to address the challenges of rare diseases in India. The centre is committed to building a 
self-sustaining ecosystem of expertise through comprehensive, interdisciplinary training programs. 
By providing hands-on exposure to advanced diagnostics, genomic technologies, and patient-centred research, 
these initiatives empower professionals to lead the future of translational medicine and strengthen the clinical 
research landscape for years to come.
</p>

</div>

</section>


{/* CRTP PROGRAM */}

<section className="section section-light">

<div className="container training-text">

<h2>The Clinical Research Training Program</h2>

<p>
The Clinical Research Training Program (CRTP) is part of the Clinical/Public Health Research Centre (CRC) 
grant supported by the DBT/Wellcome Trust India Alliance. The program offers 3–4-year mentored research 
fellowships for medical graduates and postgraduates, with the goal of building capacity for clinician-led 
research in basic, clinical, and public health domains. 
</p>

<p>
CRTP Fellows work across collaborating units within the centre, 
gaining access to diverse clinical environments and laboratory facilities. 
The program encourages cross-institutional engagement and international collaboration 
when needed and requires fellows to pursue a PhD through their host institution, ensuring 
rigorous academic training alongside translational research experience.
</p>

</div>

</section>


{/* FELLOWS */}

<section className="section section-grey">

<div className="container">

<h2>Meet Our CRTP Fellows</h2>

<p>
  Our CRTP Fellows are talented clinicians from leading institutions across India, 
  each pursuing doctoral research focused on critical question in rare disease biology and diagnostics.
</p>
<div className="fellows-grid">


{/* Fellow 1 */}

<div className="fellow-card">

<img src="/training/Dr_Aakanksha_Anand.png" alt="Dr Aakanksha Anand" />

<h3>Dr. Aakanksha Anand</h3>

<p className="fellow-role">
CRTP Fellow & PhD Scholar, MAHE
</p>

<p className="fellow-bio">
A pediatrician from Lady Hardinge Medical College (LHMC), New Delhi, Dr. Aakanksha's 
research focuses on mitochondrial disorders. She works to validate novel variants in model 
systems as well as identify new disease-gene associations to advance diagnostic accuracy and 
explore potential therapeutic avenues.
</p>

</div>


{/* Fellow 2 */}

<div className="fellow-card">

<img src="/training/Dr_Gunveen_Sachdeva.png" alt="Dr Gunveen Sachdeva" />

<h3>Dr. Gunveen S. Sachdeva</h3>

<p className="fellow-role">
CRTP Fellow & PhD Scholar, Institute of Bioinformatics
</p>

<p className="fellow-bio">
A pathologist from Armed Forces Medical College (AFMC), Pune, Dr. Gunveen's research is 
focused on investigating the glycoproteome in congenital disorders of glycosylation using 
highly sensitive mass spectrometry
</p>

</div>


{/* Fellow 3 */}

<div className="fellow-card">

<img src="/training/Dr_Md_Yasir.png" alt="Dr Yasir" />

<h3>Dr. Md. Yasir</h3>

<p className="fellow-role">
CRTP Fellow & PhD Scholar, Institute of Bioinformatics
</p>

<p className="fellow-bio">
A medical biochemist from Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), 
Puducherry, Dr. Yasir's research focuses on neurodegenerative and neurometabolic diseases, aiming to 
integrate mass spectrometry-based 'omics' with clinical genetics to enhance rare disease diagnostics
</p>

</div>


{/* Fellow 4 */}

<div className="fellow-card">

<img src="/training/Dr_Janani_R.png" alt="Dr Janani" />

<h3>Dr. Janani R</h3>

<p className="fellow-role">
CRTP Fellow & PhD Scholar, Institute of Bioinformatics
</p>

<p className="fellow-bio">
CRTP Fellow & PhD Scholar, Institute of Bioinformatics, Bangalore
A medical biochemist from the Lady Hardinge Medical College (LHMC), New Delhi, Dr. Janani's doctoral research focuses on applying mass spectrometry-based approaches to 
characterize inherited metabolic disorders.

</p>

</div>


{/* Fellow 5 */}

<div className="fellow-card">

<img src="/training/Dr_A_V_Nandakumar.png" alt="Dr. A V Nandakumar" />

<h3>Dr. A V Nandakumar</h3>

<p className="fellow-role">
CRTP Fellow & PhD Scholar, Institute of Bioinformatics
</p>

<p className="fellow-bio">
A graduate of Government Medical College, Kottayam, Dr. Nandakumar's PhD research focuses on rare genetic disorders,
 with a special emphasis on congenital disorders of glycosylation.
</p>

</div>


</div>

</div>

</section>


{/* BROADER TRAINING */}

<section className="section section-light">

<div className="container training-text">

<h2>Broader Training Ecosystem</h2>

<p>
Beyond CRTP, the Centre serves as a hub for training a wide range of 
scientific and clinical professionals. This includes PhD students, research fellows, 
postdoctoral researchers, laboratory technicians, master students and bioinformaticians 
across all three partner institutions, fostering an interdisciplinary and collaborative learning environment.
</p>

<p>
Through integrated exposure to clinical evaluation, genomic technologies,
bioinformatics analysis and laboratory-based functional studies,
trainees develop comprehensive expertise in rare disease research and
diagnosis.
</p>

</div>

</section>


{/* TRAINEES TABLES */}

<section className="section section-grey">

<div className="container">

<h2>Trainees Across the Centres</h2>

<p>
  The center plays a pivotal role in capacity building by providing structured, 
  hands-on training to PhD students, research fellows, postdoctoral researchers, 
  laboratory technicians, master students, and bioinformaticians across all three partner 
  institutions. Through integrated exposure to clinical evaluation, advanced genomic technologies, 
  bioinformatics analysis, and laboratory-based functional studies, trainees gain comprehensive expertise 
  in rare disease research and diagnosis. By actively participating in ongoing research projects, case 
  discussions, data analysis, and technology-driven workflows, trainees develop both technical competence 
  and translational insight, thereby strengthening the skilled workforce required for sustainable rare disease 
  research and clinical implementation.

</p>



</div>

</section>


{/* TRAINEES TABLES */}

<section className="section section-grey">

<div className="container">

{/* ================= POSTDOC ================= */}

<h3 className="table-title">Postdoctoral Fellows</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* MAHE */}

<tr><td>Dr. Gargee Das</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Dr. Amit Jairaman</td><td>2022</td><td>2023</td><td>MAHE</td></tr>
<tr><td>Dr. M. Jeevan Kumar</td><td>2021</td><td>2024</td><td>MAHE</td></tr>
<tr><td>Dr. Debasish Kumar Ghosh</td><td>2021</td><td>2022</td><td>MAHE</td></tr>

{/* IOB */}

<tr><td>Dr. Madan Gopal Ramarajan</td><td>2021</td><td>2025</td><td>IOB</td></tr>
<tr><td>Dr. Jisha Chandran</td><td>2021</td><td>2024</td><td>IOB</td></tr>
<tr><td>Dr. Anikha Bellad</td><td>2021</td><td>2024</td><td>IOB</td></tr>

{/* DRILS */}

<tr><td>Dr. Kailash Chand</td><td>2021</td><td>2023</td><td>DRILS</td></tr>

</tbody>

</table>


{/* ================= BIOINFORMATICS ================= */}

<h3 className="table-title">Bioinformaticians</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* MAHE */}

<tr><td>Mr. Huzail Shaikh</td><td>2024</td><td>Present</td><td>MAHE</td></tr>

{/* IOB */}

<tr><td>Ms. K T Shreya Parthasarathi</td><td>2021</td><td>Present</td><td>IOB</td></tr>
<tr><td>Dr. Jyoti Sharma</td><td>2020</td><td>Present</td><td>IOB</td></tr>

</tbody>

</table>


{/* ================= RESEARCH ASSOCIATES ================= */}

<h3 className="table-title">Research Associates</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* DRILS */}

<tr><td>Mr. Mahanti Vasu</td><td>2024</td><td>2025</td><td>DRILS</td></tr>
<tr><td>Ms. Pragya Agarwal</td><td>2023</td><td>2024</td><td>DRILS</td></tr>
<tr><td>Ms. Banvathu Deepthi Naik</td><td>2023</td><td>2023</td><td>DRILS</td></tr>

</tbody>

</table>


{/* ================= LAB TECHNICIANS ================= */}

<h3 className="table-title">Lab Technicians</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* MAHE */}

<tr><td>Mr. Rohith Naik</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Sapna Shettigar</td><td>2023</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Rashmi R.</td><td>2021</td><td>2024</td><td>MAHE</td></tr>
<tr><td>Ms. Sruthy Xavier</td><td>2021</td><td>2022</td><td>MAHE</td></tr>

</tbody>

</table>

{/* ================= JUNIOR RESEARCH FELLOWS ================= */}

<h3 className="table-title">Junior Research Fellows</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* MAHE */}

<tr><td>Ms. Shobika Kulandasamy</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Tanvi Kottat</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Namanpreet Kaur</td><td>2024</td><td>2024</td><td>MAHE</td></tr>
<tr><td>Ms. V. Meher Mounika</td><td>2023</td><td>2024</td><td>MAHE</td></tr>
<tr><td>Ms. Sruthy Xavier</td><td>2022</td><td>2023</td><td>MAHE</td></tr>
<tr><td>Mr. Akhil K A</td><td>2021</td><td>2024</td><td>MAHE</td></tr>
<tr><td>Ms. Harleen Kaur</td><td>2021</td><td>2022</td><td>MAHE</td></tr>

{/* DRILS */}

<tr><td>Ms. Divya Deepak Jamdar</td><td>2024</td><td>Present</td><td>DRILS</td></tr>
<tr><td>Ms. Senjuti Sengupta</td><td>2023</td><td>2024</td><td>DRILS</td></tr>
<tr><td>Ms. Hamsini Sekhar</td><td>2022</td><td>2025</td><td>DRILS</td></tr>
<tr><td>Ms. Hamsini Sekar</td><td>2022</td><td>2024</td><td>DRILS</td></tr>
<tr><td>Ms. Atchaya R</td><td>2021</td><td>2022</td><td>DRILS</td></tr>

</tbody>

</table>



{/* ================= PHD STUDENTS ================= */}

<h3 className="table-title">PhD Students</h3>

<table className="training-table">

<thead>
<tr>
<th>Name*</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
</tr>
</thead>

<tbody>

{/* MAHE */}

<tr><td>Ms. Selinda Mascarenhas</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Karni Kriti Goyal</td><td>2024</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Vaishnavi Ashok Badiger</td><td>2022</td><td>Present</td><td>MAHE</td></tr>
<tr><td>Ms. Swati Singh</td><td>2019</td><td>2025</td><td>MAHE</td></tr>
<tr><td>Ms. Shruti Pande</td><td>2019</td><td>2023</td><td>MAHE</td></tr>

{/* IOB */}

<tr><td>Ms. Lavanya Thontadharya</td><td>2025</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Maduri Padma Peruru</td><td>2025</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Leela Sairam Andhela</td><td>2025</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Shweta Mahalingam</td><td>2024</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Radhika Kawathe</td><td>2023</td><td>Present</td><td>IOB</td></tr>
<tr><td>Mr. Vishnu N. Radhakrishnan</td><td>2023</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Saniha Sabu</td><td>2022</td><td>Present</td><td>IOB</td></tr>
<tr><td>Mr. Omkar S. Khade</td><td>2022</td><td>Present</td><td>IOB</td></tr>
<tr><td>Ms. Prachi S. Oza</td><td>2022</td><td>Present</td><td>IOB</td></tr>
<tr><td>Mr. Vivek Ghose</td><td>2019</td><td>Present</td><td>IOB</td></tr>

{/* DRILS */}

<tr><td>Ms. Christopher Shamir M</td><td>2021</td><td>Present</td><td>DRILS</td></tr>

</tbody>

</table>



{/* ================= OTHERS ================= */}

<h3 className="table-title">Others</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
<th>Designation</th>
</tr>
</thead>

<tbody>

<tr>
<td>Ms. Nikitha S</td>
<td>2025</td>
<td>2025</td>
<td>MAHE</td>
<td>Project Manager</td>
</tr>

</tbody>

</table>



{/* ================= INSTITUTIONAL SUPPORT STAFF ================= */}

<h3 className="table-title">Institutional Support Staff</h3>

<table className="training-table">

<thead>
<tr>
<th>Name</th>
<th>Year of Joining</th>
<th>Year of Relieving</th>
<th>Institute</th>
<th>Designation</th>
</tr>
</thead>

<tbody>

<tr>
<td>Mr. Vismay Bidwaik</td>
<td>2024</td>
<td>Present</td>
<td>MAHE</td>
<td>Research Assistant</td>
</tr>

<tr>
<td>Mr. Koushik Shetty</td>
<td>2024</td>
<td>2025</td>
<td>MAHE</td>
<td>Research Assistant</td>
</tr>

</tbody>

</table>


</div>

</section>
<Footer />
</div>

);

}