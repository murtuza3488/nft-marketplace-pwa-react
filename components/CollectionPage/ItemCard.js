import { useRouter } from "next/router";
const ItemCard = (props) => {
  const router = useRouter();

  const onItemcardHandler = () => {
    router.push("/assets/" + props.id);
  };
  return (
    <>
      <div className="col">
        <div className="itemCard mx-auto h-100" onClick={onItemcardHandler}>
          <div className="cover">
            <img
              className="card-img-top img-responsive"
              src={props.imgUrl}
              alt="..."
              style={{
                objectFit: "cover",
                height: "196px",
                width: "196px",
                maxWidth: "100%",
              }}
            />
          </div>
          <div className="m-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className="itemCardText text-muted">{props.collectionname.length > 10 ? props.collectionname.slice(0,10)+"..." : props.collectionname}</span>
                <span className="itemCardText">{props.itemname.length > 20 ? props.itemname.slice(0,20)+"..." : props.itemname}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="itemCardText">price</span>
                <span className="itemCardText"><img src="/ethlogo.svg" height={'12px'} style={{marginTop: '-2px'}}/> {props.price}</span>
              </div>
            </div>
          </div>
          <hr className="m-0" />
          <div className="m-2">
            <div className="d-flex justify-content-between">
              <div className="greyFont">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemCard;
