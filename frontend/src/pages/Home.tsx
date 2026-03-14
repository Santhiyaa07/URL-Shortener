import Header from "../components/Header";
import UrlShortener from "../components/UrlShortener";
import RecentUrlsTable from "../components/RecentUrlsTable";
import Pagination from "../components/Pagination";
import StatisticsChart from "../components/StatisticsChart";
import { useEffect, useState } from "react";
import { getRecentUrls } from "../services/api";
import "../styles/layout.css";

const ITEMS_PER_PAGE = 10;

const Home = () => {

  const [urls,setUrls] = useState<any[]>([]);
  const [page,setPage] = useState(1);

  const loadUrls = async ()=>{
    const data = await getRecentUrls();
    setUrls(data);
  };

  useEffect(()=>{
    loadUrls();
  },[]);

  const start = (page-1)*ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentUrls = urls.slice(start,end);

  const totalPages = Math.ceil(urls.length/ITEMS_PER_PAGE);

  return(

    <div className="page">

      <Header/>

      {/* pass reload function */}
      <UrlShortener reloadUrls={loadUrls}/>

      <div className="content">

        <RecentUrlsTable urls={currentUrls}/>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        <StatisticsChart data={urls}/>

      </div>

    </div>

  );
};

export default Home;