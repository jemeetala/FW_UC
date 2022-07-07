import React from "react";

import { getTasks } from "service/api";
import {
  Column,
  Row,
  Image,
  Button,
  Input,
  Text,
  Line,
  List,
  RadioGroup,
  Radio,
} from "components";

const TasksPage = () => {
  const [apiData2, setapiData2] = React.useState();
  React.useEffect(() => {
    callApi2();
  }, []);

  function callApi2() {
    const req = {};
    getTasks(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]"
        compId="5052:8596"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-start justify-evenly w-[100%]"
          compId="68"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center justify-start w-[7%]">
            <Column
              className=""
              compId="13"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="5052:8681"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group371.png"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="5052:8683"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group371"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="5052:8688"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group177_1.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="5052:8688"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group177"
                  />
                </Button>
                <Image
                  src={"images/img_vector_57.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I5052:8691;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_58.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[38%]"
                  compId="I5052:8692;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_59.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                  compId="I5052:8693;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_60.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I5052:8694;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_61.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I5052:8695;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_62.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I5052:8696;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_63.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I5052:8697;120:1890"
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
            className="items-start justify-start lg:mb-[322px] xl:mb-[368px] mb-[414px] 3xl:mb-[497px] w-[93%]"
            compId="67"
            comWidth={1341}
            comHeight={610}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
              compId="5052:8698"
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
                compId="5052:8716"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="SearchView"
                name="Group187"
                placeholder="All"
                prefix={
                  <Image
                    src={"images/img_vector_64.png"}
                    className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                    compId="I5052:8718;120:1866"
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
                      src={"images/close.svg"}
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
                compId="5052:8722"
                comWidth={446}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group94"
                placeholder="Search your CRM..."
              ></Input>
              <Button
                className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5052:8700"
                comWidth={40}
                comHeight={40}
                compLeft={484}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group5_2.png"}
                  className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  compId="5052:8700"
                  comWidth={40}
                  comHeight={40}
                  compLeft={484}
                  compRight={0}
                  compType="IconButton"
                  alt="Group5"
                />
              </Button>
              <Button
                className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="5052:8703"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group4_2.png"}
                  className="w-[100%] flex items-center justify-center"
                  compId="5052:8703"
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
                compId="5052:8706"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group3_2.png"}
                  className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                  compId="5052:8706"
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
                compId="5052:8709"
                comWidth={36}
                comHeight={36}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group100_1.png"}
                  className="w-[37%] flex items-center justify-center"
                  compId="5052:8709"
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
                compId="5052:8712"
                comWidth={40}
                comHeight={40}
                compLeft={24}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group99_1.png"}
                  className="w-[72%] flex items-center justify-center"
                  compId="5052:8712"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                  alt="Group99"
                />
              </Button>
            </Row>
            <Column
              className="items-center xl:pl-[3px] lg:pl-[3px] pl-[4px] w-[100%]"
              compId="73"
              comWidth={1341}
              comHeight={538}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-evenly w-[100%]"
                compId="66"
                comWidth={1337}
                comHeight={538}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[66%]"
                  compId="5052:8604"
                  comWidth={885}
                  comHeight={538}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center px-[1px] w-[100%]"
                    compId="74"
                    comWidth={885}
                    comHeight={58}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="border border-gray_201 border-solid items-center justify-end lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] w-[100%]"
                      compId="5052:8605"
                      comWidth={883}
                      comHeight={58}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                        compId="I5052:8608;186:751"
                        comWidth={43}
                        comHeight={26}
                        compLeft={10}
                        compRight={0}
                        compType="Text"
                      >
                        TASKS
                      </Text>
                      <Line
                        className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[7%]"
                        compId="I5052:8608;186:754"
                        comWidth={63}
                        comHeight={2}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                    </Column>
                  </Column>
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    compId="72"
                    comWidth={885}
                    comHeight={480}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="vertical"
                  >
                    <Row
                      className="bg-white_A700 border border-gray_201 border-solid items-center justify-start my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                      compId="9"
                      comWidth={885}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="5052:8615"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[21%]"
                        compId="5052:8616"
                        comWidth={186}
                        comHeight={88}
                        compLeft={32}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-red_700 w-[auto]"
                          compId="5052:8617"
                          comWidth={87}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          {apiData2?.tasks?.title}
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8618"
                          comWidth={144}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          {apiData2?.tasks?.description}
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-deep_orange_A700 w-[auto]"
                          compId="5052:8619"
                          comWidth={186}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          {apiData2?.tasks?.due_date}
                        </Text>
                      </Column>
                    </Row>
                    <Line
                      className="self-center w-[100%] h-[1px] bg-gray_201"
                      compId="5052:8638"
                      comWidth={884}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="bg-white_A700 border border-gray_201 border-solid items-center justify-start my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                      compId="10"
                      comWidth={885}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="5052:8623"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]"
                        compId="5052:8624"
                        comWidth={144}
                        comHeight={88}
                        compLeft={32}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                          compId="5052:8625"
                          comWidth={87}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sample Task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8626"
                          comWidth={144}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          This is just a sample task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8627"
                          comWidth={128}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Due date: in 2 months
                        </Text>
                      </Column>
                    </Row>
                    <Line
                      className="self-center w-[100%] h-[1px] bg-gray_201"
                      compId="5052:8638"
                      comWidth={884}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="bg-white_A700 border border-gray_201 border-solid items-center justify-start my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                      compId="11"
                      comWidth={885}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="5052:8631"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]"
                        compId="5052:8632"
                        comWidth={144}
                        comHeight={88}
                        compLeft={32}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                          compId="5052:8633"
                          comWidth={87}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sample Task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8634"
                          comWidth={144}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          This is just a sample task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8635"
                          comWidth={128}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Due date: in 2 months
                        </Text>
                      </Column>
                    </Row>
                    <Line
                      className="self-center w-[100%] h-[1px] bg-gray_201"
                      compId="5052:8638"
                      comWidth={884}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Row
                      className="bg-white_A700 border border-gray_201 border-solid items-center justify-start my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                      compId="12"
                      comWidth={885}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                        compId="5052:8639"
                        comWidth={20}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] w-[17%]"
                        compId="5052:8640"
                        comWidth={144}
                        comHeight={88}
                        compLeft={32}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                          compId="5052:8641"
                          comWidth={87}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sample Task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8642"
                          comWidth={144}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          This is just a sample task
                        </Text>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="5052:8643"
                          comWidth={128}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Due date: in 2 months
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
                <Column
                  className="bg-white_A700 border border-gray_201 border-solid justify-center lg:mb-[206px] xl:mb-[236px] mb-[266px] 3xl:mb-[319px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:pb-[26px] xl:pb-[30px] pb-[34px] 3xl:pb-[40px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] w-[34%]"
                  compId="5052:8662"
                  comWidth={452}
                  comHeight={249}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                    compId="5052:8664"
                    comWidth={76}
                    comHeight={23}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    OPEN TASKS
                  </Text>
                  <Column
                    className="items-start justify-start lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] w-[20%]"
                    compId="69"
                    comWidth={90}
                    comHeight={186}
                    compLeft={6}
                    compRight={0}
                    compType="Column"
                  >
                    <RadioGroup
                      className="w-[96%]"
                      compId="70"
                      comWidth={86}
                      comHeight={85}
                      compLeft={0}
                      compRight={0}
                      compType="RadioGroup"
                      name="Group70"
                    >
                      <Radio
                        value={false}
                        className="font-normal mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[87%]"
                        inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border border-bluegray_201 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius10 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                        compId="5052:8665"
                        comWidth={75}
                        comHeight={23}
                        compLeft={0}
                        compRight={11}
                        compType="Radio"
                        name="Group70"
                        label="Overdue"
                      ></Radio>
                      <Radio
                        value={false}
                        className="font-normal lg:mr-[19px] xl:mr-[22px] mr-[25px] 3xl:mr-[30px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[71%]"
                        inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border border-bluegray_201 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius10 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                        compId="5052:8668"
                        comWidth={61}
                        comHeight={23}
                        compLeft={0}
                        compRight={25}
                        compType="Radio"
                        name="Group70"
                        label="Today"
                      ></Radio>
                      <Radio
                        value={false}
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]"
                        inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border border-bluegray_201 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius10 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                        compId="5052:8671"
                        comWidth={86}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Radio"
                        name="Group70"
                        label="Tomorrow"
                      ></Radio>
                    </RadioGroup>
                    <Text
                      className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="5052:8674"
                      comWidth={63}
                      comHeight={23}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      ALL TASKS
                    </Text>
                    <RadioGroup
                      selectedValue="Open"
                      className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]"
                      compId="71"
                      comWidth={90}
                      comHeight={54}
                      compLeft={0}
                      compRight={0}
                      compType="RadioGroup"
                      name="Group71"
                    >
                      <Radio
                        value={true}
                        className="font-normal lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[63%]"
                        inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-blue_800 h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius10 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                        compId="5052:8675"
                        comWidth={57}
                        comHeight={23}
                        compLeft={0}
                        compRight={33}
                        compType="Radio"
                        name="Group71"
                        label="Open"
                      ></Radio>
                      <Radio
                        value={false}
                        className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pl-[3px] xl:pl-[4px] pl-[5px] 3xl:pl-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[100%]"
                        inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border border-bluegray_201 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius10 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                        compId="5052:8678"
                        comWidth={90}
                        comHeight={23}
                        compLeft={0}
                        compRight={0}
                        compType="Radio"
                        name="Group71"
                        label="Completed"
                      ></Radio>
                    </RadioGroup>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TasksPage;
