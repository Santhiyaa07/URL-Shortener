import { FaCopy, FaExternalLinkAlt, FaChartBar } from "react-icons/fa";
import { MdOutlineLink } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../styles/table.css";

/* Date formatting function */
const formatDate = (dateString: string) => {

  const date = new Date(dateString);

  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  const suffix = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${weekday} ${day}${suffix(day)} ${month}, ${year}`;
};

const RecentUrlsTable = ({ urls }: any) => {

  const navigate = useNavigate();

  const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("Short URL copied to clipboard!");
  } catch (err) {
    console.error("Copy failed", err);
  }
};

  return (

    <div className="table-section">

      <h3>Recent URLs</h3>

      <table className="urls-table">

        <thead>

          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th></th>
            <th></th>
            <th>Created on</th>
            <th>Clicks</th>
            <th></th>
          </tr>

        </thead>

        <tbody>

          {urls.map((u: any) => {

            const short = `http://localhost:8080/${u.shortCode}`;

            return (

              <tr key={u.id}>

                <td>{u.originalUrl}</td>

                <td className="short-url">
                  <MdOutlineLink className="url-icon" />
                  <a href={short} target="_blank" rel="noreferrer">
                    {short}
                  </a>
                </td>

                {/* open short url */}
                <td>
                  <button
                    className="icon green"
                    onClick={() => window.open(short)}
                  >
                    <FaExternalLinkAlt />
                  </button>
                </td>

                {/* copy url */}
                <td>
                  <button
                    className="icon blue"
                    onClick={() => copy(short)}
                  >
                    <FaCopy />
                  </button>
                </td>

                <td>{formatDate(u.createdAt)}</td>

                <td>{u.clickCount}</td>

                {/* analytics button */}
                <td>
                  <button
                    className="analytics"
                    onClick={() => navigate(`/analytics/${u.shortCode}`)}
                  >
                    <FaChartBar className="chart-icon" /> Analytics
                  </button>
                </td>

              </tr>

            );

          })}

        </tbody>

      </table>

    </div>

  );

};

export default RecentUrlsTable;