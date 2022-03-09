import Link from "next/link";
import {
  faWallet,
  faTag,
  faClock,
  faList,
  faBookmark,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DummyItemData } from "../../../components/DummyItemData";
import ItemCard from "../../../components/CollectionPage/ItemCard";
import { DUMMY_DATA } from "../../../components/DummyData";
const ItemId = ({ data, morecollection, collectionData }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="itemresize">
          <div className="leftsideItem">
            {/* d-inline d-lg-block d-none */}
            <div className="container">
              <div className="uppername my-4">
                <div>{data.collectionname}</div>
                <div className="my-3">
                  <h1>{data.itemname}</h1>
                </div>
              </div>
              <div className="itemartical">
                <div className="border cover p-2 rounded-top d-flex justify-content-between">
                  <div className="ms-2"><img src="/ethlogo.svg" height={'20px'} style={{marginTop: '-5px'}}/></div>
                </div>
                <div>
                  <img
                    className="rounded-bottom"
                    src={data.imgUrl}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="my-2">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        <FontAwesomeIcon icon={faList} />
                        <span className="mx-2">Description</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body small14">
                        <div className="text-muted">
                          Created by {data.itemDescription.createdBy}
                        </div>
                        <div>{data.itemDescription.description}</div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <FontAwesomeIcon icon={faBookmark} />
                        <span className="mx-2">Properties</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body p-2">
                        <div className="row row-cols-3 g-2 text-center">
                          {/* map properties */}
                          {data.properties.map((data) => {
                            return (
                              <div className="col" key={data.propertiesId}>
                                <div className="card h-100 propertiescontainer">
                                  <div className="propertiescontainerfirstdiv">
                                    {data.first}
                                  </div>
                                  <div>{data.second}</div>
                                  <small className="text-muted small13">
                                    {data.third}
                                  </small>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span className="mx-2">
                          About{" "}
                          {collectionData.collectionname.length > 25
                            ? collectionData.collectionname.slice(0, 25) + "..."
                            : collectionData.collectionname}{" "}
                        </span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body small14">
                        {collectionData.description}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <FontAwesomeIcon icon={faBars} />
                        <span className="mx-2">Detail</span>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body small14">
                        <div className="d-flex justify-content-between p-1">
                          <div className="small14">Contract Address</div>
                          <div className="small14 text-muted">
                            {data.detail.contractAddress.slice(0, 6)}...
                            {data.detail.contractAddress.slice(
                              data.detail.contractAddress.length - 4,
                              data.detail.contractAddress.length
                            )}
                          </div>
                        </div>
                        <div className="d-flex justify-content-between p-1">
                          <div className="small14">Token ID</div>
                          <div className="small14 text-muted">
                            {data.detail.tokenId}
                          </div>
                        </div>
                        <div className="d-flex justify-content-between p-1">
                          <div className="small14">Token Standard</div>
                          <div className="small14 text-muted">
                            {data.detail.tockenStandard}
                          </div>
                        </div>
                        <div className="d-flex justify-content-between p-1">
                          <div className="small14">Blockchain</div>
                          <div className="small14 text-muted">
                            {data.detail.blockchain}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightsideItem">
            <div className="container">
              <div className="d-lg-block d-none mt-2 mb-4">
                {data.collectionname}
                <h1 className="my-3">{data.itemname}</h1>
              </div>
              <div className="d-flex flex-row">
                <div className="text-muted my-2">
                  owned by <Link href="#">{data.owner}</Link>
                </div>
              </div>
              <div className="my-3">
                <div className="border rounded-top p-3 text-muted">
                  <div className="d-inline mx-2 my-1">
                    <FontAwesomeIcon icon={faClock} style={{ fontSize: 20 }} />
                  </div>
                  <div className="my-auto d-inline">
                    schedule Sale ends {data.date}
                  </div>
                </div>
                <div className="border rounded-bottom p-3">
                  <div className="container m-1">
                    <div className="text-muted small13">Current Price</div>
                    <div className="my-2">
                    <div className="d-inline"> 
                    <img src="/ethlogo.svg" height={'40px'} style={{marginTop: '-20px'}}/>
                    </div>
                      <h1 className="d-inline mx-1">{data.price}</h1>
                      <small className="d-inline text-muted mx-2">
                        (${data.usdPrice})
                      </small>
                    </div>
                    <div>
                      <div className="btn btn-primary px-4 py-3 text-center my-2">
                        <FontAwesomeIcon
                          className="d-inline mx-2"
                          icon={faWallet}
                        />
                        <span className="d-inline mx-2">Buy Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-2">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <FontAwesomeIcon
                          className="d-inline mx-2"
                          icon={faTag}
                        />
                        <span className="mx-2">Listings</span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <table className="table m-0">
                        <thead>
                          <tr className="text-center">
                            <th scope="col">Price</th>
                            <th scope="col">USD Price</th>
                            <th scope="col">Expiration</th>
                            <th scope="col">From</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>

                        <tbody className="text-center table-light">
                          {data.listings.map((item, i) => (
                            <tr key={item.id}>
                              <td className="p-3"><img src="/ethlogo.svg" height={'15px'} style={{marginTop: '-3px'}}/> {item.price} ETH</td>
                              <td className="p-3">${item.usdPrice}</td>
                              <td className="p-3">in {item.expiration} days</td>
                              <td className="p-3">{item.from}</td>
                              <td>
                                <div className="btn btn-outline-primary">
                                  Buy
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="my-2">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      More From This Collection
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 m-2">
                        {morecollection.map((data) => {
                          return (
                            <ItemCard
                              key={data.id}
                              id={data.id}
                              imgUrl={data.imgUrl}
                              username={data.username}
                              collectionname={data.collectionname}
                              itemname={data.itemname}
                              price={data.price}
                              likes={data.likes}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: DummyItemData.map((item) => ({
      params: {
        itemId: item.id.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const item_id = +params.itemId;
  const filteredData = DummyItemData.filter((data) => data.id === item_id);
  const data = filteredData[0];
  const morecollection = DummyItemData.filter(
    (dataitem) => dataitem.collection_id === data.collection_id
  );
  const filterCollection = DUMMY_DATA.filter(
    (collectionData) => collectionData.id === data.collection_id
  );
  const collectionData = filterCollection[0];
  return {
    props: {
      data,
      morecollection,
      collectionData,
    },
  };
}
export default ItemId;
