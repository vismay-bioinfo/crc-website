import React, { useState } from "react";
import publications from "../data/publications";
import "../styles/publications.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Publications() {

  const groupByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const [expandedYears, setExpandedYears] = useState({});

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (

    <div className="page">

      {/* Navbar */}
      <Navbar />

      {/* Page Intro */}
      <section className="section section-grey">

        <div className="container publications-container">

          <h1>Publications</h1>

          <p className="publications-intro">
            The centre publishes research findings in leading peer-reviewed scientific journals, 
            reflecting its collaborative strengths across clinical genomics, molecular biology, 
            and functional model systems. These studies focus on improving the diagnosis and biological 
            understanding of rare genetic disorders, particularly within the Indian population.
          </p>
          <p>
            The published work includes the discovery of novel disease-causing genes and pathogenic variants, 
            functional validation using patient-derived cellular systems and animal models, and the application 
            of multi-omics approaches to elucidate complex disease mechanisms. Collectively, these contributions 
            add significant value to the global rare disease research community and strengthen India’s capacity in 
            genomic medicine and translational science.
          </p>
          <p>
            Below is a list of publications highlighting the centre’s recent research and collaborative outputs.
          </p>

        </div>

      </section>


      {/* Publications List */}
      <section className="section section-lighy">

        <div className="container">

          {sortedYears.map((year) => {

            const papers = groupByYear[year];
            const expanded = expandedYears[year];
            const visiblePapers = expanded ? papers : papers.slice(0, 3);

            return (

              <div key={year} className="year-block">

                <h2 className="year-title">
                  {year}
                  <span className="year-count">({papers.length})</span>
                </h2>

                <div className="papers-list">

                  {visiblePapers.map((paper, i) => (

                    <div key={i} className="paper-card">

                      <h3 className="paper-title">{paper.title}</h3>

                      <p className="paper-authors">{paper.authors}</p>

                      <p className="paper-journal">
                        {paper.journal} • {paper.year}
                      </p>

                      <div className="paper-links">

                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          DOI
                        </a>

                        <a
                          href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pubmed}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          PubMed
                        </a>

                      </div>

                    </div>

                  ))}

                </div>

                {papers.length > 3 && (
                  <button
                    className="view-more-btn"
                    onClick={() => toggleYear(year)}
                  >
                    {expanded ? "Show Less" : `View All (${papers.length})`}
                  </button>
                )}

              </div>

            );

          })}

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>

  );
}