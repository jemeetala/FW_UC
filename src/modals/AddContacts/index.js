import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Image, Text, Row, Button } from "components";

const AddContactsModal = (props) => {
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
            compId="4797:9733"
            comWidth={0}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="EditText"
            name="Group398"
            placeholder="Add Contact"
            suffix={
              <Image
                src={"images/img_vector_73.png"}
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                compId="I4542:7615;120:1608"
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
            className="bg-white_A700 items-start justify-center lg:pb-[21px] xl:pb-[24px] pb-[28px] 3xl:pb-[33px] lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:pt-[22px] xl:pt-[25px] pt-[29px] 3xl:pt-[34px] w-[100%]"
            compId="4797:9770"
            comWidth={551}
            comHeight={359}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
              compId="I4797:9749;122:20717"
              comWidth={72}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-black_901 font-sourcesanspro">
                First Name{" "}
              </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="109"
              comWidth={489}
              comHeight={36}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="bg-white_A700 border border-bluegray_100 border-solid rounded-radius4 w-[100%]"
                compId="4797:9759"
                comWidth={489}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="InputField"
                placeholder="Enter First Name"
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
              compId="I4797:9737;122:20717"
              comWidth={71}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-black_901 font-sourcesanspro">
                Last Name{" "}
              </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="110"
              comWidth={489}
              comHeight={36}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="bg-white_A700 border border-bluegray_100 border-solid rounded-radius4 w-[100%]"
                compId="4797:9765"
                comWidth={489}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="InputField"
                placeholder="Enter Last Name"
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
              compId="I4542:7628;122:20717"
              comWidth={90}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Mobile Number
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="111"
              comWidth={489}
              comHeight={39}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="border border-gray_201 border-solid rounded-radius4 w-[100%]"
                compId="4542:7629"
                comWidth={489}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame418"
                placeholder="Enter mobile number"
              ></Input>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_901 w-[auto]"
              compId="I4542:7633;122:20717"
              comWidth={31}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Email
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="112"
              comWidth={489}
              comHeight={39}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                WrapClassName="border border-gray_201 border-solid rounded-radius4 w-[100%]"
                compId="4542:7634"
                comWidth={489}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame418"
                placeholder="Enter mail addres"
              ></Input>
            </Column>
          </Column>
          <Row
            className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[293px] xl:pl-[335px] pl-[377px] 3xl:pl-[452px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]"
            compId="4797:9731"
            comWidth={551}
            comHeight={87}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Button
              className="bg-white_A700 border border-gray_201 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[51%]"
              compId="4713:9427"
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
              compId="4713:9429"
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

export default AddContactsModal;
