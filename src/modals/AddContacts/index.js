import React from "react";
import ModalProvider from "react-modal";

import { postContacts } from "service/api";
import "react-toastify/dist/ReactToastify.css";
import useForm from "simple-react-hook-form";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { Column, Input, Image, Row, Text, Grid, Button } from "components";

const AddContactsModal = (props) => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      contact: yup
        .object()
        .shape({ first_name: yup.string().required("First_name is required") }),
      contact: yup
        .object()
        .shape({ last_name: yup.string().required("Last_name is required") }),
      contact: yup
        .object()
        .shape({ emails: yup.string().required("Emails is required") }),
      contact: yup
        .object()
        .shape({
          mobile_number: yup.string().required("Mobile_number is required"),
        }),
      contact: yup
        .object()
        .shape({ country: yup.string().required("Country is required") }),
      contact: yup
        .object()
        .shape({ city: yup.string().required("City is required") }),
      contact: yup
        .object()
        .shape({ zipcode: yup.string().required("Zipcode is required") }),
      contact: yup
        .object()
        .shape({ job_title: yup.string().required("Job_title is required") }),
    });
  const form = useForm(
    {
      contact: {
        first_name: "",
        last_name: "",
        emails: "",
        mobile_number: "",
        country: "",
        city: "",
        zipcode: "",
        job_title: "",
      },
    },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi1(data) {
    const req = { data: { ...data } };
    postContacts(req)
      .then((res) => {
        setapiData1(res);

        toast.success("Contact details inserted successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("COntact Details not inserted...");
      });
  }

  return (
    <>
      <ModalProvider
        className="m-[auto] w-[38%]"
        overlayClassName="bg-gray_900_d8 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Input
            className="common-pointer bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_901 text-bluegray_901 w-[100%]"
            WrapClassName="3xl:pb-[20px] 3xl:pl-[19px] 3xl:pr-[24px] 3xl:pt-[19px] bg-gray_100 border border-indigo_50 border-solid flex lg:pb-[13px] lg:pl-[12px] lg:pr-[15px] lg:pt-[12px] pb-[17px] pl-[16px] pr-[20px] pt-[16px] w-[100%] xl:pb-[15px] xl:pl-[14px] xl:pr-[17px] xl:pt-[14px]"
            compId="4797:9733"
            comWidth={0}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="EditText"
            onClick={props.onRequestClose}
            name="Group398"
            placeholder="Add Contact"
            suffix={
              <Image
                src={"images/img_vector_82.png"}
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
            className="bg-white_A700 items-center justify-center lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[22px] xl:pl-[25px] pl-[29px] 3xl:pl-[34px] lg:pr-[31px] xl:pr-[36px] pr-[41px] 3xl:pr-[49px] lg:pt-[22px] xl:pt-[25px] pt-[29px] 3xl:pt-[34px] w-[100%]"
            compId="4797:9770"
            comWidth={551}
            comHeight={359}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-start ml-[1px] xl:mr-[2px] lg:mr-[2px] mr-[3px] w-[99%]"
              compId="85"
              comWidth={477}
              comHeight={62}
              compLeft={1}
              compRight={3}
              compType="Row"
            >
              <Column
                className="items-start w-[54%]"
                compId="4797:9748"
                comWidth={258}
                comHeight={62}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I4797:9749;122:20717"
                  comWidth={72}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-black_900 font-sourcesanspro">
                    First Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[86%] xl:mt-[3px]"
                  compId="4797:9759"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.first_name", e.target.value);
                  }}
                  errors={form?.errors?.contact?.first_name}
                  value={form?.values?.contact?.first_name}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start w-[46%]"
                compId="5061:8149"
                comWidth={219}
                comHeight={62}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8150;122:20717"
                  comWidth={71}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-black_900 font-sourcesanspro">
                    Last Name{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8151"
                  comWidth={219}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.last_name", e.target.value);
                  }}
                  errors={form?.errors?.contact?.last_name}
                  value={form?.values?.contact?.last_name}
                  name="InputField"
                  placeholder="Enter Last Name"
                ></Input>
              </Column>
            </Row>
            <Grid
              className="lg:gap-[28px] xl:gap-[32px] gap-[37px] 3xl:gap-[44px] grid grid-cols-2 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]"
              compId="90"
              comWidth={481}
              comHeight={217}
              compLeft={0}
              compRight={0}
              compType="Grid"
            >
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8156"
                comWidth={222}
                comHeight={62}
                compLeft={0}
                compRight={259}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8157;122:20717"
                  comWidth={40}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-black_900 font-sourcesanspro">
                    Email{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8158"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.emails", e.target.value);
                  }}
                  errors={form?.errors?.contact?.emails}
                  value={form?.values?.contact?.emails}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8162"
                comWidth={222}
                comHeight={62}
                compLeft={259}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8163;122:20717"
                  comWidth={68}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-black_900 font-sourcesanspro">
                    Mobile No{" "}
                  </span>
                  <span className="text-red_700 font-sourcesanspro">*</span>
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8164"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.mobile_number", e.target.value);
                  }}
                  errors={form?.errors?.contact?.mobile_number}
                  value={form?.values?.contact?.mobile_number}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8168"
                comWidth={222}
                comHeight={62}
                compLeft={1}
                compRight={258}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8169;122:20717"
                  comWidth={47}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Country
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8170"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.country", e.target.value);
                  }}
                  errors={form?.errors?.contact?.country}
                  value={form?.values?.contact?.country}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8174"
                comWidth={222}
                comHeight={62}
                compLeft={256}
                compRight={3}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8175;122:20717"
                  comWidth={23}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  City
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8176"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.city", e.target.value);
                  }}
                  errors={form?.errors?.contact?.city}
                  value={form?.values?.contact?.city}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8180"
                comWidth={222}
                comHeight={62}
                compLeft={1}
                compRight={258}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8181;122:20717"
                  comWidth={48}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Zipcode
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8182"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.zipcode", e.target.value);
                  }}
                  errors={form?.errors?.contact?.zipcode}
                  value={form?.values?.contact?.zipcode}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
              <Column
                className="items-start justify-start w-[100%]"
                compId="5061:8186"
                comWidth={222}
                comHeight={62}
                compLeft={253}
                compRight={6}
                compType="Column"
              >
                <Text
                  className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]"
                  compId="I5061:8187;122:20717"
                  comWidth={52}
                  comHeight={22}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  Job Title
                </Text>
                <Input
                  className="bg-transparent border-0 font-normal not-italic xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_201 text-bluegray_201 w-[100%]"
                  WrapClassName="bg-white_A700 border border-bluegray_100 border-solid lg:mt-[3px] mt-[4px] rounded-radius4 w-[100%] xl:mt-[3px]"
                  compId="5061:8188"
                  comWidth={222}
                  comHeight={36}
                  compLeft={0}
                  compRight={0}
                  compType="EditText"
                  onChange={(e) => {
                    form.handleChange("contact.job_title", e.target.value);
                  }}
                  errors={form?.errors?.contact?.job_title}
                  value={form?.values?.contact?.job_title}
                  name="InputField"
                  placeholder="Enter First Name"
                ></Input>
              </Column>
            </Grid>
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
              className="common-pointer bg-bluegray_900 border border-gray_201 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[42%]"
              compId="4713:9429"
              comWidth={60}
              comHeight={39}
              compLeft={10}
              compRight={0}
              compType="Button"
              onClick={() => {
                form.handleSubmit(callApi1);
              }}
            >
              Save
            </Button>
          </Row>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default AddContactsModal;
