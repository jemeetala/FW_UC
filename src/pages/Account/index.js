import React from "react";

import { useNavigate } from "react-router-dom";
import { getSalesaccounts } from "service/api";
import AddAccount1Modal from "modals/AddAccount1";
import {
  Column,
  Row,
  Image,
  Button,
  Input,
  Text,
  List,
  Stack,
} from "components";

const AccountPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();
  const [isOpenAddAccount1Modal, setAddAccount1Modal] = React.useState(false);

  function callApi() {
    const req = {};
    getSalesaccounts(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/tasks");
  }
  function handleNavigate2() {
    navigate("/products");
  }
  function handleNavigate3() {
    navigate("/contacts");
  }
  function handleNavigate4() {
    navigate("/");
  }
  function handleNavigate24() {
    navigate("/");
  }
  function handleOpenAddAccount1Modal() {
    setAddAccount1Modal(true);
  }
  function handleCloseAddAccount1Modal() {
    setAddAccount1Modal(false);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-bluegray_51 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]"
        compId="4509:5623"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-start justify-evenly w-[100%]"
          compId="106"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center justify-start w-[7%]">
            <Column
              className=""
              compId="28"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_901 items-center justify-start lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="4797:9805"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group345_2.png"}
                  className="common-pointer lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4797:9807"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  onClick={handleNavigate24}
                  alt="Group345"
                />
                <Image
                  src={"images/img_vector_73.png"}
                  className="common-pointer lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] mx-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  compId="I4797:9812;275:1558"
                  comWidth={16}
                  comHeight={16}
                  compLeft={17}
                  compRight={17}
                  compType="Image"
                  onClick={handleNavigate4}
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_74.png"}
                  className="common-pointer lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I4797:9813;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  onClick={handleNavigate3}
                  alt="Vector"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4797:9819"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group331_2.png"}
                    className="w-[90%] flex items-center justify-center"
                    compId="4797:9819"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group331"
                  />
                </Button>
                <Image
                  src={"images/img_vector_75.png"}
                  className="common-pointer lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] mx-[auto] object-contain w-[32%]"
                  compId="I4797:9814;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  onClick={handleNavigate2}
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_76.png"}
                  className="common-pointer lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I4797:9815;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  onClick={handleNavigate1}
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_77.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4797:9816;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_78.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4797:9817;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_79.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I4797:9818;120:1890"
                  comWidth={19}
                  comHeight={20}
                  compLeft={14}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
              </Column>
            </Column>
          </aside>
          <Column
            className="items-start justify-start lg:mb-[432px] xl:mb-[494px] mb-[556px] 3xl:mb-[667px] w-[93%]"
            compId="105"
            comWidth={1342}
            comHeight={468}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center pr-[1px] w-[100%]"
              compId="107"
              comWidth={1342}
              comHeight={72}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                compId="4797:9772"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="bg-transparent border-0 font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                  WrapClassName="3xl:pb-[9px] 3xl:pl-[7px] 3xl:pr-[26px] 3xl:pt-[10px] border border-bluegray_201 border-solid flex lg:pb-[6px] lg:pl-[4px] lg:pr-[17px] lg:pt-[7px] pb-[8px] pl-[6px] pr-[22px] pt-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%] xl:pb-[7px] xl:pl-[5px] xl:pr-[19px] xl:pt-[8px]"
                  compId="4797:9790"
                  comWidth={0}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="SearchView"
                  name="Group93"
                  placeholder="Accounts"
                  prefix={
                    <Image
                      src={"images/img_vector_80.png"}
                      className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                      compId="I4797:9792;120:1866"
                      comWidth={20.01}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <Image
                        onClick={() => setInputvalue("")}
                        src={"images/close3.svg"}
                        className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                        compId="I2:3811;309:8624"
                        comWidth={20.01}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Input
                  className="bg-transparent border-0 font-normal not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  WrapClassName="border border-bluegray_201 border-solid rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]"
                  compId="4797:9796"
                  comWidth={446}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group94"
                  placeholder="Search your CRM..."
                ></Input>
                <Button
                  className="common-pointer bg-bluegray_901 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:9774"
                  comWidth={40}
                  comHeight={40}
                  compLeft={430}
                  compRight={0}
                  compType="IconButton"
                  onClick={handleOpenAddAccount1Modal}
                >
                  <Image
                    src={"images/img_group5_4.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4797:9774"
                    comWidth={40}
                    comHeight={40}
                    compLeft={430}
                    compRight={0}
                    compType="IconButton"
                    onClick={handleOpenAddAccount1Modal}
                    alt="Group5"
                  />
                </Button>
                <Button
                  className="bg-white_A700 border border-gray_201 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:9777"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group4_3.png"}
                    className="w-[100%] flex items-center justify-center"
                    compId="4797:9777"
                    comWidth={40}
                    comHeight={40}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                    alt="Group4"
                  />
                </Button>
                <Button
                  className="bg-white_A700 border border-gray_201 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:p-[1px] lg:p-[1px] p-[2px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:9780"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group3_4.png"}
                    className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                    compId="4797:9780"
                    comWidth={40}
                    comHeight={40}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                    alt="Group3"
                  />
                </Button>
                <Button
                  className="bg-red_600 flex lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                  compId="4797:9783"
                  comWidth={36}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group100_3.png"}
                    className="w-[37%] flex items-center justify-center"
                    compId="4797:9783"
                    comWidth={36}
                    comHeight={36}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                    alt="Group100"
                  />
                </Button>
                <Button
                  className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:9786"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group99_3.png"}
                    className="w-[72%] flex items-center justify-center"
                    compId="4797:9786"
                    comWidth={40}
                    comHeight={40}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                    alt="Group99"
                  />
                </Button>
              </Row>
            </Column>
            <Row
              className="bg-gray_100 border border-indigo_50 border-solid items-start justify-start lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]"
              compId="4797:9834"
              comWidth={1342}
              comHeight={55}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                compId="4509:5651"
                comWidth={69}
                comHeight={23}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Accounts
              </Text>
              <Image
                src={"images/img_vector_81.png"}
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain w-[1%]"
                compId="I4509:5652;120:97"
                comWidth={7}
                comHeight={13}
                compLeft={18}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[auto]"
                compId="4509:5654"
                comWidth={126}
                comHeight={23}
                compLeft={24}
                compRight={0}
                compType="Text"
              >
                My Accounts (03)
              </Text>
              <Button
                className="3xl:ml-[19px] 3xl:pl-[21px] 3xl:pr-[19px] 3xl:py-[9px] bg-indigo_51 border border-blue_800 border-solid flex items-center justify-between lg:ml-[12px] lg:pl-[14px] lg:pr-[12px] lg:py-[6px] ml-[16px] pl-[18px] pr-[16px] py-[8px] rounded-radius4 text-center w-[10%] xl:ml-[14px] xl:pl-[16px] xl:pr-[14px] xl:py-[7px]"
                compId="4509:6033"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Button"
                leftIcon={
                  <Image
                    src={"images/img_vector_82.png"}
                    className="w-[20.01px] text-center lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    compId="I4509:6034;120:964"
                    comWidth={20.01}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800">
                  My Accounts
                </div>
              </Button>
              <Button
                className="3xl:ml-[19px] 3xl:pl-[21px] 3xl:pr-[20px] 3xl:py-[9px] bg-indigo_51 border border-blue_800 border-solid flex items-center justify-between lg:ml-[12px] lg:pl-[14px] lg:pr-[13px] lg:py-[6px] ml-[16px] pl-[18px] pr-[17px] py-[8px] rounded-radius4 text-center w-[6%] xl:ml-[14px] xl:pl-[16px] xl:pr-[15px] xl:py-[7px]"
                compId="4509:6040"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Button"
                leftIcon={
                  <Image
                    src={"images/img_vector_83.png"}
                    className="w-[20.01px] text-center lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    compId="I4509:6041;120:964"
                    comWidth={20.01}
                    comHeight={16}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800">
                  All
                </div>
              </Button>
              <Button
                className="common-pointer bg-bluegray_901 border border-gray_200 border-solid font-normal lg:ml-[338px] xl:ml-[386px] ml-[435px] 3xl:ml-[522px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[7%]"
                compId="4509:5658"
                comWidth={92}
                comHeight={38}
                compLeft={435}
                compRight={0}
                compType="Button"
                onClick={handleOpenAddAccount1Modal}
              >
                Add account
              </Button>
              <Button
                className="3xl:ml-[20px] 3xl:pl-[12px] 3xl:pr-[9px] 3xl:py-[9px] bg-white_A700 border border-gray_200 border-solid flex items-center justify-between lg:ml-[13px] lg:pl-[7px] lg:pr-[6px] lg:py-[6px] ml-[17px] pl-[10px] pr-[8px] py-[8px] rounded-radius4 text-center w-[9%] xl:ml-[15px] xl:pl-[8px] xl:pr-[7px] xl:py-[7px]"
                compId="4509:5661"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Button"
                leftIcon={
                  <Image
                    src={"images/img_vector_84.png"}
                    className="w-[20px] h-[20px] text-center lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                    compId="I4509:5662;120:2351"
                    comWidth={20}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700">
                  Edit coumns
                </div>
              </Button>
              <Row
                className="bg-white_A700 border border-gray_200 border-solid items-center justify-center lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[9%]"
                compId="4509:5665"
                comWidth={119}
                comHeight={40}
                compLeft={19}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_85.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4509:5666;120:1078"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]"
                  compId="4509:5667"
                  comWidth={37}
                  comHeight={23}
                  compLeft={12}
                  compRight={0}
                  compType="Text"
                >
                  Filters
                </Text>
                <Text
                  className="bg-blue_800 font-bold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] xl:pl-[3px] pl-[4px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] lg:px-[3px] rounded-radius8 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]"
                  compId="4509:5668"
                  comWidth={22}
                  comHeight={20}
                  compLeft={10}
                  compRight={0}
                  compType="Text"
                >
                  01
                </Text>
              </Row>
            </Row>
            <Row
              className="bg-gray_100 border border-gray_200 border-solid items-center justify-start xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] 3xl:pl-[109px] lg:pl-[70px] xl:pl-[80px] pl-[91px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] w-[100%]"
              compId="4797:9835"
              comWidth={1342}
              comHeight={46}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] rotate-[-1deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 uppercase w-[auto]"
                compId="4797:9839"
                comWidth={34}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Name
              </Text>
              <Text
                className="font-semibold lg:ml-[165px] xl:ml-[189px] ml-[213px] 3xl:ml-[255px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 uppercase w-[auto]"
                compId="4797:9846"
                comWidth={108}
                comHeight={22}
                compLeft={213}
                compRight={0}
                compType="Text"
              >
                Annual Revenue
              </Text>
              <Text
                className="font-semibold lg:ml-[185px] xl:ml-[212px] ml-[239px] 3xl:ml-[286px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 uppercase w-[auto]"
                compId="4797:9852"
                comWidth={59}
                comHeight={22}
                compLeft={239}
                compRight={0}
                compType="Text"
              >
                Country
              </Text>
              <Text
                className="font-semibold lg:ml-[140px] xl:ml-[161px] ml-[181px] 3xl:ml-[217px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 uppercase w-[auto]"
                compId="4797:9855"
                comWidth={54}
                comHeight={22}
                compLeft={181}
                compRight={0}
                compType="Text"
              >
                Website
              </Text>
              <Text
                className="font-semibold lg:ml-[126px] xl:ml-[145px] ml-[163px] 3xl:ml-[195px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 uppercase w-[auto]"
                compId="4797:9858"
                comWidth={72}
                comHeight={22}
                compLeft={163}
                compRight={0}
                compType="Text"
              >
                Mobiile no
              </Text>
            </Row>
            <List
              className="bg-white_A700 border border-gray_200 border-solid lg:gap-[180px] xl:gap-[206px] gap-[232px] 3xl:gap-[278px] grid grid-cols-6 min-h-[auto] lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] w-[100%]"
              compId="4797:9889"
              comWidth={1342}
              comHeight={98}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="horizontal"
            >
              {apiData?.sales_accounts?.map((apiDataEle) => {
                return (
                  <Text
                    className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[100%]"
                    compId="4797:9875"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {apiDataEle?.name}
                  </Text>
                );
              })}
            </List>
            <Stack
              className="bg-white_A700 border border-gray_200 border-solid 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] w-[100%]"
              compId="4797:9890"
              comWidth={1342}
              comHeight={98}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Row
                className="absolute items-start justify-start right-[3%] top-[26%] w-[89%]"
                compId="103"
                comWidth={1192}
                comHeight={39}
                compLeft={0}
                compRight={40}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                  compId="4797:9898"
                  comWidth={47}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Riya D
                </Text>
                <Text
                  className="font-semibold xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[124px] xl:ml-[142px] ml-[160px] 3xl:ml-[192px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                  compId="4797:9904"
                  comWidth={29}
                  comHeight={22}
                  compLeft={160}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal lg:ml-[247px] xl:ml-[282px] ml-[318px] 3xl:ml-[381px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]"
                  compId="4797:9900"
                  comWidth={67}
                  comHeight={22}
                  compLeft={318}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Text
                  className="font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[192px] xl:ml-[220px] ml-[248px] 3xl:ml-[297px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                  compId="4797:9901"
                  comWidth={107}
                  comHeight={22}
                  compLeft={248}
                  compRight={0}
                  compType="Text"
                >
                  www.dhiwise.com
                </Text>
                <Text
                  className="font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                  compId="4797:9902"
                  comWidth={70}
                  comHeight={22}
                  compLeft={59}
                  compRight={0}
                  compType="Text"
                >
                  1234567866
                </Text>
                <Image
                  src={"images/img_morevertical_4.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:9903"
                  comWidth={24}
                  comHeight={24}
                  compLeft={63}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Row
                className="absolute bg-white_A700 border border-gray_200 border-solid items-start justify-end lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] w-[100%]"
                compId="5089:8901"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                  compId="5089:8904"
                  comWidth={47}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Riya D
                </Text>
                <Text
                  className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                  compId="5089:8909"
                  comWidth={29}
                  comHeight={22}
                  compLeft={232}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[217px] xl:ml-[248px] ml-[279px] 3xl:ml-[334px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]"
                  compId="5089:8905"
                  comWidth={67}
                  comHeight={22}
                  compLeft={279}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Text
                  className="font-normal lg:ml-[120px] xl:ml-[137px] ml-[155px] 3xl:ml-[186px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                  compId="5089:8906"
                  comWidth={107}
                  comHeight={22}
                  compLeft={155}
                  compRight={0}
                  compType="Text"
                >
                  www.dhiwise.com
                </Text>
                <Text
                  className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                  compId="5089:8907"
                  comWidth={70}
                  comHeight={22}
                  compLeft={134}
                  compRight={0}
                  compType="Text"
                >
                  1234567866
                </Text>
                <Image
                  src={"images/img_morevertical_5.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="5089:8908"
                  comWidth={24}
                  comHeight={24}
                  compLeft={85}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
            </Stack>
            <Row
              className="bg-white_A700 border border-gray_200 border-solid items-start justify-end mt-[1px] lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] w-[100%]"
              compId="5089:8913"
              comWidth={1342}
              comHeight={98}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                compId="5089:8916"
                comWidth={47}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Riya D
              </Text>
              <Text
                className="font-semibold lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[180px] xl:ml-[206px] ml-[232px] 3xl:ml-[278px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]"
                compId="5089:8921"
                comWidth={29}
                comHeight={22}
                compLeft={232}
                compRight={0}
                compType="Text"
              >
                $200
              </Text>
              <Text
                className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[217px] xl:ml-[248px] ml-[279px] 3xl:ml-[334px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]"
                compId="5089:8917"
                comWidth={67}
                comHeight={22}
                compLeft={279}
                compRight={0}
                compType="Text"
              >
                Jemee Tala
              </Text>
              <Text
                className="font-normal lg:ml-[120px] xl:ml-[137px] ml-[155px] 3xl:ml-[186px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                compId="5089:8918"
                comWidth={107}
                comHeight={22}
                compLeft={155}
                compRight={0}
                compType="Text"
              >
                www.dhiwise.com
              </Text>
              <Text
                className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[104px] xl:ml-[119px] ml-[134px] 3xl:ml-[160px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                compId="5089:8919"
                comWidth={70}
                comHeight={22}
                compLeft={134}
                compRight={0}
                compType="Text"
              >
                1234567866
              </Text>
              <Image
                src={"images/img_morevertical_6.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] ml-[85px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                compId="5089:8920"
                comWidth={24}
                comHeight={24}
                compLeft={85}
                compRight={0}
                compType="Image"
                alt="morevertical"
              />
            </Row>
          </Column>
        </Row>
      </Column>

      {isOpenAddAccount1Modal ? (
        <AddAccount1Modal
          isOpen={isOpenAddAccount1Modal}
          onRequestClose={handleCloseAddAccount1Modal}
        />
      ) : null}
    </>
  );
};

export default AccountPage;
