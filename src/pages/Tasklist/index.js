import React from "react";

import { Row, Column, Image, Button, Input } from "components";

const TasklistPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row
        className="bg-bluegray_50 font-sourcesanspro items-start mx-[auto] pr-[1px] w-[100%]"
        compId="5050:8147"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Row"
      >
        <aside className="items-center justify-start w-[7%]">
          <Column
            className=""
            compId="1"
            comWidth={98}
            comHeight={1024}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="bg-bluegray_900 items-center justify-start lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
              compId="5050:8148"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Image
                src={"images/img_group345.png"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                compId="5050:8150"
                comWidth={50}
                comHeight={50}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Group345"
              />
              <Image
                src={"images/img_vector.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] mx-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                compId="I5050:8155;275:1558"
                comWidth={16}
                comHeight={16}
                compLeft={17}
                compRight={17}
                compType="Image"
                alt="Vector"
              />
              <Button
                className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                compId="5050:8162"
                comWidth={50}
                comHeight={50}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group331.png"}
                  className="w-[100%] flex items-center justify-center"
                  compId="5050:8162"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                  alt="Group331"
                />
              </Button>
              <Image
                src={"images/img_vector_1.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] mx-[auto] object-contain w-[38%]"
                compId="I5050:8156;120:2252"
                comWidth={19}
                comHeight={20}
                compLeft={15}
                compRight={15}
                compType="Image"
                alt="Vector"
              />
              <Image
                src={"images/img_vector_2.png"}
                className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                compId="I5050:8157;120:328"
                comWidth={16}
                comHeight={19}
                compLeft={16}
                compRight={16}
                compType="Image"
                alt="Vector"
              />
              <Image
                src={"images/img_vector_3.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                compId="I5050:8158;120:1630"
                comWidth={18}
                comHeight={20}
                compLeft={16}
                compRight={16}
                compType="Image"
                alt="Vector"
              />
              <Image
                src={"images/img_vector_4.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I5050:8159;120:434"
                comWidth={20}
                comHeight={20}
                compLeft={15}
                compRight={15}
                compType="Image"
                alt="Vector"
              />
              <Image
                src={"images/img_vector_5.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="I5050:8160;120:1750"
                comWidth={20}
                comHeight={20}
                compLeft={15}
                compRight={15}
                compType="Image"
                alt="Vector"
              />
              <Image
                src={"images/img_vector_6.png"}
                className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                compId="I5050:8161;120:1890"
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
          className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start 3xl:mb-[1143px] lg:mb-[740px] xl:mb-[846px] mb-[952px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[93%]"
          compId="5050:8165"
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
            WrapClassName="3xl:pb-[9px] 3xl:pl-[7px] 3xl:pr-[26px] 3xl:pt-[10px] border border-bluegray_200 border-solid flex lg:pb-[6px] lg:pl-[4px] lg:pr-[17px] lg:pt-[7px] pb-[8px] pl-[6px] pr-[22px] pt-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[11%] xl:pb-[7px] xl:pl-[5px] xl:pr-[19px] xl:pt-[8px]"
            compId="5050:8183"
            comWidth={0}
            comHeight={40}
            compLeft={0}
            compRight={0}
            compType="SearchView"
            name="Group93"
            placeholder="Tasks"
            prefix={
              <Image
                src={"images/img_vector_7.png"}
                className="cursor-pointer w-[20.01px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px] my-[auto]"
                compId="I5050:8185;120:1866"
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
            compId="5050:8188"
            comWidth={446}
            comHeight={40}
            compLeft={0}
            compRight={0}
            compType="EditText"
            name="Group94"
            placeholder="Search your CRM..."
          ></Input>
          <Row
            className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]"
            compId="34"
            comWidth={292}
            comHeight={40}
            compLeft={430}
            compRight={0}
            compType="Row"
          >
            <Button
              className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
              compId="5050:8167"
              comWidth={40}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            >
              <Image
                src={"images/img_group5.png"}
                className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                compId="5050:8167"
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
              compId="5050:8170"
              comWidth={40}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            >
              <Image
                src={"images/img_group4.png"}
                className="w-[100%] flex items-center justify-center"
                compId="5050:8170"
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
              compId="5050:8173"
              comWidth={40}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            >
              <Image
                src={"images/img_group3.png"}
                className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                compId="5050:8173"
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
              compId="5050:8176"
              comWidth={36}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            >
              <Image
                src={"images/img_group100.png"}
                className="w-[37%] flex items-center justify-center"
                compId="5050:8176"
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
              compId="5050:8179"
              comWidth={40}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="IconButton"
            >
              <Image
                src={"images/img_group99.png"}
                className="w-[72%] flex items-center justify-center"
                compId="5050:8179"
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
      </Row>
    </>
  );
};

export default TasklistPage;
