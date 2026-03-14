import React, { useState } from "react";
import { createShortUrl, UrlResponse } from "../services/api";
import { FaLink } from "react-icons/fa";
import "../styles/urlShortener.css";

interface Props {
  reloadUrls: () => void;
}

const UrlShortener: React.FC<Props> = ({ reloadUrls }) => {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState<UrlResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const data = await createShortUrl(url);

    setResult(data);

    setUrl("");

    // reload table data instantly
    reloadUrls();

  };

  return (
    <div className="banner">

      <h2>Simplify your URL</h2>

      <form onSubmit={handleSubmit} className="url-form">

        <input
          type="text"
          placeholder="Enter your original URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button type="submit">
          <FaLink className="btn-icon" />
          Shorten URL
        </button>

      </form>

      <p className="helper">
        All the Shorted URL and their analytics are public...
      </p>

    </div>
  );
};

export default UrlShortener;