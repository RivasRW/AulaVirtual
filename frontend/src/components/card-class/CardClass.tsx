import React from "react";
import { Link } from "wouter";
import "./CardClass.css";

export default function CardClass({ data }: any) {
  return (
    <div className="card-class video">
      <Link href={`/materia/${data.id}`}>
        <a>
          <div className="banner-class">
            <img src={data.bannerImg} alt="" />

            <h4 className="class-title">{data?.title}</h4>
          </div>
        </a>
      </Link>

      <div className="content">
        <img src={data.teacherImg} alt="" />
        <p>{data.teacherName}</p>
      </div>
    </div>
  );
}
