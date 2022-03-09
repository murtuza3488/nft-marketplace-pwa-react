import Card from "../components/Explore/Card";
import { DUMMY_DATA } from "../components/DummyData";
import { useState } from "react";
const CategoryData = [
  { id: 1, name: "Art" },
  { id: 2, name: "Collectible" },
  { id: 3, name: "Domain Name" },
  { id: 4, name: "Music" },
  { id: 5, name: "Photography" },
  { id: 6, name: "Sport" },
];
export default function Home() {
  const [shownData, setShownData] = useState(DUMMY_DATA);
  const [isActive, setActive] = useState("");
  const filterFunction = (categoryId, i) => {
    const Data = DUMMY_DATA.filter((data) => {
      if (data.category_id === categoryId) return data;
    });
    setShownData(Data);
    setActive(CategoryData[i].id);
  };
  const onAll = () => {
    setShownData(DUMMY_DATA);
    setActive("");
  };
  return (
    <>
      <div className="text-center exploreTitlediv">
        <h1 className="exploreCollectionTitle">Explore Collections</h1>
      </div>
      <div className="scrollmenu text-center border-bottom mb-4">
        <li
          className={
            isActive === ""
              ? "mx-2 categoryOnHover active"
              : "mx-2 categoryOnHover text-muted"
          }
          onClick={onAll}
        >
          All
        </li>
        {CategoryData.map((category, index) => {
          return (
              <li
                className={category.id === isActive ? "mx-2 categoryOnHover active" : "mx-2 categoryOnHover text-muted"}
                key={category.id}
                onClick={() => filterFunction(category.id, index)}
              >
                {category.name}
              </li>
          );
        })}
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 m-3">
        {shownData.map((data) => {
          return (
            <Card
              slug={data.slug}
              key={data.id}
              collectionname={data.collectionname}
              bgUrl={data.bgUrl}
              pfp={data.pfp}
              username={data.username}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {}, 
  }
}