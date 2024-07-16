import React from "react";
import {
    FaUser,
    FaComments,
    FaCalendarAlt,
    FaSearch,
    FaPlus,
    FaMinus,
  } from "react-icons/fa";

export default function RecentPost() {
    const recentPost = [
        { picture: "/assets/images/blog-post/blog_big_03.jpg" },
        { picture: "/assets/images/blog-post/blog_big_01.jpg" },
      ];
    
    return (
        <div
        style={{
          margin: 0,
        //   marginTop: 10,
          color: "grey",
          width: "100%",
          padding: 0,
        }}
      >
        {recentPost.map((fruit) => {
          return (
            <div key={fruit.picture} className="row">
              <img src={fruit.picture} alt="" style={{ margin: 0 }} />

              <a
                href="*"
                style={{
                  textDecoration: "none",
                  fontSize: 18,
                  color: "black",
                  margin: 5,
                }}
              >
                Simple Blog Post
              </a>

              <p style={{ fontSize: 13 }}>
                <span>
                  <FaComments /> 6 Comments
                </span>
                <span style={{ marginLeft: 10 }}>
                  <FaCalendarAlt /> 12/06/2016
                </span>
              </p>

              <p style={{ fontSize: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          );
        })}

      </div>
    )
}