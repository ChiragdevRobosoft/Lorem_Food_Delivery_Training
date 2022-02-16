import React from "react";
import styled from "styled-components";
import registerSuccess from "../../assets/register_success.png";
import Buttons from "../../components/common/button/index";
import closeButton from "../../assets/close_button.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import data from "./../../components/common/constants.json";
import {
  sizes,
  colors,
  fontFamilies,
  fontWeight,
  angles,
  links,
} from "../../variables";
import Image from "../../components/common/image";
import { queries } from "../../components/common/breakpoints";
import { useNavigate } from "react-router-dom";
import Home from "../../components/home";
const RegisterSuccess = ({
  onCloseModal,
  onOpenModal,
  open,
  setShowRegisterSuccess,
}: {
  onCloseModal: () => void;
  onOpenModal: () => void;
  open: boolean;
  setShowRegisterSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      classNames={{ modal: "modalStyle" }}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      styles={{
        overlay: {
          background: "transparent",
        },
      }}
    >
      <Wrapper>
        <WrapperLeft>
          <Lorem>LOREM</Lorem>
          <TagLine>
            Experience the easiest a way to get <BoldText>great food </BoldText>
            Delivered
          </TagLine>
        </WrapperLeft>
        <WrapperRight>
          <CloseImage
            src={closeButton}
            alt="cut"
            onClick={() => {
              setShowRegisterSuccess(false);
              onCloseModal();
            }}
          ></CloseImage>
          <SuccessImageContainer>
            <SuccessImage src={registerSuccess} />
          </SuccessImageContainer>
          <Title>{data.loginModal.welcomePage.title}</Title>
          <Discription>{data.loginModal.welcomePage.description}</Discription>
          <BrowseButtonContainer>
            <BrowseButton
              className="colouredBgButton"
              name="BROWSE TO START ORDERING"
            ></BrowseButton>
          </BrowseButtonContainer>
        </WrapperRight>
      </Wrapper>
    </Modal>
  );
};
export default RegisterSuccess;
const CloseImage = styled.img`
  float: right;
  margin: 20px;
`;
const SuccessImage = styled(Image)`
  margin-left: 0px;
  height: 150px;
  width: 180px;
  ${queries.tabletLandscape} {
    height: 120px;
    width: 140px;
  }
  ${queries.mobile} {
    margin-left: 75px;
    height: 90px;
    width: 100px;
  }
`;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 130px;
  margin-top: 50px;
  height: 38px;
  width: 227px;
  color: ${colors.grey_4a4a4a};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: 14px;
  letter-spacing: -0.24px;
  line-height: 19px;
  text-align: center;
  ${queries.tabletLandscape} {
    margin-left: 85px;
    font-size: ${sizes.size14};
  }
  ${queries.mobile} {
    margin-left: 70px;
    font-size: ${sizes.size13};
    margin-top: 52px;
    margin-bottom: 60px;
  }
`;
const WrapperLeft = styled.div`
  background-image: url("../assets/image.png");
  height: 588px;
  width: 480px;
  text-align: left;
  padding-left: ${sizes.sizep4};
  margin-right: -40px;
  ${queries.tabletLandscape} {
    width: 384px;
  }
  ${queries.mobile} {
    width: 346px;
    height: 388px;
    border-radius: ${sizes.size8};
  }
`;
const Lorem = styled.p`
  height: 60px;
  width: 103px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyBn};
  font-size: ${sizes.size50};
  margin-bottom: 30px;
  margin-top: 150px;
  letter-spacing: 0;
  line-height: ${sizes.size60};
  text-align: center;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size45};
  }
  ${queries.mobile} {
    margin-top: 100px;
    font-size: ${sizes.size45};
  }
`;
const BrowseButtonContainer = styled.div`
  margin-top: 50px;
  margin-left: 15px;
  ${queries.tabletLandscape} {
    margin-top: 70px;
  }
  ${queries.mobile} {
    margin-top: 50px;
    margin-left: 0px;
  }
`;
const BrowseButton = styled(Buttons)`
height: 50px;
  width: 380px;
  border-radius: ${sizes.size6};
  background: linear-gradient(${angles.angle138_33}, ${colors.red_f3698e} 0%, ${colors.yellow_feb456} 100%);
  box-shadow: 0 4px 10px 0 ${colors.red_f67e7e_38};
}
${queries.tabletLandscape} {
  height: 48px;
  width: 338px;
}
${queries.mobile} {
  height: 45px;
  width: 300px;
}
`;
const SuccessImageContainer = styled.div`
  height: 5px;
  width: 25px;
  margin-left: 150px;
  margin-top: 120px;
  ${queries.tabletLandscape} {
    margin-top: 110px;
    margin-left: 125px;
  }
  ${queries.mobile} {
    margin-top: 70px;
    margin-left: 55px;
  }
`;
const Title = styled.p`
  color: ${colors.grey_4a4a4a};
  font-size: ${sizes.size22};
  font-weight: bold;
  letter-spacing: -0.37px;
  line-height: ${sizes.size30};
  text-align: center;
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  margin-top: 210px;
  margin-left: 145px;
  height: 30px;
  width: 200px;
  font-family: ${fontFamilies.fontFamilyOsBold};
  ${queries.tabletLandscape} {
    margin-left: 100px;
    font-size: ${sizes.size20};
    margin-top: 190px;
  }
  ${queries.mobile} {
    margin-top: 120px;
    margin-left: 85px;
    font-size: ${sizes.size20};
    margin-bottom: 10px;
  }
`;
const BoldText = styled.span`
  font-weight: ${fontWeight.weight800};
  font-family: ${fontFamilies.fontFamilyOsBold};
`;
const TagLine = styled.div`
  height: 132px;
  width: 330px;
  color: ${colors.white_ffffff};
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size34};
  letter-spacing: -0.57px;
  margin-top: 60px;
  line-height: ${sizes.size44};
  text-shadow: 0 0 9px 0 ${colors.white_ffffff};
  word-wrap: break-word;
  ${queries.tabletLandscape} {
    font-size: ${sizes.size30};
  }
  ${queries.mobile} {
    font-size: ${sizes.size30};
  }
`;
const Wrapper = styled.div`
  height: 588px;
  width: 960px;
  border-radius: ${sizes.size8};
  background-color: ${colors.white_ffffff};
  box-shadow: 0 2px 24px 0 ${colors.black_000000_05};
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  ${queries.tabletLandscape} {
    width: 768px;
  }
  ${queries.mobile} {
    width: 360px;
    flex-direction: column;
  }
`;
const WrapperRight = styled.div`
  background-color: ${colors.white_ffffff};
  height: 588px;
  width: 470px;
  ${queries.tabletLandscape} {
    width: 385px;
  }
  ${queries.mobile} {
    width: 360px;
    height: 388px;
    border-radius: ${sizes.size8};
  }
`;
