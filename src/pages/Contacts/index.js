import React from "react";

import { useNavigate } from "react-router-dom";
import { getContacts } from "service/api";
import AddContactsModal from "modals/AddContacts";
import {
  Column,
  Row,
  Image,
  Button,
  Input,
  Text,
  List,
  Line,
} from "components";

const ContactsPage = () => {
  const [apiData1, setapiData1] = React.useState();
  React.useEffect(() => {
    callApi1();
  }, []);
  const navigate = useNavigate();
  const [isOpenAddContactsModal, setAddContactsModal] = React.useState(false);

  function callApi1() {
    const req = {};
    getContacts(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate5() {
    navigate("/");
  }
  function handleOpenAddContactsModal() {
    setAddContactsModal(true);
  }
  function handleCloseAddContactsModal() {
    setAddContactsModal(false);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]"
        compId="4793:8287"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compId="83"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center w-[7%]">
            <Column
              className=""
              compId="18"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="4797:9804"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group345_1.png"}
                  className="common-pointer lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4793:8601"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  onClick={handleNavigate5}
                  alt="Group345"
                />
                <Image
                  src={"images/img_vector_70.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] mx-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  compId="I4793:8298;275:1558"
                  comWidth={16}
                  comHeight={16}
                  compLeft={17}
                  compRight={17}
                  compType="Image"
                  alt="Vector"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4793:8305"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group331_1.png"}
                    className="w-[100%] flex items-center justify-center"
                    compId="4793:8305"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group331"
                  />
                </Button>
                <Image
                  src={"images/img_vector_71.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] mx-[auto] object-contain w-[38%]"
                  compId="I4793:8299;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_72.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                  compId="I4793:8300;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_73.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I4793:8301;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_74.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4793:8302;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_75.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4793:8303;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_76.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I4793:8304;120:1890"
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
            className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] w-[93%]"
            compId="5022:8436"
            comWidth={1342}
            comHeight={1015}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
              compId="4793:8602"
              comWidth={1341}
              comHeight={72}
              compLeft={0}
              compRight={1}
              compType="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                WrapClassName="3xl:pb-[9px] 3xl:pl-[7px] 3xl:pr-[26px] 3xl:pt-[10px] border border-bluegray_200 border-solid flex lg:pb-[6px] lg:pl-[4px] lg:pr-[17px] lg:pt-[7px] pb-[8px] pl-[6px] pr-[22px] pt-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%] xl:pb-[7px] xl:pl-[5px] xl:pr-[19px] xl:pt-[8px]"
                compId="4793:8328"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="SearchView"
                name="Group93"
                placeholder="Contacts"
                prefix={
                  <Image
                    src={"images/img_vector_77.png"}
                    className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    compId="I4793:8330;120:1866"
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
                      src={"images/close1.svg"}
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
                WrapClassName="border border-bluegray_200 border-solid rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]"
                compId="4793:8334"
                comWidth={446}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group94"
                placeholder="Search your CRM..."
              ></Input>
              <Button
                className="common-pointer bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="4793:8312"
                comWidth={40}
                comHeight={40}
                compLeft={430}
                compRight={0}
                compType="IconButton"
                onClick={handleOpenAddContactsModal}
              >
                <Image
                  src={"images/img_group5_3.png"}
                  className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  compId="4793:8312"
                  comWidth={40}
                  comHeight={40}
                  compLeft={430}
                  compRight={0}
                  compType="IconButton"
                  onClick={handleOpenAddContactsModal}
                  alt="Group5"
                />
              </Button>
              <Button
                className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="4793:8315"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group4_3.png"}
                  className="w-[100%] flex items-center justify-center"
                  compId="4793:8315"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                  alt="Group4"
                />
              </Button>
              <Button
                className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:p-[1px] lg:p-[1px] p-[2px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="4793:8318"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group3_3.png"}
                  className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                  compId="4793:8318"
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
                compId="4793:8321"
                comWidth={36}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group100_2.png"}
                  className="w-[37%] flex items-center justify-center"
                  compId="4793:8321"
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
                compId="4793:8324"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group99_2.png"}
                  className="w-[72%] flex items-center justify-center"
                  compId="4793:8324"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Row
              className="bg-white_A700 font-montserrat items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
              compId="5022:8452"
              comWidth={1341}
              comHeight={49}
              compLeft={1}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8454"
                comWidth={149}
                comHeight={17}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Name
              </Text>
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8456"
                comWidth={63}
                comHeight={17}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                Job Title
              </Text>
              <Image
                src={"images/img_vector_78.png"}
                className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[1%]"
                compId="I5022:8457;5:15"
                comWidth={9}
                comHeight={12}
                compLeft={7}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-bold 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[86px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8459"
                comWidth={125}
                comHeight={17}
                compLeft={86}
                compRight={0}
                compType="Text"
              >
                Emails
              </Text>
              <Image
                src={"images/img_vector_79.png"}
                className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:mb-[1px] lg:mb-[1px] mb-[2px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] object-contain w-[1%]"
                compId="I5022:8460;5:15"
                comWidth={9}
                comHeight={12}
                compLeft={11}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-bold lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8462"
                comWidth={126}
                comHeight={17}
                compLeft={19}
                compRight={0}
                compType="Text"
              >
                Mobile No
              </Text>
              <Image
                src={"images/img_vector_80.png"}
                className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain w-[1%]"
                compId="I5022:8463;5:15"
                comWidth={9}
                comHeight={12}
                compLeft={10}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-bold lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8465"
                comWidth={149}
                comHeight={17}
                compLeft={19}
                compRight={0}
                compType="Text"
              >
                lead score
              </Text>
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8467"
                comWidth={149}
                comHeight={17}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                Country
              </Text>
              <Text
                className="font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8469"
                comWidth={125}
                comHeight={17}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                display_name
              </Text>
              <Image
                src={"images/img_vector_81.png"}
                className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] xl:mb-[1px] lg:mb-[1px] mb-[2px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] object-contain w-[1%]"
                compId="I5022:8470;5:15"
                comWidth={9}
                comHeight={12}
                compLeft={11}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-bold lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                compId="5022:8472"
                comWidth={149}
                comHeight={17}
                compLeft={19}
                compRight={0}
                compType="Text"
              >
                Action
              </Text>
            </Row>
            <List
              className="font-montserrat gap-[0] min-h-[auto] w-[100%]"
              compId="84"
              comWidth={1341}
              comHeight={882}
              compLeft={1}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              {apiData1?.contacts?.map((apiData1Ele) => {
                return (
                  <Row
                    className="bg-gray_51 items-center justify-start my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                    compId="5022:8473"
                    comWidth={1341}
                    comHeight={63}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-medium lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5022:8475"
                      comWidth={149}
                      comHeight={17}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.first_name}
                    </Text>
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5022:8478"
                      comWidth={149}
                      comHeight={17}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.job_title}
                    </Text>
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5022:8480"
                      comWidth={149}
                      comHeight={17}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.email}
                    </Text>
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5022:8482"
                      comWidth={149}
                      comHeight={17}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.mobile_number}
                    </Text>
                    <Text
                      className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5032:8157"
                      comWidth={56}
                      comHeight={17}
                      compLeft={16}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.lead_score}
                    </Text>
                    <Text
                      className="font-medium ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] lg:my-[5px] xl:my-[6px] my-[7px] 3xl:my-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
                      compId="5022:8486"
                      comWidth={149}
                      comHeight={17}
                      compLeft={109}
                      compRight={0}
                      compType="Text"
                    >
                      {apiData1Ele?.country}
                    </Text>
                    <Button
                      className="bg-green_50 font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius155 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-green_700 w-[11%]"
                      compId="5022:8488"
                      comWidth={149}
                      comHeight={31}
                      compLeft={16}
                      compRight={0}
                      compType="Button"
                    >
                      {apiData1Ele?.display_name}
                    </Button>
                    <Image
                      src={"images/img_edit12.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="5022:8492"
                      comWidth={24}
                      comHeight={24}
                      compLeft={59}
                      compRight={0}
                      compType="Image"
                      alt="edit12"
                    />
                    <Image
                      src={"images/img_trash22.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="5022:8493"
                      comWidth={24}
                      comHeight={24}
                      compLeft={16}
                      compRight={0}
                      compType="Image"
                      alt="trash22"
                    />
                  </Row>
                );
              })}
            </List>
          </Column>
        </Row>
      </Column>

      {isOpenAddContactsModal ? (
        <AddContactsModal
          isOpen={isOpenAddContactsModal}
          onRequestClose={handleCloseAddContactsModal}
        />
      ) : null}
    </>
  );
};

export default ContactsPage;
