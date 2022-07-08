import React from "react";
import ModalProvider from "react-modal";

import { Column, Stack, Input, Image, Row, Text, SelectBox } from "components";

const AddProductModal = (props) => {
  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Stack
            className="lg:h-[421px] xl:h-[482px] h-[541px] 2xl:h-[542px] 3xl:h-[650px] w-[100%]"
            compId="4797:11503"
            comWidth={551}
            comHeight={541}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Column
              className="absolute items-start justify-start w-[100%]"
              compId="79"
              comWidth={551}
              comHeight={541}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Input
                className="common-pointer bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
                WrapClassName="3xl:pb-[15px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[21px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[10px] lg:pl-[12px] lg:pr-[15px] lg:pt-[14px] pb-[13px] pl-[16px] pr-[20px] pt-[18px] w-[100%] xl:pb-[11px] xl:pl-[14px] xl:pr-[17px] xl:pt-[16px]"
                compId="4797:11346"
                comWidth={0}
                comHeight={54}
                compLeft={0}
                compRight={0}
                compType="EditText"
                onClick={props.onRequestClose}
                name="Group398"
                placeholder="Add Product"
                suffix={
                  <Image
                    src={"images/img_vector_53.png"}
                    className="w-[16.01px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] my-[auto]"
                    compId="I4797:11349;120:1608"
                    comWidth={16.01}
                    comHeight={15.55}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                }
              ></Input>
              <Row
                className="bg-gray_100 border border-indigo_50 border-solid items-start justify-center lg:mt-[312px] xl:mt-[357px] mt-[402px] 3xl:mt-[482px] lg:pb-[13px] xl:pb-[15px] pb-[17px] 3xl:pb-[20px] lg:pl-[290px] xl:pl-[332px] pl-[374px] 3xl:pl-[449px] lg:pr-[23px] xl:pr-[26px] pr-[30px] 3xl:pr-[36px] lg:pt-[28px] xl:pt-[32px] pt-[36px] 3xl:pt-[43px] w-[100%]"
                compId="4797:11340"
                comWidth={551}
                comHeight={84}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="bg-white_A700 border border-gray_201 border-solid font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] pt-[1px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]"
                  compId="4797:11342"
                  comWidth={72}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Cancel
                </Text>
                <Text
                  className="bg-bluegray_900 border border-gray_201 border-solid font-normal mb-[1px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] not-italic lg:pb-[10px] xl:pb-[11px] pb-[13px] 3xl:pb-[15px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] pt-[1px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-white_A700 w-[auto]"
                  compId="4797:11344"
                  comWidth={62}
                  comHeight={30}
                  compLeft={13}
                  compRight={0}
                  compType="Text"
                >
                  Save
                </Text>
              </Row>
            </Column>
            <Column
              className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-start justify-center my-[auto] lg:pb-[49px] xl:pb-[56px] pb-[64px] 3xl:pb-[76px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]"
              compId="4797:11502"
              comWidth={551}
              comHeight={431}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                compId="I4797:11489;122:20717"
                comWidth={43}
                comHeight={22}
                compLeft={2}
                compRight={0}
                compType="Text"
              >
                <span className="text-black_900 font-sourcesanspro">Name </span>
                <span className="text-red_700 font-sourcesanspro">*</span>
              </Text>
              <Column
                className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] xl:pl-[1px] lg:pl-[1px] pl-[2px] pr-[1px] w-[94%]"
                compId="81"
                comWidth={487}
                comHeight={36}
                compLeft={0}
                compRight={32}
                compType="Column"
              >
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[8px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[9px] lg:pr-[11px] lg:py-[5px] pl-[12px] pr-[15px] py-[7px] rounded-radius4 w-[100%] xl:pl-[10px] xl:pr-[13px] xl:py-[6px]"
                  compId="4797:11490"
                  comWidth={0}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="InputField"
                  placeholder="Enter title of task"
                  suffix={
                    <Image
                      src={"images/img_vector_54.png"}
                      className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                      compId="I4797:11490;122:20774;120:5117"
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
                className="font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                compId="I4797:11430;122:20717"
                comWidth={68}
                comHeight={22}
                compLeft={2}
                compRight={0}
                compType="Text"
              >
                Description
              </Text>
              <Column
                className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] pl-[1px] w-[94%]"
                compId="82"
                comWidth={487}
                comHeight={171}
                compLeft={0}
                compRight={32}
                compType="Column"
              >
                <SelectBox
                  className="bg-transparent border border-gray_201 border-solid font-normal lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 w-[100%]"
                  compId="4797:11431"
                  comWidth={484}
                  comHeight={39}
                  compLeft={1}
                  compRight={1}
                  compType="Dropdown"
                  placeholderClassName="bg-transparent text-bluegray_300"
                  name="Frame418"
                  placeholder="Choose value"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Image
                      src={"images/img_vector_55.png"}
                      className="w-[8.67px] h-[5.17px] mr-[21px] object-contain lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                      compId="I4797:11433;120:3699"
                      comWidth={8.67}
                      comHeight={5.17}
                      compLeft={0}
                      compRight={21}
                      compType="Image"
                      alt="Vector"
                    />
                  }
                ></SelectBox>
                <Stack
                  className="xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                  compId="78"
                  comWidth={486}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Column
                    className="absolute inset-x-[0] items-start justify-start w-[100%]"
                    compId="4797:11438"
                    comWidth={484}
                    comHeight={65}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                      compId="I4797:11439;122:20717"
                      comWidth={74}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      SKU Number
                    </Text>
                    <Input
                      className="bg-transparent border-0 font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                      WrapClassName="border border-gray_201 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                      compId="4797:11440"
                      comWidth={484}
                      comHeight={39}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Frame418"
                      placeholder="Enter value"
                    ></Input>
                  </Column>
                  <Column
                    className="absolute inset-x-[0] items-start justify-start w-[100%]"
                    compId="5000:8126"
                    comWidth={484}
                    comHeight={65}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                      compId="I5000:8127;122:20717"
                      comWidth={39}
                      comHeight={22}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Owner
                    </Text>
                    <SelectBox
                      className="bg-transparent border border-gray_201 border-solid font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 w-[100%]"
                      compId="5000:8128"
                      comWidth={484}
                      comHeight={39}
                      compLeft={0}
                      compRight={0}
                      compType="Dropdown"
                      placeholderClassName="bg-transparent text-bluegray_701"
                      name="Frame418"
                      placeholder="Owner Name"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Image
                          src={"images/img_vector_56.png"}
                          className="w-[8.67px] h-[5.17px] mr-[21px] object-contain lg:w-[6px] lg:h-[5px] lg:mr-[16px] xl:w-[7px] xl:h-[5px] xl:mr-[18px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[25px]"
                          compId="I5000:8132;120:3699"
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
                </Stack>
              </Column>
              <Text
                className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                compId="I4797:11452;122:20717"
                comWidth={45}
                comHeight={22}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                Valid till
              </Text>
              <Column
                className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] xl:pr-[2px] lg:pr-[2px] pr-[3px] w-[94%]"
                compId="83"
                comWidth={487}
                comHeight={39}
                compLeft={0}
                compRight={32}
                compType="Column"
              >
                <Input
                  className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="3xl:pl-[19px] 3xl:pr-[20px] 3xl:py-[9px] border border-gray_201 border-solid flex lg:pl-[12px] lg:pr-[13px] lg:py-[6px] pl-[16px] pr-[17px] py-[8px] rounded-radius4 w-[100%] xl:pl-[14px] xl:pr-[15px] xl:py-[7px]"
                  compId="4797:11453"
                  comWidth={0}
                  comHeight={39}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  name="Frame418"
                  placeholder="Choose date"
                  suffix={
                    <Image
                      src={"images/img_vector_57.png"}
                      className="w-[16.67px] h-[16.67px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[20px] 3xl:h-[21px] my-[auto]"
                      compId="I4797:11456;120:380"
                      comWidth={16.67}
                      comHeight={16.67}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                  }
                ></Input>
              </Column>
            </Column>
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export default AddProductModal;
