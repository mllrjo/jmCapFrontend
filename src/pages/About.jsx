export default function About() {
    return (
      <>
        <h1>Federal Employment Agency Tracker [FEAT]</h1>
  
        <h2>Centralized real-time tracking of volatile ongoing federal agency restructuring.</h2>
  
        <p>
          The federal job market has been on a rollercoaster - firings, rehirings,
          political pressure, and public outcry all shaping who stays and who
          goes. Like them or not, changes have been occurring on a daily basis and there is no
          official digital information source. FEAT is a CRUD app designed to
          collect and display data about an agency selected by a user. For now,
          the focus is on large personnel turnover.
        </p>
  
        <p>
          An "event" is a firing or [re]hiring at an agency. Records include:
          date of event, agency, number of personnel fired, number of personnel
          rehired, total number of agency personnel before the event, information
          source, and a brief summary obtained from public media. For a given
          agency, events occurring on different dates comprise distinct records.
        </p>
  
        <p>
          <strong>These events are unprecedented in the USA <em> post</em> WWII in their breadth, depth, and <em>speed.</em></strong>
          Since January 21, 2025 they will continually roil the U.S. economy, sow market upheaval, and 
          add to and exacerbate pre-existing uncertainties. Certain events - such as those affecting nuclear
          weapons security, wildfire control, the FAA, FDIC, and CDC amid rising measles and
          human bird flu cases - will have immediate economic, financial, medical, and geopolitical significance.
        </p>
  
        <p>
          Logging these events at the earliest possible moment, designating them
          as "speculative" or "inferred" if necessary, could enable assessment
          of market impact and <strong>drive business and investment decisions</strong>.
        </p>
        <h4><i>Acknowledgements: Bryan Santos, Jordan Wofford, Paul Chapman, Dylan Comeau, Per Scholas, my classmates, and chatGPT</i></h4>
      </>
    );
  }
  