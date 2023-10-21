import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logoMask from "../../../assets/images/logo-mask.png";
import { getnews } from "../../../apis/index";
import { Link } from "react-router-dom";
import classes from "./News.module.css";

import Rodal from "rodal";
import "rodal/lib/rodal.css";

const BreedModalStyle = {
  width: "80%",
  height: "auto",
  top:"100px",
};

const News = () => {
  const [show, setShow] = useState(false);
  const [t_title, setTt] = useState("");
  const [t_content, setTc] = useState("");
  const [t_publishing_date, setTp] = useState("");
  const [NEWS_DATA, setNews] = useState([]);

  const setContent = async (t) => {
    setTt(t.title);
    setTc(t.content);
    setTp(t.publishing_date);
    setShow(true);
  };

  const fetchData = async () => {
    const response = await getnews();
    response
      .json()
      .then((recentTen) => ({
        recentTen: recentTen,
        status: response.status,
      }))
      .then((res) => {
        setNews(res.recentTen);
      });
    // console.log(NEWS_DATA.news?.reverse(),'.......');
  };

  useEffect(() => {
    fetchData();
  }, []);

  function convertUnicode(input) {
    return input.replace("/\\+u([0-9a-fA-F]{4})/g", (a, b) =>
      String.fromCharCode(parseInt(b, 16))
    );
  }

  return (
    <div className={classes.news}>
      <h1 className={classes["main-heading"]}>News and Updates</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
      <div className={classes["news-cards"]}>
        {NEWS_DATA?.recentTen?.length > 0
          ? NEWS_DATA?.recentTen.map((news) => (
              <div className={classes["news-card"]}>
                <div>
                  <h3>{news.title}</h3>
                  <div className={classes.date}>
                    <img src={logoMask} alt="Masked Logo" />
                    <p
                      style={{
                        fontSize: "26px",
                      }}
                    >
                      {/* {news.date.split(" ")[0]}th */}
                      {news.date}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {/* {news.date.split(" ")[1]} */}
                      {news.date}
                    </p>
                  </div>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: news.preview_text
                      .replace(/&lt;/g, "<")
                      .replace(/&gt;/g, ">")
                      .replace(/&quot;/g, '"')
                      .replace(/&#39;/g, "'")
                      .replace(/&amp;/g, "&"),
                  }}
                ></p>
                <div className={classes.view} onClick={() => setContent(news)}>
                  <span>View Full Blog</span>
                </div>
                <Rodal
                  customStyles={BreedModalStyle}
                  enterAnimation="slideDown"
                  leaveAnimation="zoom"
                  closeOnEsc
                  visible={show}
                  onClose={() => setShow(false)}

                >
                  <div className={classes["BreedModalDiv"]}>
                    <h2 className={classes["ModalMemberName"]}>
                      {t_title}
                      <span className={classes["ModalMemberPosition"]}>
                        Published: {new Date(t_publishing_date).toDateString()}
                      </span>
                    </h2>
                    <hr></hr>
                    <div className={classes["modalImg"]}>
                      <div>
                        <p
                          className={classes["standardModalText"]}
                          dangerouslySetInnerHTML={{
                            __html: t_content
                              .replace(/&lt;/g, "<")
                              .replace(/&gt;/g, ">")
                              .replace(/&quot;/g, '"')
                              .replace(/&#39;/g, "'")
                              .replace(/&amp;/g, "&"),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </Rodal>
              </div>
            ))
          : ""}
      </div>
      <div style={{ marginTop: "50px" }}>
        <Link to={"/about-aecp/news"} style={{ textDecoration: "none" }}>
          <button className={classes.btn}>
            <span className={classes["btn-text"]}>
              See All News <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
