import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ConnectButton from "../Wallet Components/ConnectButton";
import WalletModal from "../Modal/WalletModal";
function MainNavigation() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg shadow p-0 navbar-light bg-white">
        <div className="container-fluid">
          <div className="text-center">
            <Link className="navbar-brand" href="/">
              NFT Marketplace
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li
                className={
                  router.pathname == "/"
                    ? "nav-item dropdown p-3 active"
                    : "nav-item dropdown p-3 text-muted"
                }
              >
                <Link
                  className="nav-link dropdown-toggle container-dropdown-a"
                  href="/"
                >
                  Explore
                </Link>
              </li>

              <li
                className={
                  router.pathname == "/assets/create"
                    ? "nav-item dropdown p-3 active"
                    : "nav-item dropdown p-3 text-muted"
                }
              >
                <Link
                  className="nav-link dropdown-toggle container-dropdown-a"
                  href="/assets/create"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create
                </Link>
              </li>

              <li
                className={
                  router.pathname == "/account"
                    ? "nav-item dropdown p-3 active"
                    : "nav-item dropdown p-3 text-muted"
                }
              >
                <Link
                  className="nav-link dropdown-toggle container-dropdown-a"
                  href="/account"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul className="dropdown-menu text-center">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Profile
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" href="/collections">
                      My Collections
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" href="#">
                      Settings
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown p-3 text-muted"
                onClick={() => setShowModal(true)}
              >
                Wallet
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <WalletModal
        onClose={() => setShowModal(false)}
        show={showModal}
        headingOfModal="My Wallet"
      >
      <ConnectButton/>
      </WalletModal>
    </>
  );
}

export default MainNavigation;
