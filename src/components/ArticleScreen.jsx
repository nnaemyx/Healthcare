import React from "react";

import { content } from "../data";

import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ArticleScreen = () => {
  const { id } = useParams();
  const article = content.find((p) => p._id === id);
  return (
    <div>
      <Navbar />
      <div className="mt-[8rem] container mx-auto">
        <div className="">
          <img
            src={article.image.type}
            alt=""
            className="object-cover h-[18rem] w-[80rem]"
          />
        </div>
        <div className="mt-10">
          <h1 className="font-semibold text-[25px]">{article.heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default ArticleScreen;
