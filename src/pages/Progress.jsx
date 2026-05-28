import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/progress.css";

export default function Progress() {
  return (
    <div className="page">
      <Navbar />

      {/* ================= SECTION 1: COHORT & BIOREPOSITORY ================= */}
      <section className="section section-grey">
        <div className="container progress-content">
          
          <div className="section-header-box">
            <h2>Clinical Cohort & Biorepository Enrollment</h2>
            <p className="section-description">
              A large-scale, clinically well-characterized cohort established through systematic 
              recruitment across partnering medical genetics institutions.
            </p>
          </div>

          {/* Headline Counters */}
          <div className="dashboard-stats-grid">
            <div className="stat-card accent-purple">
              <div className="stat-icon">👥</div>
              <div className="stat-number">1,368</div>
              <div className="stat-label">Unrelated Families Recruited</div>
            </div>
            <div className="stat-card accent-blue">
              <div className="stat-icon">🧬</div>
              <div className="stat-number">1,512</div>
              <div className="stat-label">Affected Individuals (inc. 34 foetuses)</div>
            </div>
            <div className="stat-card accent-green">
              <div className="stat-icon">🧪</div>
              <div className="stat-number">103</div>
              <div className="stat-label">Tissue Specimens Collected</div>
            </div>
          </div>

          {/* Demographics Visualization Grid */}
          <div className="dashboard-row">
            
            {/* Circular Gauges */}
            <div className="dashboard-panel panel-flex-center">
              <h3>Cohort Features</h3>
              <div className="gauges-wrapper">
                
                {/* Gauge 1: Consanguinity */}
                <div className="gauge-box">
                  <div className="svg-ring-container">
                    <svg className="svg-ring" viewBox="0 0 120 120">
                      <circle className="ring-bg" cx="60" cy="60" r="50" />
                      <circle className="ring-fill consang-gold" cx="60" cy="60" r="50" style={{ strokeDashoffset: `${314.16 * (1 - 0.64)}` }} />
                    </svg>
                    <div className="ring-value">64%</div>
                  </div>
                  <div className="ring-label">Consanguinity Rate</div>
                  <p className="ring-detail">873 Families</p>
                </div>

                {/* Gauge 2: Age Breakdown */}
                <div className="gauge-box">
                  <div className="svg-ring-container">
                    <svg className="svg-ring" viewBox="0 0 120 120">
                      <circle className="ring-bg" cx="60" cy="60" r="50" />
                      <circle className="ring-fill age-purple" cx="60" cy="60" r="50" style={{ strokeDashoffset: `${314.16 * (1 - 0.76)}` }} />
                    </svg>
                    <div className="ring-value">76%</div>
                  </div>
                  <div className="ring-label">Pediatric / Foetuses</div>
                  <p className="ring-detail">1,153 Individuals</p>
                </div>

              </div>
            </div>

            {/* Demographics Bar Chart Lists */}
            <div className="dashboard-panel">
              <h3>Detailed Demographics</h3>
              
              {/* Age distribution */}
              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>Pediatric & Foetuses (&lt; 18 yrs)</span>
                  <span>76% (1,153)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-purple" style={{ width: "76%" }}></div></div>
              </div>

              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>Adults (&gt; 18 yrs)</span>
                  <span>20% (296)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-blue" style={{ width: "20%" }}></div></div>
              </div>

              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>NA / Undeclared</span>
                  <span>4% (63)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-grey" style={{ width: "4%" }}></div></div>
              </div>

              <hr className="panel-divider" />

              {/* Gender distribution */}
              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>Males</span>
                  <span>54.4% (823)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-teal" style={{ width: "54.4%" }}></div></div>
              </div>

              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>Females</span>
                  <span>43.3% (655)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-pink" style={{ width: "43.3%" }}></div></div>
              </div>

              <div className="demog-bar-item">
                <div className="bar-labels">
                  <span>Foetuses</span>
                  <span>2.24% (34)</span>
                </div>
                <div className="progress-bar-bg"><div className="progress-bar-fill fill-purple" style={{ width: "2.24%" }}></div></div>
              </div>

            </div>

          </div>

          {/* Specimen Repository Panel */}
          <div className="dashboard-panel repository-panel">
            <h3>Biorepository Central Stock</h3>
            <p className="repository-intro">
              High-quality genomic DNA isolated and banked from <strong>3,498 blood samples</strong>. 
              Additionally, <strong>103 tissue specimens</strong> collected from <strong>87 families</strong> support ongoing downstream clinical functional validation assays:
            </p>
            
            <div className="biospecimen-grid">
              <div className="specimen-card">
                <div className="specimen-badge">75</div>
                <h4>Dermal Fibroblasts</h4>
                <p>Patient-derived primary cellular models</p>
              </div>
              <div className="specimen-card">
                <div className="specimen-badge">18</div>
                <h4>Plasma Samples</h4>
                <p>For metabolomic and lipidomic profiling</p>
              </div>
              <div className="specimen-card">
                <div className="specimen-badge">10</div>
                <h4>Urine Samples</h4>
                <p>For biomarker discovery and clearance studies</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: DIAGNOSTICS & YIELD ================= */}
      <section className="section section-light">
        <div className="container progress-content">

          <div className="section-header-box">
            <h2>Genomic Diagnostics Yield & Variant Spectrum</h2>
            <p className="section-description">
              Results from completed high-quality genomic evaluations (n = 1,149 unrelated families) 
              employing exome, genome, and complementary transcriptomics pipeline workflows.
            </p>
          </div>

          {/* Diagnostic Yield Dashboard Column */}
          <div className="dashboard-row">
            
            <div className="dashboard-panel panel-flex-center">
              <h3>Overall Cohort Outcomes</h3>
              <div className="yield-radial-box">
                <div className="svg-ring-container large-ring">
                  <svg className="svg-ring" viewBox="0 0 120 120">
                    <circle className="ring-bg" cx="60" cy="60" r="50" />
                    <circle className="ring-fill ring-green" cx="60" cy="60" r="50" style={{ strokeDashoffset: `${314.16 * (1 - 0.536)}` }} />
                  </svg>
                  <div className="ring-value large-val">53.6%</div>
                </div>
                <div className="large-ring-label">Definitive Molecular Diagnosis</div>
                <p className="large-ring-sub">616 Families Solved Successfully</p>
              </div>
            </div>

            <div className="dashboard-panel">
              <h3>Molecular Diagnostic Breakdowns (n = 1,149 Completed Cases)</h3>
              
              {/* Horizontal Segmented Progress Bar */}
              <div className="segmented-bar-container">
                <div className="segmented-bar">
                  <div className="segment segment-diagnosed" style={{ width: "53.6%" }} title="Diagnosed: 53.6%"></div>
                  <div className="segment segment-undiagnosed" style={{ width: "29.4%" }} title="Undiagnosed: 29.4%"></div>
                  <div className="segment segment-vous" style={{ width: "8.09%" }} title="VOUS: 8.09%"></div>
                  <div className="segment segment-gous" style={{ width: "2.3%" }} title="GOUS: 2.3%"></div>
                  <div className="segment segment-na" style={{ width: "6.61%" }} title="In Progress / Other: 6.61%"></div>
                </div>
                
                {/* Segment Legend */}
                <div className="segmented-legend">
                  <div className="legend-item"><span className="legend-dot dot-diagnosed"></span> Diagnosed: <strong>53.6%</strong> (616)</div>
                  <div className="legend-item"><span className="legend-dot dot-undiagnosed"></span> Undiagnosed: <strong>29.4%</strong> (403)</div>
                  <div className="legend-item"><span className="legend-dot dot-vous"></span> VOUS (Gene known): <strong>8.09%</strong> (98)</div>
                  <div className="legend-item"><span className="legend-dot dot-gous"></span> GOUS (Gene uncertain): <strong>2.3%</strong> (32)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Monogenic Variants Detailed Panel */}
          <div className="dashboard-panel monogenic-panel">
            <h3>Variants Priority in Monogenic Disorders (n = 729 Variants Priortized)</h3>
            
            <div className="variants-analysis-grid">
              
              {/* Variant Types */}
              <div className="variants-sub-section">
                <h4>Molecular Class of Variants</h4>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Single Nucleotide Variants (SNV)</span><span>75.9% (554)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-purple" style={{ width: "75.9%" }}></div></div>
                </div>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Indels</span><span>19.6% (143)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-blue" style={{ width: "19.6%" }}></div></div>
                </div>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Intragenic Copy Number Variants (CNV)</span><span>3.4% (25)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-teal" style={{ width: "3.4%" }}></div></div>
                </div>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Triplet Repeats & Gene Conversions</span><span>0.95% (7)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-grey" style={{ width: "0.95%" }}></div></div>
                </div>
              </div>

              {/* Pathogenicity */}
              <div className="variants-sub-section border-left-divider">
                <h4>ACMG Pathogenicity Classification</h4>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Pathogenic</span><span>54.0% (394)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-green" style={{ width: "54%" }}></div></div>
                </div>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Likely Pathogenic</span><span>29.2% (213)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-teal" style={{ width: "29.2%" }}></div></div>
                </div>
                <div className="demog-bar-item font-softer">
                  <div className="bar-labels"><span>Variant of Uncertain Significance (VUS)</span><span>16.7% (122)</span></div>
                  <div className="progress-bar-bg"><div className="progress-bar-fill fill-gold" style={{ width: "16.7%" }}></div></div>
                </div>
              </div>

              {/* Novelty */}
              <div className="variants-sub-section border-left-divider">
                <h4>Novelty Rate</h4>
                <div className="novelty-container">
                  <div className="novelty-stat">
                    <div className="novelty-title">Novel Variants</div>
                    <div className="novelty-val">43.6%</div>
                    <div className="novelty-sub">318 Variants</div>
                  </div>
                  <div className="novelty-stat border-top-sep">
                    <div className="novelty-title">Previously Known</div>
                    <div className="novelty-val">56.3%</div>
                    <div className="novelty-sub">411 Variants</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: SPECTRUM ================= */}
      <section className="section section-grey">
        <div className="container progress-content">

          <div className="section-header-box">
            <h2>Spectrum of Rare Disorders & Strategic Research Goals</h2>
            <p className="section-description">
              Distribution of genomic findings and genetic disorders observed across the studied 
              clinical cohort, framed around the primary grant objectives.
            </p>
          </div>

          {/* Disease Spectrum Metrics */}
          <div className="dashboard-panel distinct-disorder-panel">
            <div className="disorder-header">
              <div className="disorder-count-badge">564</div>
              <div className="disorder-header-text">
                <h3>Distinct Rare Genetic Disorders Identified</h3>
                <p>Successfully categorized in 714 unrelated families enrolled in the cohort study.</p>
              </div>
            </div>

            <div className="disorders-breakdown-row">
              <div className="disorder-pill">
                <span className="disorder-val">523</span>
                <span className="disorder-name">Monogenic Disorders (in 673 families)</span>
              </div>
              <div className="disorder-pill">
                <span className="disorder-val">37</span>
                <span className="disorder-name">Chromosomal Disorders (in 37 families)</span>
              </div>
              <div className="disorder-pill">
                <span className="disorder-val">3</span>
                <span className="disorder-name">Imprinting Disorders (in 3 families)</span>
              </div>
              <div className="disorder-pill">
                <span className="disorder-val">1</span>
                <span className="disorder-name">Mitochondrial Disorders (in 1 family)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: DATA SHARING & REPOSITORIES ================= */}
      <section className="section section-light">
        <div className="container progress-content">

          <div className="section-header-box">
            <h2>Open Science & Public Access Repositories</h2>
            <p className="section-description">
              Promoting research transparency, diagnostic repeatability, and collaboration by contributing 
              peer-reviewed genomics and proteomics datasets to the global scientific community.
            </p>
          </div>

          <div className="data-stack">
            
            {/* ClinVar */}
            <div className="data-card">
              <div className="data-logo-box">🧬</div>
              <h3>ClinVar Database Submissions</h3>
              <p>
                Curated clinical phenotypes and corresponding genomic variants discovered within our cohort 
                have been uploaded to the NCBI ClinVar database to aid global variant classification efforts.
              </p>
              <div className="data-links">
                <a href="https://www.ncbi.nlm.nih.gov/clinvar/submitters/505991/" target="_blank" rel="noopener noreferrer" className="external-repository-link">
                  View ClinVar Submissions →
                </a>
              </div>
            </div>

            {/* ZFIN */}
            <div className="data-card">
              <div className="data-logo-box">🐟</div>
              <h3>Zebrafish Information Network (ZFIN)</h3>
              <p>
                Functional genetics data and zebrafish disease models validated using targeted CRISPR/Cas9 
                gene editing have been deposited to ZFIN.
              </p>
              <div className="data-links">
                <a href="https://zfin.org/ZDB-CRISPR-250206-1" target="_blank" rel="noopener noreferrer" className="external-repository-link">
                  Access Model ZDB-CRISPR-250206-1
                </a>
                <a href="https://zfin.org/ZDB-CRISPR-250206-2" target="_blank" rel="noopener noreferrer" className="external-repository-link">
                  Access Model ZDB-CRISPR-250206-2
                </a>
              </div>
            </div>

            {/* Proteomics PRIDE */}
            <div className="data-card">
              <div className="data-logo-box">🔬</div>
              <h3>ProteomeXchange PRIDE Repository</h3>
              <p>
                Mass spectrometry proteomic datasets generated from patient-derived fibroblast functional studies 
                have been uploaded to the PRIDE database for public accessibility.
              </p>
              <div className="data-links">
                <a href="https://www.ebi.ac.uk/pride/archive/projects/PXD055397" target="_blank" rel="noopener noreferrer" className="external-repository-link">
                  Dataset PXD055397
                </a>
                <a href="https://www.ebi.ac.uk/pride/archive/projects/PXD044775" target="_blank" rel="noopener noreferrer" className="external-repository-link">
                  Dataset PXD044775
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}