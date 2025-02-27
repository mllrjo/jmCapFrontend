export default function About() {
    return (
      <>
        <h1>Federal Agency Employment Tracker</h1>
  
        <h2>Real-time tracking of volatile ongoing federal agency restructuring.</h2>
  
        <p>
          The federal job market has been on a rollercoaster—firings, rehirings,
          political pressure, and public outcry all shaping who stays and who
          goes. Changes have been occurring on a daily basis, and there is no
          official digital information source. FAET is a CRUD app designed to
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
          These events are unprecedented in their breadth, depth, and speed.
          They will roil the U.S. economy, sow market upheaval, and generate
          continual uncertainty. Certain events—such as those affecting nuclear
          weapons security, wildfire control, and the CDC amid rising measles and
          human bird flu cases—may have immediate geopolitical significance.
        </p>
  
        <p>
          Logging these events at the earliest possible moment, designating them
          as "speculative" or "inferred" if necessary, could enable the assessment
          of market impact.
        </p>
        <h4><i>Acknowledgements: Bryan Santos, Jordan Wofford, Paul Chapman, Dylan Comeau, Per Scholas, my classmates, and chatGPT</i></h4>
      </>
    );
  }
  