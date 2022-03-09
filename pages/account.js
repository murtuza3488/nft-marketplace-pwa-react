import ItemCard from "../components/CollectionPage/ItemCard";
import { DummyItemData } from "../components/DummyItemData";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
function Account() {
  const { activateBrowserWallet, account } = useEthers();
  useEffect(() => {
    const localData = localStorage.getItem("shouldConnectMetamask");
    console.log(localData);
    if (localData) {
      activateBrowserWallet();
    }
  }, [account]);
  console.log(account);
  const [isActive, setActive] = useState("");
  const onCollectedHandler = () => {
    setActive("");
  };
  const onCreatedHandler = () => {
    setActive("created");
  };
  return (
    <div>
      <div className="imageBanner d-flex">
        <img
          src="https://lh3.googleusercontent.com/Oqln9OCmjutmF0L1GKuQRjubFZ1JC4-yAu616UjsuAzRcMGzZqBF6FRJXIE061XeOpC3nA7Aoy9o4oiEpwvmRGbt4WuYDzqDcZw1Tw=h600"
          alt="..."
          style={{ objectFit: "cover", height: "220px", width: "100%" }}
        />
      </div>
      <div className="d-flex">
        <div className="collectionPfp mx-auto">
          <img
            src="https://lh3.googleusercontent.com/Oqln9OCmjutmF0L1GKuQRjubFZ1JC4-yAu616UjsuAzRcMGzZqBF6FRJXIE061XeOpC3nA7Aoy9o4oiEpwvmRGbt4WuYDzqDcZw1Tw=h600"
            alt="..."
            style={{ objectFit: "cover", height: "130px", width: "130px" }}
            className="rounded-circle bg-white p-1"
          />
        </div>
      </div>
      <h2 className="text-center my-3 collectionpageTitle">Username</h2>
      <div className="d-flex flex-row justify-content-center text-center mb-4">
        <div className="d-flex flex-column">
          <div className="accountaddresswrapper">
            <div className="greyFont m-2">
              <img
                src="/ethlogo.svg"
                height={"15px"}
                style={{ marginTop: "-3px" }}
              />
              {account
                ? `  ${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`
                : "not connexted"}
            </div>
          </div>
          <div className="my-2 text-muted">Joined january 2022</div>
        </div>
      </div>
      <div className="scrollmenu text-center border-bottom mb-4">
        <li
          className={
            isActive === ""
              ? "mx-2 categoryOnHover active"
              : "mx-2 categoryOnHover"
          }
          onClick={onCollectedHandler}
        >
          Collected
        </li>
        <li
          className={
            isActive === "created"
              ? "mx-2 categoryOnHover active"
              : "mx-2 categoryOnHover"
          }
          onClick={onCreatedHandler}
        >
          Created
        </li>
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
              />
            </div>
          </div>
        </div>
        <hr className="d-xl-none" />
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
        <br />
        <br />
        <div className="container">
          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6 g-4 m-2">
            {DummyItemData.map((data) => {
              return (
                <ItemCard
                  key={data.id}
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
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
export default Account;
