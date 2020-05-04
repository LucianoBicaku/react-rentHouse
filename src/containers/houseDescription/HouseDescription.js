import React, { useState, useEffect } from "react";
import "./HouseDescription.css";

export default function HouseDescription(props) {
  const [data, setData] = useState(null);
  const [showComents, setShowComments] = useState(false);
  useEffect(() => {
    setData(props.info);
  }, [props.info]);
  if (data === null) {
    return null;
  }
  return (
    <div className="grid-2">
      <div className="grid-2-item">
        <div className="main-img-house">
          <img src={data.img} alt="main Img" />
        </div>
        <div className="sec-imgs-house">
          <img src="" alt="sec Img" />
          <img src="" alt="sec Img" />
          <img src="" alt="sec Img" />
        </div>
        <div className="more-img-house">
          <button
            onClick={() => {
              console.log(data);
            }}
          >
            More
          </button>
        </div>
      </div>
      <div className="grid-2-item">
        <div className="grid-2-description">
          <h3>{data.description}</h3>
          <p>{data.cmimi}</p>
          <p>
            <button>logo</button>
            {data.adress ? data.adress.rruga : ""}
          </p>
          <p>{data.gjendja}</p>

          <p>
            Lloji:{data.lloji} Siperfaqa: {data.siperfaqa} m<sup>2</sup> nr
            dhomash: {data.nr_dhomash}
          </p>
          <div className="house-desc-buttons">
            <button
              onClick={() => {
                setShowComments(!showComents);
              }}
            >
              Past references
            </button>
            <button>Request a tour</button>
          </div>
        </div>
        {showComents ? (
          data.past_refernces ? (
            data.past_refernces.map((elem) => {
              return (
                <div className="past-references" key={data._id}>
                  <div className="past-reference-img">
                    <img src="" alt="usersImg" />
                  </div>
                  <div className="past-reference-content">
                    <h1>Users profile Name</h1>
                    <p>{data.past_refernces}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
