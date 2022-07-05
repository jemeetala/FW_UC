import React from "react";

import { getContactssegmentid70003418989 } from "service/api";
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

const ContactsPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};
    getContactssegmentid70003418989(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column
        className="bg-bluegray_50 font-sourcesanspro items-center justify-end mx-[auto] w-[100%]"
        compId="4793:8287"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compId="94"
          comWidth={1440}
          comHeight={1055}
          compLeft={0}
          compRight={0}
          compType="Row"
        >
          <aside className="items-center lg:mb-[24px] xl:mb-[27px] mb-[31px] 3xl:mb-[37px] w-[7%]">
            <Column
              className=""
              compId="12"
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
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4793:8601"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group345"
                />
                <Image
                  src={"images/img_vector_60.png"}
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
                  src={"images/img_vector_61.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20.01px] 2xl:h-[21px] 3xl:h-[25px] ml-[15.06px] mr-[15.04px] lg:mt-[18px] xl:mt-[21px] mt-[23.99px] 2xl:mt-[24px] 3xl:mt-[28px] lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] object-contain w-[40%]"
                  compId="I4793:8299;120:2252"
                  comWidth={19.9}
                  comHeight={20.01}
                  compLeft={15.06}
                  compRight={15.04}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_62.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[19.89px] 2xl:h-[20px] 3xl:h-[24px] ml-[16.6px] mr-[16.51px] lg:mt-[27px] xl:mt-[32px] mt-[35.99px] 2xl:mt-[36px] 3xl:mt-[43px] lg:mx-[12px] xl:mx-[14px] 2xl:mx-[16px] 3xl:mx-[19px] object-contain w-[34%]"
                  compId="I4793:8300;120:328"
                  comWidth={16.89}
                  comHeight={19.89}
                  compLeft={16.6}
                  compRight={16.51}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_63.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36.12px] 2xl:mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I4793:8301;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_64.png"}
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
                  src={"images/img_vector_65.png"}
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
                  src={"images/img_vector_66.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[11px] ml-[14.86px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mr-[12px] mr-[15.49px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] xl:mx-[13px] object-contain w-[39%]"
                  compId="I4793:8304;120:1890"
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
            compId="93"
            comWidth={1342}
            comHeight={1055}
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
              <SelectBox
                className="bg-transparent font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6.01px] 2xl:pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
                compId="4793:8328"
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
                    src={"images/img_vector_68.png"}
                    className="w-[10.54px] h-[6.25px] mr-[14.71px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[11px] xl:w-[9px] xl:h-[6px] xl:mr-[13px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[14px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[17px]"
                    compId="I4793:8332;120:93"
                    comWidth={10.54}
                    comHeight={6.25}
                    compLeft={0}
                    compRight={14.71}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
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
              <Row
                className="items-center justify-between lg:ml-[334px] xl:ml-[382px] ml-[430px] 3xl:ml-[516px] w-[22%]"
                compId="96"
                comWidth={292}
                comHeight={40}
                compLeft={430}
                compRight={0}
                compType="Row"
              >
                <Button
                  className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  compId="4793:8312"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group5_3.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4793:8312"
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
                  compId="4793:8315"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group4_3.png"}
                    className="w-[100%] flex items-center justify-center"
                    compId="4793:8315"
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
                  compId="4793:8318"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group3_3.png"}
                    className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                    compId="4793:8318"
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
                  compId="4793:8321"
                  comWidth={36}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group100_2.png"}
                    className="w-[37%] flex items-center justify-center"
                    compId="4793:8321"
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
                  compId="4793:8324"
                  comWidth={40}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group99_2.png"}
                    className="w-[74%] flex items-center justify-center"
                    compId="4793:8324"
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
              className="bg-gray_100 border border-gray_201 border-solid items-center justify-start lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]"
              compId="4793:8604"
              comWidth={1342}
              comHeight={55}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-normal lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                compId="4793:8517"
                comWidth={67}
                comHeight={23}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Contacts
              </Text>
              <Image
                src={"images/img_vector_69.png"}
                className="lg:h-[11px] xl:h-[12px] h-[13.4px] 2xl:h-[14px] 3xl:h-[17px] xl:mb-[10px] mb-[12.3px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18.1px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[10px] xl:mt-[11px] mt-[13.3px] 2xl:mt-[13px] 3xl:mt-[15px] object-contain w-[1%]"
                compId="I4793:8518;120:97"
                comWidth={7.7}
                comHeight={13.4}
                compLeft={18.1}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24.2px] 2xl:ml-[24px] 3xl:ml-[29px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 w-[auto]"
                compId="4793:8519"
                comWidth={92}
                comHeight={23}
                compLeft={24.2}
                compRight={0}
                compType="Text"
              >
                My Contacts
              </Text>
              <Button
                className="bg-bluegray_900 border border-gray_201 border-solid font-normal 3xl:ml-[1179px] lg:ml-[763px] xl:ml-[873px] ml-[982px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[7%]"
                compId="4793:8522"
                comWidth={98}
                comHeight={39}
                compLeft={982}
                compRight={0}
                compType="Button"
              >
                Add Contatcts
              </Button>
            </Row>
            <Row
              className="bg-gray_100 border border-gray_201 border-solid items-center justify-start xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[9px] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[100%]"
              compId="4793:8605"
              comWidth={1342}
              comHeight={46}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <div
                className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                compId="4797:9075"
                comWidth={20}
                comHeight={20}
                compLeft={0}
                compRight={0}
                compType="View"
              ></div>
              <Text
                className="font-semibold xl:mb-[1px] lg:mb-[1px] mb-[2px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] ml-[84px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8343"
                comWidth={35}
                comHeight={22}
                compLeft={84}
                compRight={0}
                compType="Text"
              >
                Name
              </Text>
              <Image
                src={"images/img_vector_70.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] xl:mb-[4px] lg:mb-[4px] mb-[5.49px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:mt-[2px] mt-[3.5px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] object-contain w-[1%]"
                compId="I4793:8344;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Row
                className="items-center justify-center lg:ml-[124px] xl:ml-[142px] ml-[159.66px] 2xl:ml-[159px] 3xl:ml-[191px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[6%]"
                compId="97"
                comWidth={82.34}
                comHeight={22}
                compLeft={159.66}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_71.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[2.66px] mt-[2.67px] 2xl:my-[2px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                  compId="I4793:8346;120:1336"
                  comWidth={16.67}
                  comHeight={16.67}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-semibold lg:ml-[4px] ml-[5.66px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                  compId="4793:8347"
                  comWidth={41}
                  comHeight={22}
                  compLeft={5.66}
                  compRight={0}
                  compType="Text"
                >
                  Score
                </Text>
                <Image
                  src={"images/img_vector_72.png"}
                  className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] mb-[3.49px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] mt-[3.5px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[12%]"
                  compId="I4793:8348;120:2012"
                  comWidth={10.01}
                  comHeight={15.01}
                  compLeft={9}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
              </Row>
              <Text
                className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[34.99px] 2xl:ml-[35px] 3xl:ml-[42px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8350"
                comWidth={127}
                comHeight={22}
                compLeft={34.99}
                compRight={0}
                compType="Text"
              >
                Open deals amou...
              </Text>
              <Image
                src={"images/img_vector_73.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[2px] mb-[3.49px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[4px] lg:mt-[4px] mt-[5.5px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[1%]"
                compId="I4793:8351;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[24px] xl:ml-[27px] ml-[31.24px] 2xl:ml-[31px] 3xl:ml-[37px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8353"
                comWidth={132}
                comHeight={22}
                compLeft={31.24}
                compRight={0}
                compType="Text"
              >
                last contacted ti...
              </Text>
              <Image
                src={"images/img_vector_74.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[2px] mb-[3.49px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[4px] lg:mt-[4px] mt-[5.5px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[1%]"
                compId="I4793:8354;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[20px] xl:ml-[23px] ml-[26.24px] 2xl:ml-[26px] 3xl:ml-[31px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8356"
                comWidth={87}
                comHeight={22}
                compLeft={26.24}
                compRight={0}
                compType="Text"
              >
                sales owner
              </Text>
              <Image
                src={"images/img_vector_75.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[2px] mb-[3.49px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[4px] lg:mt-[4px] mt-[5.5px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[1%]"
                compId="I4793:8357;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold lg:ml-[55px] xl:ml-[63px] ml-[71.24px] 2xl:ml-[71px] 3xl:ml-[85px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8359"
                comWidth={45}
                comHeight={22}
                compLeft={71.24}
                compRight={0}
                compType="Text"
              >
                Emails
              </Text>
              <Image
                src={"images/img_vector_76.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[2px] mb-[3.49px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[4px] lg:mt-[4px] mt-[5.5px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[1%]"
                compId="I4793:8360;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
              <Text
                className="font-semibold xl:ml-[100px] ml-[113.24px] 2xl:ml-[113px] 3xl:ml-[135px] lg:ml-[88px] xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 uppercase w-[auto]"
                compId="4793:8362"
                comWidth={38}
                comHeight={22}
                compLeft={113.24}
                compRight={0}
                compType="Text"
              >
                Work
              </Text>
              <Image
                src={"images/img_vector_77.png"}
                className="lg:h-[12px] xl:h-[14px] h-[15.01px] 2xl:h-[16px] 3xl:h-[19px] lg:mb-[2px] mb-[3.49px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[4px] lg:mt-[4px] mt-[5.5px] 2xl:mt-[5px] 3xl:mt-[6px] object-contain w-[1%]"
                compId="I4793:8363;120:2012"
                comWidth={10.01}
                comHeight={15.01}
                compLeft={9}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              compId="95"
              comWidth={1342}
              comHeight={882}
              compLeft={0}
              compRight={0}
              compType="List"
              orientation="vertical"
            >
              {apiData?.contacts?.map((apiDataEle) => {
                return (
                  <Row
                    className="bg-white_A700 border border-gray_201 border-solid items-center justify-end my-[0] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] lg:py-[19px] xl:py-[22px] py-[25px] 3xl:py-[30px] w-[100%]"
                    compId="4797:9078"
                    comWidth={1342}
                    comHeight={98}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-white_A700 border-bluegray_300 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] rounded-radius25 lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      compId="4797:9077"
                      comWidth={20}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="items-start 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[89px] w-[4%]"
                      compId="4793:8372"
                      comWidth={49}
                      comHeight={48}
                      compLeft={89}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-semibold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 w-[auto]"
                        compId="4793:8373"
                        comWidth={49}
                        comHeight={22}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        {apiDataEle?.first_name}
                      </Text>
                      <Text
                        className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                        compId="4793:8374"
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
                      className="font-semibold lg:ml-[122px] xl:ml-[140px] ml-[158px] 3xl:ml-[189px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4793:8376"
                      comWidth={15}
                      comHeight={22}
                      compLeft={158}
                      compRight={0}
                      compType="Text"
                    >
                      18
                    </Text>
                    <Image
                      src={"images/img_vector_78.png"}
                      className="lg:h-[10px] xl:h-[11px] h-[12.1px] 2xl:h-[13px] 3xl:h-[15px] lg:mb-[14px] xl:mb-[16px] mb-[18px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[13px] xl:mt-[15px] mt-[17.9px] 2xl:mt-[17px] 3xl:my-[21px] object-contain w-[1%]"
                      compId="I4793:8377;120:3793"
                      comWidth={12}
                      comHeight={12.1}
                      compLeft={10}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Text
                      className="font-semibold lg:ml-[63px] xl:ml-[72px] ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]"
                      compId="4793:8378"
                      comWidth={15}
                      comHeight={22}
                      compLeft={82}
                      compRight={0}
                      compType="Text"
                    >
                      $0
                    </Text>
                    <Text
                      className="font-normal lg:ml-[126px] xl:ml-[144px] ml-[162.25px] 2xl:ml-[162px] 3xl:ml-[194px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]"
                      compId="4793:8379"
                      comWidth={78}
                      comHeight={22}
                      compLeft={162.25}
                      compRight={0}
                      compType="Text"
                    >
                      Not Available
                    </Text>
                    <Text
                      className="font-normal 3xl:ml-[119px] lg:ml-[77px] xl:ml-[88px] ml-[99.25px] 2xl:ml-[99px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                      compId="4793:8380"
                      comWidth={67}
                      comHeight={22}
                      compLeft={99.25}
                      compRight={0}
                      compType="Text"
                    >
                      {apiDataEle?.display_name}
                    </Text>
                    <Text
                      className="font-normal ml-[110.25px] 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]"
                      compId="4793:8381"
                      comWidth={95}
                      comHeight={22}
                      compLeft={110.25}
                      compRight={0}
                      compType="Text"
                    >
                      {apiDataEle?.email}
                    </Text>
                    <Text
                      className="font-normal lg:ml-[63px] xl:ml-[73px] ml-[82.25px] 2xl:ml-[82px] 3xl:ml-[98px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[auto]"
                      compId="4793:8382"
                      comWidth={78}
                      comHeight={22}
                      compLeft={82.25}
                      compRight={0}
                      compType="Text"
                    >
                      {apiDataEle?.mobile_number}
                    </Text>
                    <Image
                      src={"images/img_morevertical_9.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      compId="4793:8383"
                      comWidth={24}
                      comHeight={24}
                      compLeft={55}
                      compRight={0}
                      compType="Image"
                      alt="morevertical"
                    />
                  </Row>
                );
              })}
            </List>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ContactsPage;
