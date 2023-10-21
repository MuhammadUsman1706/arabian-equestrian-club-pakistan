import React, { Fragment, useState, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoMask from "../../assets/images/logo-mask.png";
import facebook from "../../assets/images/fb.png";
import tweeter from "../../assets/images/tweeter.png";
import memberOne from "../../assets/images/mem1.png";
import AboutLineImg from "../../assets/images/heading-dec-white.png";
import AboutLineColorImg from "../../assets/images/heading-dec.png";
import classes from "./AboutAECP.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Button from "@material-ui/core/Button";

import axios from "axios";
import {
  clubRules,
  clubTeam,
  feeStructure,
  aboutTheClub,
  clubJudges,
  aboutTheBreed,
} from "../../apis/aboutApis";
import { register } from "../../apis";
import { getcities } from "../../apis/member-apis";
// accordion
import { GoThreeBars } from "react-icons/go";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import AboutNews from "./NewsComponent.js";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import AECPConstitution from "./AECPConstitution";

const HistoryModalStyle = {
  width: "80%",
  height: "auto",
  top:"100px"
};
const BreedModalStyle = {
  width: "80%",
  height: "auto",
};

const AboutAECP = () => {
  const router = useParams();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [sideToggle, setsideToggle] = useState(false);

  const [committies, setComs] = useState([]);

  const [oneState, setOneState] = useState("aboutAECP");

  // working on API
  const [isLoading, setIsLoading] = useState(false);
  const [clubData, setClubData] = useState("");
  const [fee, setFee] = useState([""]);
  const [rulesHeading, setRulesHeading] = useState([""]);
  const [team, setTeam] = useState();
  const [judges, setJudges] = useState([]);

  const [t_full_name, setTfn] = useState("");
  const [t_position, setTp] = useState("");
  const [t_description, setTd] = useState("");
  const [t_title, setTtitle] = useState("");
  const [t_content, setTcontent] = useState("");
  const [t_image, setTi] = useState("");
  const [t_fb, setTfb] = useState("");
  const [t_tw, setTtw] = useState("");
  const [t_email, setTe] = useState("");

  const memID = [28, 30];

  const [ABOUT_DATA, setaboutData] = useState([]);

  useEffect(() => {
    if (router?.tab) {
      setOneState(router?.tab);
      textChangeHandler({ currentTarget: { id: router?.tab } });
    }
  }, [router?.tab]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await aboutTheClub();

        setClubData(
          response.data.about_the_club
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, "&")
        );
        // console.log(response.data.about_the_club, "get club dataaaa")
      } catch (err) {
        console.log(err.message, "errrrrrrrrrs");
      }
    };

    const getBreed = async () => {
      try {
        const response = await aboutTheBreed();
        setaboutData(response.data.about_the_breed);
      } catch (err) {
        console.log(err.message, "errrrrrrrrrs");
      }
    };

    getData();
    getBreed();
  }, []);

  const textChangeHandler = async (event) => {
    const selectedText = event.currentTarget.id;
    // console.log(selectedText,"textttttt")
    setOneState(selectedText);

    // if (selectedText === 'aboutAECP') {
    //     // About the club text come from api
    //     const response = await aboutTheClub();
    //     // console.log(response.data.about_the_club, "get club dataaaa")
    //     setData(response.data.about_the_club)
    // }

    if (selectedText === "suscription") {
      // fee structure come from api
      const response = await feeStructure();
      // setFee(response.data.fee_structure_content[0].content.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "\'").replace(/&amp;/g, "&"));
      setFee(response.data);
      // console.log(response.data, "get FEE dataaaa")
    } else if (selectedText === "rules") {
      // fee structure come from api
      const response = await clubRules();
      // setRulesHeading(response.data.club_rules[0].rule_name);
      // setRulesHeading(response.data.club_rules.toString().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;/g, "\'").replace(/&amp;/g, "&") );
      setRulesHeading(response.data.club_rules);
      // console.log(response.data.club_rules, "sasasasasas");
    } else if (selectedText === "AECPteam") {
      // fee structure come from api
      const response = await clubTeam();
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          setTeam(res.data.data.team_members);
          setComs(res.data.data.committies);
        });
    } else if (selectedText === "AECPjudges") {
      const response = await clubJudges();
      console.log(response.data.club_judges);
      setJudges(response.data.club_judges);
    }
  };

  // sidebar

  const SideBarToggle = () => {
    setsideToggle((prevState) => !prevState);
  };

  // Usman's SignUp Work
  const [citiesList, setCitiesList] = useState({});
  const [cityNames, setCityNames] = useState([]);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    cnic: "",
    city: 1,
    phone: "",
    address: "",
    email: "",
    last_name: "",
    zip: "",
    photo: null,
  });

  useEffect(() => {
    const fetchCitiesHandler = async () => {
      const response = await getcities();
      const responseData = await response.json();
      setCitiesList(responseData.cities);
      setCityNames(Object.keys(responseData.cities));
      // console.log(responseData);
    };

    fetchCitiesHandler();
  }, []);

  const setUserInfoHandler = (event) => {
    if (event.target.name === "photo") {
      setUserInfo((prevState) => ({
        ...prevState,
        photo: event.target.files[0],
      }));
      return;
    }
    if (event.target.name === "city") {
      setUserInfo((prevState) => ({
        ...prevState,
        city: citiesList[event.target.value],
      }));
      return;
    }
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendResponse = async (event) => {
    event.preventDefault();
    // Object.values(userInfo).forEach((info) => {
    //   if (!info) {
    //     console.log("Form incomplete, req not sent");
    //     toast.error("Form incomplete, req not sent");
    //     return;
    //   }
    // });

    console.log(userInfo);
    const response = await register(JSON.stringify(userInfo));
    const responseData = await response.json();
    if (response.status === 500) {
      toast.error(responseData.message, {
        style: { zIndex: "10000" },
      });
    } else {
      toast.success(responseData.message, {
        style: { zIndex: "10000" },
      });
      // console.log(responseData);
    }
  };
  // Usman's SignUp Work

  const ShowTeam = async (t) => {
    setTfn(t.full_name);
    setTp(t.position_name);
    setTi(t.image);
    setTd(t.description);
    setTe(t.email);
    setTfb(t.facebook_url);
    setTtw(t.twitter_url);
    setShow(true);
  };

  const Visible = async (ad) => {
    setTtitle(ad.title);
    setTcontent(ad.content);
    setVisible(true);
  };

  return (
    <div>
      <div className={classes["initial-display"]}>
        <div className={classes["initial-text"]}>
          <div className={classes["masked-logo"]}>
            <img src={logoMask} alt="Masked Logo" />
          </div>
          <div className={classes["breed-footer"]}>
            <span className={classes["social-handles"]}>
              <FacebookIcon />
              <YouTubeIcon />
            </span>
          </div>
          <div className={classes.AboutDiv} style={{}}>
            <div className={classes.AboutVectorImg}>
              <h1>ABOUT US</h1>
              <img
                src={AboutLineImg}
                alt="about img"
                className={classes.lineImg}
              />
            </div>
            <p>About Us / About AECP</p>
          </div>
        </div>
      </div>

      <div className={`${classes["AboutContainer"]}`}>
        <div className={classes.AboutRow} style={{ display: "flex", gap: 30 }}>
          <div className={`${classes.sideBar} ${classes.desktopContent} `}>
            <div className={` ${classes["cardDiv"]}`}>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "aboutAECP" && classes.active
                  }`}
                id="aboutAECP"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>About AECP</span>
              </div>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "aboutTheBreed" && classes.active
                  } `}
                id="aboutTheBreed"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>About the Breed</span>
              </div>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "suscription" && classes.active
                  } `}
                id="suscription"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>
                  Suscription and Fee Structure
                </span>
              </div>
              <div
                className={` ${classes["AECPdiv"]} ${oneState === "rules" && classes.active
                  }`}
                id="rules"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>
                  Rules and Regulations
                </span>
              </div>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "memberApp" && classes.active
                  } `}
                id="memberApp"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>
                  Membership Application
                </span>
              </div>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "AECPteam" && classes.active
                  }`}
                id="AECPteam"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>AECP Team</span>
              </div>
              <div
                className={`${classes["AECPdiv"]} ${oneState === "AECPjudges" && classes.active
                  } `}
                id="AECPjudges"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>AECP Judges</span>
              </div>
              {/* <div className={`${classes["AECPdiv"]} ${oneState === "VisitingJudges" && classes.active}`} id="VisitingJudges" onClick={textChangeHandler}>
                            <span className={classes["AECPText"]}>Visiting Judges</span>
                            </div> */}
              <div
                className={` ${classes["AECPdiv"]} ${oneState === "news" && classes.active
                  }`}
                id="news"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>News and Updates</span>
              </div>
              <div
                className={` ${classes["AECPdiv"]} ${oneState === "constitution" && classes.active
                  }`}
                id="constitution"
                onClick={textChangeHandler}
              >
                <span className={classes["AECPText"]}>AECP Constitution</span>
              </div>
            </div>
          </div>

          <div className={`${classes.mobileContent} `}>
            <div id="toggleSideBar" onClick={SideBarToggle}>
              <GoThreeBars size={30} style={{ color: "#217A77" }} />
            </div>
            {/* <div className={` ${classes["cardDiv"]}`}> */}
            {sideToggle && (
              <div
                onClick={SideBarToggle}
                className={`${classes.cardDiv} ${classes.MobilecardDiv} `}
              >
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "aboutAECP" && classes.active
                    }`}
                  id="aboutAECP"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>About AECP</span>
                </div>
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "aboutTheBreed" && classes.active
                    } `}
                  id="aboutTheBreed"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>About the Breed</span>
                </div>
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "suscription" && classes.active
                    } `}
                  id="suscription"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>
                    Suscription and Fee Structure
                  </span>
                </div>
                <div
                  className={` ${classes["AECPdiv"]} ${oneState === "rules" && classes.active
                    }`}
                  id="rules"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>
                    Rules and Regulations
                  </span>
                </div>
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "memberApp" && classes.active
                    } `}
                  id="memberApp"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>
                    Membership Application
                  </span>
                </div>
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "AECPteam" && classes.active
                    }`}
                  id="AECPteam"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>AECP Team</span>
                </div>
                <div
                  className={`${classes["AECPdiv"]} ${oneState === "AECPjudges" && classes.active
                    } `}
                  id="AECPjudges"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>AECP Judges</span>
                </div>
                {/* <div className={`${classes["AECPdiv"]} ${oneState === "VisitingJudges" && classes.active}`} id="VisitingJudges" onClick={textChangeHandler}>
                                    <span className={classes["AECPText"]}>Visiting Judges</span>
                                    </div> */}
                <div
                  className={` ${classes["AECPdiv"]} ${oneState === "news" && classes.active
                    }`}
                  id="news"
                  onClick={textChangeHandler}
                >
                  <span className={classes["AECPText"]}>News and Updates</span>
                </div>
              </div>
            )}
          </div>

          {/* <div className="col-sm-9"> */}
          <div className={classes["mainContent"]}>
            <div className={` ${classes["cardBodyDiv"]}`}>
              <div className={classes["AECPBody"]}>
                {oneState === "aboutAECP" && (
                  <div className={classes["AboutClub"]}>
                    <div style={{ float: "left" }}>
                      <h2 className={classes["AboutHeading"]}>
                        About The Club
                      </h2>
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

                    <div>
                      {/* <p className={classes["AECP-para"]}>{ABOUT_DATA.AboutText}</p> */}

                      {/* <p className={classes["AECP-para"]}>{clubData}</p> */}
                      {/* <p className={classes["AECP-para"]} dangerouslySetInnerHTML={{ __html: clubData.toString().replace(/&lt;/g , "<").replace(/&gt;/g , ">").replace(/&quot;/g , "\"").replace(/&#39;/g , "\'").replace(/&amp;/g , "&") }} ></p> */}
                      <p
                        className={classes["AECP-para"]}
                        dangerouslySetInnerHTML={{ __html: clubData }}
                      ></p>

                      {/* <p className={classes["AECP-para"]}>{parse(`${clubData}`)}</p> */}
                      {/* <p className={classes["AECP-para"]}>{renderHTML(clubData)}</p> */}
                      {/* <p className={classes["AECP-para"]}>{clubData.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p> */}
                    </div>
                    {/* <div className={classes["AECP-para"]} dangerouslySetInnerHTML={{__html: clubData }}></div> */}
                  </div>

                  // <div className={classes["AboutClub"]}>
                  //     <div style={{float:'left'}}>
                  //         <h2 className={classes["AboutHeading"]}>About The Club</h2>
                  //         {/* <img src={AboutLineColorImg} alt="about img" style={{}} className={classes.clublineImg} /> */}
                  //     </div>

                  //     <div className={classes["clear"]}></div>
                  //     <hr></hr>

                  //     <div>
                  //         <p className={classes["AECP-para"]}>{ABOUT_DATA.AboutText}</p>
                  //     </div>
                  // </div>
                )}

                {oneState === "aboutTheBreed" && (
                  <div className={classes["AboutBreed"]}>
                    {ABOUT_DATA?.length > 0
                      ? ABOUT_DATA.map((ad) => (
                        <div className={classes["AECPHistory"]}>
                          <div style={{ float: "left" }}>
                            <h2 className={classes["AboutHeading"]}>
                              {ad.title}
                            </h2>
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
                          <div>
                            <p className={classes["AECP-para"]}>
                              {ad.preview_text}
                            </p>
                          </div>
                          <button
                            className={classes.btn}
                            onClick={() => Visible(ad)}
                          >
                            <span className={classes["btn-text"]}>
                              Read More{" "}
                              <ArrowForwardIcon sx={{ marginLeft: "5px" }} />
                            </span>
                          </button>
                          <Rodal
                            customStyles={HistoryModalStyle}
                            // width="1260"
                            // height="719"
                            enterAnimation="slideDown"
                            leaveAnimation="zoom"
                            closeOnEsc
                            visible={visible}
                            onClose={() => setVisible(false)}
                          >
                            <div className={classes["HistoryModalDiv"]}>
                              <h2 className={classes["AboutHeading"]}>
                                {t_title}
                              </h2>
                              <hr></hr>
                              <div
                                className={` ${classes["historyParadiv"]} ${classes["modalImg"]} `}
                              >
                                <p
                                  className={classes["AECP-para"]}
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
                          </Rodal>
                        </div>
                      ))
                      : ""}
                  </div>
                )}

                {oneState === "suscription" && (
                  <div className={classes["HistoryAECP"]}>
                    <div style={{ float: "left" }}>
                      <h2 className={classes["AboutHeading"]}>
                        Subscription & Fee Structure
                      </h2>
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
                    <div className={classes["mianSubscriptionDiv"]}>
                      {/* <div className={classes["SubcriptionDiv"]}>
                                                <p className={classes["AECP-para"]} dangerouslySetInnerHTML={{ __html: fee }} ></p>
                                                </div> */}

                      {fee["fee_structure_content"]?.map((feeText) => {
                        // console.log("map STRUCTURE.......", feeText)
                        return (
                          <div className={classes["SubcriptionDiv"]}>
                            <p
                              className={classes["AECP-para"]}
                              dangerouslySetInnerHTML={{
                                __html: feeText.content,
                              }}
                            ></p>
                          </div>
                        );
                      })}

                      {fee["fees"]?.map((price) => {
                        // console.log("MemberFEES", price)
                        // if (price.id === 28 || price.id === 30) {
                        if (memID.includes(price.id)) {
                          return (
                            <div className={classes["MemberShipDiv"]}>
                              <h4>
                                {price.remarks
                                  .toUpperCase()
                                  .replace("_", " ")
                                  .replace("_", " ")
                                  .replace("_", " ")
                                  .replace("_", " ")}
                              </h4>
                              <div className={classes["MemberShipCard"]}>
                                <h5>
                                  {price.remarks
                                    .toUpperCase()
                                    .replace("_", " ")
                                    .replace("_", " ")
                                    .replace("_", " ")
                                    .replace("_", " ")}
                                </h5>
                                <p>
                                  Rs.&nbsp;
                                  <span className={classes["fee"]}>
                                    {price.option_value}
                                  </span>
                                </p>
                              </div>
                            </div>
                          );
                        }
                      })}
                      <div className={classes["MemberShipDiv"]}>
                        <h4>OTHER SERVICES FEE</h4>

                        <div className={classes["otherMemberShipCard"]}>
                          {fee["fees"]?.map((otherService) => {
                            console.log("MemberFEES", otherService);
                            if (!memID.includes(otherService.id)) {
                              return (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <h5>
                                    {otherService.option_value === null ||
                                      otherService.option_value === "0"
                                      ? " "
                                      : otherService.remarks
                                        .toUpperCase()
                                        .replace("_", " ")
                                        .replace("_", " ")
                                        .replace("_", " ")
                                        .replace("_", " ")}
                                  </h5>
                                  {otherService.option_value === null ||
                                    otherService.option_value === "0" ? (
                                    " "
                                  ) : (
                                    <p>
                                      Rs.&nbsp;
                                      <span className={classes["fee"]}>
                                        {otherService.option_value}
                                      </span>
                                      &nbsp;entry
                                    </p>
                                  )}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {oneState === "rules" && (
                  <div className={classes["HistoryAECP"]}>
                    <div style={{ float: "left" }}>
                      <h2 className={classes["AboutHeading"]}>
                        Rules and Regulations
                      </h2>
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
                    <div className={classes.AccordionMainDiv}>
                      <Accordion
                        preExpanded={["a"]}
                        style={{ border: "none", paddingTop: 20 }}
                      >
                        {rulesHeading?.map((Rulesname, index) => {
                          // console.log(index, "indesx.......")
                          // console.log(Rulesname, "NAME.......")
                          return (
                            <AccordionItem
                              key={index}
                              uuid={
                                index === 0
                                  ? "a"
                                  : index === 1
                                    ? "b"
                                    : index === 2
                                      ? "c"
                                      : index === 3
                                        ? "d"
                                        : index === 4
                                          ? "e"
                                          : index === 5
                                            ? "f"
                                            : ""
                              }
                              className={classes["AccordionTitle"]}
                            >
                              <AccordionItemHeading>
                                <AccordionItemButton
                                  className={classes["AccordionItemBtn"]}
                                >
                                  {Rulesname.rule_name}
                                </AccordionItemButton>
                              </AccordionItemHeading>

                              <AccordionItemPanel>
                                <p
                                  className={classes["AccordionText"]}
                                  dangerouslySetInnerHTML={{
                                    __html: Rulesname.content
                                      ?.toString()
                                      .replace(/&lt;/g, "<")
                                      .replace(/&gt;/g, ">")
                                      .replace(/&quot;/g, '"')
                                      .replace(/&#39;/g, "'")
                                      .replace(/&amp;/g, "&"),
                                  }}
                                ></p>
                              </AccordionItemPanel>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </div>
                  </div>
                )}

                {oneState === "memberApp" && (
                  <div className={classes["HistoryAECP"]}>
                    <div style={{ float: "left" }}>
                      <h2 className={classes["AboutHeading"]}>
                        Online Membership Application
                      </h2>
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
                    <div className={classes["mianMembershipDiv"]}>
                      <p className={classes["AECP-para"]}>
                        By filling out this online form, I agree to be bound by
                        AECP (Pvt) Ltd. Rules and Bye-laws as may be amended and
                        in force, from time to time. I hereby acknowledge the
                        jurisdiction of the committee of the AECP on all
                        questions or disputes or complaints or reports of any
                        kind whatsoever, arising in respect of club related
                        activities, and I hereby expressly agree that the
                        decision of the Committee upon any question or dispute
                        or complaint or report shall be final and binding on me.
                        I further declare that I am not suspended or
                        disqualified by the Horse Club of Pakistan or any
                        affiliate bodies of the Horse Club of Pakistan, FCI or
                        the WUSV.
                      </p>
                      <form
                        onSubmit={sendResponse}
                        className={classes["MembershipInput"]}
                      >
                        <div className={classes.NameCnic}>
                          <div style={{ width: "100%" }}>
                            <label className={classes["inputLabel"]}>
                              Full Name
                            </label>
                            <input
                              className={classes["InputField"]}
                              type="text"
                              name="first_name"
                              id="first_name"
                              onBlur={setUserInfoHandler}
                              required
                            />
                          </div>
                          <div style={{ width: "100%" }}>
                            <label className={classes["inputLabel"]}>
                              CNIC
                            </label>
                            <input
                              className={classes["InputNumberField"]}
                              type="text"
                              name="cnic"
                              id="cnic"
                              required
                              onBlur={setUserInfoHandler}
                            />
                          </div>
                        </div>
                        <div className={classes.CityPhone}>
                          <div style={{ width: "100%" }}>
                            <label
                              for="cities"
                              className={classes["inputLabel"]}
                            >
                              City
                            </label>
                            {/* <input type="text" className={classes["InputField"]} /> */}

                            <select
                              className={classes["InputSelectField"]}
                              type="text"
                              name="city"
                              id="city"
                              required
                              onBlur={setUserInfoHandler}
                            >
                              {cityNames.map((city) => (
                                <option value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                          <div style={{ width: "100%" }}>
                            <label className={classes["inputLabel"]}>
                              Phone Number
                            </label>
                            <input
                              className={classes["InputNumberField"]}
                              type="text"
                              name="phone"
                              id="phone"
                              required
                              onBlur={setUserInfoHandler}
                            />
                          </div>
                        </div>
                        <div className={classes.AddressEmail}>
                          <div style={{ width: "100%" }}>
                            <label className={classes["inputLabel"]}>
                              Address
                            </label>
                            <input
                              className={classes["InputField"]}
                              type="text"
                              name="address"
                              id="address"
                              required
                              onBlur={setUserInfoHandler}
                            />
                          </div>
                          <div style={{ width: "100%", marginBottom: 15 }}>
                            <label className={classes["inputLabel"]}>
                              Email
                            </label>
                            <input
                              className={classes["InputField"]}
                              type="text"
                              name="email"
                              required
                              id="email"
                              onBlur={setUserInfoHandler}
                            />
                          </div>
                        </div>
                        <input
                          id="contained-button-file"
                          type="file"
                          style={{ display: "none" }}
                          name="photo"
                          accept="image/*"
                          required
                          onChange={setUserInfoHandler}
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            className={classes["ChooseFile"]}
                          >
                            Choose File
                          </Button>
                        </label>

                        <div className={classes["MemberShipDiv"]}>
                          <div className={classes["MemberShipCard"]}>
                            <h5>Membership Application Fee</h5>
                            <p>
                              Rs.&nbsp;
                              <span className={classes["fee"]}>2500</span>
                            </p>
                            <h5>Annual Subscription Fee</h5>
                            <p>
                              Rs.&nbsp;
                              <span className={classes["fee"]}>2000</span>
                            </p>
                          </div>
                        </div>

                        <div style={{ display: "flex", marginTop: 20 }}>
                          <p className={classes["AECP-para"]}>
                            Once you click Submit, your membership application
                            will be received and you will be contacted by our
                            staff for facilitation of payment. All payments are
                            only acceptable in the form of a Bank Draft or Pay
                            Order, drawn on a local back and made out in favour
                            of "AECP (Pvt) Ltd." No payments made via any other
                            method are acceptable.
                          </p>
                        </div>

                        <div
                          className={classes["BtnDiv"]}
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            marginTop: 20,
                            gap: 10,
                          }}
                        >
                          <button type="button" className={classes["DownBtn"]}>
                            Download Form
                          </button>
                          <button
                            type="submit"
                            className={classes["SubmitBtn"]}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {oneState === "AECPteam" && (
                  <div className={classes["AECPteam"]}>
                    {committies?.length > 0
                      ? committies.map((c) => (
                        <div
                          className={classes["ManagingCommitteDiv"]}
                          style={{ marginBottom: "5rem" }}
                        >
                          <div style={{ float: "left " }}>
                            <h2 className={classes["AboutHeading"]}>
                              {c.name}
                            </h2>
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
                          <div className={classes["CommitteeDiv"]}>
                            {team.length > 0
                              ? team.map((t) => (
                                <>
                                  {t.committee == c.id ? (
                                    <div
                                      className={classes["memberCardDiv"]}
                                      style={{}}
                                    >
                                      <div
                                        className={classes["memberCard1"]}
                                        style={{}}
                                      >
                                        <img
                                          src={
                                            t.image != null
                                              ? "https://admin.arabians.pk/website_images/team-members/" +
                                              t.image
                                              : "https://admin.arabians.pk/public/img/blank.jpg"
                                          }
                                          alt={t.full_name}
                                          className={
                                            classes["MemberImages"]
                                          }
                                        ></img>
                                        <div
                                          className={classes["NameDesc"]}
                                        >
                                          <h2
                                            className={
                                              classes["MemberName"]
                                            }
                                          >
                                            {t.full_name}
                                          </h2>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <button
                                          className={classes.Biobtn}
                                          onClick={() => ShowTeam(t)}
                                        >
                                          <span
                                            className={classes["Biotext"]}
                                          >
                                            Read Bio{" "}
                                            <ArrowForwardIcon
                                              sx={{ marginLeft: "5px" }}
                                            />
                                          </span>
                                        </button>
                                        <Rodal
                                          // customStyles={BreedModalStyle}
                                          customStyles={HistoryModalStyle}
                                          // width="1260"
                                          enterAnimation="slideDown"
                                          leaveAnimation="zoom"
                                          closeOnEsc
                                          visible={show}
                                          onClose={() => setShow(false)}
                                        >
                                          <div
                                            className={
                                              classes["BreedModalDiv"]
                                            }
                                          >
                                            <h2
                                              className={
                                                classes["ModalMemberName"]
                                              }
                                            >
                                              {t_full_name}
                                              <span
                                                className={
                                                  classes[
                                                  "ModalMemberPosition"
                                                  ]
                                                }
                                              >
                                                {t_position}
                                              </span>
                                            </h2>
                                            <hr></hr>
                                            <div
                                              className={
                                                classes["modalImg"]
                                              }
                                            >
                                              <div
                                                className={
                                                  classes["personDetails"]
                                                }
                                                style={{}}
                                              >
                                                <div
                                                  className={
                                                    classes["ImgDiv"]
                                                  }
                                                  style={{}}
                                                >
                                                  <img
                                                    src={
                                                      t_image != null
                                                        ? "https://admin.arabians.pk/website_images/team-members/" +
                                                        t_image
                                                        : "https://admin.arabians.pk/public/img/blank.jpg"
                                                    }
                                                    alt="aasas"
                                                    className={
                                                      classes["PersonImage"]
                                                    }
                                                  />
                                                </div>
                                                <div
                                                  className={
                                                    classes["personInfoDiv"]
                                                  }
                                                >
                                                  <div
                                                    className={
                                                      classes["NameDiv"]
                                                    }
                                                  >
                                                    <span
                                                      className={
                                                        classes["fName"]
                                                      }
                                                    >
                                                      Full name:
                                                    </span>
                                                    <span
                                                      className={
                                                        classes[
                                                        "fNameValue"
                                                        ]
                                                      }
                                                    >
                                                      {t_full_name}
                                                    </span>
                                                  </div>
                                                  <div
                                                    className={
                                                      classes["PositionDiv"]
                                                    }
                                                  >
                                                    <span
                                                      className={
                                                        classes["fName"]
                                                      }
                                                    >
                                                      Position:
                                                    </span>
                                                    <span
                                                      className={
                                                        classes[
                                                        "fNameValue"
                                                        ]
                                                      }
                                                    >
                                                      {t_position}
                                                    </span>
                                                  </div>
                                                  <div
                                                    className={
                                                      classes["EmailDiv"]
                                                    }
                                                  >
                                                    <span
                                                      className={
                                                        classes["fName"]
                                                      }
                                                    >
                                                      Email:
                                                    </span>
                                                    <span
                                                      className={
                                                        classes[
                                                        "fNameValue"
                                                        ]
                                                      }
                                                    >
                                                      {t_email}
                                                    </span>
                                                  </div>
                                                  <div
                                                    className={
                                                      classes["SocialDiv"]
                                                    }
                                                  >
                                                    <span
                                                      className={
                                                        classes["fName"]
                                                      }
                                                    >
                                                      Social Links:
                                                    </span>
                                                    <a href={t_tw}>
                                                      <span
                                                        className={
                                                          classes[
                                                          "fNameValue"
                                                          ]
                                                        }
                                                        style={{
                                                          display: "flex",
                                                          gap: 5,
                                                        }}
                                                      >
                                                        <img
                                                          src={tweeter}
                                                          alt="tweeter"
                                                          className={
                                                            classes[
                                                            "tweeter"
                                                            ]
                                                          }
                                                        />
                                                      </span>
                                                    </a>
                                                    <a href={t_fb}>
                                                      <span
                                                        className={
                                                          classes[
                                                          "fNameValue"
                                                          ]
                                                        }
                                                        style={{
                                                          display: "flex",
                                                          gap: 5,
                                                        }}
                                                      >
                                                        <img
                                                          src={facebook}
                                                          alt="fb"
                                                          className={
                                                            classes["FB"]
                                                          }
                                                        />
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div>
                                                <p
                                                  className={
                                                    classes[
                                                    "standardModalText"
                                                    ]
                                                  }
                                                  dangerouslySetInnerHTML={{
                                                    __html: t_description
                                                      .replace(/&lt;/g, "<")
                                                      .replace(/&gt;/g, ">")
                                                      .replace(
                                                        /&quot;/g,
                                                        '"'
                                                      )
                                                      .replace(
                                                        /&#39;/g,
                                                        "'"
                                                      )
                                                      .replace(
                                                        /&amp;/g,
                                                        "&"
                                                      ),
                                                  }}
                                                ></p>
                                              </div>
                                            </div>
                                          </div>
                                        </Rodal>
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ))
                              : ""}
                          </div>
                        </div>
                      ))
                      : ""}
                  </div>
                )}
                {oneState === "AECPjudges" && (
                  <div className={classes["HistoryAECP"]}>
                    <div style={{ float: "left" }}>
                      <h2 className={classes["AboutHeading"]}>AECP Judges</h2>
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
                    <div className={classes["AECPJudges"]}>
                      {judges.map((items) => (
                        // <div className={classes["memberMainCard"]} style={{}}>
                        <>
                          <div className={classes["memberCardDiv"]} style={{}}>
                            <div className={classes["memberCard1"]} style={{}}>
                              <img
                                src={
                                  items.imageUrl ||
                                  "https://admin.arabians.pk/public/img/blank.jpg"
                                }
                                alt={items.full_name}
                                className={classes["MemberImages"]}
                              ></img>
                              <div className={classes["NameDesc"]}>
                                <h2 className={classes["MemberName"]}>
                                  {items.full_name}
                                </h2>
                                <p className={classes["MemberDesc"]}>
                                  {items.position_in_club}
                                </p>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: 50,
                              }}
                            >
                              <button
                                className={classes.Biobtn}
                                onClick={setShow}
                              >
                                <span className={classes["Biotext"]}>
                                  Read Bio{" "}
                                  <ArrowForwardIcon
                                    sx={{ marginLeft: "5px" }}
                                  />
                                </span>
                              </button>
                              <Rodal
                                // customStyles={BreedModalStyle}
                                customStyles={HistoryModalStyle}
                                // width="1260"
                                enterAnimation="slideDown"
                                leaveAnimation="zoom"
                                closeOnEsc
                                visible={show}
                                onClose={() => setShow(false)}
                              >
                                <div className={classes["BreedModalDiv"]}>
                                  <h2 className={classes["ModalMemberName"]}>
                                    {items.full_name}
                                    <span
                                      className={classes["ModalMemberPosition"]}
                                    >
                                      {items.position_in_club}
                                    </span>
                                  </h2>
                                  <hr></hr>
                                  <div className={classes["modalImg"]}>
                                    <div
                                      className={classes["personDetails"]}
                                      style={{}}
                                    >
                                      <div
                                        className={classes["ImgDiv"]}
                                        style={{}}
                                      >
                                        <img
                                          src={
                                            items.image ||
                                            "https://admin.arabians.pk/public/img/blank.jpg"
                                          }
                                          alt="aasas"
                                          className={classes["PersonImage"]}
                                        />
                                      </div>
                                      <div className={classes["personInfoDiv"]}>
                                        <div className={classes["NameDiv"]}>
                                          <span className={classes["fName"]}>
                                            Full name:
                                          </span>
                                          <span
                                            className={classes["fNameValue"]}
                                          >
                                            {items.full_name}
                                          </span>
                                        </div>
                                        <div className={classes["PositionDiv"]}>
                                          <span className={classes["fName"]}>
                                            Position:
                                          </span>
                                          <span
                                            className={classes["fNameValue"]}
                                          >
                                            {items.position_in_club}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <p className={classes["PersonDesc"]}>
                                        {items.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Rodal>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                )}
                {oneState === "news" && <AboutNews itemsPerPage={4} />}
                {oneState === "constitution" && <AECPConstitution />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutAECP;
