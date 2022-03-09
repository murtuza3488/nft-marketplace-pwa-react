import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faList } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal/Modal";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
const Create = () => {
  const [itemImgFile, setItemImgFile] = useState({ file: null });
  const [itemImgFileData, setItemImgFileData] = useState({ file: null });
  const [itemName, setItemName] = useState("");
  const [inputExternalLink, setInputExternalLink] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [selectCollection, setSelectCollection] = useState("");
  const [selectBlockChain, setSelectBlockChain] = useState("Ethereum");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [formValues, setFormValues] = useState([{ type: "", name: "" }]);
  const router = useRouter();
  const {
    register,
    formState: { errors , isSubmitting },
    handleSubmit,
  } = useForm();
  const checkValidName = () => {
    if (!itemName) {
      errors.name = "";
    } else {
      null;
    }
  };
  const checkValidItemLogo = () => {
    if (!itemImgFile.file) {
      errors.item = "";
    } else {
      null;
    }
  };
  const onItemImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setItemImgFileData({ file: img });
      setItemImgFile({
        file: URL.createObjectURL(img),
      });
      checkValidItemLogo();
    }
  };
  const itemNameOnchange = (e) => {
    setItemName(e.target.value);
    checkValidName();
  };
  const inputUrlOnchange = (e) => {
    setInputExternalLink(e.target.value);
  };
  const inputDescriptionOnchange = (e) => {
    setInputDescription(e.target.value);
  };
  const onBlockChainSelectHadler = (e) => {
    setSelectBlockChain(e.target.value);
  };
  const onCollectionSelectChange = (e) => {
    setSelectCollection(e.target.value);
  };

  const handleChange = (i, e) => {
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { type: "", name: "" }]);
  };

  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    if (i !== 0) {
      newFormValues.splice(i, 1);
      setFormValues(newFormValues);
    } else if (i === 0 && newFormValues.length === 1) {
      setFormValues([{ type: "", name: "" }]);
    } else if (i === 0 && newFormValues.length > 1) {
      newFormValues.shift();
      setFormValues(newFormValues);
    }
  };

  const handleSaveModal = () => {
    setModalData(formValues);
    setShowModal(false);
  };
  const Data = {
    Logo: itemImgFileData.file,
    name: itemName,
    externalLink: inputExternalLink,
    description: inputDescription,
    collection: selectCollection,
    blockChain: selectBlockChain,
    properties: modalData,
  };
  const submitItemForm = () => {
    console.log(Data);
    return new Promise(resolve => {
      setTimeout(() => {
          resolve();
          toast.success("Item created successfully, waiting for admin's approval.")
          router.push("/");
      }, 1500);
  });
  };
  return (
    <>
      <div className="forcreateitemcontainer">
        <h1 className="mt-4 mb-4 createCollectionTitle">Create New Item</h1>
        <form className="pt-4" onSubmit={handleSubmit(submitItemForm)}>
          <p className="greyFont">
            <span className="redStar">*</span>Required fields
          </p>
          <div className="d-flex faetureimageInsert">
            <label htmlFor="image">
              Image<span className="redStar">*</span>
            </label>
            <span className="greyFont">File types supported: JPG, PNG.</span>
          </div>
          <div className="selectItemImage position-relative d-flex my-3">
            {itemImgFile.file === null ? (
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: 80, opacity: "0.3" }}
              />
            ) : (
              <img
                src={itemImgFile.file}
                layout="fill"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="inputfeatureimage position-absolute"
              {...register("item", { required: true })}
              onChange={onItemImageChange}
            />
          </div>
          {errors.item && errors.item.type === "required" ? (
            <small className="errorMsg text-danger">
              Item Logo is required.
            </small>
          ) : null}
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName mb-2">
                Name<span className="redStar">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Item name"
                className="collectionFormInputBorder p-3"
                {...register("name", { required: true })}
                value={itemName}
                onChange={itemNameOnchange}
              />
              {errors.name && errors.name.type === "required" ? (
                <small className="errorMsg text-danger">
                  Name is required.
                </small>
              ) : null}
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">External Link</label>
              <span className="greyFont">
                OpenSea will include a link to this URL on this item's detail
                page, so that users can click to learn more about it. You are
                welcome to link to your own webpage with more details.
              </span>
              <input
                type="text"
                name="url"
                placeholder="https://yoursite.io/item/123"
                className="collectionFormInputBorder p-3"
                value={inputExternalLink}
                onChange={inputUrlOnchange}
              />
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Description</label>
              <span className="greyFont">
                The description will be included on the item's detail page
                underneath its image.
              </span>
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
              <label htmlFor="colllectionSelect">Collection</label>
              <span className="greyFont">
                This is the collection where your item will appear.
              </span>
              <select
                className="form-select collectionFormInputBorder p-3"
                aria-label="Default select example"
                onChange={onCollectionSelectChange}
              >
                <option value="1">Collection 1</option>
                <option value="2">Collection 2</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-between py-3">
            <div className="d-flex flex-row">
              <div className="firstDiv m-2">
                <FontAwesomeIcon icon={faList} style={{ fontSize: 20 }} />
              </div>
              <div className="secondDiv d-flex flex-column">
                <label htmlFor="colllectionSelect">Properties</label>
                <span className="greyFont">
                  Textual traits that show up as rectangles
                </span>
              </div>
            </div>
            <div className="thirdDiv d-flex float-right text-center">
              <div
                role="button"
                className="btn btn-primary m-1"
                onClick={() => setShowModal(true)}
              >
                +
              </div>
            </div>
            <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
              headingOfModal="Add properties"
            >
              <hr />
              <div className="container p-2">
                <span className="greyFont">
                  Properties show up underneath your item, are clickable, and
                  can be filtered in your collection's sidebar.
                </span>
              </div>

              <div
                className="container"
                style={{ height: "347px", overflowY: "scroll" }}
              >
                <div className="d-flex justify-content-start p-1">
                  <div className="w-50">Type</div>
                  <div className="w-50">Name</div>
                </div>
                {formValues.map((element, index) => (
                  <div className="form-inline" key={index}>
                    <div className="my-3">
                      <input
                        type="text"
                        name="type"
                        className="p-2 modalinputfields"
                        placeholder="Character"
                        value={element.type || ""}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Male"
                        className="p-2 mx-2 modalinputfields"
                        value={element.name || ""}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => removeFormFields(index)}
                      >
                        x
                      </button>
                      {/* {index ? (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => removeFormFields(index)}
                          >
                            x
                          </button>
                        ) : null} */}
                    </div>
                  </div>
                ))}
                <div className="button-section">
                  <button
                    className="btn btn-primary px-4 py-2 rounded-pill"
                    type="button"
                    onClick={() => addFormFields()}
                  >
                    Add More
                  </button>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <button
                  className="btn btn-primary px-4 py-2 rounded-pill"
                  type="button"
                  onClick={handleSaveModal}
                >
                  Save
                </button>
              </div>
            </Modal>
          </div>

          <div className="py-3">
            <div className="d-flex flex-column">
              <label htmlFor="colllectionName">Supply</label>
              <span className="greyFont">
                The number of items that can be minted. No gas cost to you!
              </span>
              <div className="collectionFormInputBorder p-3 text-secondary">
                1
              </div>
            </div>
          </div>

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
                <option value="Ethereum">Ethereum</option>
              </select>
            </div>
          </div>
          <hr />
          <br />
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
          <br />
        </form>
      </div>
    </>
  );
};
export default Create;
