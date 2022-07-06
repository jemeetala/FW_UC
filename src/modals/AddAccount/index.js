import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Image, Text, SelectBox, Row, Button } from "components";

const AddAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Input
            className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
            WrapClassName="3xl:pb-[20px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[19px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[13px] lg:pl-[12px] lg:pr-[15px] lg:pt-[12px] pb-[17px] pl-[16px] pr-[20px] pt-[16px] w-[100%] xl:pb-[15px] xl:pl-[14px] xl:pr-[17px] xl:pt-[14px]"
            compId="4797:10670"
            comWidth={0}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="EditText"
            name="Group398"
            placeholder="Add Account"
            suffix={
              <Image
                src={"images/img_vector_53.png"}
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                compId="I4797:10673;120:1608"
                comWidth={16.01}
                comHeight={16.01}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="Vector"
              />
            }
          ></Input>
          <Column
            className="bg-white_A700 items-start justify-center lg:pl-[26px] xl:pl-[30px] pl-[34px] 3xl:pl-[40px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] w-[100%]"
            compId="4797:10645"
            comWidth={551}
            comHeight={433}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] w-[94%]"
              compId="78"
              comWidth={484}
              comHeight={55}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                WrapClassName="bg-bluegray_51 w-[100%]"
                compId="4797:10682"
                comWidth={484}
                comHeight={55}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame453"
                placeholder="Basic Information"
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="I4797:10738;122:20717"
              comWidth={43}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-black_900 font-sourcesanspro">Name </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="79"
              comWidth={484}
              comHeight={36}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="bg-white_A700 border border-bluegray_100 border-solid rounded-radius4 w-[100%]"
                compId="4797:10748"
                comWidth={484}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="InputField"
                placeholder="Enter name"
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="I4797:10726;122:20717"
              comWidth={47}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Website
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="80"
              comWidth={484}
              comHeight={36}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[8px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[9px] lg:pr-[11px] lg:py-[5px] pl-[12px] pr-[15px] py-[7px] rounded-radius4 w-[100%] xl:pl-[10px] xl:pr-[13px] xl:py-[6px]"
                compId="4797:10727"
                comWidth={0}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="InputField"
                placeholder="Enter website"
                suffix={
                  <Image
                    src={"images/img_vector_54.png"}
                    className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                    compId="I4797:10727;122:20774;120:5117"
                    comWidth={13.33}
                    comHeight={13.33}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="4797:10723"
              comWidth={38}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Phone
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="81"
              comWidth={484}
              comHeight={39}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <SelectBox
                className="bg-transparent border border-gray_201 border-solid font-normal lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]"
                compId="4797:10688"
                comWidth={484}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-bluegray_300"
                name="Frame418"
                placeholder="Enter phone number"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_55.png"}
                    className="w-[8.67px] h-[5.17px] mr-[21px] object-contain lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                    compId="I4797:10690;120:3699"
                    comWidth={8.67}
                    comHeight={5.17}
                    compLeft={0}
                    compRight={21}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="4797:10721"
              comWidth={73}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Sales Owner
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="82"
              comWidth={484}
              comHeight={39}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <SelectBox
                className="bg-transparent border border-gray_201 border-solid font-normal lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                compId="4797:10694"
                comWidth={484}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="Dropdown"
                placeholderClassName="bg-transparent text-bluegray_701"
                name="Frame418"
                placeholder="Jemee Tala"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Image
                    src={"images/img_vector_56.png"}
                    className="w-[13.34px] h-[13.34px] mr-[35px] object-contain lg:w-[10px] lg:h-[11px] lg:mr-[27px] xl:w-[11px] xl:h-[12px] xl:mr-[31px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[42px]"
                    compId="I4797:10697;120:1608"
                    comWidth={13.34}
                    comHeight={13.34}
                    compLeft={0}
                    compRight={35}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></SelectBox>
            </Column>
          </Column>
          <Row
            className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[293px] xl:pl-[335px] pl-[377px] 3xl:pl-[452px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]"
            compId="4797:10664"
            comWidth={551}
            comHeight={87}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Button
              className="bg-white_A700 border border-gray_201 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[51%]"
              compId="4797:10666"
              comWidth={72}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="Button"
            >
              Cancel
            </Button>
            <Button
              className="bg-bluegray_900 border border-gray_201 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]"
              compId="4797:10668"
              comWidth={60}
              comHeight={39}
              compLeft={10}
              compRight={0}
              compType="Button"
            >
              Save
            </Button>
          </Row>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddAccountModal;
