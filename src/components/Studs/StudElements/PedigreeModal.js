// import React from "react";
import { Modal } from "@material-ui/core";
import { Box } from "@mui/material";
import pedigreeImage from "../../../assets/images/pedigree-image.png";

// hamza
import React, { useEffect, useState } from "react";
import './Pedigree.css'
import { viewPedigree } from "../../../apis";
import { useParams } from "react-router-dom";

const placeHolder = "https://illustoon.com/photo/3047.png"

const style = {
  position: "absolute",
  // top: "50%",
  marginTop: "375px",
  left: "50%",
  transform: "translate(-50%, -52%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
  width: "90%",
  borderRadius: 5
};

const PedigreeModal = ({ open, setOpen }) => {
  const [padigree, setPadigree] = useState("");
  // console.log(padigree?.pedigree?.gen1?.father, "helooo-----")
  const horseId = useParams().horseId;
  const imageURL = `https://admin.rottweiler.pk/public/dog_images/`


  const fetchData = async () => {
    const resData = await viewPedigree(horseId)
    const response = await resData.json()
    setPadigree(response)
  }


  useEffect(() => {
    fetchData()
  }, [])
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* <img src={pedigreeImage} alt="" /> */}

        <div id="tree">
          <div className="branch">
            <div className="entry" style={{ background: " " }}>
              <span style={{ background: "pink" }}>
                <div id={padigree && padigree?.father_id}>
                  <div className="paddigery-img-ii" >
                    <img alt="horse-pic"
                      src={
                        padigree?.father_image
                          ? imageURL + padigree?.father_id + "/" + padigree?.father_image
                          : placeHolder
                      }
                    />
                  </div>
                  <div className="paddigery-text py-2">
                    {/* {padigree?.father ? padigree?.father?.slice(0, 20) + "...." : "Unkown"} */}

                    {padigree?.pedigree?.gen1?.father.length === 0 ? (
                      <p style={{ fontWeight: "bold" }}>No father data</p>
                    ) : (
                      padigree?.pedigree?.gen1?.father.map((fatherData, i) => (
                        <h6 className="font-weight-bold" key={i}>
                          {fatherData}
                        </h6>
                      )
                      ))}
                  </div>
                </div>
              </span>
              <div className="branch" style={{ background: "" }}>
                <div className="entry" style={{ background: "" }}>
                  <span style={{ background: "pink" }}>
                    <div style={{ zIndex: 1000 }}
                      id={padigree && padigree?.father_id}
                    >
                      {/* <div className="d-flex justify-content-between align-items-center"> */}
                      <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="paddigery-img-i">
                          <img alt="horse-pic"
                            src={
                              padigree && padigree?.fatherFather_image
                                ? imageURL + padigree?.fatherFather_id + "/" + padigree?.fatherFather_image
                                : placeHolder
                            }
                          />
                        </div>
                        <div className="paddigery-text py-2">
                          {padigree?.pedigree?.gen2?.gfather1.length === 0 ? (
                            <p>No gfather1 Data </p>
                          ) : (
                            padigree?.pedigree?.gen2?.gfather1.map((gfather1Data, i) => (
                              <h6 className="" key={i}>
                                {gfather1Data}
                              </h6>
                            )
                            ))}
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="branch">
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "brown" }}>
                        {/* <div className="d-flex justify-content-between align-items-center"> */}
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree && padigree?.fathersfathersfather_image
                                  ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggfather1.length === 0 ? (
                              <p style={{}}>No ggfather1 data</p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggfather1.map((ggfather1Data, i) => (
                                <h6 className="font-weight-bold" key={i}>
                                  {ggfather1Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>

                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "wheat" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather1.length === 0 ? (
                                  <p style={{}}>No gggfather1 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather1.map((gggfather1Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather1Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "peachpuff" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {/* <h6 className="" style={{ fontWeight: "bold" }}>
                                      {padigree && padigree?.fathersfathersfather ? padigree?.fathersfathersfather?.slice(0, 13) + "...." : "Unkown"}
                                    </h6> */}

                                    {padigree?.pedigree?.gen5?.ggggfather1.length === 0 ? (
                                      <p style={{}}>No ggggfather1 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather1.map((ggggfather1Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather1Data}
                                        </h6>
                                      )
                                      ))}

                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "mediumpurple" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother1.length === 0 ? (
                                      <p style={{}}>No ggggmother1 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother1.map((ggggmother1Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother1Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "violet" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother1.length === 0 ? (
                                  <p style={{}}>No gggmother1 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother1.map((gggmother1Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother1Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>
                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "springgreen" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather2.length === 0 ? (
                                      <p style={{}}>No ggggfather2 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather2.map((ggggfather2Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather2Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "springgreen" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother2.length === 0 ? (
                                      <p style={{}}>No ggggmother2 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother2.map((ggggmother2Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother2Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "mediumpurple" }}>
                        {/* <div className="d-flex justify-content-between align-items-center"> */}
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree && padigree?.fathersfathersmother_id ?
                                  imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggmother1.length === 0 ? (
                              <p style={{}}>No ggmother1 data</p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggmother1.map((ggmother1Data, i) => (
                                <h6 className="font-weight-bold" key={i}>
                                  {ggmother1Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>
                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "darkturquoise " }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather2.length === 0 ? (
                                  <p style={{}}>No gggfather2 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather2.map((gggfather2Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather2Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "rosybrown" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather3.length === 0 ? (
                                      <p style={{}}>No ggggfather3 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather3.map((ggggfather3Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather3Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "rosybrown" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother3.length === 0 ? (
                                      <p style={{}}>No ggggmother3 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother3.map((ggggmother3Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother3Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "turquoise" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother2.length === 0 ? (
                                  <p style={{}}>No gggmother2 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother2.map((gggmother2Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother2Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "sienna" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather4.length === 0 ? (
                                      <p style={{}}>No ggggfather4 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather4.map((ggggfather4Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather4Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "sienna" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother4.length === 0 ? (
                                      <p style={{}}>No ggggmother4 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother4.map((ggggmother4Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother4Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry" style={{ background: "" }}>
                  <span style={{ background: "lightgray" }}>
                    {/* <div className="d-flex justify-content-between align-items-center"> */}
                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div className="paddigery-img-i">
                        <img alt="horse-pic"
                          src={
                            padigree &&
                              padigree?.fatherMother_image ?
                              imageURL + padigree?.fatherMother_id + "/" + padigree?.fatherMother_image
                              : placeHolder
                          }
                        />
                      </div>
                      <div className="paddigery-text py-2">
                        {/* {padigree?.fatherMother ? padigree?.fatherMother?.slice(0, 13) + "...." : "Unknown"} */}
                        {padigree?.pedigree?.gen2?.gmother1.length === 0 ? (
                          <p>No gmother1 Data </p>
                        ) : (
                          padigree?.pedigree?.gen2?.gmother1.map((gmother1Data, i) => (
                            <h6 className="" key={i}>
                              {gmother1Data}
                            </h6>
                          )
                          ))}
                      </div>
                    </div>
                  </span>


                  <div className="branch">
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "chocolate" }}>
                        {/* <div className="d-flex justify-content-between align-items-center"> */}
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree &&
                                  padigree?.fathersmothersfather_image ?
                                  imageURL + padigree?.fathersmothersfather_id + "/" + padigree?.fathersmothersfather_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggfather2.length === 0 ? (
                              <p style={{}}>No ggfather2 data</p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggfather2.map((ggfather2Data, i) => (
                                <h6 className="font-weight-bold" key={i}>
                                  {ggfather2Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>

                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "mediumorchid" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather3.length === 0 ? (
                                  <p style={{}}>No gggfather3 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather3.map((gggfather3Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather3Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "dodgerblue" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather5.length === 0 ? (
                                      <p style={{}}>No ggggfather5 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather5.map((ggggfather5Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather5Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "dodgerblue" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother5.length === 0 ? (
                                      <p style={{}}>No ggggmother5 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother5.map((ggggmother5Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother5Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "palegreen" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother3.length === 0 ? (
                                  <p style={{}}>No gggmother3 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother3.map((gggmother3Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother3Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "forestgreen" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather6.length === 0 ? (
                                      <p style={{}}>No ggggfather6 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather6.map((ggggfather6Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather6Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "forestgreen" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother6.length === 0 ? (
                                      <p style={{}}>No ggggmother6 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother6.map((ggggmother6Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother6Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry">
                      <span style={{ background: "tan" }}>
                        {/* <div className="d-flex justify-content-between align-items-center"> */}
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree && padigree?.fathersmothersmother_image ?
                                  imageURL + padigree?.fathersmothersmother_id + "/" + padigree?.fathersmothersmother_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggmother2.length === 0 ? (
                              <p style={{}}>No ggmother2 data</p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggmother2.map((ggmother2Data, i) => (
                                <h6 className="font-weight-bold" key={i}>
                                  {ggmother2Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>
                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "yellowgreen" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather4.length === 0 ? (
                                  <p style={{}}>No gggfather4 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather4.map((gggfather4Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather4Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "lightcyan" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather7.length === 0 ? (
                                      <p style={{}}>No ggggfather7 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather7.map((ggggfather7Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather7Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "lightcyan" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother7.length === 0 ? (
                                      <p style={{}}>No ggggmother7 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother7.map((ggggmother7Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother7Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "bisque" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother4.length === 0 ? (
                                  <p style={{}}>No gggmother4 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother4.map((gggmother4Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother4Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>
                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "aquamarine" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather8.length === 0 ? (
                                      <p style={{}}>No ggggfather8 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather8.map((ggggfather8Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather8Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "aquamarine" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother8.length === 0 ? (
                                      <p style={{}}>No ggggmother8 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother8.map((ggggmother8Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother8Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="entry" >
              <span style={{ background: "skyblue" }}>
                <div>
                  <div className="paddigery-img-ii">
                    <img alt="horse-pic"
                      src={
                        padigree &&
                          padigree?.mother_image ?
                          imageURL + padigree?.mother_id + "/" + padigree?.mother_image
                          : placeHolder
                      }
                    />
                  </div>
                  <div className="paddigery-text py-2">
                    {/* {padigree?.mother ? padigree?.mother?.slice(0, 20) + "...." : "Unkown"} */}
                    {padigree?.pedigree?.gen1?.mother.length === 0 ? (
                      <p style={{ fontWeight: "bold" }}>No mother data</p>
                    ) : (
                      padigree?.pedigree?.gen1?.mother.map((montherData, i) => (
                        <h6 className="font-weight-bold" key={i}>
                          {montherData}
                        </h6>
                      )
                      ))}
                  </div>
                </div>
              </span>
              <div className="branch">
                <div className="entry" style={{ background: "" }}>
                  <span style={{ background: "aqua" }}>
                    {/* <div className="d-flex justify-content-between align-items-center"> */}
                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div className="paddigery-img-i">
                        <img alt="horse-pic"
                          src={
                            padigree &&
                              padigree?.MotherFather_image ?
                              imageURL + padigree?.MotherFather_id + "/" + padigree?.MotherFather_image
                              : placeHolder
                          }
                        />
                      </div>
                      <div className="paddigery-text py-2">
                        {/* {padigree?.MotherFather ? padigree?.MotherFather?.slice(0, 13) + "...." : "Unknown"} */}
                        {padigree?.pedigree?.gen2?.gfather2.length === 0 ? (
                          <p>No gfather2 Data </p>
                        ) : (
                          padigree?.pedigree?.gen2?.gfather2.map((gfather2Data, i) => (
                            <h6 className="" key={i}>
                              {gfather2Data}
                            </h6>
                          )
                          ))}
                      </div>
                    </div>
                  </span>
                  <div className="branch">
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "limegreen" }}>
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree &&
                                  padigree?.mothersfathersfather_image ?
                                  imageURL + padigree?.mothersfathersfather_id + "/" + padigree?.mothersfathersfather_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggfather3.length === 0 ? (
                              <p>No ggfather3 Data </p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggfather3.map((ggfather3Data, i) => (
                                <h6 className="" key={i}>
                                  {ggfather3Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>
                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "sandybrown" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather5.length === 0 ? (
                                  <p style={{}}>No gggfather5 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather5.map((gggfather5Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather5Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "hotpink" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather9.length === 0 ? (
                                      <p style={{}}>No ggggfather9 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather9.map((ggggfather9Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather9Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "hotpink" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother9.length === 0 ? (
                                      <p style={{}}>No ggggmother9 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother9.map((ggggmother9Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother9Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "navajowhite" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother5.length === 0 ? (
                                  <p style={{}}>No gggmother5 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother5.map((gggmother5Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother5Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>
                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "coral" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather10.length === 0 ? (
                                      <p style={{}}>No ggggfather10 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather10.map((ggggfather10Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather10Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "coral" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother10.length === 0 ? (
                                      <p style={{}}>No ggggmother10 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother10.map((ggggmother10Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother10Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "mediumseagreen" }}>
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree &&
                                  padigree?.mothersfathersmother_image ?
                                  imageURL + padigree?.mothersfathersmother_id + "/" + padigree?.mothersfathersmother_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggmother3.length === 0 ? (
                              <p>No ggmother3 Data </p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggmother3.map((ggmother3Data, i) => (
                                <h6 className="" key={i}>
                                  {ggmother3Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>

                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "fuchsia" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather6.length === 0 ? (
                                  <p style={{}}>No gggfather6 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather6.map((gggfather6Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather6Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>
                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "darkorange" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather11.length === 0 ? (
                                      <p style={{}}>No ggggfather11 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather11.map((ggggfather11Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather11Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "darkorange" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother11.length === 0 ? (
                                      <p style={{}}>No ggggmother11 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother11.map((ggggmother11Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother11Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "thistle " }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother6.length === 0 ? (
                                  <p style={{}}>No gggmother6 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother6.map((gggmother6Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother6Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>
                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "darkkhaki" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather12.length === 0 ? (
                                      <p style={{}}>No ggggfather12 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather12.map((ggggfather12Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather12Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "darkkhaki" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother12.length === 0 ? (
                                      <p style={{}}>No ggggmother12data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother12.map((ggggmother12Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother12Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry" style={{ background: "" }}>
                  <span style={{ background: "aqua" }}>
                    <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div className="paddigery-img-i">
                        <img alt="horse-pic"
                          src={
                            padigree &&
                              padigree?.motherMother_image ?
                              imageURL + padigree?.motherMother_id + "/" + padigree?.motherMother_image
                              : placeHolder
                          }
                        />
                      </div>
                      <div className="paddigery-text py-2">
                        {/* {padigree?.motherMother ? padigree?.motherMother?.slice(0, 13) + "...." :"Unkown"} */}
                        {padigree?.pedigree?.gen2?.gmother2.length === 0 ? (
                          <p>No gmother2 Data </p>
                        ) : (
                          padigree?.pedigree?.gen2?.gmother2.map((gmother2Data, i) => (
                            <h6 className="" key={i}>
                              {gmother2Data}
                            </h6>
                          )
                          ))}
                      </div>
                    </div>
                  </span>
                  <div className="branch">
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "khaki" }}>
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree && padigree?.mothersmothersfather_image ?
                                  imageURL + padigree?.mothersmothersfather_id + "/" + padigree?.mothersmothersfather_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggfather4.length === 0 ? (
                              <p>No ggfather4 Data </p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggfather4.map((ggfather4Data, i) => (
                                <h6 className="" key={i}>
                                  {ggfather4Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>

                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "IndianRed" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather7.length === 0 ? (
                                  <p style={{}}>No gggfather7 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather7.map((gggfather7Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather7Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "plum" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather13.length === 0 ? (
                                      <p style={{}}>No ggggfather13 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather13.map((ggggfather13Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather13Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "plum" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother13.length === 0 ? (
                                      <p style={{}}>No ggggmother13data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother13.map((ggggmother13Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother13Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "moccasin" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother7.length === 0 ? (
                                  <p style={{}}>No gggmother7 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother7.map((gggmother7Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother7Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "teal" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather14.length === 0 ? (
                                      <p style={{}}>No ggggfather14 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather14.map((ggggfather14Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather14Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "teal" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">

                                    {padigree?.pedigree?.gen5?.ggggmother14.length === 0 ? (
                                      <p style={{}}>No ggggmother14 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother14.map((ggggmother14Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother14Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry" style={{ background: "" }}>
                      <span style={{ background: "deepskyblue" }}>
                        <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div className="paddigery-img-iii">
                            <img alt="horse-pic"
                              src={
                                padigree && padigree?.mothersmothersmother_image ?
                                  imageURL + padigree?.mothersmothersmother_id + "/" + padigree?.mothersmothersmother_image
                                  : placeHolder
                              }
                            />
                          </div>
                          <div className="paddigery-text py-2">
                            {padigree?.pedigree?.gen3?.ggmother4.length === 0 ? (
                              <p>No ggmother4 Data </p>
                            ) : (
                              padigree?.pedigree?.gen3?.ggmother4.map((ggmother4Data, i) => (
                                <h6 className="" key={i}>
                                  {ggmother4Data}
                                </h6>
                              )
                              ))}
                          </div>
                        </div>
                      </span>

                      {/* //sub entery */}

                      <div className="branch">
                        <div className="entry">
                          <span style={{ background: "olivedrab" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersfather_image
                                      ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggfather8.length === 0 ? (
                                  <p style={{}}>No gggfather8 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggfather8.map((gggfather8Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggfather8Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "cadetblue" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather15.length === 0 ? (
                                      <p style={{}}>No ggggfather15 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather15.map((ggggfather15Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather15Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "cadetblue" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother15.length === 0 ? (
                                      <p style={{}}>No ggggmother15 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother15.map((ggggmother15Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother15Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="entry">
                          <span style={{ background: "silver" }}>
                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div className="paddigery-img-iii">
                                <img alt="horse-pic"
                                  src={
                                    padigree && padigree?.fathersfathersmother_id ?
                                      imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                      : placeHolder
                                  }
                                />
                              </div>
                              <div className="paddigery-text py-2">
                                {padigree?.pedigree?.gen4?.gggmother8.length === 0 ? (
                                  <p style={{}}>No gggmother8 data</p>
                                ) : (
                                  padigree?.pedigree?.gen4?.gggmother8.map((gggmother8Data, i) => (
                                    <h6 className="font-weight-bold" key={i}>
                                      {gggmother8Data}
                                    </h6>
                                  )
                                  ))}
                              </div>
                            </div>
                          </span>

                          {/* //sub entery */}

                          <div className="branch">
                            <div className="entry">
                              <span style={{ background: "powderblue" }}>
                                {/* <div className="d-flex justify-content-between align-items-center"> */}
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersfather_image
                                          ? imageURL + padigree?.fathersfathersfather_id + "/" + padigree?.fathersfathersfather_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggfather16.length === 0 ? (
                                      <p style={{}}>No ggggfather16 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggfather16.map((ggggfather16Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggfather16Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                            <div className="entry">
                              <span style={{ background: "powderblue" }}>
                                <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                  <div className="paddigery-img-iii">
                                    <img alt="horse-pic"
                                      src={
                                        padigree && padigree?.fathersfathersmother_id ?
                                          imageURL + padigree?.fathersfathersmother_id + "/" + padigree?.fathersfathersmother_image
                                          : placeHolder
                                      }
                                    />
                                  </div>
                                  <div className="paddigery-text py-2">
                                    {padigree?.pedigree?.gen5?.ggggmother16.length === 0 ? (
                                      <p style={{}}>No ggggmother16 data</p>
                                    ) : (
                                      padigree?.pedigree?.gen5?.ggggmother16.map((ggggmother16Data, i) => (
                                        <h6 className="font-weight-bold" key={i}>
                                          {ggggmother16Data}
                                        </h6>
                                      )
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PedigreeModal;
