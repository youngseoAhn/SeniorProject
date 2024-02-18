import React, { useEffect, useRef } from 'react';

const TableauReport = ({ url }) => {
  const ref = useRef(null);
  const vizRef = useRef(null); // Use this ref to track the Tableau visualization instance

  useEffect(() => {
    const initViz = () => {
      // Ensure the Tableau JS library is loaded
      if (!window.tableau) {
        console.error("Tableau JS API is not loaded.");
        return;
      }

      // If there's an existing visualization, dispose of it first
      if (vizRef.current) {
        vizRef.current.dispose();
      }

      const vizOptions = {
        hideTabs: true,
        onFirstInteractive: function() {
          console.log("Tableau report is interactive.");
        },
      };

      // Embed the Tableau visualization
      vizRef.current = new window.tableau.Viz(ref.current, url, vizOptions);
    };

    initViz();

    // Cleanup function to dispose of the visualization when the component unmounts
    return () => {
      if (vizRef.current) {
        vizRef.current.dispose();
      }
    };
  }, [url]); // Re-run this effect if the URL changes to ensure the visualization is updated

  return <div ref={ref} />;
};

export default TableauReport;
