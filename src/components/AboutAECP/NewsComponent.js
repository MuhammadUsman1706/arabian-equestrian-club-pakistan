import React, { Fragment, useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ReactPaginate from "react-paginate";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import AboutLineColorImg from "../../assets/images/heading-dec.png";

import classes from "./AboutAECP.module.css";
import { NewsContent } from "../../apis/aboutApis";


const BreedModalStyle = {
  width: "80%",
  height: "auto",
  top:"100px",
};

// const NEWS_UPDATES = [
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
//     {
//         NewsHeadingText: "WUSV Breeding Program for Arabian Horses",
//         NewsDateText: "5th",
//         NewsYearText: "July 2022",
//         NewsParaText: "The Weltunion der Vereine für Deutsche Schäferhunde (WUSV) – the World Union for the Associations of Arabian Horses – and its member organizations aim at the breeding of Arabian Horses that are healthy, well socialized, and highly performing as well as resilient working and service",
//         ViewFuLLNewsText: "View Full News"
//     },
// ]

function Items({ currentItems, notShowHeader }) {
  const [show, setShow] = useState(false);
  // const modalId = [1];

  return (
    <div>
      <div className={classes["HistoryAECP"]}>
        {notShowHeader ? (
          <></>
        ) : (
          <div>
            <div style={{ float: "left" }}>
              <h2 className={classes["AboutHeading"]}>News & Updates</h2>
            </div>
            <div style={{ float: "left" }}>
              <img
                src={AboutLineColorImg}
                alt="about img"
                style={{}}
                className={classes.clublineImg}
              />
            </div>
            <div className={classes["clear"]}></div>
            <hr></hr>
          </div>
        )}

        <div className={classes["newsMainDiv"]} style={{ paddingTop: 20 }}>
          {/* {currentItems && */}
          {
            // currentItems.map((news) => (
            currentItems?.map((fullNews) => {
              console.log("MODAL", fullNews);
              // if (!modalId.includes(fullNews.id)) {
              return (
                <Fragment>
                  <div className={classes["newsMainCard"]}>
                    <div className={classes["NewsHeadingDiv"]}>
                      <span className={classes["NewsHeading"]}>
                        {fullNews.title}
                      </span>
                      {/* <span className={classes["NewsHeading"]} dangerouslySetInnerHTML={{ __html: fullNews.title }}></span> */}
                      <div className={classes["NewsDateDiv"]}>
                        {/* <span className={classes["NewsDate"]}>{news.NewsDateText}</span> <span className={classes["NewsYear"]}>{news.NewsYearText} </span> */}
                      </div>
                    </div>
                    {/* <div className={classes["NewsPara"]}> {fullNews.content}</div> */}
                    <div
                      className={classes["NewsPara"]}
                      dangerouslySetInnerHTML={{
                        __html: fullNews.preview_text
                          .replace(/&lt;/g, "<")
                          .replace(/&gt;/g, ">")
                          .replace(/&quot;/g, '"')
                          .replace(/&#39;/g, "'")
                          .replace(/&amp;/g, "&"),
                      }}
                    />

                    <div className={classes["NewsDiv"]}>
                      {/* <span className={classes["ViewFuLLNews"]} onClick={setShow}>  {news.ViewFuLLNewsText}</span> */}
                      <span
                        className={classes["ViewFuLLNews"]}
                        onClick={setShow}
                      >
                        {" "}
                        View Full News
                      </span>
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
                            {fullNews.title}
                            <span className={classes["ModalMemberPosition"]}>
                              Published:{" "}
                              {new Date(
                                fullNews.publishing_date
                              ).toDateString()}
                            </span>
                          </h2>
                          <hr></hr>
                          <div className={classes["modalImg"]}>
                            <div>
                              <p
                                className={classes["standardModalText"]}
                                dangerouslySetInnerHTML={{
                                  __html: fullNews.content
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
                  </div>
                </Fragment>
              );
              // }
            })
          }
        </div>
      </div>
    </div>
  );
}

function AboutNews({ itemsPerPage, notShowHeader }) {
  // We start with an empty list of items.
  const [newsData, setNewsData] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const getData = async () => {
      // Fetch items from another resources.
      // fee structure come from api
      const response = await NewsContent();
      setNewsData(response.data.news?.reverse());
      // console.log(response.data.news, "news data")
    };
    if (newsData.length === 0) {
      getData();
    }
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(newsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(newsData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, newsData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className={classes.APIcontent}>
        <Items notShowHeader={notShowHeader} currentItems={currentItems} />
      </div>
      <div className={classes["breed-list"]}>
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <KeyboardArrowRightIcon
              sx={{
                fontSize: "25px",
              }}
            />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <KeyboardArrowLeftIcon
              sx={{
                fontSize: "25px",
              }}
            />
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default AboutNews;
