import React from "react";

import { getTasks } from "service/api";
import {
  Stack,
  Row,
  Text,
  Button,
  Column,
  Line,
  List,
  Image,
  Input,
} from "components";

const TasksPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    getTasks(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-bluegray_50 font-sourcesanspro h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]"
        compId="5042:8270"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Row
          className="absolute bg-gray_100 items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] right-[0] top-[7%] w-[93%]"
          compId="5042:8271"
          comWidth={1340}
          comHeight={55}
          compLeft={0}
          compRight={2}
          compType="Row"
        >
          <Text
            className="font-semibold lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_701 w-[auto]"
            compId="5042:8273"
            comWidth={197}
            comHeight={23}
            compLeft={0}
            compRight={0}
            compType="Text"
          >
            My meetings and Tasks
          </Text>
          <Button
            className="bg-white_A700 border border-gray_201 border-solid font-normal 3xl:ml-[1129px] lg:ml-[731px] xl:ml-[837px] ml-[941px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[7%]"
            compId="5042:8274"
            comWidth={91}
            comHeight={39}
            compLeft={941}
            compRight={0}
            compType="Button"
          >
            Add meeting
          </Button>
          <Button
            className="bg-bluegray_900 border border-gray_201 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]"
            compId="5042:8276"
            comWidth={69}
            comHeight={39}
            compLeft={10}
            compRight={0}
            compType="Button"
          >
            Add Task
          </Button>
        </Row>
        <Stack
          className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[100%]"
          compId="35"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute items-center justify-start pl-[1px] top-[13%] w-[93%]"
            compId="5042:8278"
            comWidth={1343}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]"
              compId="5042:8279"
              comWidth={1336}
              comHeight={58}
              compLeft={1}
              compRight={3}
              compType="Stack"
            >
              <Column
                className="absolute border border-gray_201 border-solid items-center justify-start lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] w-[100%]"
                compId="3"
                comWidth={1336}
                comHeight={58}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                  compId="I5042:8281;186:757"
                  comWidth={71}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  MEETINGS
                </Text>
              </Column>
              <Column
                className="absolute items-center justify-start left-[15%] w-[5%]"
                compId="5042:8282"
                comWidth={63}
                comHeight={42}
                compLeft={196}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                  compId="I5042:8282;186:751"
                  comWidth={43}
                  comHeight={26}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  TASKS
                </Text>
                <Line
                  className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[100%]"
                  compId="I5042:8282;186:754"
                  comWidth={63}
                  comHeight={2}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compId="36"
              comWidth={1342}
              comHeight={360}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              {apiData?.tasks?.map((apiDataEle) => {
                return (
                  <Row
                    className="bg-white_A700 border border-gray_201 border-solid items-center justify-start my-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                    compId="4"
                    comWidth={1340}
                    comHeight={120}
                    compLeft={0}
                    compRight={2}
                    compType="Row"
                  >
                    <div
                      className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                      compId="5042:8297"
                      comWidth={30}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[11%]"
                      compId="5042:8298"
                      comWidth={148}
                      comHeight={88}
                      compLeft={48}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                        compId="5042:8299"
                        comWidth={89}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.title}
                      </Text>
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="5042:8300"
                        comWidth={148}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.description}
                      </Text>
                      <Text
                        className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="5042:8301"
                        comWidth={128}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.due_date}
                      </Text>
                    </Column>
                  </Row>
                );
              })}
            </List>
            <Column
              className="bg-white_A700 items-center justify-start lg:pb-[13px] xl:pb-[15px] pb-[17px] 3xl:pb-[20px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] w-[100%]"
              compId="5042:8283"
              comWidth={1340}
              comHeight={58}
              compLeft={2}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]"
                compId="5042:8285"
                comWidth={336}
                comHeight={23}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                <span className="text-bluegray_701 font-sourcesanspro">
                  Showing task due from{" "}
                </span>
                <span className="text-bluegray_701 font-sourcesanspro font-semibold">
                  18 may 2022 - 22 May 2023
                </span>
              </Text>
            </Column>
          </Column>
          <aside className="absolute items-center justify-start w-[7%]">
            <Column
              className=""
              compId="7"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="5042:8355"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group371.png"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="5042:8357"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group371"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="5042:8362"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group177.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="5042:8362"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group177"
                  />
                </Button>
                <Image
                  src={"images/img_vector_8.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I5042:8365;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_9.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[38%]"
                  compId="I5042:8366;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_10.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                  compId="I5042:8367;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_11.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I5042:8368;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_12.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I5042:8369;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_13.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I5042:8370;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_14.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I5042:8371;120:1890"
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
          <Row
            className="absolute bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[93%]"
            compId="5042:8372"
            comWidth={1341}
            comHeight={72}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
              WrapClassName="3xl:pb-[10px] 3xl:pl-[7px] 3xl:pr-[26px] 3xl:pt-[9px] border border-bluegray_200 border-solid flex lg:pb-[7px] lg:pl-[4px] lg:pr-[17px] lg:pt-[6px] pb-[9px] pl-[6px] pr-[22px] pt-[8px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[7%] xl:pb-[8px] xl:pl-[5px] xl:pr-[19px] xl:pt-[7px]"
              compId="5042:8390"
              comWidth={0}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="SearchView"
              name="Group187"
              placeholder="All"
              prefix={
                <Image
                  src={"images/img_vector_15.png"}
                  className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                  compId="I5042:8392;120:1866"
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
              compId="5042:8396"
              comWidth={446}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group94"
              placeholder="Search your CRM..."
            ></Input>
            <Row
              className="items-center justify-between lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] w-[22%]"
              compId="37"
              comWidth={292}
              comHeight={40}
              compLeft={484}
              compRight={0}
              compType="Row"
            >
              <Button
                className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5042:8374"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group5_1.png"}
                  className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  compId="5042:8374"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group5"
                />
              </Button>
              <Button
                className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5042:8377"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group4_1.png"}
                  className="w-[100%] flex items-center justify-center"
                  compId="5042:8377"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group4"
                />
              </Button>
              <Button
                className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[1px] lg:p-[1px] p-[2px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5042:8380"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group3_1.png"}
                  className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                  compId="5042:8380"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group3"
                />
              </Button>
              <Button
                className="bg-red_600 flex lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center xl:my-[1px] lg:my-[1px] my-[2px] p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]"
                compId="5042:8383"
                comWidth={36}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group100_1.png"}
                  className="w-[37%] flex items-center justify-center"
                  compId="5042:8383"
                  comWidth={36}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group100"
                />
              </Button>
              <Button
                className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5042:8386"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group99_1.png"}
                  className="w-[72%] flex items-center justify-center"
                  compId="5042:8386"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group99"
                />
              </Button>
            </Row>
          </Row>
        </Stack>
      </Stack>
    </>
  );
};

export default TasksPage;
