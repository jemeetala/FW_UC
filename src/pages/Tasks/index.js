import React from "react";

import {
  Stack,
  Row,
  Text,
  Button,
  Column,
  Line,
  Image,
  SelectBox,
  Input,
} from "components";

const TasksPage = () => {
  return (
    <>
      <Stack
        className="bg-bluegray_50 font-sourcesanspro h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]"
        compId="4477:6815"
        comWidth={1440}
        comHeight={1024}
        compLeft={0}
        compRight={0}
        compType="Stack"
      >
        <Row
          className="absolute bg-gray_100 items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] right-[0] top-[7%] w-[93%]"
          compId="4797:8968"
          comWidth={1340}
          comHeight={55}
          compLeft={0}
          compRight={2}
          compType="Row"
        >
          <Text
            className="font-semibold lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_701 w-[auto]"
            compId="4477:6844"
            comWidth={197}
            comHeight={23}
            compLeft={0}
            compRight={0}
            compType="Text"
          >
            My meetings and Tasks
          </Text>
          <Button
            className="bg-white_A700 border border-gray_201 border-solid font-normal 3xl:ml-[1129px] lg:ml-[731px] xl:ml-[837px] ml-[941px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_701 text-center w-[7%]"
            compId="4481:5028"
            comWidth={91}
            comHeight={39}
            compLeft={941}
            compRight={0}
            compType="Button"
          >
            Add meeting
          </Button>
          <Button
            className="bg-bluegray_900 border border-gray_201 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[5%]"
            compId="4481:5032"
            comWidth={69}
            comHeight={39}
            compLeft={10}
            compRight={0}
            compType="Button"
          >
            Add Task
          </Button>
        </Row>
        <Stack
          className="absolute h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] w-[100%]"
          compId="151"
          comWidth={1440}
          comHeight={1024}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Column
            className="absolute items-center justify-start right-[0] top-[13%] w-[93%]"
            compId="4798:8683"
            comWidth={1342}
            comHeight={658}
            compLeft={0}
            compRight={2}
            compType="Column"
          >
            <Stack
              className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] w-[100%]"
              compId="4677:8224"
              comWidth={1336}
              comHeight={58}
              compLeft={3}
              compRight={1}
              compType="Stack"
            >
              <Column
                className="absolute border border-gray_201 border-solid items-center justify-start lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] w-[100%]"
                compId="24"
                comWidth={1336}
                comHeight={58}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]"
                  compId="I4481:5047;186:757"
                  comWidth={71}
                  comHeight={26}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  MEETINGS
                </Text>
              </Column>
              <Column
                className="absolute items-center justify-start left-[15%] w-[5%]"
                compId="4481:5052"
                comWidth={63}
                comHeight={42}
                compLeft={196}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal mx-[auto] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                  compId="I4481:5052;186:751"
                  comWidth={43}
                  comHeight={26}
                  compLeft={10}
                  compRight={10}
                  compType="Text"
                >
                  TASKS
                </Text>
                <Line
                  className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[100%]"
                  compId="I4481:5052;186:754"
                  comWidth={63}
                  comHeight={2}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
            </Stack>
            <Stack
              className="lg:h-[468px] xl:h-[535px] h-[601px] 2xl:h-[602px] 3xl:h-[722px] w-[100%]"
              compId="152"
              comWidth={1342}
              comHeight={601}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[375px] xl:h-[428px] h-[481px] 2xl:h-[482px] 3xl:h-[578px] inset-x-[0] w-[100%]"
                compId="153"
                comWidth={1340}
                comHeight={481}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[281px] xl:h-[322px] h-[361px] 2xl:h-[362px] 3xl:h-[434px] w-[100%]"
                  compId="154"
                  comWidth={1340}
                  comHeight={361}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[188px] xl:h-[215px] h-[241px] 2xl:h-[242px] 3xl:h-[290px] w-[100%]"
                    compId="155"
                    comWidth={1340}
                    comHeight={241}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Column
                      className="absolute items-center justify-start w-[100%]"
                      compId="4797:8974"
                      comWidth={1340}
                      comHeight={121}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                        compId="25"
                        comWidth={1340}
                        comHeight={120}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <div
                          className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                          compId="4797:8971"
                          comWidth={30}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                        <Column
                          className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[15%]"
                          compId="4797:8969"
                          comWidth={194}
                          comHeight={88}
                          compLeft={48}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-red_700 w-[auto]"
                            compId="4481:5063"
                            comWidth={89}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Sample Task
                          </Text>
                          <Text
                            className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                            compId="4481:5064"
                            comWidth={148}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            This is just a sample task
                          </Text>
                          <Column
                            className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                            compId="157"
                            comWidth={194}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="4481:5065"
                              comWidth={194}
                              comHeight={26}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              <span className="text-bluegray_600 font-sourcesanspro">
                                Due date:{" "}
                              </span>
                              <span className="text-red_700 font-sourcesanspro">
                                20 days ago (overdue)
                              </span>
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_201 h-[1px] w-[100%]"
                        compId="4797:8975"
                        comWidth={1338}
                        comHeight={1}
                        compLeft={0}
                        compRight={1}
                        compType="Line"
                      />
                    </Column>
                    <Column
                      className="absolute items-center justify-start w-[100%]"
                      compId="4797:9021"
                      comWidth={1340}
                      comHeight={121}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                        compId="26"
                        comWidth={1340}
                        comHeight={120}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <div
                          className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                          compId="4797:9024"
                          comWidth={30}
                          comHeight={20}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                        <Column
                          className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[11%]"
                          compId="4797:9025"
                          comWidth={148}
                          comHeight={88}
                          compLeft={48}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                            compId="4797:9026"
                            comWidth={89}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            Sample Task
                          </Text>
                          <Column
                            className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                            compId="158"
                            comWidth={148}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                              compId="4797:9027"
                              comWidth={148}
                              comHeight={26}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >
                              This is just a sample task
                            </Text>
                          </Column>
                          <Text
                            className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                            compId="4797:9028"
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
                        className="bg-gray_201 h-[1px] w-[100%]"
                        compId="4797:9023"
                        comWidth={1338}
                        comHeight={1}
                        compLeft={0}
                        compRight={1}
                        compType="Line"
                      />
                    </Column>
                  </Stack>
                  <Column
                    className="absolute items-center justify-start w-[100%]"
                    compId="4797:9029"
                    comWidth={1340}
                    comHeight={121}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                      compId="27"
                      comWidth={1340}
                      comHeight={120}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <div
                        className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                        compId="4797:9032"
                        comWidth={30}
                        comHeight={20}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                      <Column
                        className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[11%]"
                        compId="4797:9033"
                        comWidth={148}
                        comHeight={88}
                        compLeft={48}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                          compId="4797:9034"
                          comWidth={89}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          Sample Task
                        </Text>
                        <Column
                          className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                          compId="159"
                          comWidth={148}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                            compId="4797:9035"
                            comWidth={148}
                            comHeight={26}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >
                            This is just a sample task
                          </Text>
                        </Column>
                        <Text
                          className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4797:9036"
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
                      className="bg-gray_201 h-[1px] w-[100%]"
                      compId="4797:9031"
                      comWidth={1338}
                      comHeight={1}
                      compLeft={0}
                      compRight={1}
                      compType="Line"
                    />
                  </Column>
                </Stack>
                <Column
                  className="absolute items-center justify-start w-[100%]"
                  compId="4797:9037"
                  comWidth={1340}
                  comHeight={121}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                    compId="28"
                    comWidth={1340}
                    comHeight={120}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div
                      className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                      compId="4797:9040"
                      comWidth={30}
                      comHeight={20}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Column
                      className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[11%]"
                      compId="4797:9041"
                      comWidth={148}
                      comHeight={88}
                      compLeft={48}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                        compId="4797:9042"
                        comWidth={89}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        Sample Task
                      </Text>
                      <Column
                        className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                        compId="160"
                        comWidth={148}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                          compId="4797:9043"
                          comWidth={148}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >
                          This is just a sample task
                        </Text>
                      </Column>
                      <Text
                        className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="4797:9044"
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
                    className="bg-gray_201 h-[1px] w-[100%]"
                    compId="4797:9039"
                    comWidth={1338}
                    comHeight={1}
                    compLeft={0}
                    compRight={1}
                    compType="Line"
                  />
                </Column>
              </Stack>
              <Column
                className="absolute inset-x-[0] items-center justify-start w-[100%]"
                compId="4797:9063"
                comWidth={1340}
                comHeight={121}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="bg-white_A700 border border-gray_201 border-solid items-center justify-start lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]"
                  compId="29"
                  comWidth={1340}
                  comHeight={120}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <div
                    className="bg-white_A700 border-bluegray_201 border-bw083 border-solid lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:my-[26px] xl:my-[30px] my-[34px] 3xl:my-[40px] rounded-radius25 w-[2%]"
                    compId="4797:9066"
                    comWidth={30}
                    comHeight={20}
                    compLeft={0}
                    compRight={0}
                    compType="View"
                  ></div>
                  <Column
                    className="items-start lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] w-[11%]"
                    compId="4797:9067"
                    comWidth={148}
                    comHeight={88}
                    compLeft={48}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]"
                      compId="4797:9068"
                      comWidth={89}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >
                      Sample Task
                    </Text>
                    <Column
                      className="items-center lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]"
                      compId="161"
                      comWidth={148}
                      comHeight={26}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                        compId="4797:9069"
                        comWidth={148}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >
                        This is just a sample task
                      </Text>
                    </Column>
                    <Text
                      className="font-normal lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]"
                      compId="4797:9070"
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
                  className="bg-gray_201 h-[1px] w-[100%]"
                  compId="4797:9065"
                  comWidth={1338}
                  comHeight={1}
                  compLeft={0}
                  compRight={1}
                  compType="Line"
                />
              </Column>
            </Stack>
          </Column>
          <aside className="absolute items-center justify-start w-[7%]">
            <Column
              className=""
              compId="30"
              comWidth={98}
              comHeight={1024}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-bluegray_900 items-center justify-start lg:pb-[390px] xl:pb-[446px] pb-[502px] 3xl:pb-[602px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]"
                compId="4797:9079"
                comWidth={98}
                comHeight={1024}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_group371.png"}
                  className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4797:8935"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Group371"
                />
                <Button
                  className="bg-blue_50 flex lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius4 lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                  compId="4713:8178"
                  comWidth={50}
                  comHeight={50}
                  compLeft={0}
                  compRight={0}
                  compType="IconButton"
                >
                  <Image
                    src={"images/img_group177_1.png"}
                    className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                    compId="4713:8178"
                    comWidth={50}
                    comHeight={50}
                    compLeft={0}
                    compRight={0}
                    compType="IconButton"
                    alt="Group177"
                  />
                </Button>
                <Image
                  src={"images/img_vector_130.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] mx-[auto] object-contain lg:w-[14px] xl:w-[16px] w-[19px] 3xl:w-[22px]"
                  compId="I4713:8181;120:2258"
                  comWidth={19}
                  comHeight={19}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_131.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[38%]"
                  compId="I4713:8182;120:2252"
                  comWidth={19}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_132.png"}
                  className="lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] object-contain w-[32%]"
                  compId="I4713:8183;120:328"
                  comWidth={16}
                  comHeight={19}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_133.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain w-[36%]"
                  compId="I4713:8184;120:1630"
                  comWidth={18}
                  comHeight={20}
                  compLeft={16}
                  compRight={16}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_134.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4713:8185;120:434"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_135.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] mx-[auto] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                  compId="I4713:8186;120:1750"
                  comWidth={20}
                  comHeight={20}
                  compLeft={15}
                  compRight={15}
                  compType="Image"
                  alt="Vector"
                />
                <Image
                  src={"images/img_vector_136.png"}
                  className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:mr-[11px] xl:mr-[13px] mr-[15px] 3xl:mr-[18px] lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] object-contain w-[38%]"
                  compId="I4713:8187;120:1890"
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
            className="absolute bg-white_A700 border border-indigo_50 border-solid items-center justify-end lg:pr-[11px] xl:pr-[13px] pr-[15px] 3xl:pr-[18px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[93%]"
            compId="4797:8936"
            comWidth={1341}
            comHeight={72}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <SelectBox
              className="bg-transparent font-semibold p-[0] lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 w-[100%]"
              compId="4797:8954"
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
                  src={"images/img_vector_138.png"}
                  className="w-[10.54px] h-[6.25px] mr-[12px] object-contain lg:w-[8px] lg:h-[5px] lg:mr-[9px] xl:w-[9px] xl:h-[6px] xl:mr-[10px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[14px]"
                  compId="I4797:8958;120:93"
                  comWidth={10.54}
                  comHeight={6.25}
                  compLeft={0}
                  compRight={12}
                  compType="Image"
                  alt="Vector"
                />
              }
            ></SelectBox>
            <Input
              className="bg-transparent border-0 font-normal not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              WrapClassName="border border-bluegray_200 border-solid rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[34%]"
              compId="4797:8960"
              comWidth={446}
              comHeight={40}
              compLeft={0}
              compRight={0}
              compType="EditText"
              name="Group94"
              placeholder="Search your CRM..."
            ></Input>
            <Row
              className="items-center justify-between lg:ml-[376px] xl:ml-[430px] ml-[484px] 3xl:ml-[581px] w-[22%]"
              compId="156"
              comWidth={292}
              comHeight={40}
              compLeft={484}
              compRight={0}
              compType="Row"
            >
              <Button
                className="bg-bluegray_900 flex lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                compId="4797:8938"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group5_5.png"}
                  className="w-[16px] h-[16px] flex items-center justify-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                  compId="4797:8938"
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
                compId="4797:8941"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group4_6.png"}
                  className="w-[100%] flex items-center justify-center"
                  compId="4797:8941"
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
                compId="4797:8944"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group3_5.png"}
                  className="w-[31.09px] h-[31.09px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[27px] xl:h-[28px] 2xl:w-[31px] 2xl:h-[32px] 3xl:w-[37px] 3xl:h-[38px]"
                  compId="4797:8944"
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
                compId="4797:8947"
                comWidth={36}
                comHeight={36}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group100_4.png"}
                  className="w-[37%] flex items-center justify-center"
                  compId="4797:8947"
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
                compId="4797:8950"
                comWidth={40}
                comHeight={40}
                compLeft={0}
                compRight={0}
                compType="IconButton"
              >
                <Image
                  src={"images/img_group99_4.png"}
                  className="w-[72%] flex items-center justify-center"
                  compId="4797:8950"
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
        </Stack>
      </Stack>
    </>
  );
};

export default TasksPage;
