import BestMatch from "../../components/results/BestMatch";
import ProgressBar from "../../components/utils/ProgressBar"

export default function Results() {

  return (
    <main className="results">
        <ProgressBar current={7} />
        <div className="top-content">
          <div className="title">Meet your new favorite coffee.</div>
          <div className="desc">Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.</div>
          <div className="buttons">
            <span className="button">Email my results</span>
            <span className="button">Retake the quiz</span>
          </div>
        </div>
        <BestMatch />
    </main>
  );
}
