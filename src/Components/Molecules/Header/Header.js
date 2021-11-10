import React, { useContext } from "react";
import Row from "Components/Containers/Row";
import Title from "Components/Atoms/Title/Title";
import ButtonWithLogo from "Components/Atoms/ButtonWithLogo/ButtonWithLogo";
import { FaSignInAlt } from "react-icons/fa";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { GrBasket } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { VscDiffAdded } from "react-icons/vsc";
import CostumLink from "Components/Atoms/CostumLink/CostumLink";
import { ConnectContext } from "Services/StateManagment/ConnectState/ConnectContext";
import DropDown from "../DropDown/DropDown";
import { useFetch } from "Hooks/useFetch";
import { AdminPages } from "StaticData/AdminPages";
import { prepareCategorieForDropdown } from "Services/utils/prepareCategorieForDropDown";
const Header = () => {
  const connectContext = useContext(ConnectContext);
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/getCatalogues"
  );
  console.log(connectContext.connectState.userData?.userTypeID);

  const categoriePrepared = prepareCategorieForDropdown(data.categories);
  return (
    <Row>
      <div
        style={{
          flex: `1`,
        }}
      >
        <Title text="Tote" size={45} weight={550} />
        <Title text="Sacs imprimés colorés" size={20} weight={400} />
      </div>
      <Row>
        <CostumLink
          className="margin-10px transition-0-5-s opacity-0-5"
          path="/1"
          title="Products"
        />
        <Title
          text="Categorie"
          cursor="pointer"
          contentStyle="cargorieTitle  position-relative"
          className="margin-10px transition-0-5-s  opacity-0-5"
        >
          <DropDown loading={loading} data={categoriePrepared} error={error} />
        </Title>

        {connectContext.connectState.userData?.userTypeID === "admin" ? (
          <Title
            text="Admin Pages"
            cursor="pointer"
            contentStyle="cargorieTitle  position-relative"
            className="margin-10px transition-0-5-s  opacity-0-5"
          >
            <DropDown width={300} data={AdminPages} />
          </Title>
        ) : null}
      </Row>
      <Row className="justifyContent-flexEnd">
        {connectContext.connectState.connected ? (
          <div className="display-flex">
            <div className="display-flex">
              <ButtonWithLogo
                clickButton={() =>
                  connectContext.connectDispatch({ type: "logOut" })
                }
                logo={<BiLogOut />}
              />
              <CostumLink
                className="margin-10px transition-0-5-s  opacity-0-5"
                path={`/editUser`}
                title="Edit Profile"
                size={20}
                weight={600}
              />
            </div>
            <div className="display-flex">
              <ButtonWithLogo
                clickButton={() =>
                  connectContext.connectDispatch({ type: "logOut" })
                }
                logo={<BiLogOut />}
              />
              <Title
                text={connectContext.connectState?.userData.name}
                size={20}
                weight={600}
              />
            </div>
          </div>
        ) : (
          <div className="display-flex">
            <ButtonWithLogo logo={<VscDiffAdded />} />
            <CostumLink
              className="margin-10px transition-0-5-s  opacity-0-5"
              path="/register"
              title="Register"
            />

            <ButtonWithLogo logo={<FaSignInAlt />} />
            <CostumLink
              className="margin-10px transition-0-5-s  opacity-0-5"
              path="/connexion"
              title="Connexion"
            />
          </div>
        )}

        <ButtonWithLogo logo={<AiFillFacebook />} />
        <ButtonWithLogo logo={<FiTwitter />} />
        <ButtonWithLogo logo={<AiOutlineInstagram />} />
        <ButtonWithLogo logo={<GrBasket />} />
      </Row>
    </Row>
  );
};

export default Header;
