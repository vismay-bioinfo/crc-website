import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SLIDES_DATA = [
  { img: "/gallery/Gallery_1.jpg", alt: "Workshop", caption: "IOB and DRILS team visit to MAHE, Manipal" },
  { img: "/gallery/Gallery_2.jpg", alt: "Research", caption: "IOB team visit to MAHE, Manipal" },
  { img: "/gallery/Gallery_3.png", alt: "Team", caption: "Collaborating institutions meeting" },
  { img: "/gallery/Gallery_4.jpeg", alt: "Lab", caption: "DRILS team from Dr. Aarti Sevilimedu’s laboratory, Center for Rare Disease Models, DRILS, Hyderabad" },
  { img: "/gallery/Gallery_5.jpg", alt: "Conference", caption: "CRC team at Manipal during the 11th Annual Conference of the SMRM on Mitochondria in Health, Disease and Ageing" },
  { img: "/gallery/Gallery_6.jpg", alt: "Team", caption: "Dr. Anju Shukla’s visit to DRILS, Hyderabad" },
  { img: "/gallery/Gallery_7.jpeg", alt: "Team", caption: "IOB team visit to MAHE" },
  { img: "/gallery/Gallery_8.jpeg", alt: "Team", caption: "Dr. Anju Shukla and Dr. Aarti Sevilimedu at the 12th DBT/WT India Alliance Conclave, Hyderabad" }
];

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    /* ================= COUNTER ================= */
    const counters = document.querySelectorAll(".stat-number");

    const startCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || "";

      let count = 0;
      const increment = target / 80;

      const update = () => {
        count += increment;

        if (count < target) {
          counter.innerText = Math.floor(count).toLocaleString() + suffix;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString() + suffix;
        }
      };

      update();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(counter => {
      observer.observe(counter);
    });

    /* CLEANUP OBSERVATION */
    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================= DECLARATIVE GALLERY TIMER ================= */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].screenX;
    if (touchStart - touchEnd > 50) handleNext();
    if (touchEnd - touchStart > 50) handlePrev();
  };


  return (
    <div className="page">

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Centre for Rare Disease Diagnosis, Research and Training
          </h1>

          <div className="funding-badge">
            🟢 A DBT/Wellcome Trust India Alliance Funded Project
            <span>(Grant No. IA/CRC/20/1/600002)</span>
          </div>
        </div>
      </section>

      {/* REGISTRY BANNER */}
      <section className="registry-banner">
        <span className="pulsing-dot"></span> CRC Registry – Launching Soon
      </section>

      {/* ABOUT SECTION */}
<section className="section section-light">
  <div className="container">
    <h2>About the Centre</h2>

    <p>
      Rare diseases collectively affect an estimated 6–8% of the population, translating to nearly 70 million individuals in India. 
      Despite this significant burden, timely diagnosis and appropriate management remain major challenges due to limited awareness, 
      scarcity of trained specialists, inadequate diagnostic infrastructure, and fragmented research efforts. 
      Many individuals thus experience prolonged diagnostic odysseys, leading to delayed interventions, increased morbidity, and psychosocial distress.
    </p>

    <p>
      The Centre for Rare Disease Diagnosis, Research and Training strives to address this gap through a collaboration between three leading institutions:
      <strong> Manipal Academy of Higher Education</strong>, 
      <strong> the Institute of Bioinformatics</strong>, and 
      <strong> Dr. Reddy’s Institute of Life Sciences</strong>. 
      The Centre integrates advanced genomics and other omics technologies to enable timely and accurate diagnosis. 
      Beyond diagnosis, it investigates rare conditions at the molecular and cellular level to provide mechanistic insights using in-vitro and in-vivo model systems. 
      This integrated approach deepens understanding of rare disease biology and lays the foundation for future targeted therapies.
    </p>

    <Link to="/about" className="primary-btn">Read More →</Link>
  </div>
</section>

{/* IMPACT SECTION */}
<section className="section section-grey">
  <div className="container">

    <h2>Impact & Reach</h2>

    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-number" data-target="1368" data-suffix="+">0</div>
        <p>Families Recruited</p>
      </div>

      <div className="stat-card">
        <div className="stat-number" data-target="53.6" data-suffix="%">0</div>
        <p>Diagnostic Yield</p>
      </div>

      <div className="stat-card">
        <div className="stat-number" data-target="3498" data-suffix="+">0</div>
        <p>DNA Samples Banked</p>
      </div>

      <div className="stat-card">
        <div className="stat-number" data-target="103">0</div>
        <p>Tissue Samples Banked</p>
      </div>

      <div className="stat-card">
        <div className="stat-number" data-target="1512">0</div>
        <p>Affected Individuals</p>
      </div>

      <div className="stat-card">
        <div className="stat-number" data-target="600" data-suffix="+">0</div>
        <p>ClinVar Submissions</p>
      </div>

    </div>

  </div>
</section>

{/* VIRTUAL CENTRES */}

<section className="section section-light">
  <div className="container">
    <h2>Virtual Centres</h2>

    <div className="collab-grid">

      {/* HUB */}
      <div className="collab-hub">
        <img src="/collab/collab1.jpg" alt="CRC collaboration hub"/>
      </div>

      {/* MAHE */}
      <div className="collab-card collab-mahe">
        <div className="card-header">
          <h3>Manipal Academy of Higher Education (MAHE), Manipal</h3>
          <img className="inst-logo" src="/logos/mahe-logo.png" alt="MAHE logo"/>
        </div>

        <p>
        Established in 1953, MAHE is a multidisciplinary deemed-to-be university and an Institution of Eminence, with strengths across health sciences, engineering, management, and the social sciences. The Department of Medical Genetics at Kasturba Medical College, MAHE focuses on advancing clinical diagnosis and research in rare genetic disorders. The department provides clinical evaluation, genomic testing, genetic counselling, and management services for patients and families, contributing to both care and research.
        </p>
      </div>


      {/* IOB */}
      <div className="collab-card collab-iob">
        <div className="card-header">
          <h3>Institute of Bioinformatics (IOB), Bengaluru</h3>
          <img className="inst-logo" src="/logos/iob-logo.png" alt="IOB logo"/>
        </div>

        <p>
        Established in 2002, the IOB is a pioneering not-for-profit research organization driving excellence in computational and systems biology. IOB conducts cutting-edge research across genomics, proteomics, metabolomics, lipidomics, and bioinformatics database development. Through interdisciplinary innovation and large-scale data integration, the institute strengthens India’s global position in precision biology and data-driven biomedical discovery.
        </p>
      </div>


      {/* DRILS */}
      <div className="collab-card collab-drils">
        <div className="card-header">
          <h3>Dr. Reddy’s Institute of Life Sciences (DRILS), Hyderabad</h3>
          <img className="inst-logo" src="/logos/drils-logo.png" alt="DRILS logo"/>
        </div>

        <p>
        Founded in 2007, DRILS is a premier non-profit research institute established through a public–private partnership among Dr. Reddy’s Laboratories, the Government of Telangana, and the University of Hyderabad. Guided by a board of eminent scientists, DRILS fosters high-impact research at the interface of academia and industry. It serves as a preferred collaborative partner for the pharmaceutical and life sciences sectors, advancing innovation, translation, and capacity building in biomedical research.
        </p>
      </div>

    </div>
  </div>
</section>

{/* LEADERSHIP */}
<section className="section section-grey">
  <div className="container">

    <h2 className="section-title">Meet Our Leadership</h2>

    <div className="leader-grid">

      {/* ANJU */}
      <div className="leader-card">
        <img src="/leadership/anju.jpg" alt="Dr Anju Shukla"/>

        <h3 className="leader-name">Dr. Anju Shukla</h3>
        <p className="leader-role">Principal Investigator</p>

        <p className="leader-degree">MD, DM (Medical Genetics)</p>

        <p className="leader-title">
          Professor & Head, Department of Medical Genetics
        </p>

        <p className="leader-inst">
          Kasturba Medical College,
          Manipal Academy of Higher Education
        </p>

        <p className="leader-location">
          Manipal, Karnataka, India
        </p>

        <p className="leader-email">
          <strong> Email: </strong> <a href="mailto:anju.shukla@manipal.edu">anju.shukla@manipal.edu</a>
        </p>

        <p className="leader-desc">
          Medical genetics expert who leads the centre and is involved in patient recruitment, diagnosis, and genetic counselling.
        </p>

        <a className="leader-read" href="https://researcher.manipal.edu/en/persons/anju-shukla/" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>


      {/* AKHILESH */}
      <div className="leader-card">
        <img src="/leadership/akhilesh.jpg" alt="Dr Akhilesh Pandey"/>

        <h3 className="leader-name">Dr. Akhilesh Pandey</h3>
        <p className="leader-role">Co-Principal Investigator</p>

        <p className="leader-degree">MD, PhD</p>

        <p className="leader-title">
          Founder & Director
        </p>

        <p className="leader-inst">
          Institute of Bioinformatics
        </p>

        <p className="leader-location">
          Bangalore, Karnataka, India
        </p>

        <p className="leader-email">
          <strong> Email: </strong> <a href="mailto:pandey.akhilesh@mayo.edu">pandey.akhilesh@mayo.edu</a>
        </p>

        <p className="leader-desc">
          Pioneer in proteomics and mass spectrometry and leads multi-omics and capacity-building programs.
        </p>

        <a className="leader-read" href="https://www.ibioinformatics.org/founder_and_director.php" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>


      {/* AARTI */}
      <div className="leader-card">
        <img src="/leadership/aarti.jpg" alt="Dr Aarti Sevilimedu"/>

        <h3 className="leader-name">Dr. Aarti Sevilimedu</h3>
        <p className="leader-role">Co-Principal Investigator</p>

        <p className="leader-degree">PhD</p>

        <p className="leader-title">
          Senior Principal Research Scientist I & Research Coordinator
        </p>

        <p className="leader-inst">
          Dr. Reddy’s Institute of Life Sciences
        </p>

        <p className="leader-location">
          Hyderabad, Telangana, India
        </p>

        <p className="leader-email">
          <strong> Email: </strong> <a href="mailto:AartiS@drils.org">AartiS@drils.org</a>
        </p>

        <p className="leader-desc">
          Specialist in zebrafish disease models and leads in-vivo validation of disease-causing genes.
        </p>

        <a className="leader-read" href="https://drils.org/team/aarti-sevilimedu/" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>

    </div>

  </div>
</section>

{/* TRAINING PROGRAM */}
<section className="section section-light">
  <div className="container">

    <h2>Clinical Research Training Program</h2>

    <p>
      The Clinical Research Training Program (CRTP) is a key capacity-building initiative of the centre. It is designed to cultivate physician-scientists through a mentored research environment that enables early-career clinicians to develop strong research competencies. By drawing on the combined expertise, infrastructure, and training resources of participating institutions, the program provides structured mentorship, access to specialized facilities, and exposure to diverse research settings, supporting the development of sustained careers in clinical and public health research.
    </p>

    <Link to="/training" className="primary-btn">Read More →</Link>

  </div>
</section>

{/* GALLERY */}
<section className="section section-grey">
  <div className="container">

    <h2>Gallery</h2>

    <div 
      className="gallery-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {SLIDES_DATA.map((slide, i) => (
        <div 
          key={i} 
          className={`gallery-slide ${currentSlide === i ? "active" : ""}`}
          style={{ display: currentSlide === i ? "block" : "none", opacity: currentSlide === i ? 1 : 0 }}
        >
          <img src={slide.img} alt={slide.alt}/>
          <p className="gallery-caption">{slide.caption}</p>
        </div>
      ))}

      {/* arrows */}
      <button className="gallery-prev" onClick={handlePrev}>❮</button>
      <button className="gallery-next" onClick={handleNext}>❯</button>

      {/* dots indicator */}
      <div className="gallery-dots">
        {SLIDES_DATA.map((_, i) => (
          <span 
            key={i} 
            className={`gallery-dot ${currentSlide === i ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

    </div>

  </div>
</section>

      <Footer />

    </div>
  );
}
