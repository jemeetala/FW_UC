import React from "react";
import ModalProvider from "react-modal";

import { Column, Input, Image, CheckBox, Text, Row, Button } from "components";

const AddTaskModal = (props) => {
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
            WrapClassName="3xl:pb-[20px] 3xl:pl-[38px] 3xl:pr-[42px] 3xl:pt-[19px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[13px] lg:pl-[24px] lg:pr-[27px] lg:pt-[12px] pb-[17px] pl-[32px] pr-[35px] pt-[16px] w-[100%] xl:pb-[15px] xl:pl-[28px] xl:pr-[31px] xl:pt-[14px]"
            compId="4797:8624"
            comWidth={0}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="EditText"
            onClick={props.onRequestClose}
            name="Group368"
            placeholder="Add task"
            suffix={
              <Image
                src={"images/img_vector_70.png"}
                className="w-[16.01px] h-[16.01px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                compId="I4712:9389;120:1608"
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
            className="bg-white_A700 items-start justify-center lg:pb-[104px] xl:pb-[119px] pb-[134px] 3xl:pb-[160px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] w-[100%]"
            compId="4797:8623"
            comWidth={548}
            comHeight={555}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] w-[94%]"
              compId="96"
              comWidth={484}
              comHeight={55}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Column
                className="bg-bluegray_50 items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                compId="4712:9306"
                comWidth={484}
                comHeight={55}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <CheckBox
                  className="font-normal not-italic pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 w-[37%]"
                  inputClassName="2xl:h-[24px] 3xl:h-[28px] 3xl:w-[27px] bg-white_A700 border-bluegray_200 border-bw083 border-solid h-[23px] lg:h-[18px] lg:w-[17px] rounded-radius25 w-[23px] xl:h-[21px] xl:w-[20px] mr-[5px]"
                  compId="4712:9308"
                  comWidth={172}
                  comHeight={23}
                  compLeft={0}
                  compRight={0}
                  compType="CheckBox"
                  name="Markascomplet"
                  label="Mark as completed"
                ></CheckBox>
              </Column>
            </Column>
            <Text
              className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="4712:9312"
              comWidth={35}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-black_900 font-sourcesanspro">Title </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="97"
              comWidth={484}
              comHeight={36}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                WrapClassName="3xl:pl-[14px] 3xl:pr-[18px] 3xl:py-[8px] bg-white_A700 border border-bluegray_100 border-solid flex lg:pl-[9px] lg:pr-[11px] lg:py-[5px] pl-[12px] pr-[15px] py-[7px] rounded-radius4 w-[100%] xl:pl-[10px] xl:pr-[13px] xl:py-[6px]"
                compId="4712:9313"
                comWidth={0}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="EditText"
                name="Group271"
                placeholder="Enter title of task"
                suffix={
                  <Image
                    src={"images/img_vector_71.png"}
                    className="w-[13.33px] h-[13.33px] lg:w-[10px] lg:h-[11px] xl:w-[11px] xl:h-[12px] 2xl:w-[13px] 2xl:h-[14px] 3xl:w-[16px] 3xl:h-[17px] my-[auto]"
                    compId="4712:9318"
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
              compId="4712:9320"
              comWidth={68}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              Description
            </Text>
            <Column
              className="items-center lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[94%]"
              compId="98"
              comWidth={484}
              comHeight={136}
              compLeft={0}
              compRight={32}
              compType="Column"
            >
              <Column
                className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start pb-[102px] 3xl:pb-[122px] lg:pb-[79px] xl:pb-[90px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius4 w-[100%]"
                compId="4712:9321"
                comWidth={484}
                comHeight={136}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 w-[auto]"
                  compId="4712:9323"
                  comWidth={219}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Start typing the details about the task
                </Text>
              </Column>
            </Column>
            <Text
              className="font-normal ml-[0] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
              compId="4712:9333"
              comWidth={60}
              comHeight={22}
              compLeft={0}
              compRight={0}
              compType="Text"
            >
              <span className="text-black_900 font-sourcesanspro">
                Due date
              </span>
              <span className="text-red_700 font-sourcesanspro">*</span>
            </Text>
            <Input
              className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 w-[100%]"
              WrapClassName="3xl:pb-[8px] 3xl:pl-[28px] 3xl:pr-[32px] 3xl:pt-[7px] bg-white_A700 border border-bluegray_100 border-solid flex lg:mt-[3px] lg:pb-[5px] lg:pl-[18px] lg:pr-[21px] lg:pt-[4px] mt-[4px] pb-[7px] pl-[24px] pr-[27px] pt-[6px] rounded-radius4 w-[43%] xl:mt-[3px] xl:pb-[6px] xl:pl-[21px] xl:pr-[24px] xl:pt-[5px]"
              compId="4712:9335"
              comWidth={0}
              comHeight={36}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group283"
              placeholder="06/28/2022"
              suffix={
                <Image
                  src={"images/img_vector_72.png"}
                  className="w-[25.64px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] my-[auto]"
                  compId="I4712:9339;120:380"
                  comWidth={25.64}
                  comHeight={16.67}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
              }
            ></Input>
          </Column>
          <Row
            className="bg-gray_100 border border-indigo_50 border-solid items-start justify-center lg:pb-[20px] xl:pb-[23px] pb-[26px] 3xl:pb-[31px] lg:pl-[292px] xl:pl-[334px] pl-[376px] 3xl:pl-[451px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] w-[100%]"
            compId="4797:8621"
            comWidth={548}
            comHeight={87}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Button
              className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[51%]"
              compId="4712:9379"
              comWidth={72}
              comHeight={39}
              compLeft={0}
              compRight={0}
              compType="Button"
            >
              Cancel
            </Button>
            <Button
              className="bg-bluegray_901 border border-gray_200 border-solid font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[43%]"
              compId="4712:9382"
              comWidth={60}
              comHeight={39}
              compLeft={8}
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

export default AddTaskModal;
