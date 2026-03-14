import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnalytics } from "../services/api";
import StatisticsChart from "../components/StatisticsChart";

const AnalyticsPage = () => {

  const { code } = useParams();
  const [data,setData] = useState<any>(null);

  useEffect(()=>{

    const load = async ()=>{

      const res = await getAnalytics(code!);

      setData(res);

    };

    load();

  },[code]);

  if(!data) return <p>Loading...</p>;

  const shortUrl = `http://localhost:8080/${data.shortCode}`;

  return (

    <div style={{width:"80%",margin:"auto"}}>

      <h2>URL Analytics</h2>

      <p><b>Original URL:</b> {data.originalUrl}</p>

      <p><b>Short URL:</b> {shortUrl}</p>

      <p><b>Total Clicks:</b> {data.clickCount}</p>

      <StatisticsChart data={[data]}/>

    </div>

  );
};

export default AnalyticsPage;