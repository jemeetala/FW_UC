import React from "react";

import { useNavigate } from "react-router-dom";
import AddTaskModal from "modals/AddTask";
import {
  Column,
  Row,
  Image,
  Button,
  Input,
  Stack,
  Text,
  Line,
  CheckBox,
} from "components";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isOpenAddTaskModal, setAddTaskModal] = React.useState(false);

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleOpenAddTaskModal() {
    setAddTaskModal(true);
  }
  function handleCloseAddTaskModal() {
    setAddTaskModal(false);
  }

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-end mx-[auto] w-[100%]"
        compId="4453:4265"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compId="67"
          comWidth={1440}
          comHeight={1040}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] w-[7%]">
            <Column
              className=""
              compId="6"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="4712:8194"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_logo.png"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4712:8192"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4712:8189"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group177.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4712:8189"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group177"
                  />
                </Button>
                <Image
                  src={"images/img_vector_22.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I4712:8168;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_23.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[38%]"
                  compId="I4712:8170;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_24.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                  compId="I4712:8172;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_25.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I4712:8174;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_26.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4712:8176;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_27.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4712:8178;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_28.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I4712:8180;120:1890"
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
            className="items-center w-[93%]"
            compId="66"
            comWidth={1341}
            comHeight={1040}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] w-[100%]"
              compId="4797:8606"
              comWidth={1341}
              comHeight={62}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Input
                className="bg-transparent border-0 font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
                WrapClassName="3xl:pb-[8px] 3xl:pl-[9px] 3xl:pr-[40px] 3xl:pt-[7px] border border-bluegray_200 border-solid flex lg:pb-[5px] lg:pl-[6px] lg:pr-[26px] lg:pt-[4px] pb-[7px] pl-[8px] pr-[34px] pt-[6px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[7%] xl:pb-[6px] xl:pl-[7px] xl:pr-[30px] xl:pt-[5px]"
                compId="4712:8240"
                comWidth={0}
                comHeight={34}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group187"
                placeholder="All"
                prefix={
                  <Image
                    src={"images/img_vector_29.png"}
                    className="w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    compId="I4712:8218;120:1866"
                    comWidth={20.01}
                    comHeight={17.22}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></Input>
              <Input
                className="bg-transparent border-0 font-normal not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                WrapClassName="border border-bluegray_200 border-solid rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]"
                compId="4712:8222"
                comWidth={446}
                comHeight={34}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group94"
                placeholder="Search your CRM..."
              ></Input>
              <Row
                className="items-center justify-between lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] w-[22%]"
                compId="69"
                comWidth={292}
                comHeight={34}
                compLeft={484}
                compRight={0}
                compType="Row"
              >
                <Stack
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] w-[14%]"
                  compId="4712:8199"
                  comWidth={40}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-bluegray_900 lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] rounded-radius20 w-[100%]"
                    compId="4712:8200"
                    comWidth={40}
                    comHeight={34}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_vector_30.png"}
                    className="absolute lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] object-contain w-[40%]"
                    compId="I4712:8201;120:5217"
                    comWidth={16}
                    comHeight={13}
                    compLeft={12}
                    compRight={12}
                    compType="Image"
                    alt="Vector"
                  />
                </Stack>
                <Stack
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] w-[14%]"
                  compId="4712:8202"
                  comWidth={40}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] rounded-radius20 w-[100%]"
                    compId="4712:8203"
                    comWidth={40}
                    comHeight={34}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_vector_31.png"}
                    className="absolute lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] object-contain w-[50%]"
                    compId="I4712:8204;120:870"
                    comWidth={20}
                    comHeight={13}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="Vector"
                  />
                </Stack>
                <Stack
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] w-[14%]"
                  compId="4712:8205"
                  comWidth={40}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-white_A700 border border-gray_200 border-solid lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] rounded-radius20 w-[100%]"
                    compId="4712:8206"
                    comWidth={40}
                    comHeight={34}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_vector_32.png"}
                    className="absolute bottom-[6%] lg:h-[21px] xl:h-[24px] h-[26px] 2xl:h-[27px] 3xl:h-[32px] inset-x-[0] mx-[auto] object-contain w-[78%]"
                    compId="I4712:8207;120:1818"
                    comWidth={31}
                    comHeight={26}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                </Stack>
                <Stack
                  className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] my-[1px] w-[12%]"
                  compId="4712:8208"
                  comWidth={36}
                  comHeight={31}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-red_600 lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] rounded-radius18 w-[100%]"
                    compId="4712:8209"
                    comWidth={36}
                    comHeight={31}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_1.png"}
                    className="absolute bottom-[29%] h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] object-contain w-[14%]"
                    compId="4712:8210"
                    comWidth={5}
                    comHeight={10}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="1"
                  />
                </Stack>
                <Stack
                  className="lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] w-[14%]"
                  compId="4712:8212"
                  comWidth={40}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <div
                    className="absolute bg-amber_100 lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] rounded-radius20 w-[100%]"
                    compId="4712:8213"
                    comWidth={40}
                    comHeight={34}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Image
                    src={"images/img_profilename.png"}
                    className="absolute lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] inset-[0] justify-center m-[auto] object-contain w-[28%]"
                    compId="4712:8214"
                    comWidth={11}
                    comHeight={12}
                    compLeft={13}
                    compRight={14}
                    compType="Image"
                    alt="ProfileName"
                  />
                </Stack>
              </Row>
            </Row>
            <Row
              className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] w-[100%]"
              compId="4797:8607"
              comWidth={1340}
              comHeight={56}
              compLeft={1}
              compRight={0}
              compType="Row"
            >
              <Button
                className="bg-white_A700 font-normal mb-[1px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[14%]"
                compId="4712:8246"
                comWidth={186}
                comHeight={55}
                compLeft={0}
                compRight={0}
                compType="Button"
              >
                Activities Dashboard
              </Button>
              <Text
                className="font-normal lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]"
                compId="4712:8249"
                comWidth={67}
                comHeight={23}
                compLeft={16}
                compRight={0}
                compType="Text"
              >
                Analytics
              </Text>
              <Line
                className="bg-gray_201 h-[1px] mb-[1px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] rotate-[-90deg] w-[1px]"
                compId="4712:8250"
                comWidth={1}
                comHeight={55}
                compLeft={17}
                compRight={0}
                compType="Line"
              />
              <Text
                className="font-normal lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]"
                compId="4712:8253"
                comWidth={124}
                comHeight={23}
                compLeft={15}
                compRight={0}
                compType="Text"
              >
                Sales Dashboard
              </Text>
              <Image
                src={"images/img_vector_33.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                compId="I4712:8254;120:1608"
                comWidth={16}
                comHeight={16}
                compLeft={15}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Line
                className="bg-gray_201 h-[1px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] mt-[1px] rotate-[-90deg] w-[1px]"
                compId="4712:8256"
                comWidth={1}
                comHeight={55}
                compLeft={20}
                compRight={0}
                compType="Line"
              />
              <Image
                src={"images/img_vector_34.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:my-[15px] xl:my-[17px] my-[20px] 3xl:my-[24px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                compId="I4461:4476;120:5217"
                comWidth={16}
                comHeight={16}
                compLeft={19}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            </Row>
            <Row
              className="items-center justify-between lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[98%]"
              compId="65"
              comWidth={1310}
              comHeight={903}
              compLeft={15}
              compRight={16}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-center lg:mb-[14px] xl:mb-[16px] mb-[19px] 3xl:mb-[22px] lg:pb-[278px] xl:pb-[318px] pb-[358px] 3xl:pb-[429px] lg:pt-[28px] xl:pt-[32px] pt-[36px] 3xl:pt-[43px] rounded-radius8 w-[66%]"
                compId="4797:8614"
                comWidth={868}
                comHeight={884}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[39px] xl:mr-[45px] mr-[51px] 3xl:mr-[61px] w-[91%]"
                  compId="4797:8613"
                  comWidth={793}
                  comHeight={40}
                  compLeft={24}
                  compRight={51}
                  compType="Row"
                >
                  <Text
                    className="font-inter font-medium lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]"
                    compId="4712:8262"
                    comWidth={99}
                    comHeight={23}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-bluegray_901 font-sourcesanspro font-light">
                      Hey
                    </span>
                    <span className="text-bluegray_901 font-sourcesanspro font-normal">
                      {" "}
                    </span>
                    <span className="text-bluegray_901 font-sourcesanspro font-semibold">
                      Jemee!
                    </span>
                  </Text>
                  <Button
                    className="3xl:ml-[570px] 3xl:p-[9px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:ml-[369px] lg:p-[6px] ml-[475px] p-[8px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] text-center w-[12%] xl:ml-[422px] xl:p-[7px]"
                    compId="4712:8415"
                    comWidth={0}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    onClick={handleOpenAddTaskModal}
                    leftIcon={
                      <Image
                        src={"images/img_addtask_1.png"}
                        className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                        compId="4712:8398"
                        comWidth={20}
                        comHeight={20.7}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="add-task 1"
                      />
                    }
                  >
                    <div className="common-pointer bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                      Add task
                    </div>
                  </Button>
                  <Button
                    className="3xl:pl-[12px] 3xl:pr-[10px] 3xl:py-[9px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:px-[7px] lg:py-[6px] pl-[10px] pr-[9px] py-[8px] text-center w-[16%] xl:px-[8px] xl:py-[7px]"
                    compId="4712:8414"
                    comWidth={0}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    leftIcon={
                      <Image
                        src={"images/img_vector_35.png"}
                        className="w-[16.67px] text-center lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[20px]"
                        compId="I4712:8404;120:380"
                        comWidth={16.67}
                        comHeight={17.25}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                      Add meeting
                    </div>
                  </Button>
                </Row>
                <Row
                  className="border border-gray_201 border-solid items-center justify-end lg:mt-[57px] xl:mt-[65px] mt-[74px] 3xl:mt-[88px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] w-[100%]"
                  compId="4797:8611"
                  comWidth={868}
                  comHeight={61}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <CheckBox
                    className="font-normal not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[10%]"
                    inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border-bluegray_51 border-bw083 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                    compId="4712:8421"
                    comWidth={83}
                    comHeight={23}
                    compLeft={0}
                    compRight={0}
                    compType="CheckBox"
                    name="Selectall"
                    label="Select all"
                  ></CheckBox>
                  <Button
                    className="bg-blue_800 flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] mt-[1px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I4712:8291;123:2608"
                    comWidth={20}
                    comHeight={20}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                  >
                    <Image
                      src={"images/img_group44.png"}
                      className="w-[98%] flex items-center justify-center"
                      compId="I4712:8291;123:2608"
                      comWidth={20}
                      comHeight={20}
                      compLeft={24}
                      compRight={0}
                      compType="IconButton"
                      alt="Group44"
                    />
                  </Button>
                  <Row
                    className="items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[30%]"
                    compId="70"
                    comWidth={255}
                    comHeight={23}
                    compLeft={10}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                      compId="4712:8292"
                      comWidth={32}
                      comHeight={23}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Open
                    </Text>
                    <CheckBox
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[31%]"
                      inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border-bluegray_51 border-bw083 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                      compId="4712:8423"
                      comWidth={80}
                      comHeight={23}
                      compLeft={24}
                      compRight={0}
                      compType="CheckBox"
                      name="Overdue"
                      label="Overdue"
                    ></CheckBox>
                    <CheckBox
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[37%]"
                      inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border-bluegray_51 border-bw083 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                      compId="4712:8424"
                      comWidth={95}
                      comHeight={23}
                      compLeft={24}
                      compRight={0}
                      compType="CheckBox"
                      name="Completed"
                      label="Completed"
                    ></CheckBox>
                  </Row>
                  <Text
                    className="common-pointer font-normal lg:ml-[296px] xl:ml-[338px] ml-[381px] 3xl:ml-[457px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]"
                    compId="4712:8299"
                    comWidth={55}
                    comHeight={23}
                    compLeft={381}
                    compRight={0}
                    compType="Text"
                    onClick={handleNavigate1}
                  >
                    All tasks
                  </Text>
                </Row>
                <Text
                  className="font-semibold xl:ml-[172px] ml-[194px] 3xl:ml-[232px] xl:mr-[171px] mr-[193px] 3xl:mr-[231px] lg:mt-[63px] xl:mt-[72px] mt-[82px] 3xl:mt-[98px] lg:mx-[150px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]"
                  compId="4712:8301"
                  comWidth={481}
                  comHeight={23}
                  compLeft={194}
                  compRight={193}
                  compType="Text"
                >
                  Find your upcoming tasks, meetings and reminders here
                </Text>
                <Row
                  className="items-center justify-start lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] mx-[auto] w-[85%]"
                  compId="4797:8610"
                  comWidth={740}
                  comHeight={144}
                  compLeft={64}
                  compRight={64}
                  compType="Row"
                >
                  <Column
                    className="items-start lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[53%]"
                    compId="4797:8608"
                    comWidth={389}
                    comHeight={118}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] ml-[94px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                      compId="4712:8305"
                      comWidth={185}
                      comHeight={23}
                      compLeft={94}
                      compRight={0}
                      compType="Text"
                    >
                      Bring your emails into CRM
                    </Text>
                    <Column
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compId="72"
                      comWidth={389}
                      comHeight={85}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] xl:mr-[111px] mr-[125px] 3xl:mr-[150px] lg:mr-[97px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                        compId="4712:8306"
                        comWidth={154}
                        comHeight={23}
                        compLeft={110}
                        compRight={125}
                        compType="Text"
                      >
                        Select your email provider
                      </Text>
                      <Row
                        className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                        compId="4712:8476"
                        comWidth={389}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="3xl:pl-[9px] 3xl:pr-[12px] 3xl:py-[8px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[6px] lg:pr-[7px] lg:py-[5px] pl-[8px] pr-[10px] py-[7px] rounded-radius4 text-center w-[19%] xl:pl-[7px] xl:pr-[8px] xl:py-[6px]"
                          compId="4712:8440"
                          comWidth={0}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_gmail_svg.png"}
                              className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                              compId="4712:8429"
                              comWidth={20}
                              comHeight={15.53}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Gmail svg"
                            />
                          }
                        >
                          <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                            Gmail
                          </div>
                        </Button>
                        <Row
                          className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px] rounded-radius4 w-[25%]"
                          compId="4712:8458"
                          comWidth={98}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[19%]"
                            compId="4712:8444"
                            comWidth={15}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[100%]"
                              compId="56"
                              comWidth={15}
                              comHeight={20}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[100%]"
                                compId="57"
                                comWidth={15}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Stack
                                  className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[100%]"
                                  compId="58"
                                  comWidth={15}
                                  comHeight={20}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Stack"
                                >
                                  <Stack
                                    className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[87%]"
                                    compId="59"
                                    comWidth={13}
                                    comHeight={20}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Stack"
                                  >
                                    <Stack
                                      className="absolute lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"
                                      compId="60"
                                      comWidth={13}
                                      comHeight={5}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Stack"
                                    >
                                      <Stack
                                        className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] pt-[0] top-[0] w-[100%]"
                                        compId="4712:8445"
                                        comWidth={13}
                                        comHeight={5}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Stack"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group.png')",
                                        }}
                                      >
                                        <Image
                                          src={"images/img_vector_36.png"}
                                          className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] object-contain w-[92%]"
                                          compId="4712:8447"
                                          comWidth={12}
                                          comHeight={4}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Image"
                                          alt="Vector"
                                        />
                                      </Stack>
                                      <Stack
                                        className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] p-[0] w-[92%]"
                                        compId="4712:8448"
                                        comWidth={12}
                                        comHeight={4}
                                        compLeft={0}
                                        compRight={0}
                                        compType="Stack"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group_1.png')",
                                        }}
                                      >
                                        <Image
                                          src={"images/img_vector_37.png"}
                                          className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-cover w-[100%]"
                                          compId="4712:8450"
                                          comWidth={12}
                                          comHeight={4}
                                          compLeft={0}
                                          compRight={0}
                                          compType="Image"
                                          alt="Vector"
                                        />
                                      </Stack>
                                    </Stack>
                                    <Image
                                      src={"images/img_vector_38.png"}
                                      className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] object-contain right-[0] w-[46%]"
                                      compId="4712:8451"
                                      comWidth={6}
                                      comHeight={19}
                                      compLeft={0}
                                      compRight={0}
                                      compType="Image"
                                      alt="Vector"
                                    />
                                  </Stack>
                                  <Image
                                    src={"images/img_vector_39.png"}
                                    className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] object-contain w-[60%]"
                                    compId="4712:8452"
                                    comWidth={9}
                                    comHeight={15}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Image"
                                    alt="Vector"
                                  />
                                </Stack>
                                <Image
                                  src={"images/img_vector_40.png"}
                                  className="absolute bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] object-contain w-[40%]"
                                  compId="4712:8453"
                                  comWidth={6}
                                  comHeight={4}
                                  compLeft={2}
                                  compRight={0}
                                  compType="Image"
                                  alt="Vector"
                                />
                              </Stack>
                              <Image
                                src={"images/img_vector_41.png"}
                                className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] object-contain w-[60%]"
                                compId="4712:8454"
                                comWidth={9}
                                comHeight={15}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Vector"
                              />
                            </Stack>
                            <Image
                              src={"images/img_vector_42.png"}
                              className="absolute bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] object-contain w-[40%]"
                              compId="4712:8455"
                              comWidth={6}
                              comHeight={4}
                              compLeft={2}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                          <Text
                            className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                            compId="4712:8457"
                            comWidth={58}
                            comHeight={23}
                            compLeft={5}
                            compRight={0}
                            compType="Text"
                          >
                            Office 365
                          </Text>
                        </Row>
                        <Button
                          className="3xl:pl-[8px] 3xl:pr-[10px] 3xl:py-[8px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[5px] lg:pr-[7px] lg:py-[5px] pl-[7px] pr-[9px] py-[7px] rounded-radius4 text-center w-[23%] xl:pl-[6px] xl:pr-[8px] xl:py-[6px]"
                          compId="4712:8469"
                          comWidth={0}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_outlook_logo.png"}
                              className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                              compId="4712:8461"
                              comWidth={20}
                              comHeight={20.7}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Outlook logo"
                            />
                          }
                        >
                          <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                            Outlook
                          </div>
                        </Button>
                        <Button
                          className="3xl:pl-[13px] 3xl:pr-[9px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[8px] lg:pr-[6px] lg:py-[4px] pl-[11px] pr-[8px] py-[6px] rounded-radius4 text-center w-[21%] xl:pl-[9px] xl:pr-[7px] xl:py-[5px]"
                          compId="4712:8475"
                          comWidth={0}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_vector_43.png"}
                              className="w-[13.99px] text-center lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                              compId="4712:8472"
                              comWidth={13.99}
                              comHeight={9.32}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          }
                        >
                          <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                            Others
                          </div>
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Line
                    className="bg-bluegray_51 h-[1px] lg:ml-[35px] xl:ml-[40px] ml-[46px] 3xl:ml-[55px] rotate-[-90deg] w-[1px]"
                    compId="4712:8381"
                    comWidth={1}
                    comHeight={144}
                    compLeft={46}
                    compRight={0}
                    compType="Line"
                  />
                  <Column
                    className="items-center lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[34%]"
                    compId="4797:8609"
                    comWidth={251}
                    comHeight={118}
                    compLeft={53}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                      compId="4712:8349"
                      comWidth={185}
                      comHeight={23}
                      compLeft={33}
                      compRight={33}
                      compType="Text"
                    >
                      Bring your emails into CRM
                    </Text>
                    <Text
                      className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] lg:mr-[37px] xl:mr-[42px] mr-[48px] 3xl:mr-[57px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4712:8350"
                      comWidth={154}
                      comHeight={23}
                      compLeft={49}
                      compRight={48}
                      compType="Text"
                    >
                      Select your email provider
                    </Text>
                    <Row
                      className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]"
                      compId="4712:8513"
                      comWidth={251}
                      comHeight={37}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="3xl:px-[9px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:px-[6px] lg:py-[4px] px-[8px] py-[6px] rounded-radius4 text-center w-[55%] xl:px-[7px] xl:py-[5px]"
                        compId="4712:8510"
                        comWidth={0}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        leftIcon={
                          <Image
                            src={"images/img_googlecalendar_1.png"}
                            className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                            compId="4712:8499"
                            comWidth={20}
                            comHeight={20.7}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="google-calendar 1"
                          />
                        }
                      >
                        <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                          Google Calender
                        </div>
                      </Button>
                      <Row
                        className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[39%]"
                        compId="4712:8497"
                        comWidth={98}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Stack
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[19%]"
                          compId="4712:8483"
                          comWidth={15}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Stack
                            className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[87%]"
                            compId="61"
                            comWidth={13}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"
                              compId="62"
                              comWidth={13}
                              comHeight={5}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute bg-cover bg-repeat lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] pt-[0] top-[0] w-[100%]"
                                compId="4712:8484"
                                comWidth={13}
                                comHeight={5}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_2.png')",
                                }}
                              >
                                <Image
                                  src={"images/img_vector_44.png"}
                                  className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] object-contain w-[92%]"
                                  compId="4712:8486"
                                  comWidth={12}
                                  comHeight={4}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack
                                className="absolute bg-cover bg-repeat h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] p-[0] w-[92%]"
                                compId="4712:8487"
                                comWidth={12}
                                comHeight={4}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_6.png')",
                                }}
                              >
                                <Image
                                  src={"images/img_vector_45.png"}
                                  className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-cover w-[100%]"
                                  compId="4712:8489"
                                  comWidth={12}
                                  comHeight={4}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                            <Image
                              src={"images/img_vector_46.png"}
                              className="absolute lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] object-contain right-[0] w-[46%]"
                              compId="4712:8490"
                              comWidth={6}
                              comHeight={19}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] w-[60%]"
                            compId="4"
                            comWidth={9}
                            comHeight={15}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                            style={{
                              backgroundImage: "url('images/img_group4_1.png')",
                            }}
                          >
                            <Image
                              src={"images/img_vector_47.png"}
                              className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] object-cover w-[100%]"
                              compId="4712:8493"
                              comWidth={9}
                              comHeight={15}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[5%] h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[13%] w-[40%]"
                            compId="5"
                            comWidth={6}
                            comHeight={4}
                            compLeft={2}
                            compRight={0}
                            compType="Stack"
                            style={{
                              backgroundImage: "url('images/img_group5_1.png')",
                            }}
                          >
                            <Image
                              src={"images/img_vector_48.png"}
                              className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-cover w-[100%]"
                              compId="4712:8494"
                              comWidth={6}
                              comHeight={4}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                        <Text
                          className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                          compId="4712:8496"
                          comWidth={58}
                          comHeight={23}
                          compLeft={5}
                          compRight={0}
                          compType="Text"
                        >
                          Office 365
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column
                className="items-center lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[33%]"
                compId="4797:8620"
                comWidth={426}
                comHeight={896}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]"
                  compId="4797:8619"
                  comWidth={426}
                  comHeight={31}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Line
                    className="absolute bg-bluegray_400 h-[1px] inset-y-[48%] w-[100%]"
                    compId="4477:6008"
                    comWidth={426}
                    comHeight={0}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="absolute bg-gray_50 border border-gray_201 border-solid items-center justify-center left-[26%] lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius4 w-[39%]"
                    compId="4676:9106"
                    comWidth={168}
                    comHeight={31}
                    compLeft={111}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_49.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I4477:6006;120:1890"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                      compId="4477:6002"
                      comWidth={116}
                      comHeight={23}
                      compLeft={18}
                      compRight={0}
                      compType="Text"
                    >
                      Configure widgets
                    </Text>
                  </Row>
                </Stack>
                <Column
                  className="bg-white_A700 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[32px] xl:pb-[37px] pb-[42px] 3xl:pb-[50px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius8 w-[100%]"
                  compId="4797:8618"
                  comWidth={426}
                  comHeight={170}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[37%]"
                    compId="4712:8588"
                    comWidth={157}
                    comHeight={40}
                    compLeft={16}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_group3_1.png"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      compId="4712:8552"
                      comWidth={40}
                      comHeight={40}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Group3"
                    />
                    <Text
                      className="font-semibold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4712:8551"
                      comWidth={107}
                      comHeight={23}
                      compLeft={10}
                      compRight={0}
                      compType="Text"
                    >
                      Freddy AI Insights
                    </Text>
                  </Row>
                  <Column
                    className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                    compId="73"
                    comWidth={426}
                    comHeight={64}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Line
                      className="bg-bluegray_51 h-[1px] w-[100%]"
                      compId="4712:8550"
                      comWidth={426}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Text
                      className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4712:8585"
                      comWidth={330}
                      comHeight={23}
                      compLeft={48}
                      compRight={48}
                      compType="Text"
                    >
                      Freddy doesn’t have any insights for now. But it will soon
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="bg-white_A700 items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[34px] xl:pb-[39px] pb-[44px] 3xl:pb-[52px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] rounded-radius8 w-[100%]"
                  compId="4797:8617"
                  comWidth={426}
                  comHeight={663}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-between lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mr-[14px] xl:mr-[16px] mr-[18px] 3xl:mr-[21px] w-[92%]"
                    compId="4797:8616"
                    comWidth={391}
                    comHeight={23}
                    compLeft={16}
                    compRight={18}
                    compType="Row"
                  >
                    <Text
                      className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4712:8597"
                      comWidth={73}
                      comHeight={23}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      My calender
                    </Text>
                    <Image
                      src={"images/img_vector_50.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[1px] lg:mb-[1px] mb-[2px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                      compId="I4712:8598;120:1890"
                      comWidth={16}
                      comHeight={16}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                  </Row>
                  <Line
                    className="bg-bluegray_51 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
                    compId="4712:8595"
                    comWidth={426}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Column
                    className="items-start justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mr-[14px] xl:mr-[16px] mr-[18px] 3xl:mr-[21px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[92%]"
                    compId="68"
                    comWidth={392}
                    comHeight={548}
                    compLeft={16}
                    compRight={18}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                      compId="4712:8600"
                      comWidth={36}
                      comHeight={23}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Today
                    </Text>
                    <Column
                      className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compId="74"
                      comWidth={392}
                      comHeight={152}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between pt-[1px] w-[100%]"
                        compId="4712:8601"
                        comWidth={392}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Row
                          className="items-center justify-between w-[27%]"
                          compId="71"
                          comWidth={105}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                            compId="4712:8602"
                            comWidth={45}
                            comHeight={23}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            27 Jun
                          </Text>
                          <Image
                            src={"images/img_vector_51.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] xl:mt-[3px] mt-[4px] lg:my-[3px] object-contain w-[7%]"
                            compId="I4712:8604;120:3703"
                            comWidth={7}
                            comHeight={13}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Vector"
                          />
                          <Image
                            src={"images/img_vector_52.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] xl:mt-[3px] mt-[4px] lg:my-[3px] object-contain w-[7%]"
                            compId="I4712:8605;120:3703"
                            comWidth={7}
                            comHeight={13}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Vector"
                          />
                        </Row>
                        <Text
                          className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]"
                          compId="4712:8606"
                          comWidth={79}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Show today
                        </Text>
                      </Row>
                      <Row
                        className="items-center justify-between xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                        compId="4712:8608"
                        comWidth={389}
                        comHeight={23}
                        compLeft={2}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8609"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          08:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8610"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-center justify-between xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]"
                        compId="4712:8611"
                        comWidth={389}
                        comHeight={23}
                        compLeft={2}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8612"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          09:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8613"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                    </Column>
                    <Column
                      className="items-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]"
                      compId="75"
                      comWidth={392}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Line
                        className="bg-red_700 h-[1px] w-[87%]"
                        compId="4712:8617"
                        comWidth={342}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                    </Column>
                    <Column
                      className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] xl:pl-[1px] lg:pl-[1px] pl-[2px] w-[100%]"
                      compId="76"
                      comWidth={392}
                      comHeight={315}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="63"
                        comWidth={389}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8615"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          10:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8616"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]"
                        compId="4712:8618"
                        comWidth={389}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8619"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          11:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8620"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]"
                        compId="4712:8621"
                        comWidth={389}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8622"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          12:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8623"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]"
                        compId="4712:8624"
                        comWidth={389}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8625"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          13:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8626"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                      <Row
                        className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]"
                        compId="4712:8627"
                        comWidth={389}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4712:8628"
                          comWidth={31}
                          comHeight={23}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          14:00
                        </Text>
                        <Line
                          className="bg-bluegray_100 h-[1px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[88%]"
                          compId="4712:8629"
                          comWidth={342}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Line"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>

      {isOpenAddTaskModal ? (
        <AddTaskModal
          isOpen={isOpenAddTaskModal}
          onRequestClose={handleCloseAddTaskModal}
        />
      ) : null}
    </>
  );
};

export default DashboardPage;
