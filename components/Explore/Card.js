import { useRouter } from "next/router";
const Card = (props) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/collection/" + props.slug);
  };
  return (
    <div className="col">
      <div className="card h-100" onClick={onClickHandler}>
        <div className="cover">
          <img
            src={props.bgUrl}
            className="card-Image-top rounded-top"
            alt="..."
            style={{ objectFit: "cover", height: "200px", width: "100%" }}
          />
        </div>
        <div className="mx-auto">
          <img
            src={props.pfp}
            className="rounded-circle bg-white p-1 shadow"
            alt="profile-picture"
            style={{ marginTop: "-35px", height: "60px", width: "60px" }}
          />
        </div>
        <div className="card-body text-center">
          <p className="card-text m-0">{props.collectionname.length > 30 ? props.collectionname.slice(0,30)+"..." : props.collectionname}</p>
          <p className="card-text text-muted">by {props.username.length > 30 ? props.username.slice(0,30)+"..." : props.username}</p>
          <br />
          <p className="text-muted">{props.description.length > 120 ? props.description.slice(0,120)+"..." : props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
