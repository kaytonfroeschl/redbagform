/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Sponsor } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SponsorCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Address: "",
    Address2: "",
    City: "",
    State: "",
    Zipcode: "",
    ReturningSponsor: false,
    InfoChanged: false,
  };
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [PhoneNumber, setPhoneNumber] = React.useState(
    initialValues.PhoneNumber
  );
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Address2, setAddress2] = React.useState(initialValues.Address2);
  const [City, setCity] = React.useState(initialValues.City);
  const [State, setState] = React.useState(initialValues.State);
  const [Zipcode, setZipcode] = React.useState(initialValues.Zipcode);
  const [ReturningSponsor, setReturningSponsor] = React.useState(
    initialValues.ReturningSponsor
  );
  const [InfoChanged, setInfoChanged] = React.useState(
    initialValues.InfoChanged
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.FirstName);
    setLastName(initialValues.LastName);
    setEmail(initialValues.Email);
    setPhoneNumber(initialValues.PhoneNumber);
    setAddress(initialValues.Address);
    setAddress2(initialValues.Address2);
    setCity(initialValues.City);
    setState(initialValues.State);
    setZipcode(initialValues.Zipcode);
    setReturningSponsor(initialValues.ReturningSponsor);
    setInfoChanged(initialValues.InfoChanged);
    setErrors({});
  };
  const validations = {
    FirstName: [{ type: "Required" }],
    LastName: [{ type: "Required" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    PhoneNumber: [{ type: "Required" }, { type: "Phone" }],
    Address: [{ type: "Required" }],
    Address2: [],
    City: [{ type: "Required" }],
    State: [{ type: "Required" }],
    Zipcode: [{ type: "Required" }],
    ReturningSponsor: [],
    InfoChanged: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FirstName,
          LastName,
          Email,
          PhoneNumber,
          Address,
          Address2,
          City,
          State,
          Zipcode,
          ReturningSponsor,
          InfoChanged,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Sponsor(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SponsorCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName: value,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName: value,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email: value,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={PhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber: value,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.PhoneNumber ?? value;
          }
          if (errors.PhoneNumber?.hasError) {
            runValidationTasks("PhoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("PhoneNumber", PhoneNumber)}
        errorMessage={errors.PhoneNumber?.errorMessage}
        hasError={errors.PhoneNumber?.hasError}
        {...getOverrideProps(overrides, "PhoneNumber")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address: value,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
      ></TextField>
      <TextField
        label="Address2"
        isRequired={false}
        isReadOnly={false}
        value={Address2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2: value,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.Address2 ?? value;
          }
          if (errors.Address2?.hasError) {
            runValidationTasks("Address2", value);
          }
          setAddress2(value);
        }}
        onBlur={() => runValidationTasks("Address2", Address2)}
        errorMessage={errors.Address2?.errorMessage}
        hasError={errors.Address2?.hasError}
        {...getOverrideProps(overrides, "Address2")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City: value,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
      <SelectField
        label="State"
        placeholder="Please select an option"
        isDisabled={false}
        value={State}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State: value,
              Zipcode,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.State ?? value;
          }
          if (errors.State?.hasError) {
            runValidationTasks("State", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("State", State)}
        errorMessage={errors.State?.errorMessage}
        hasError={errors.State?.hasError}
        {...getOverrideProps(overrides, "State")}
      >
        <option
          children="AL"
          value="AL"
          {...getOverrideProps(overrides, "Stateoption0")}
        ></option>
        <option
          children="AK"
          value="AK"
          {...getOverrideProps(overrides, "Stateoption1")}
        ></option>
        <option
          children="AZ"
          value="AZ"
          {...getOverrideProps(overrides, "Stateoption2")}
        ></option>
        <option
          children="AR"
          value="AR"
          {...getOverrideProps(overrides, "Stateoption3")}
        ></option>
        <option
          children="CA"
          value="CA"
          {...getOverrideProps(overrides, "Stateoption4")}
        ></option>
        <option
          children="CO"
          value="CO"
          {...getOverrideProps(overrides, "Stateoption5")}
        ></option>
        <option
          children="CT"
          value="CT"
          {...getOverrideProps(overrides, "Stateoption6")}
        ></option>
        <option
          children="DE"
          value="DE"
          {...getOverrideProps(overrides, "Stateoption7")}
        ></option>
        <option
          children="DC"
          value="DC"
          {...getOverrideProps(overrides, "Stateoption8")}
        ></option>
        <option
          children="FL"
          value="FL"
          {...getOverrideProps(overrides, "Stateoption9")}
        ></option>
        <option
          children="GA"
          value="GA"
          {...getOverrideProps(overrides, "Stateoption10")}
        ></option>
        <option
          children="GU"
          value="GU"
          {...getOverrideProps(overrides, "Stateoption11")}
        ></option>
        <option
          children="HI"
          value="HI"
          {...getOverrideProps(overrides, "Stateoption12")}
        ></option>
        <option
          children="ID"
          value="ID"
          {...getOverrideProps(overrides, "Stateoption13")}
        ></option>
        <option
          children="IL"
          value="IL"
          {...getOverrideProps(overrides, "Stateoption14")}
        ></option>
        <option
          children="IN"
          value="IN"
          {...getOverrideProps(overrides, "Stateoption15")}
        ></option>
        <option
          children="IA"
          value="IA"
          {...getOverrideProps(overrides, "Stateoption16")}
        ></option>
        <option
          children="KS"
          value="KS"
          {...getOverrideProps(overrides, "Stateoption17")}
        ></option>
        <option
          children="KY"
          value="KY"
          {...getOverrideProps(overrides, "Stateoption18")}
        ></option>
        <option
          children="LA"
          value="LA"
          {...getOverrideProps(overrides, "Stateoption19")}
        ></option>
        <option
          children="ME"
          value="ME"
          {...getOverrideProps(overrides, "Stateoption20")}
        ></option>
        <option
          children="MD"
          value="MD"
          {...getOverrideProps(overrides, "Stateoption21")}
        ></option>
        <option
          children="MA"
          value="MA"
          {...getOverrideProps(overrides, "Stateoption22")}
        ></option>
        <option
          children="MI"
          value="MI"
          {...getOverrideProps(overrides, "Stateoption23")}
        ></option>
        <option
          children="MN"
          value="MN"
          {...getOverrideProps(overrides, "Stateoption24")}
        ></option>
        <option
          children="MS"
          value="MS"
          {...getOverrideProps(overrides, "Stateoption25")}
        ></option>
        <option
          children="MO"
          value="MO"
          {...getOverrideProps(overrides, "Stateoption26")}
        ></option>
        <option
          children="MT"
          value="MT"
          {...getOverrideProps(overrides, "Stateoption27")}
        ></option>
        <option
          children="NE"
          value="NE"
          {...getOverrideProps(overrides, "Stateoption28")}
        ></option>
        <option
          children="NV"
          value="NV"
          {...getOverrideProps(overrides, "Stateoption29")}
        ></option>
        <option
          children="NH"
          value="NH"
          {...getOverrideProps(overrides, "Stateoption30")}
        ></option>
        <option
          children="NJ"
          value="NJ"
          {...getOverrideProps(overrides, "Stateoption31")}
        ></option>
        <option
          children="NM"
          value="NM"
          {...getOverrideProps(overrides, "Stateoption32")}
        ></option>
        <option
          children="NY"
          value="NY"
          {...getOverrideProps(overrides, "Stateoption33")}
        ></option>
        <option
          children="NC"
          value="NC"
          {...getOverrideProps(overrides, "Stateoption34")}
        ></option>
        <option
          children="ND"
          value="ND"
          {...getOverrideProps(overrides, "Stateoption35")}
        ></option>
        <option
          children="MP"
          value="MP"
          {...getOverrideProps(overrides, "Stateoption36")}
        ></option>
        <option
          children="OH"
          value="OH"
          {...getOverrideProps(overrides, "Stateoption37")}
        ></option>
        <option
          children="OK"
          value="OK"
          {...getOverrideProps(overrides, "Stateoption38")}
        ></option>
        <option
          children="OR"
          value="OR"
          {...getOverrideProps(overrides, "Stateoption39")}
        ></option>
        <option
          children="PA"
          value="PA"
          {...getOverrideProps(overrides, "Stateoption40")}
        ></option>
        <option
          children="PR"
          value="PR"
          {...getOverrideProps(overrides, "Stateoption41")}
        ></option>
        <option
          children="RI"
          value="RI"
          {...getOverrideProps(overrides, "Stateoption42")}
        ></option>
        <option
          children="SC"
          value="SC"
          {...getOverrideProps(overrides, "Stateoption43")}
        ></option>
        <option
          children="SD"
          value="SD"
          {...getOverrideProps(overrides, "Stateoption44")}
        ></option>
        <option
          children="TN"
          value="TN"
          {...getOverrideProps(overrides, "Stateoption45")}
        ></option>
        <option
          children="TX"
          value="TX"
          {...getOverrideProps(overrides, "Stateoption46")}
        ></option>
        <option
          children="TT"
          value="TT"
          {...getOverrideProps(overrides, "Stateoption47")}
        ></option>
        <option
          children="UT"
          value="UT"
          {...getOverrideProps(overrides, "Stateoption48")}
        ></option>
        <option
          children="VT"
          value="VT"
          {...getOverrideProps(overrides, "Stateoption49")}
        ></option>
        <option
          children="VA"
          value="VA"
          {...getOverrideProps(overrides, "Stateoption50")}
        ></option>
        <option
          children="VI"
          value="VI"
          {...getOverrideProps(overrides, "Stateoption51")}
        ></option>
        <option
          children="WA"
          value="WA"
          {...getOverrideProps(overrides, "Stateoption52")}
        ></option>
        <option
          children="WV"
          value="WV"
          {...getOverrideProps(overrides, "Stateoption53")}
        ></option>
        <option
          children="WI"
          value="WI"
          {...getOverrideProps(overrides, "Stateoption54")}
        ></option>
        <option
          children="WY"
          value="WY"
          {...getOverrideProps(overrides, "Stateoption55")}
        ></option>
      </SelectField>
      <TextField
        label="Zipcode"
        isRequired={true}
        isReadOnly={false}
        value={Zipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode: value,
              ReturningSponsor,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.Zipcode ?? value;
          }
          if (errors.Zipcode?.hasError) {
            runValidationTasks("Zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("Zipcode", Zipcode)}
        errorMessage={errors.Zipcode?.errorMessage}
        hasError={errors.Zipcode?.hasError}
        {...getOverrideProps(overrides, "Zipcode")}
      ></TextField>
      <SwitchField
        label="Returning sponsor"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReturningSponsor}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor: value,
              InfoChanged,
            };
            const result = onChange(modelFields);
            value = result?.ReturningSponsor ?? value;
          }
          if (errors.ReturningSponsor?.hasError) {
            runValidationTasks("ReturningSponsor", value);
          }
          setReturningSponsor(value);
        }}
        onBlur={() => runValidationTasks("ReturningSponsor", ReturningSponsor)}
        errorMessage={errors.ReturningSponsor?.errorMessage}
        hasError={errors.ReturningSponsor?.hasError}
        {...getOverrideProps(overrides, "ReturningSponsor")}
      ></SwitchField>
      <SwitchField
        label="Info changed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InfoChanged}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              Email,
              PhoneNumber,
              Address,
              Address2,
              City,
              State,
              Zipcode,
              ReturningSponsor,
              InfoChanged: value,
            };
            const result = onChange(modelFields);
            value = result?.InfoChanged ?? value;
          }
          if (errors.InfoChanged?.hasError) {
            runValidationTasks("InfoChanged", value);
          }
          setInfoChanged(value);
        }}
        onBlur={() => runValidationTasks("InfoChanged", InfoChanged)}
        errorMessage={errors.InfoChanged?.errorMessage}
        hasError={errors.InfoChanged?.hasError}
        {...getOverrideProps(overrides, "InfoChanged")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
