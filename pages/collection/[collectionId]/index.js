import Link from "next/link";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCard from "../../../components/CollectionPage/ItemCard";
import { DummyItemData } from "../../../components/DummyItemData";
import { DUMMY_DATA } from "../../../components/DummyData";
import { useState } from "react";
const DetailPage = ({ data, filterItemData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="imageBanner d-flex">
        <img
          src={data.bgUrl}
          alt="..."
          style={{ objectFit: "cover", height: "220px", width: "100%" }}
        />
      </div>
      <div className="d-flex">
        <div className="collectionPfp mx-auto">
          <img
            src={data.pfp}
            alt="..."
            style={{ objectFit: "cover", height: "130px", width: "130px" }}
            className="rounded-circle bg-white p-1"
          />
        </div>
      </div>
      <h2 className="text-center my-3 collectionpageTitle">
        {data.collectionname}
      </h2>
      <div className="text-center collectionpageCreatedBy d-flex flex-row justify-content-center mb-3">
        Created by
        <Link href="#">
          <div className="text-primary px-1" role="button">
            {data.username}
          </div>
        </Link>
      </div>
      <div className="d-flex flex-row py-3 justify-content-center text-center">
        <div className="d-flex flex-column collectionDetail4boxes">
          <div className="my-auto">
            <div>{data.item}</div>
            <div className="greyFont">items</div>
          </div>
        </div>
        <div className="d-flex flex-column collectionDetail4boxes">
          <div className="my-auto">
            <div>{data.owner}</div>
            <div className="greyFont">owners</div>
          </div>
        </div>
        <div className="d-flex flex-column collectionDetail4boxes">
          <div className="my-auto">
            <div><img src="/ethlogo.svg" height={'23px'} style={{marginTop: '-5px'}}/> {data.floorPrice}</div>
            <div className="greyFont">floor price</div>
          </div>
        </div>
        <div className="d-flex flex-column collectionDetail4boxes">
          <div className="my-auto">
            <div><img src="/ethlogo.svg" height={'23px'} style={{marginTop: '-5px'}}/> {data.traded}</div>
            <div className="greyFont">volume traded</div>
          </div>
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center discriptionOfCollection my-3">
        <span className="discriptionOfCollectionContent">
          <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {data.description}
          </ReactReadMoreReadLess>
        </span>
      </div>
      {filterItemData.length === 0 ? (
        <div className="text-center text-danger">
          This Collection has no items.
        </div>
      ) : (
        <>
      <div className="d-flex flex-row justify-content-center border-bottom">
        <h5>Items</h5>
      </div>
        <div className="collectionItems">
          <div className="container d-none d-xl-block mt-3">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <div className="d-inline my-auto mx-2">Price Filter : </div>
                <div className="d-inline mx-2">
                  <select className="form-select d-inline selectfiltercollection p-2">
                    <option value="1">United States Dollar (USD)</option>
                    <option value="2">Ether (ETH)</option>
                  </select>
                </div>
                <div className="d-inline my-auto mx-2">
                  <div className="d-inline">
                    <input placeholder="min" className="minmaxFilter p-2" />
                  </div>
                  <div className="d-inline mx-2">to</div>
                  <div className="d-inline">
                    <input placeholder="max" className="minmaxFilter p-2" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill d-inline mx-2 p-2 px-3"
                >
                  Apply
                </button>
              </div>

              <div className="border rounded d-flex flex-row">
                <div className="my-auto mx-3">
                  <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15 }} />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="search items"
                    className="form-control p-2 border-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-center mt-3 d-xl-none">
            <div className="border rounded d-flex flex-row">
              <div className="my-auto mx-3">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: 15 }} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search items"
                  className="form-control p-2 border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr className="d-xl-none" />
          {/* <div className="d-flex flex-row container"> */}
          <div className="container d-flex flex-column mx-auto d-xl-none">
            <div className="my-auto text-center">Price Filter</div>
            <div className="m-2 d-flex justify-content-center">
              <select className="form-select selectfiltercollection p-2">
                <option value="1">United States Dollar (USD)</option>
                <option value="2">Ether (ETH)</option>
              </select>
            </div>
            <div className="d-flex justify-content-center my-auto">
              <div className="d-inline">
                <input placeholder="min" className="minmaxFilter p-2 mx-2" />
              </div>
              <div className="d-inline mx-2 my-auto">to</div>
              <div className="d-inline">
                <input placeholder="max" className="minmaxFilter p-2 mx-2" />
              </div>
            </div>
            <div className="text-center my-2">
              <button
                type="submit"
                className="btn btn-primary rounded-pill mx-2 p-2 px-4"
              >
                Apply
              </button>
            </div>
          </div>
          {/* </div> */}

          <br />
          {/* <div className="container">308 items</div> */}
          <br />
          <div className="container">
            <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4">
              {filterItemData.map((data) => {
                return (
                  <div
                    key={data.id}
                    className={
                      data.itemname
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                        ? "hello w-0"
                        : "itemNone"
                    }
                  >
                    <ItemCard
                      id={data.id}
                      key={data.id}
                      imgUrl={data.imgUrl}
                      username={data.username}
                      collectionname={data.collectionname}
                      itemname={data.itemname}
                      price={data.price}
                      likes={data.likes}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <br />
        </div>
        </>
      )}
      <br />
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: DUMMY_DATA.map((meetup) => ({
      params: { collectionId: meetup.slug.toString() },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const collectionSlug = params.collectionId;
  const filtereDdata = DUMMY_DATA.filter((data) => data.slug === collectionSlug);
  const data = filtereDdata[0];
  const dataId = data.id;
  const filterItemData = DummyItemData.filter(
    (data) => data.collection_id === dataId
  );
  return {
    props: {
      data,
      filterItemData,
    },
  };
}

export default DetailPage;
