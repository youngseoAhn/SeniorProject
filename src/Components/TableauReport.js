import React, { useEffect, useRef } from 'react';
import './TableauReport.css'; // Make sure to import the CSS file

const TableauReport = ({ url }) => {
  const ref = useRef(null);
  const vizRef = useRef(null);

  useEffect(() => {
    const initViz = () => {
      if (!window.tableau) {
        console.error("Tableau JS API is not loaded.");
        return;
      }

      if (vizRef.current) {
        vizRef.current.dispose();
      }

      const vizOptions = {
        hideTabs: true,
        onFirstInteractive: function() {
          console.log("Tableau report is interactive.");
        },
      };

      vizRef.current = new window.tableau.Viz(ref.current, url, vizOptions);
    };

    initViz();

    return () => {
      if (vizRef.current) {
        vizRef.current.dispose();
      }
    };
  }, [url]);

  // Corrected return statement to include the class
  return <div ref={ref} className="tableauReportContainer" />;
};

export default TableauReport;
