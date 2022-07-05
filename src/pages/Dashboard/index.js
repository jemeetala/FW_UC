import React from "react";

import {
  Column,
  Row,
  Image,
  Button,
  Stack,
  SelectBox,
  Input,
  Text,
  Line,
  CheckBox,
  List,
} from "components";

const DashboardPage = () => {
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
          compId="68"
          comWidth={1440}
          comHeight={1040}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] w-[7%]">
            <Column
              className=""
              compId="8"
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
                  className="lg:h-[16px] xl:h-[18px] h-[19.98px] 2xl:h-[20px] 3xl:h-[24px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain w-[40%]"
                  compId="I4712:8168;120:2258"
                  comWidth={19.96}
                  comHeight={19.98}
                  compLeft={15.02}
                  compRight={15.02}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_23.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20.01px] 2xl:h-[21px] 3xl:h-[25px] ml-[15.06px] mr-[15.04px] lg:mt-[28px] xl:mt-[32px] mt-[36.01px] 2xl:mt-[36px] 3xl:mt-[43px] lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] object-contain w-[40%]"
                  compId="I4712:8170;120:2252"
                  comWidth={19.9}
                  comHeight={20.01}
                  compLeft={15.06}
                  compRight={15.04}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_24.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[19.89px] 2xl:h-[20px] 3xl:h-[24px] ml-[16.6px] mr-[16.51px] lg:mt-[27px] xl:mt-[32px] mt-[35.99px] 2xl:mt-[36px] 3xl:mt-[43px] lg:mx-[12px] xl:mx-[14px] 2xl:mx-[16px] 3xl:mx-[19px] object-contain w-[34%]"
                  compId="I4712:8172;120:328"
                  comWidth={16.89}
                  comHeight={19.89}
                  compLeft={16.6}
                  compRight={16.51}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_25.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36.12px] 2xl:mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
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
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[11px] ml-[14.86px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mr-[12px] mr-[15.49px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] xl:mx-[13px] object-contain w-[39%]"
                  compId="I4712:8180;120:1890"
                  comWidth={19.65}
                  comHeight={20}
                  compLeft={14.86}
                  compRight={15.49}
                  compType="Image"
                  alt="Vector"
                />
              </Column>
            </Column>
          </aside>
          <Column
            className="items-center w-[93%]"
            compId="67"
            comWidth={1341}
            comHeight={1040}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="bg-white_A700 border border-indigo_50 border-solid items-center justify-between lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
              compId="4797:8606"
              comWidth={1341}
              comHeight={72}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Stack
                className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[41%]"
                compId="4712:8241"
                comWidth={534}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <SelectBox
                  className="bg-transparent font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6.01px] 2xl:pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
                  compId="4712:8240"
                  comWidth={0}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-bluegray_700"
                  name="Group187"
                  placeholder="All"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Image
                      src={"images/img_vector_30.png"}
                      className="w-[10.54px] h-[6.25px] mr-[12.71px] object-contain right-[2%] absolute lg:w-[8px] lg:h-[5px] lg:mr-[9px] xl:w-[9px] xl:h-[6px] xl:mr-[11px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[12px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[15px]"
                      compId="I4712:8220;120:93"
                      comWidth={10.54}
                      comHeight={6.25}
                      compLeft={0}
                      compRight={12.71}
                      compType="Image"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
                <Input
                  className="absolute bg-transparent border-0 font-normal not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  WrapClassName="absolute border border-bluegray_200 border-solid mr-[0] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[84%]"
                  compId="4712:8222"
                  comWidth={446}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group94"
                  placeholder="Search your CRM..."
                ></Input>
              </Stack>
              <Row
                className="items-center justify-between w-[22%]"
                compId="71"
                comWidth={292}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4712:8199"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group5_1.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4712:8199"
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
                  compId="4712:8202"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group4_1.png"}
                    className="w-[100%] flex items-center justify-center"
                    compId="4712:8202"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group4"
                  />
                </Button>
                <Button
                  className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:p-[1px] p-[2.45px] 3xl:p-[2px] 2xl:p-[2px] xl:p-[2px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4712:8205"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group3_1.png"}
                    className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                    compId="4712:8205"
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
                  compId="4712:8208"
                  comWidth={36}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group100_1.png"}
                    className="w-[37%] flex items-center justify-center"
                    compId="4712:8208"
                    comWidth={36}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group100"
                  />
                </Button>
                <Button
                  className="bg-amber_100 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12.26px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4712:8212"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group99_1.png"}
                    className="w-[74%] flex items-center justify-center"
                    compId="4712:8212"
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
            <Row
              className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] w-[100%]"
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
                src={"images/img_vector_31.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16.01px] 2xl:h-[17px] 3xl:h-[20px] mb-[19.99px] 2xl:mb-[20px] lg:ml-[12px] xl:ml-[14px] ml-[15.99px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[20px] lg:my-[15px] xl:my-[17px] 3xl:my-[24px] object-contain lg:w-[12px] xl:w-[14px] w-[16.01px] 2xl:w-[16px] 3xl:w-[19px]"
                compId="I4712:8254;120:1608"
                comWidth={16.01}
                comHeight={16.01}
                compLeft={15.99}
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
                src={"images/img_vector_32.png"}
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
              className="items-start justify-between lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]"
              compId="66"
              comWidth={1310}
              comHeight={896}
              compLeft={15}
              compRight={16}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-center justify-start lg:mb-[32px] xl:mb-[37px] mb-[42px] 3xl:mb-[50px] lg:pb-[271px] xl:pb-[310px] pb-[349px] 3xl:pb-[419px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] rounded-radius8 w-[66%]"
                compId="4797:8614"
                comWidth={868}
                comHeight={854}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="font-inter items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[12px] xl:mr-[14px] mr-[16px] 3xl:mr-[19px] w-[95%]"
                  compId="69"
                  comWidth={828}
                  comHeight={87}
                  compLeft={24}
                  compRight={16}
                  compType="Column"
                >
                  <Column
                    className="items-center w-[100%]"
                    compId="74"
                    comWidth={828}
                    comHeight={39}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compId="4797:8613"
                      comWidth={828}
                      comHeight={39}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-medium lg:mb-[12px] xl:mb-[14px] mb-[16px] 3xl:mb-[19px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]"
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
                      <Stack
                        className="font-sourcesanspro lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] w-[31%]"
                        compId="4712:8416"
                        comWidth={254}
                        comHeight={39}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Stack
                          className="absolute lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] left-[0] w-[86%]"
                          compId="59"
                          comWidth={219}
                          comHeight={39}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Button
                            className="3xl:p-[9px] absolute bg-gray_50 border border-gray_201 border-solid flex items-center justify-between left-[0] lg:p-[6px] ml-[0] p-[8px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] text-center w-[44%] xl:p-[7px]"
                            compId="4712:8415"
                            comWidth={0}
                            comHeight={39}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                            leftIcon={
                              <Image
                                src={"images/img_addtask_1.png"}
                                className="w-[20px] h-[20px] text-center absolute lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                                compId="4712:8398"
                                comWidth={20}
                                comHeight={20}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="add-task 1"
                              />
                            }
                          >
                            <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                              Add task
                            </div>
                          </Button>
                          <Button
                            className="2xl:pl-[10px] 3xl:pl-[12px] 3xl:pr-[10px] 3xl:py-[9px] absolute bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[8px] lg:pr-[7px] lg:py-[6px] mr-[0] pl-[10.67px] pr-[9px] py-[8px] right-[0] text-center w-[56%] xl:pl-[9px] xl:pr-[8px] xl:py-[7px]"
                            compId="4712:8414"
                            comWidth={0}
                            comHeight={39}
                            compLeft={0}
                            compRight={0}
                            compType="Button"
                            leftIcon={
                              <Image
                                src={"images/img_vector_33.png"}
                                className="w-[16.67px] h-[16.67px] text-center absolute lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px]"
                                compId="I4712:8404;120:380"
                                comWidth={16.67}
                                comHeight={16.67}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Vector"
                              />
                            }
                          >
                            <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                              Add meeting
                            </div>
                          </Button>
                        </Stack>
                        <Stack
                          className="absolute bg-gray_50 border border-gray_201 border-solid lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] pb-[10px] 3xl:pb-[12px] 3xl:pt-[10px] pt-[9px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[14%]"
                          compId="4712:8413"
                          comWidth={36}
                          comHeight={39}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_morevertical_8.png"}
                            className="absolute lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] justify-center m-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            compId="4712:8409"
                            comWidth={20}
                            comHeight={20}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="morevertical"
                          />
                        </Stack>
                      </Stack>
                    </Row>
                  </Column>
                  <Row
                    className="font-sourcesanspro items-center justify-start lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[41%]"
                    compId="4797:8612"
                    comWidth={338}
                    comHeight={23}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]"
                      compId="4712:8275"
                      comWidth={78}
                      comHeight={23}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Showing all
                    </Text>
                    <Text
                      className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]"
                      compId="4712:8278"
                      comWidth={81}
                      comHeight={23}
                      compLeft={18}
                      compRight={0}
                      compType="Text"
                    >
                      All Activities
                    </Text>
                    <Image
                      src={"images/img_vector_34.png"}
                      className="lg:h-[6px] h-[7.32px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[7.85px] lg:ml-[3px] ml-[4.83px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[7.83px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain w-[2%]"
                      compId="I4712:8279;120:5679"
                      comWidth={8.33}
                      comHeight={7.32}
                      compLeft={4.83}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18.84px] 2xl:ml-[18px] 3xl:ml-[22px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]"
                      compId="4712:8276"
                      comWidth={19}
                      comHeight={23}
                      compLeft={18.84}
                      compRight={0}
                      compType="Text"
                    >
                      for
                    </Text>
                    <Text
                      className="font-normal ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]"
                      compId="4712:8281"
                      comWidth={84}
                      comHeight={23}
                      compLeft={11}
                      compRight={0}
                      compType="Text"
                    >
                      Today jun 27
                    </Text>
                    <Image
                      src={"images/img_vector_35.png"}
                      className="lg:h-[6px] h-[7.32px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[7.85px] lg:ml-[4px] ml-[5.83px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] mt-[7.83px] xl:my-[6px] lg:my-[6px] 2xl:my-[7px] 3xl:my-[9px] object-contain w-[2%]"
                      compId="I4712:8282;120:5679"
                      comWidth={8.33}
                      comHeight={7.32}
                      compLeft={5.83}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                  </Row>
                </Column>
                <Row
                  className="border border-gray_201 border-solid font-sourcesanspro items-center justify-end lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] w-[100%]"
                  compId="4797:8611"
                  comWidth={868}
                  comHeight={59}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <CheckBox
                    className="font-normal not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[10%]"
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
                    className="bg-blue_800 flex lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] my-[1px] lg:p-[3px] xl:p-[4px] p-[5.12px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    compId="I4712:8291;123:2608"
                    comWidth={20}
                    comHeight={20}
                    compLeft={24}
                    compRight={0}
                    compType="IconButton"
                  >
                    <Image
                      src={"images/img_group44.png"}
                      className="w-[100%] flex items-center justify-center"
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
                    compId="72"
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
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[31%]"
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
                      className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] pr-[0] py-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[37%]"
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
                    className="font-normal lg:ml-[223px] xl:ml-[255px] ml-[287px] 3xl:ml-[344px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 w-[auto]"
                    compId="4712:8299"
                    comWidth={149}
                    comHeight={23}
                    compLeft={287}
                    compRight={0}
                    compType="Text"
                  >
                    All tasks and meetings
                  </Text>
                </Row>
                <Text
                  className="font-semibold font-sourcesanspro xl:ml-[172px] ml-[194px] 3xl:ml-[232px] xl:mr-[171px] mr-[193px] 3xl:mr-[231px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:mx-[150px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_901 w-[auto]"
                  compId="4712:8301"
                  comWidth={481}
                  comHeight={23}
                  compLeft={194}
                  compRight={193}
                  compType="Text"
                >
                  Find your upcoming tasks, meetings and reminders here
                </Text>
                <List
                  className="font-sourcesanspro lg:gap-[38px] xl:gap-[44px] gap-[50.00px] 2xl:gap-[50px] 3xl:gap-[60px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] min-h-[auto] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] mx-[auto] w-[85%]"
                  compId="4797:8610"
                  comWidth={740}
                  comHeight={140}
                  compLeft={64}
                  compRight={64}
                  compType="List"
                  orientation="horizontal"
                >
                  <Column
                    className="items-start justify-start lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[100%]"
                    compId="4797:8608"
                    comWidth={389}
                    comHeight={114}
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
                      compId="75"
                      comWidth={389}
                      comHeight={83}
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
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Button
                          className="2xl:py-[6px] 3xl:pl-[9px] 3xl:pr-[12px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[6px] lg:pr-[7px] lg:py-[5px] pl-[8px] pr-[10px] py-[6.5px] rounded-radius4 text-center w-[19%] xl:pl-[7px] xl:pr-[8px] xl:py-[5px]"
                          compId="4712:8440"
                          comWidth={0}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_gmail_svg.png"}
                              className="w-[20px] text-center lg:w-[15px] xl:w-[17px] 3xl:w-[24px]"
                              compId="4712:8429"
                              comWidth={20}
                              comHeight={15}
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
                          className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pl-[10.5px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px] rounded-radius4 w-[25%]"
                          compId="4712:8458"
                          comWidth={98}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Stack
                            className="lg:h-[16px] xl:h-[18px] h-[19.94px] 2xl:h-[20px] 3xl:h-[24px] mb-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2.05px] 3xl:mt-[2px] 2xl:mt-[2px] w-[20%]"
                            compId="4712:8444"
                            comWidth={15.52}
                            comHeight={19.94}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute lg:h-[16px] xl:h-[18px] h-[19.87px] 2xl:h-[20px] 3xl:h-[24px] inset-y-[0] my-[auto] right-[0] w-[86%]"
                              compId="60"
                              comWidth={13.28}
                              comHeight={19.87}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute bottom-[0] h-[5.33px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"
                                compId="61"
                                comWidth={13.28}
                                comHeight={5.33}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                              >
                                <Stack
                                  className="absolute bg-cover bg-repeat bottom-[0] h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] inset-x-[0] pt-[1px] top-[2%] w-[100%]"
                                  compId="4712:8445"
                                  comWidth={13.28}
                                  comHeight={5.25}
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
                                    className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] object-contain w-[92%]"
                                    compId="4712:8447"
                                    comWidth={12.27}
                                    comHeight={4.14}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Image"
                                    alt="Vector"
                                  />
                                </Stack>
                                <Stack
                                  className="absolute bg-cover bg-repeat h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] inset-x-[0] mx-[auto] p-[1px] top-[0] w-[95%]"
                                  compId="4712:8448"
                                  comWidth={12.68}
                                  comHeight={4.57}
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
                                    className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                                    compId="4712:8450"
                                    comWidth={12.27}
                                    comHeight={4.14}
                                    compLeft={0}
                                    compRight={0}
                                    compType="Image"
                                    alt="Vector"
                                  />
                                </Stack>
                              </Stack>
                              <Image
                                src={"images/img_vector_38.png"}
                                className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] object-contain right-[4%] top-[0] w-[51%]"
                                compId="4712:8451"
                                comWidth={6.75}
                                comHeight={18.75}
                                compLeft={0}
                                compRight={0.52}
                                compType="Image"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] top-[0] w-[62%]"
                              compId="4"
                              comWidth={9.69}
                              comHeight={14.76}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                              style={{
                                backgroundImage:
                                  "url('images/img_group4_2.png')",
                              }}
                            >
                              <Image
                                src={"images/img_vector_39.png"}
                                className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] inset-[0] object-cover w-[100%]"
                                compId="4712:8454"
                                comWidth={9.69}
                                comHeight={14.76}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-repeat bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[45%]"
                              compId="5"
                              comWidth={6.95}
                              comHeight={4.14}
                              compLeft={2.73}
                              compRight={0}
                              compType="Stack"
                              style={{
                                backgroundImage:
                                  "url('images/img_group5_2.png')",
                              }}
                            >
                              <Image
                                src={"images/img_vector_40.png"}
                                className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                compId="4712:8455"
                                comWidth={6.95}
                                comHeight={4.14}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="Vector"
                              />
                            </Stack>
                          </Stack>
                          <Text
                            className="font-normal lg:ml-[4px] ml-[5.98px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                            compId="4712:8457"
                            comWidth={58}
                            comHeight={23}
                            compLeft={5.98}
                            compRight={0}
                            compType="Text"
                          >
                            Office 365
                          </Text>
                        </Row>
                        <Button
                          className="2xl:py-[6px] 3xl:pl-[8px] 3xl:pr-[10px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[5px] lg:pr-[7px] lg:py-[5px] pl-[7px] pr-[9px] py-[6.5px] rounded-radius4 text-center w-[23%] xl:pl-[6px] xl:pr-[8px] xl:py-[5px]"
                          compId="4712:8469"
                          comWidth={0}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_outlook_logo.png"}
                              className="w-[20px] h-[20px] text-center lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                              compId="4712:8461"
                              comWidth={20}
                              comHeight={20}
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
                          className="2xl:py-[6px] 3xl:pl-[13px] 3xl:pr-[9px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:pl-[8px] lg:pr-[6px] lg:py-[5px] pl-[11px] pr-[8px] py-[6.5px] rounded-radius4 text-center w-[21%] xl:pl-[9px] xl:pr-[7px] xl:py-[5px]"
                          compId="4712:8475"
                          comWidth={0}
                          comHeight={36}
                          compLeft={0}
                          compRight={0}
                          compType="Button"
                          leftIcon={
                            <Image
                              src={"images/img_vector_41.png"}
                              className="w-[13.99px] text-center lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                              compId="4712:8472"
                              comWidth={13.99}
                              comHeight={9}
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
                    className="self-center w-[1px] h-[1px] rotate-[-90deg] bg-bluegray_51"
                    compId="4712:8381"
                    comWidth={1}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Column
                    className="items-center justify-start lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] w-[100%]"
                    compId="4797:8609"
                    comWidth={251}
                    comHeight={114}
                    compLeft={100}
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
                      comHeight={36}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Button
                        className="2xl:py-[6px] 3xl:px-[9px] 3xl:py-[7px] bg-gray_50 border border-gray_201 border-solid flex items-center justify-between lg:px-[6px] lg:py-[5px] px-[8px] py-[6.5px] rounded-radius4 text-center w-[55%] xl:px-[7px] xl:py-[5px]"
                        compId="4712:8510"
                        comWidth={0}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Button"
                        leftIcon={
                          <Image
                            src={"images/img_googlecalendar_1.png"}
                            className="w-[20px] h-[20px] text-center lg:w-[15px] lg:h-[16px] xl:w-[17px] xl:h-[18px] 2xl:h-[21px] 3xl:w-[24px] 3xl:h-[25px]"
                            compId="4712:8499"
                            comWidth={20}
                            comHeight={20}
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
                        className="bg-gray_50 border border-gray_201 border-solid items-center justify-center lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] pl-[10.5px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] rounded-radius4 w-[39%]"
                        compId="4712:8497"
                        comWidth={98}
                        comHeight={36}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Stack
                          className="lg:h-[16px] xl:h-[18px] h-[19.94px] 2xl:h-[20px] 3xl:h-[24px] mb-[1px] xl:mt-[1px] lg:mt-[1px] mt-[2.05px] 3xl:mt-[2px] 2xl:mt-[2px] w-[20%]"
                          compId="4712:8483"
                          comWidth={15.51}
                          comHeight={19.94}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Stack
                            className="absolute lg:h-[16px] xl:h-[18px] h-[19.87px] 2xl:h-[20px] 3xl:h-[24px] inset-y-[0] my-[auto] right-[0] w-[86%]"
                            compId="62"
                            comWidth={13.27}
                            comHeight={19.87}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                          >
                            <Stack
                              className="absolute bottom-[0] h-[5.33px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] w-[100%]"
                              compId="63"
                              comWidth={13.27}
                              comHeight={5.33}
                              compLeft={0}
                              compRight={0}
                              compType="Stack"
                            >
                              <Stack
                                className="absolute bg-cover bg-repeat bottom-[0] h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] inset-x-[0] pt-[1px] top-[2%] w-[100%]"
                                compId="4712:8484"
                                comWidth={13.27}
                                comHeight={5.25}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_2.png')",
                                }}
                              >
                                <Image
                                  src={"images/img_vector_42.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-x-[0] mx-[auto] object-contain w-[92%]"
                                  compId="4712:8486"
                                  comWidth={12.27}
                                  comHeight={4.14}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack
                                className="absolute bg-cover bg-repeat h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] inset-x-[0] mx-[auto] p-[1px] top-[0] w-[96%]"
                                compId="4712:8487"
                                comWidth={12.68}
                                comHeight={4.57}
                                compLeft={0}
                                compRight={0}
                                compType="Stack"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group_6.png')",
                                }}
                              >
                                <Image
                                  src={"images/img_vector_43.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                                  compId="4712:8489"
                                  comWidth={12.27}
                                  comHeight={4.14}
                                  compLeft={0}
                                  compRight={0}
                                  compType="Image"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                            <Image
                              src={"images/img_vector_44.png"}
                              className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] object-contain right-[4%] top-[0] w-[51%]"
                              compId="4712:8490"
                              comWidth={6.75}
                              comHeight={18.75}
                              compLeft={0}
                              compRight={0.51}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] top-[0] w-[62%]"
                            compId="6"
                            comWidth={9.69}
                            comHeight={14.76}
                            compLeft={0}
                            compRight={0}
                            compType="Stack"
                            style={{
                              backgroundImage: "url('images/img_group6_1.png')",
                            }}
                          >
                            <Image
                              src={"images/img_vector_45.png"}
                              className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] inset-[0] object-cover w-[100%]"
                              compId="4712:8493"
                              comWidth={9.69}
                              comHeight={14.76}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                          <Stack
                            className="absolute bg-cover bg-repeat bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[45%]"
                            compId="7"
                            comWidth={6.95}
                            comHeight={4.14}
                            compLeft={2.73}
                            compRight={0}
                            compType="Stack"
                            style={{
                              backgroundImage: "url('images/img_group7.png')",
                            }}
                          >
                            <Image
                              src={"images/img_vector_46.png"}
                              className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                              compId="4712:8494"
                              comWidth={6.95}
                              comHeight={4.14}
                              compLeft={0}
                              compRight={0}
                              compType="Image"
                              alt="Vector"
                            />
                          </Stack>
                        </Stack>
                        <Text
                          className="font-normal lg:ml-[4px] ml-[5.99px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                          compId="4712:8496"
                          comWidth={58}
                          comHeight={23}
                          compLeft={5.99}
                          compRight={0}
                          compType="Text"
                        >
                          Office 365
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </List>
              </Column>
              <Column
                className="items-center justify-start w-[33%]"
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
                    className="absolute bg-bluegray_400 bottom-[52%] h-[1px] inset-x-[0] top-[48%] w-[100%]"
                    compId="4477:6008"
                    comWidth={426}
                    comHeight={0.03}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Button
                    className="2xl:pl-[17px] 3xl:ml-[133px] 3xl:pl-[21px] 3xl:pr-[19px] absolute bg-gray_50 border border-gray_201 border-solid flex items-center justify-between left-[26%] lg:ml-[86px] lg:pl-[13px] lg:pr-[12px] lg:py-[3px] ml-[111px] pl-[17.55px] pr-[16px] py-[4px] rounded-radius4 text-center w-[39%] xl:ml-[98px] xl:pl-[15px] xl:pr-[14px] xl:py-[3px]"
                    compId="3"
                    comWidth={0}
                    comHeight={31}
                    compLeft={0}
                    compRight={0}
                    compType="Button"
                    leftIcon={
                      <Image
                        src={"images/img_vector_47.png"}
                        className="w-[16.37px] text-center absolute lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        compId="I4477:6006;120:1890"
                        comWidth={16.37}
                        comHeight={16.67}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701">
                      Configure widgets
                    </div>
                  </Button>
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
                      src={"images/img_group3_2.png"}
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
                    compId="76"
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
                    className="items-start justify-between lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mr-[14px] xl:mr-[16px] mr-[18.08px] 2xl:mr-[18px] 3xl:mr-[21px] w-[92%]"
                    compId="4797:8616"
                    comWidth={391.92}
                    comHeight={23}
                    compLeft={16}
                    compRight={18.08}
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
                      src={"images/img_vector_48.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[2.66px] 2xl:mb-[2px] xl:mb-[2px] 3xl:mb-[3px] mt-[3.67px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] lg:my-[2px] object-contain w-[4%]"
                      compId="I4712:8598;120:1890"
                      comWidth={16.37}
                      comHeight={16.67}
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
                    compId="70"
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
                      compId="77"
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
                          compId="73"
                          comWidth={105.9}
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
                            src={"images/img_vector_49.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13.4px] 2xl:h-[14px] 3xl:h-[17px] xl:mb-[4px] lg:mb-[4px] mb-[5.2px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] mt-[4.4px] 2xl:mt-[4px] 3xl:mt-[5px] object-contain w-[7%]"
                            compId="I4712:8604;120:3703"
                            comWidth={7.7}
                            comHeight={13.4}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="Vector"
                          />
                          <Image
                            src={"images/img_vector_50.png"}
                            className="lg:h-[11px] xl:h-[12px] h-[13.4px] 2xl:h-[14px] 3xl:h-[17px] xl:mb-[4px] lg:mb-[4px] mb-[5.2px] 2xl:mb-[5px] 3xl:mb-[6px] mr-[0] xl:mt-[3px] lg:mt-[3px] mt-[4.4px] 2xl:mt-[4px] 3xl:mt-[5px] object-contain w-[7%]"
                            compId="I4712:8605;120:3703"
                            comWidth={7.7}
                            comHeight={13.4}
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
                        className="items-center justify-between lg:ml-[1px] ml-[2.5px] 2xl:ml-[2px] xl:ml-[2px] 3xl:ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[99%]"
                        compId="4712:8608"
                        comWidth={389.5}
                        comHeight={23}
                        compLeft={2.5}
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
                        className="items-center justify-between lg:ml-[1px] ml-[2.5px] 2xl:ml-[2px] xl:ml-[2px] 3xl:ml-[3px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[99%]"
                        compId="4712:8611"
                        comWidth={389.5}
                        comHeight={23}
                        compLeft={2.5}
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
                      compId="78"
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
                      className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:pl-[1px] pl-[2.5px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]"
                      compId="79"
                      comWidth={392}
                      comHeight={315}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-between w-[100%]"
                        compId="64"
                        comWidth={389.5}
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
                        comWidth={389.5}
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
                        comWidth={389.5}
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
                        comWidth={389.5}
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
                        comWidth={389.5}
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
    </>
  );
};

export default DashboardPage;
