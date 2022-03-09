import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
const Create = () => {
  const [logoFile, setLogoFile] = useState({ file: null });
  const [logoFileData, setLogoFileData] = useState({ file: null });
  const [featureImgFile, setFeatureImgFile] = useState({ file: null });
  const [featureImgFileData, setFeatureImgFileData] = useState({ file: null });
  const [bannerImgFile, setBannerImgFile] = useState({ file: null });
  const [bannerImgFileData, setBannerImgFileData] = useState({ file: null });
  const [inputName, setInputName] = useState("");
  // const [inputUrl, setInputUrl] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [selectBlockChain, setSelectBlockChain] = useState("Ethereum");
  const [selectCategory, setSelectCategory] = useState("");
  // const [earnings, setEarnings] = useState("");
  // const [walletAddress, setWalletAddress] = useState("");
  // const [contentCheck, setContentCheck] = useState({ checked: false });
  const router = useRouter();
  const {
    register,
    formState: { errors , isSubmitting },
    handleSubmit,
  } = useForm();
  const checkValidName = () => {
    if (!inputName) {
      errors.name = "";
    } else {
      null;
    }
  };
  const checkValidItemLogo = () => {
    if (!logoFile.file) {
      errors.logoImg = "";
    } else {
      null;
    }
  };
  const onLogoImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setLogoFileData({ file: img });
      setLogoFile({
        file: URL.createObjectURL(img),
      });
      checkValidItemLogo();
    }
  };
  const onFeatureImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setFeatureImgFileData({ file: img });
      setFeatureImgFile({
        file: URL.createObjectURL(img),
      });
    }
  };
  const onBannerImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setBannerImgFileData({ file: img });
      setBannerImgFile({
        file: URL.createObjectURL(img),
      });
    }
  };
  const inputNameOnchange = (e) => {
    setInputName(e.target.value);
    checkValidName();
  };

  const inputDescriptionOnchange = (e) => {
    setInputDescription(e.target.value);
  };
  const onBlockChainSelectHadler = (e) => {
    setSelectBlockChain(e.target.value);
  };
  const onCategoryHadler = (e) => {
    setSelectCategory(e.target.value);
  };
  const Data = {
    logoFileData: logoFileData.file,
    featureImgFileData: featureImgFileData.file,
    bannerImgFileData: bannerImgFileData.file,
    inputName,
    inputDescription,
    category_id : +selectCategory,
    selectBlockChain,
  };
  const submitCollectionForm = () => {
    console.log(Data);
    return new Promise(resolve => {
      setTimeout(() => {
          resolve();
          toast.success("Collection created successfully, waiting for admin's approval.")
          router.push("/");
      }, 1500);
  });
  };
  return (
    <>
      <div className="createcollectiontopbar d-flex">
        <div className="d-flex m-2">
          <Link href="/collection">
            <span className="backtocollection">My Collection</span>
          </Link>
        </div>
        <div className="d-flex m-2">
          <span>&gt;</span>
        </div>
        <div className="d-flex">
          <span className="greyFont">Create collec...</span>
        </div>
      </div>
      <div className="forcreatecollectioncontainer">
        <h1 className="mt-4 mb-4 createCollectionTitle">Create a Collection</h1>
        <form className="pt-4" onSubmit={handleSubmit(submitCollectionForm)}>
          <p className="greyFont">
            <span className="redStar">*</span>Required fields
          </p>
          <div className="d-flex logoimageInsert">
            <label htmlFor="image">
              Logo Image<span className="redStar">*</span>
            </label>
            <span className="greyFont">
              This image will also be used for navigation. 350 x 350
              recommended.
            </span>
          </div>
          <div className="selectLogoImage d-flex position-relative my-3">
            {logoFile.file === null ? (
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: 80, opacity: "0.3" }}
              />
            ) : (
              <img
                src={logoFile.file}
                className="rounded-circle"
                layout="fill"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="inputlogoimage position-absolute"
              {...register("logoImg", { required: true })}
              onChange={onLogoImageChange}
            />
          </div>
          {errors.logoImg && errors.logoImg.type === "required" ? (
            <small className="errorMsg text-danger">
              Logo Image is required.
            </small>
          ) : null}
          <div className="d-flex faetureimageInsert">
            <label htmlFor="image">Featured image</label>
            <span className="greyFont">
              This image will be used for featuring your collection on the
              homepage, category pages, or other promotional areas of OpenSea.
              600 x 400 recommended.
            </span>
          </div>
          <div className="selectfeatureImage position-relative d-flex my-3">
            {featureImgFile.file === null ? (
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: 80, opacity: "0.3" }}
              />
            ) : (
              <img
                src={featureImgFile.file}
                layout="fill"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="inputfeatureimage position-absolute"
              onChange={onFeatureImageChange}
            />
          </div>

          <div className="d-flex bannerimageInsert">
            <label htmlFor="image">Banner image</label>
            <span className="greyFont">
              This image will appear at the top of your collection page. Avoid
              including too much text in this banner image, as the dimensions
              change on different devices. 1400 x 400 recommended.
            </span>
          </div>
          <div className="selectbannerImage position-relative d-flex my-3">
            {bannerImgFile.file === null ? (
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: 80, opacity: "0.3" }}
              />
            ) : (
              <img
                src={bannerImgFile.file}
                layout="fill"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="inputbannerimage position-absolute"
              onChange={onBannerImageChange}
            />
          </div>

          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">
                Name<span className="redStar">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Example : Teasure of sea"
                className="collectionFormInputBorder p-3"
                {...register("name", { required: true })}
                value={inputName}
                onChange={inputNameOnchange}
              />
              {errors.name && errors.name.type === "required" ? (
                <small className="errorMsg text-danger p-2">
                  Name is required.
                </small>
              ) : null}
            </div>
          </div>
          {/* <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">URL</label>
              <span className="greyFont">
                Customize your URL on OpenSea. Must only contain lowercase
                letters,numbers, and hyphens.
              </span>
              <input
                type="text"
                name="url"
                placeholder="https://opensea.io/collection/teasure-of-sea"
                className="collectionFormInputBorder p-3"
                value={inputUrl}
                onChange={inputUrlOnchange}
              />
            </div>
          </div> */}
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Description</label>
              <textarea
                name="Description"
                rows="4"
                className="collectionFormInputBorder p-3"
                value={inputDescription}
                onChange={inputDescriptionOnchange}
              />
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Category</label>
              <span className="greyFont">
                Adding a category will help make your item discoverable on
                OpenSea. Please select only one category.
              </span>
              <select
                className="form-select collectionFormInputBorder p-3"
                aria-label="Default select example"
                onChange={onCategoryHadler}
              >
                <option disabled selected>
                  Add Category
                </option>
                <option value="1">Art</option>
                <option value="2">Collectibles</option>
                <option value="3">Domain Names</option>
                <option value="4">Music</option>
                <option value="5">Photography</option>
                <option value="6">Sports</option>
                <option value="7">Trading Cards</option>
                <option value="8">Utility</option>
                <option value="9">Virtual Worlds</option>
              </select>
            </div>
          </div>
          {/* <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Creator Earnings</label>
              <span className="greyFont">
                Collect a fee when a user re-sells an item you originally
                created. This is deducted from the final sale price and paid
                monthly to a payout address of your choosing.
              </span>
              <span className="greyFont">Percentage fee</span>
              <input
                type="number"
                name="earnings"
                placeholder="e.g. 2.5"
                min={0}
                max={10}
                className="collectionFormInputBorder p-3"
                value={earnings}
                onChange={onEarningsChangeHandler}
              />
            </div>
            {earnings>10 && <small className="errorMsg text-danger">Creator earnings cannot be greater than 10%</small>}
            {earnings > 0 && earnings <= 10 && (
              <div className="d-flex flex-column my-3">
                <label htmlFor="colllectionName">
                  Your payout wallet address<span className="redStar">*</span>
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  placeholder="Please enter an address, e.g. 0x1ed3... or destination.eth"
                  className="collectionFormInputBorder p-3"
                  value={walletAddress}
                  {...register("walletAddress", { required: true })}
                  onChange={onWalletAddressChangeHandler}
                />
              </div>
            )}
            {earnings > 0 &&
            earnings < 10 &&
            errors.walletAddress &&
            errors.walletAddress.type === "required" ? (
              <small className="errorMsg text-danger">
                Wallet Address is required.
              </small>
            ) : null}
          </div> */}
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Blockchain</label>
              <span className="greyFont">
                Select the blockchain where you'd like new items from this
                collection to be added by default.
              </span>
              <select
                className="form-select collectionFormInputBorder p-3"
                aria-label="Default select example"
                onChange={onBlockChainSelectHadler}
              >
                <option value="Ethereum" selected>
                  Ethereum
                </option>
              </select>
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Payment Tokens</label>
              <span className="greyFont">
                These tokens can be used to buy and sell your items.
              </span>
              <div className="d-flex flex-row">
                <div className="d-flex flex-column ETHcontainer">
                  <label>ETH</label>
                  <span className="greyFont">Ethereum</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="d-flex justify-content-between">
            <div className="d-flex flex-row">
              <div className="firstDiv m-2">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  style={{ fontSize: 20 }}
                />
              </div>
              <div className="secondDiv d-flex flex-column">
                <label htmlFor="colllectionSelect">
                  Explicit & Sensitive Content
                </label>
                <span className="greyFont">
                  Set this item as explicit and sensitive content
                </span>
              </div>
            </div>
            <div className="thirdDiv d-flex float-right p-2">
              <Switch
                onChange={contenthandleChange}
                checked={contentCheck.checked}
              />
            </div>
          </div> */}
          <hr />
          <div className="py-3">
          {/* <button
            type="submit"
            className="btn btn-primary px-4 py-2 rounded-pill"
          >
            Create
          </button> */}
            <button disabled={isSubmitting} className="btn btn-primary px-4 py-2 rounded-pill">
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm m-1"></span>
              )}
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Create;
