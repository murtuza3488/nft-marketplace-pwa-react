import Link from "next/link";
import { DUMMY_DATA } from "../components/DummyData";
import Card from "../components/Explore/Card";
function Collections() {
  return (
    <>
      <div className="containerformycollection">
        <div className="container">
          <h1 className="my-4">My Collections</h1>
          <p className="text-muted">
            Create, curate, and manage collections of unique NFTs to share and
            sell.
          </p>
          <button type="button" className="btn btn-primary my-3 p-3">
            <Link href="/collection/create">Create a collection</Link>
          </button>
        </div>
        <div className="container my-4">
          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-3 g-4">
            {DUMMY_DATA.map((data) => {
              return (
                <Card
                  key={data.id}
                  bgUrl={data.bgUrl}
                  pfp={data.pfp}
                  collectionname={data.collectionname}
                  username={data.username}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Collections;
