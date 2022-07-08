import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Image, Row, Text, Button } from "components";

const AddProductModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Input
            className="common-pointer bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
            WrapClassName="3xl:pb-[20px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[19px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[13px] lg:pl-[12px] lg:pr-[15px] lg:pt-[12px] pb-[17px] pl-[16px] pr-[20px] pt-[16px] w-[100%] xl:pb-[15px] xl:pl-[14px] xl:pr-[17px] xl:pt-[14px]"
            compId="5089:8791"
            comWidth={0}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="EditText"
            onClick={props.onRequestClose}
            name="Group398"
            placeholder="Add Product"
            suffix={
              <Image
                src={"images/img_vector_86.png"}
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                compId="I5089:8794;120:1608"
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
            compId="5089:8762"
            comWidth={551}
            comHeight={433}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] w-[94%]"
              compId="113"
              comWidth={484}
              comHeight={134}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                WrapClassName="bg-bluegray_50 w-[100%]"
                compId="5089:8764"
                comWidth={484}
                comHeight={55}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame453"
                placeholder="Basic Information"
              ></Input>
              <Row
                className="items-center justify-start lg:mr-[17px] xl:mr-[19px] mr-[22px] 3xl:mr-[26px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[95%]"
                compId="108"
                comWidth={462}
                comHeight={63}
                compLeft={0}
                compRight={22}
                compType="Row"
              >
                <Column
                  className="items-start mb-[1px] w-[48%]"
                  compId="5089:8766"
                  comWidth={221}
                  comHeight={62}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                    compId="I5089:8767;122:20717"
                    comWidth={43}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-black_900 font-sourcesanspro">
                      Name{" "}
                    </span>
                    <span className="text-red_700 font-sourcesanspro">*</span>
                  </Text>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                    compId="5089:8768"
                    comWidth={221}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="InputField"
                    placeholder="Enter name"
                  ></Input>
                </Column>
                <Column
                  className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] mt-[1px] w-[48%]"
                  compId="5089:8795"
                  comWidth={221}
                  comHeight={62}
                  compLeft={20}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                    compId="I5089:8796;122:20717"
                    comWidth={59}
                    comHeight={22}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    <span className="text-black_900 font-sourcesanspro">
                      Category
                    </span>
                    <span className="text-red_700 font-sourcesanspro">*</span>
                  </Text>
                  <Input
                    className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                    compId="5089:8797"
                    comWidth={221}
                    comHeight={36}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="InputField"
                    placeholder="Enter name"
                  ></Input>
                </Column>
              </Row>
            </Column>
            <Text
              className="font-normal lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="I5089:8771;122:20717"
              comWidth={68}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Description
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="114"
              comWidth={484}
              comHeight={36}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[8px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[9px] lg:pr-[11px] lg:py-[5px] pl-[12px] pr-[15px] py-[7px] rounded-radius4 w-[100%] xl:pl-[10px] xl:pr-[13px] xl:py-[6px]"
                compId="5089:8772"
                comWidth={0}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="InputField"
                placeholder="Enter DDescriptioni"
                suffix={
                  <Image
                    src={"images/img_vector_87.png"}
                    className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                    compId="I5089:8772;122:20774;120:5117"
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
              compId="5089:8774"
              comWidth={74}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              SKU Number
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="115"
              comWidth={484}
              comHeight={39}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                WrapClassName="3xl:pl-[19px] 3xl:pr-[22px] 3xl:py-[9px] border border-gray_200 border-solid flex lg:pl-[12px] lg:pr-[14px] lg:py-[6px] pl-[16px] pr-[19px] py-[8px] rounded-radius4 w-[100%] xl:pl-[14px] xl:pr-[16px] xl:py-[7px]"
                compId="5089:8775"
                comWidth={0}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame418"
                placeholder="Enter  number"
                suffix={
                  <Image
                    src={"images/img_vector_88.png"}
                    className="w-[13.34px] h-[13.34px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                    compId="I5089:8777;120:1608"
                    comWidth={13.34}
                    comHeight={13.34}
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
              compId="5089:8779"
              comWidth={47}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Valid Till
            </Text>
            <Column
              className="items-center lg:mr-[25px] xl:mr-[29px] mr-[33px] 3xl:mr-[39px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="116"
              comWidth={484}
              comHeight={39}
              compLeft={0}
              compRight={33}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                WrapClassName="3xl:pl-[19px] 3xl:pr-[22px] 3xl:py-[9px] border border-gray_200 border-solid flex lg:pl-[12px] lg:pr-[14px] lg:py-[6px] pl-[16px] pr-[19px] py-[8px] rounded-radius4 w-[100%] xl:pl-[14px] xl:pr-[16px] xl:py-[7px]"
                compId="5089:8780"
                comWidth={0}
                comHeight={39}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Frame418"
                placeholder="Enter  Valid till date"
                suffix={
                  <Image
                    src={"images/img_vector_89.png"}
                    className="w-[13.34px] h-[13.34px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                    compId="I5089:8784;120:1608"
                    comWidth={13.34}
                    comHeight={13.34}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></Input>
            </Column>
          </Column>
          <Row
            className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[293px] xl:pl-[335px] pl-[377px] 3xl:pl-[452px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]"
            compId="5089:8785"
            comWidth={551}
            comHeight={87}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Button
              className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[51%]"
              compId="5089:8787"
              comWidth={72}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="Button"
            >
              Cancel
            </Button>
            <Button
              className="bg-bluegray_901 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]"
              compId="5089:8789"
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

export default AddProductModal;
