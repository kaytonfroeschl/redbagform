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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Sponsor } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SponsorUpdateForm(props) {
  const {
    id: idProp,
    sponsor: sponsorModelProp,
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
    RedBagLadyPickUp: "",
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
  const [RedBagLadyPickUp, setRedBagLadyPickUp] = React.useState(
    initialValues.RedBagLadyPickUp
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sponsorRecord
      ? { ...initialValues, ...sponsorRecord }
      : initialValues;
    setFirstName(cleanValues.FirstName);
    setLastName(cleanValues.LastName);
    setEmail(cleanValues.Email);
    setPhoneNumber(cleanValues.PhoneNumber);
    setAddress(cleanValues.Address);
    setAddress2(cleanValues.Address2);
    setCity(cleanValues.City);
    setState(cleanValues.State);
    setZipcode(cleanValues.Zipcode);
    setReturningSponsor(cleanValues.ReturningSponsor);
    setInfoChanged(cleanValues.InfoChanged);
    setRedBagLadyPickUp(cleanValues.RedBagLadyPickUp);
    setErrors({});
  };
  const [sponsorRecord, setSponsorRecord] = React.useState(sponsorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Sponsor, idProp)
        : sponsorModelProp;
      setSponsorRecord(record);
    };
    queryData();
  }, [idProp, sponsorModelProp]);
  React.useEffect(resetStateValues, [sponsorRecord]);
  const validations = {
    FirstName: [],
    LastName: [],
    Email: [{ type: "Email" }],
    PhoneNumber: [{ type: "Phone" }],
    Address: [],
    Address2: [],
    City: [],
    State: [],
    Zipcode: [],
    ReturningSponsor: [],
    InfoChanged: [],
    RedBagLadyPickUp: [],
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
          RedBagLadyPickUp,
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
          await DataStore.save(
            Sponsor.copyOf(sponsorRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SponsorUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
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
              RedBagLadyPickUp,
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
        isRequired={false}
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
              RedBagLadyPickUp,
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
        isRequired={false}
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
              RedBagLadyPickUp,
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
        isRequired={false}
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
              RedBagLadyPickUp,
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
        isRequired={false}
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
              RedBagLadyPickUp,
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
              RedBagLadyPickUp,
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
        isRequired={false}
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
              RedBagLadyPickUp,
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
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
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
              RedBagLadyPickUp,
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
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={false}
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
              RedBagLadyPickUp,
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
              RedBagLadyPickUp,
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
              RedBagLadyPickUp,
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
      <TextField
        label="Red bag lady pick up"
        isRequired={false}
        isReadOnly={false}
        value={RedBagLadyPickUp}
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
              Zipcode,
              ReturningSponsor,
              InfoChanged,
              RedBagLadyPickUp: value,
            };
            const result = onChange(modelFields);
            value = result?.RedBagLadyPickUp ?? value;
          }
          if (errors.RedBagLadyPickUp?.hasError) {
            runValidationTasks("RedBagLadyPickUp", value);
          }
          setRedBagLadyPickUp(value);
        }}
        onBlur={() => runValidationTasks("RedBagLadyPickUp", RedBagLadyPickUp)}
        errorMessage={errors.RedBagLadyPickUp?.errorMessage}
        hasError={errors.RedBagLadyPickUp?.hasError}
        {...getOverrideProps(overrides, "RedBagLadyPickUp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sponsorModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || sponsorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
