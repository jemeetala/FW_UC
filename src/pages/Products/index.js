import React from "react";

import {
  Column,
  Row,
  Image,
  Button,
  SelectBox,
  Input,
  Text,
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-start mx-[auto] w-[100%]"
        compId="4509:6289"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compId="34"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center w-[7%]">
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
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="4797:10780"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group345.png"}
                  className="common-pointer lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4797:10782"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  onClick={handleNavigate9}
                  alt="Group345"
                />
                <Image
                  src={"images/img_vector.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] mx-[auto] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                  compId="I4797:10787;275:1558"
                  comWidth={16}
                  comHeight={16}
                  compLeft={17}
                  compRight={17}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_1.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I4797:10788;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_2.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain w-[38%]"
                  compId="I4797:10789;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4797:10794"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group331.png"}
                    className="w-[77%] flex items-center justify-center"
                    compId="4797:10794"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group331"
                  />
                </Button>
                <Image
                  src={"images/img_vector_3.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] mx-[auto] object-contain w-[36%]"
                  compId="I4797:10790;120:1630"
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
                  compId="I4797:10791;120:434"
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
                  compId="I4797:10792;120:1750"
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
                  compId="I4797:10793;120:1890"
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
            className="items-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] w-[93%]"
            compId="33"
            comWidth={1342}
            comHeight={1016}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center pr-[1px] w-[100%]"
              compId="36"
              comWidth={1342}
              comHeight={72}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="bg-white_A700 border border-indigo_50 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <SelectBox
                  className="bg-transparent font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
                  compId="4797:10771"
                  comWidth={0}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-bluegray_700"
                  name="Group93"
                  placeholder="Contacts"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Image
                      src={"images/img_vector_8.png"}
                      className="w-[10.54px] h-[6.25px] mr-[14px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                      compId="I4797:10775;120:93"
                      comWidth={10.54}
                      comHeight={6.25}
                      compLeft={0}
                      compRight={14}
                      compType="Image"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
                <Input
                  className="bg-transparent border-0 font-normal not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                  WrapClassName="border border-bluegray_200 border-solid rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]"
                  compId="4797:10777"
                  comWidth={446}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Group94"
                  placeholder="Search your CRM..."
                ></Input>
                <Button
                  className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:10755"
                  comWidth={40}
                  comHeight={40}
                  compLeft={430}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group5.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4797:10755"
                    comWidth={40}
                    comHeight={40}
                    compLeft={430}
                    compRight={0}
                    compType="IconButton"
                    alt="Group5"
                  />
                </Button>
                <Button
                  className="bg-white_A700 border border-gray_200 border-solid flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4797:10758"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group4.png"}
                    className="w-[100%] flex items-center justify-center"
                    compId="4797:10758"
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
                  compId="4797:10761"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group3.png"}
                    className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                    compId="4797:10761"
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
                  compId="4797:10764"
                  comWidth={36}
                  comHeight={36}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group100.png"}
                    className="w-[37%] flex items-center justify-center"
                    compId="4797:10764"
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
                  compId="4797:10767"
                  comWidth={40}
                  comHeight={40}
                  compLeft={24}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group99.png"}
                    className="w-[72%] flex items-center justify-center"
                    compId="4797:10767"
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
              className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:pb-[5px] xl:pb-[6px] pb-[7px] 3xl:pb-[8px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] w-[100%]"
              compId="4797:10814"
              comWidth={1342}
              comHeight={55}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                compId="4509:6318"
                comWidth={68}
                comHeight={23}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Products
              </Text>
              <Image
                src={"images/img_vector_9.png"}
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] object-contain w-[1%]"
                compId="I4509:6319;120:97"
                comWidth={7}
                comHeight={13}
                compLeft={18}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]"
                compId="4509:6321"
                comWidth={114}
                comHeight={23}
                compLeft={24}
                compRight={0}
                compType="Text"
              >
                All Products (1)
              </Text>
              <SelectBox
                className="bg-bluegray_900 border border-gray_201 border-solid font-normal lg:ml-[327px] xl:ml-[374px] ml-[421px] 3xl:ml-[505px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[9%]"
                compId="4509:6331"
                comWidth={123}
                comHeight={40}
                compLeft={421}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-white_A700"
                name="Frame419"
                placeholder="Add product"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_10.png"}
                    className="w-[10.4px] h-[6.2px] mr-[14px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    compId="I4509:6333;120:3699"
                    comWidth={10.4}
                    comHeight={6.2}
                    compLeft={0}
                    compRight={14}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="bg-white_A700 border border-gray_201 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[10%]"
                compId="4509:6334"
                comWidth={136}
                comHeight={40}
                compLeft={10}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame418"
                placeholder="Add categories"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_11.png"}
                    className="w-[10.4px] h-[6.2px] mr-[14px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    compId="I4509:6337;120:3699"
                    comWidth={10.4}
                    comHeight={6.2}
                    compLeft={0}
                    compRight={14}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="bg-transparent font-normal p-[0] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                compId="4509:6687"
                comWidth={0}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame422"
                placeholder="Edit coumns"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_13.png"}
                    className="w-[10.4px] h-[6.2px] mr-[14px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[10px] xl:w-[9px] xl:h-[6px] xl:mr-[12px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[16px]"
                    compId="I4509:6690;120:3699"
                    comWidth={10.4}
                    comHeight={6.2}
                    compLeft={0}
                    compRight={14}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius4 w-[6%]"
                compId="4509:6338"
                comWidth={74}
                comHeight={40}
                compLeft={10}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_14.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] object-contain w-[37%]"
                  compId="I4509:6339;120:1890"
                  comWidth={19}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_15.png"}
                  className="lg:h-[5px] h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[20%]"
                  compId="I4509:6520;120:3699"
                  comWidth={10}
                  comHeight={6}
                  compLeft={19}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
              </Row>
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-center ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[6px] xl:pr-[7px] pr-[8px] 3xl:pr-[9px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[9%]"
                compId="4509:6513"
                comWidth={119}
                comHeight={40}
                compLeft={10}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_16.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4509:6514;120:1078"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4509:6515"
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
                  compId="4509:6516"
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
              className="bg-gray_100 border border-gray_201 border-solid items-center justify-start lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px] w-[100%]"
              compId="4797:10815"
              comWidth={1342}
              comHeight={46}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <div
                className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="4797:10817"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Text
                className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10819"
                comWidth={34}
                comHeight={22}
                compLeft={35}
                compRight={0}
                compType="Text"
              >
                Name
              </Text>
              <Image
                src={"images/img_vector_17.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[1%]"
                compId="I4797:10820;120:2012"
                comWidth={10}
                comHeight={15}
                compLeft={10}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[160px] xl:ml-[183px] ml-[206px] 3xl:ml-[247px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10825"
                comWidth={43}
                comHeight={22}
                compLeft={206}
                compRight={0}
                compType="Text"
              >
                Active
              </Text>
              <Image
                src={"images/img_vector_18.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[1%]"
                compId="I4797:10826;120:2012"
                comWidth={10}
                comHeight={15}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10822"
                comWidth={156}
                comHeight={22}
                compLeft={65}
                compRight={0}
                compType="Text"
              >
                Base currency amount
              </Text>
              <Image
                src={"images/img_vector_19.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[1%]"
                compId="I4797:10823;120:2012"
                comWidth={10}
                comHeight={15}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] ml-[99px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10827"
                comWidth={64}
                comHeight={22}
                compLeft={99}
                compRight={0}
                compType="Text"
              >
                category
              </Text>
              <Text
                className="font-semibold 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10829"
                comWidth={73}
                comHeight={22}
                compLeft={84}
                compRight={0}
                compType="Text"
              >
                created at
              </Text>
              <Image
                src={"images/img_vector_20.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[1%]"
                compId="I4797:10830;120:2012"
                comWidth={10}
                comHeight={15}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4797:10832"
                comWidth={73}
                comHeight={22}
                compLeft={101}
                compRight={0}
                compType="Text"
              >
                created by
              </Text>
              <Image
                src={"images/img_vector_21.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[1%]"
                compId="I4797:10833;120:2012"
                comWidth={10}
                comHeight={15}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compId="35"
              comWidth={1342}
              comHeight={784}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10851"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10853"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10854"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10857"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10858"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:10859"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:10864"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10865"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10860"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10861"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10862"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:10863"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10920"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10922"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10923"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10926"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10927"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:10928"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:10933"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10934"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10929"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10930"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10931"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_1.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:10932"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10938"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10940"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10941"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10944"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10945"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:10946"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:10951"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10952"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10947"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10948"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10949"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_2.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:10950"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10956"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10958"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10959"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10962"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10963"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:10964"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:10969"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10970"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10965"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10966"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10967"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_3.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:10968"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10974"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10976"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10977"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10980"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10981"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:10982"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:10987"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10988"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10983"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10984"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:10985"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_4.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:10986"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:10992"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:10994"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:10995"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:10998"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:10999"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:11000"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:11005"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11006"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11001"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11002"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11003"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_5.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:11004"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:11010"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:11012"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:11013"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:11016"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:11017"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:11018"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:11023"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11024"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11019"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11020"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11021"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_6.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:11022"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
              <Line
                className="self-center w-[100%] pl-[16px] border-indigo_50 border border-solid bg-white_A700 justify-start items-center lg:pl-[12px] lg:py-[12px] xl:pl-[14px] xl:py-[14px] 3xl:pl-[19px] 3xl:py-[19px] py-[16px]"
                compId="4797:10753"
                comWidth={1341}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Row"
              />
              <Row
                className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                compId="4797:11028"
                comWidth={1342}
                comHeight={98}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="4797:11030"
                  comWidth={20}
                  comHeight={20}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="bg-amber_100 font-bold font-inter lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] my-[1px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius50 lg:text-[17px] xl:text-[20px] text-[23px] 3xl:text-[27px] text-amber_500 tracking-ls1 w-[auto]"
                  compId="4797:11031"
                  comWidth={46}
                  comHeight={46}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >
                  R
                </Text>
                <Column
                  className="font-sourcesanspro items-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] w-[15%]"
                  compId="4797:11034"
                  comWidth={198}
                  comHeight={48}
                  compLeft={8}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                    compId="4797:11035"
                    comWidth={47}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Riya D
                  </Text>
                  <Text
                    className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                    compId="4797:11036"
                    comWidth={29}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    Lead
                  </Text>
                </Column>
                <Text
                  className="font-semibold font-sourcesanspro lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                  compId="4797:11041"
                  comWidth={29}
                  comHeight={22}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >
                  $200
                </Text>
                <Text
                  className="font-normal font-sourcesanspro ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11042"
                  comWidth={8}
                  comHeight={22}
                  compLeft={100}
                  compRight={0}
                  compType="Text"
                >
                  --
                </Text>
                <Text
                  className="font-normal font-sourcesanspro lg:ml-[207px] xl:ml-[237px] ml-[267px] 3xl:ml-[320px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11037"
                  comWidth={58}
                  comHeight={22}
                  compLeft={267}
                  compRight={0}
                  compType="Text"
                >
                  Hardware
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11038"
                  comWidth={107}
                  comHeight={22}
                  compLeft={90}
                  compRight={0}
                  compType="Text"
                >
                  A few seconds ago
                </Text>
                <Text
                  className="font-normal font-sourcesanspro 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] ml-[87px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11039"
                  comWidth={67}
                  comHeight={22}
                  compLeft={87}
                  compRight={0}
                  compType="Text"
                >
                  Jemee Tala
                </Text>
                <Image
                  src={"images/img_morevertical_7.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[115px] xl:ml-[132px] ml-[149px] 3xl:ml-[178px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  compId="4797:11040"
                  comWidth={24}
                  comHeight={24}
                  compLeft={149}
                  compRight={0}
                  compType="Image"
                  alt="morevertical"
                />
              </Row>
            </List>
            <Input
              className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              WrapClassName="bg-white_A700 border border-gray_201 border-solid w-[100%]"
              compId="4797:11047"
              comWidth={1342}
              comHeight={59}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group413"
              placeholder="Showing 1-3 of 3"
            ></Input>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProductsPage;
