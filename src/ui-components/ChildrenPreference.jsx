/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SponsorPreferences } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ChildrenPreference(props) {
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
    InfantBoy: false,
    InfantBoyNum: "",
    InfantGirl: false,
    InfantGirlNum: "",
    InfantNoPref: false,
    InfantNoPrefNum: "",
    ElementaryBoy: false,
    ElementaryBoyNum: "",
    ElementaryGirl: false,
    ElementaryGirlNum: "",
    ElementaryNoPref: false,
    ElementaryNoPrefNum: "",
    MiddleSchoolBoy: false,
    MiddleSchoolBoyNum: "",
    MiddleSchoolGirl: false,
    MiddleSchoolGirlNum: "",
    MiddleSchoolNoPref: false,
    MiddleSchoolNumNoPref: "",
    HighSchoolBoy: false,
    HighSchoolBoyNum: "",
    HighSchoolGirl: false,
    HighSchoolGirlNum: "",
    HighSchoolNoPref: false,
    HighSchoolNoPrefNum: "",
    AgingOutBoy: false,
    AgingOutBoyNum: "",
    AgingOutGirl: false,
    AgingOutGirlNum: "",
    AgingOutNoPref: false,
    AgingOutNoPrefNum: "",
    NoPrefBoy: false,
    NoPrefBoyNum: "",
    NoPrefGirl: false,
    NoPrefGirlNum: "",
    NoPref: false,
    NoPrefNum: "",
    TotalNumChildren: "",
  };
  const [InfantBoy, setInfantBoy] = React.useState(initialValues.InfantBoy);
  const [InfantBoyNum, setInfantBoyNum] = React.useState(
    initialValues.InfantBoyNum
  );
  const [InfantGirl, setInfantGirl] = React.useState(initialValues.InfantGirl);
  const [InfantGirlNum, setInfantGirlNum] = React.useState(
    initialValues.InfantGirlNum
  );
  const [InfantNoPref, setInfantNoPref] = React.useState(
    initialValues.InfantNoPref
  );
  const [InfantNoPrefNum, setInfantNoPrefNum] = React.useState(
    initialValues.InfantNoPrefNum
  );
  const [ElementaryBoy, setElementaryBoy] = React.useState(
    initialValues.ElementaryBoy
  );
  const [ElementaryBoyNum, setElementaryBoyNum] = React.useState(
    initialValues.ElementaryBoyNum
  );
  const [ElementaryGirl, setElementaryGirl] = React.useState(
    initialValues.ElementaryGirl
  );
  const [ElementaryGirlNum, setElementaryGirlNum] = React.useState(
    initialValues.ElementaryGirlNum
  );
  const [ElementaryNoPref, setElementaryNoPref] = React.useState(
    initialValues.ElementaryNoPref
  );
  const [ElementaryNoPrefNum, setElementaryNoPrefNum] = React.useState(
    initialValues.ElementaryNoPrefNum
  );
  const [MiddleSchoolBoy, setMiddleSchoolBoy] = React.useState(
    initialValues.MiddleSchoolBoy
  );
  const [MiddleSchoolBoyNum, setMiddleSchoolBoyNum] = React.useState(
    initialValues.MiddleSchoolBoyNum
  );
  const [MiddleSchoolGirl, setMiddleSchoolGirl] = React.useState(
    initialValues.MiddleSchoolGirl
  );
  const [MiddleSchoolGirlNum, setMiddleSchoolGirlNum] = React.useState(
    initialValues.MiddleSchoolGirlNum
  );
  const [MiddleSchoolNoPref, setMiddleSchoolNoPref] = React.useState(
    initialValues.MiddleSchoolNoPref
  );
  const [MiddleSchoolNumNoPref, setMiddleSchoolNumNoPref] = React.useState(
    initialValues.MiddleSchoolNumNoPref
  );
  const [HighSchoolBoy, setHighSchoolBoy] = React.useState(
    initialValues.HighSchoolBoy
  );
  const [HighSchoolBoyNum, setHighSchoolBoyNum] = React.useState(
    initialValues.HighSchoolBoyNum
  );
  const [HighSchoolGirl, setHighSchoolGirl] = React.useState(
    initialValues.HighSchoolGirl
  );
  const [HighSchoolGirlNum, setHighSchoolGirlNum] = React.useState(
    initialValues.HighSchoolGirlNum
  );
  const [HighSchoolNoPref, setHighSchoolNoPref] = React.useState(
    initialValues.HighSchoolNoPref
  );
  const [HighSchoolNoPrefNum, setHighSchoolNoPrefNum] = React.useState(
    initialValues.HighSchoolNoPrefNum
  );
  const [AgingOutBoy, setAgingOutBoy] = React.useState(
    initialValues.AgingOutBoy
  );
  const [AgingOutBoyNum, setAgingOutBoyNum] = React.useState(
    initialValues.AgingOutBoyNum
  );
  const [AgingOutGirl, setAgingOutGirl] = React.useState(
    initialValues.AgingOutGirl
  );
  const [AgingOutGirlNum, setAgingOutGirlNum] = React.useState(
    initialValues.AgingOutGirlNum
  );
  const [AgingOutNoPref, setAgingOutNoPref] = React.useState(
    initialValues.AgingOutNoPref
  );
  const [AgingOutNoPrefNum, setAgingOutNoPrefNum] = React.useState(
    initialValues.AgingOutNoPrefNum
  );
  const [NoPrefBoy, setNoPrefBoy] = React.useState(initialValues.NoPrefBoy);
  const [NoPrefBoyNum, setNoPrefBoyNum] = React.useState(
    initialValues.NoPrefBoyNum
  );
  const [NoPrefGirl, setNoPrefGirl] = React.useState(initialValues.NoPrefGirl);
  const [NoPrefGirlNum, setNoPrefGirlNum] = React.useState(
    initialValues.NoPrefGirlNum
  );
  const [NoPref, setNoPref] = React.useState(initialValues.NoPref);
  const [NoPrefNum, setNoPrefNum] = React.useState(initialValues.NoPrefNum);
  const [TotalNumChildren, setTotalNumChildren] = React.useState(
    initialValues.TotalNumChildren
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setInfantBoy(initialValues.InfantBoy);
    setInfantBoyNum(initialValues.InfantBoyNum);
    setInfantGirl(initialValues.InfantGirl);
    setInfantGirlNum(initialValues.InfantGirlNum);
    setInfantNoPref(initialValues.InfantNoPref);
    setInfantNoPrefNum(initialValues.InfantNoPrefNum);
    setElementaryBoy(initialValues.ElementaryBoy);
    setElementaryBoyNum(initialValues.ElementaryBoyNum);
    setElementaryGirl(initialValues.ElementaryGirl);
    setElementaryGirlNum(initialValues.ElementaryGirlNum);
    setElementaryNoPref(initialValues.ElementaryNoPref);
    setElementaryNoPrefNum(initialValues.ElementaryNoPrefNum);
    setMiddleSchoolBoy(initialValues.MiddleSchoolBoy);
    setMiddleSchoolBoyNum(initialValues.MiddleSchoolBoyNum);
    setMiddleSchoolGirl(initialValues.MiddleSchoolGirl);
    setMiddleSchoolGirlNum(initialValues.MiddleSchoolGirlNum);
    setMiddleSchoolNoPref(initialValues.MiddleSchoolNoPref);
    setMiddleSchoolNumNoPref(initialValues.MiddleSchoolNumNoPref);
    setHighSchoolBoy(initialValues.HighSchoolBoy);
    setHighSchoolBoyNum(initialValues.HighSchoolBoyNum);
    setHighSchoolGirl(initialValues.HighSchoolGirl);
    setHighSchoolGirlNum(initialValues.HighSchoolGirlNum);
    setHighSchoolNoPref(initialValues.HighSchoolNoPref);
    setHighSchoolNoPrefNum(initialValues.HighSchoolNoPrefNum);
    setAgingOutBoy(initialValues.AgingOutBoy);
    setAgingOutBoyNum(initialValues.AgingOutBoyNum);
    setAgingOutGirl(initialValues.AgingOutGirl);
    setAgingOutGirlNum(initialValues.AgingOutGirlNum);
    setAgingOutNoPref(initialValues.AgingOutNoPref);
    setAgingOutNoPrefNum(initialValues.AgingOutNoPrefNum);
    setNoPrefBoy(initialValues.NoPrefBoy);
    setNoPrefBoyNum(initialValues.NoPrefBoyNum);
    setNoPrefGirl(initialValues.NoPrefGirl);
    setNoPrefGirlNum(initialValues.NoPrefGirlNum);
    setNoPref(initialValues.NoPref);
    setNoPrefNum(initialValues.NoPrefNum);
    setTotalNumChildren(initialValues.TotalNumChildren);
    setErrors({});
  };
  const validations = {
    InfantBoy: [],
    InfantBoyNum: [],
    InfantGirl: [],
    InfantGirlNum: [],
    InfantNoPref: [],
    InfantNoPrefNum: [],
    ElementaryBoy: [],
    ElementaryBoyNum: [],
    ElementaryGirl: [],
    ElementaryGirlNum: [],
    ElementaryNoPref: [],
    ElementaryNoPrefNum: [],
    MiddleSchoolBoy: [],
    MiddleSchoolBoyNum: [],
    MiddleSchoolGirl: [],
    MiddleSchoolGirlNum: [],
    MiddleSchoolNoPref: [],
    MiddleSchoolNumNoPref: [],
    HighSchoolBoy: [],
    HighSchoolBoyNum: [],
    HighSchoolGirl: [],
    HighSchoolGirlNum: [],
    HighSchoolNoPref: [],
    HighSchoolNoPrefNum: [],
    AgingOutBoy: [],
    AgingOutBoyNum: [],
    AgingOutGirl: [],
    AgingOutGirlNum: [],
    AgingOutNoPref: [],
    AgingOutNoPrefNum: [],
    NoPrefBoy: [],
    NoPrefBoyNum: [],
    NoPrefGirl: [],
    NoPrefGirlNum: [],
    NoPref: [],
    NoPrefNum: [],
    TotalNumChildren: [],
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
          InfantBoy,
          InfantBoyNum,
          InfantGirl,
          InfantGirlNum,
          InfantNoPref,
          InfantNoPrefNum,
          ElementaryBoy,
          ElementaryBoyNum,
          ElementaryGirl,
          ElementaryGirlNum,
          ElementaryNoPref,
          ElementaryNoPrefNum,
          MiddleSchoolBoy,
          MiddleSchoolBoyNum,
          MiddleSchoolGirl,
          MiddleSchoolGirlNum,
          MiddleSchoolNoPref,
          MiddleSchoolNumNoPref,
          HighSchoolBoy,
          HighSchoolBoyNum,
          HighSchoolGirl,
          HighSchoolGirlNum,
          HighSchoolNoPref,
          HighSchoolNoPrefNum,
          AgingOutBoy,
          AgingOutBoyNum,
          AgingOutGirl,
          AgingOutGirlNum,
          AgingOutNoPref,
          AgingOutNoPrefNum,
          NoPrefBoy,
          NoPrefBoyNum,
          NoPrefGirl,
          NoPrefGirlNum,
          NoPref,
          NoPrefNum,
          TotalNumChildren,
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
          await DataStore.save(new SponsorPreferences(modelFields));
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
      {...getOverrideProps(overrides, "ChildrenPreference")}
      {...rest}
    >
      <Heading
        level={4}
        children="Children Preference"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Heading>
      <Heading
        children="Infant/ Preschool (Ages 0-4)"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={InfantBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy: value,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantBoy ?? value;
            }
            if (errors.InfantBoy?.hasError) {
              runValidationTasks("InfantBoy", value);
            }
            setInfantBoy(value);
          }}
          onBlur={() => runValidationTasks("InfantBoy", InfantBoy)}
          errorMessage={errors.InfantBoy?.errorMessage}
          hasError={errors.InfantBoy?.hasError}
          {...getOverrideProps(overrides, "InfantBoy")}
        ></SwitchField>
        <TextField
          label="Number of Infant Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={InfantBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum: value,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantBoyNum ?? value;
            }
            if (errors.InfantBoyNum?.hasError) {
              runValidationTasks("InfantBoyNum", value);
            }
            setInfantBoyNum(value);
          }}
          onBlur={() => runValidationTasks("InfantBoyNum", InfantBoyNum)}
          errorMessage={errors.InfantBoyNum?.errorMessage}
          hasError={errors.InfantBoyNum?.hasError}
          {...getOverrideProps(overrides, "InfantBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={InfantGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl: value,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantGirl ?? value;
            }
            if (errors.InfantGirl?.hasError) {
              runValidationTasks("InfantGirl", value);
            }
            setInfantGirl(value);
          }}
          onBlur={() => runValidationTasks("InfantGirl", InfantGirl)}
          errorMessage={errors.InfantGirl?.errorMessage}
          hasError={errors.InfantGirl?.hasError}
          {...getOverrideProps(overrides, "InfantGirl")}
        ></SwitchField>
        <TextField
          label="Number of Infant Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={InfantGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum: value,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantGirlNum ?? value;
            }
            if (errors.InfantGirlNum?.hasError) {
              runValidationTasks("InfantGirlNum", value);
            }
            setInfantGirlNum(value);
          }}
          onBlur={() => runValidationTasks("InfantGirlNum", InfantGirlNum)}
          errorMessage={errors.InfantGirlNum?.errorMessage}
          hasError={errors.InfantGirlNum?.hasError}
          {...getOverrideProps(overrides, "InfantGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={InfantNoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref: value,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantNoPref ?? value;
            }
            if (errors.InfantNoPref?.hasError) {
              runValidationTasks("InfantNoPref", value);
            }
            setInfantNoPref(value);
          }}
          onBlur={() => runValidationTasks("InfantNoPref", InfantNoPref)}
          errorMessage={errors.InfantNoPref?.errorMessage}
          hasError={errors.InfantNoPref?.hasError}
          {...getOverrideProps(overrides, "InfantNoPref")}
        ></SwitchField>
        <TextField
          label="Number of Infants"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={InfantNoPrefNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum: value,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.InfantNoPrefNum ?? value;
            }
            if (errors.InfantNoPrefNum?.hasError) {
              runValidationTasks("InfantNoPrefNum", value);
            }
            setInfantNoPrefNum(value);
          }}
          onBlur={() => runValidationTasks("InfantNoPrefNum", InfantNoPrefNum)}
          errorMessage={errors.InfantNoPrefNum?.errorMessage}
          hasError={errors.InfantNoPrefNum?.hasError}
          {...getOverrideProps(overrides, "InfantNoPrefNum")}
        ></TextField>
      </Grid>
      <Heading
        children="Elementary (Ages 5-11)"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid8")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={ElementaryBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy: value,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryBoy ?? value;
            }
            if (errors.ElementaryBoy?.hasError) {
              runValidationTasks("ElementaryBoy", value);
            }
            setElementaryBoy(value);
          }}
          onBlur={() => runValidationTasks("ElementaryBoy", ElementaryBoy)}
          errorMessage={errors.ElementaryBoy?.errorMessage}
          hasError={errors.ElementaryBoy?.hasError}
          {...getOverrideProps(overrides, "ElementaryBoy")}
        ></SwitchField>
        <TextField
          label="Number of Elementary Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={ElementaryBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum: value,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryBoyNum ?? value;
            }
            if (errors.ElementaryBoyNum?.hasError) {
              runValidationTasks("ElementaryBoyNum", value);
            }
            setElementaryBoyNum(value);
          }}
          onBlur={() =>
            runValidationTasks("ElementaryBoyNum", ElementaryBoyNum)
          }
          errorMessage={errors.ElementaryBoyNum?.errorMessage}
          hasError={errors.ElementaryBoyNum?.hasError}
          {...getOverrideProps(overrides, "ElementaryBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={ElementaryGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl: value,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryGirl ?? value;
            }
            if (errors.ElementaryGirl?.hasError) {
              runValidationTasks("ElementaryGirl", value);
            }
            setElementaryGirl(value);
          }}
          onBlur={() => runValidationTasks("ElementaryGirl", ElementaryGirl)}
          errorMessage={errors.ElementaryGirl?.errorMessage}
          hasError={errors.ElementaryGirl?.hasError}
          {...getOverrideProps(overrides, "ElementaryGirl")}
        ></SwitchField>
        <TextField
          label="Number of Elementary Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={ElementaryGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum: value,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryGirlNum ?? value;
            }
            if (errors.ElementaryGirlNum?.hasError) {
              runValidationTasks("ElementaryGirlNum", value);
            }
            setElementaryGirlNum(value);
          }}
          onBlur={() =>
            runValidationTasks("ElementaryGirlNum", ElementaryGirlNum)
          }
          errorMessage={errors.ElementaryGirlNum?.errorMessage}
          hasError={errors.ElementaryGirlNum?.hasError}
          {...getOverrideProps(overrides, "ElementaryGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid10")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={ElementaryNoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref: value,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryNoPref ?? value;
            }
            if (errors.ElementaryNoPref?.hasError) {
              runValidationTasks("ElementaryNoPref", value);
            }
            setElementaryNoPref(value);
          }}
          onBlur={() =>
            runValidationTasks("ElementaryNoPref", ElementaryNoPref)
          }
          errorMessage={errors.ElementaryNoPref?.errorMessage}
          hasError={errors.ElementaryNoPref?.hasError}
          {...getOverrideProps(overrides, "ElementaryNoPref")}
        ></SwitchField>
        <TextField
          label="Number of Elementary Children"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={ElementaryNoPrefNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum: value,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.ElementaryNoPrefNum ?? value;
            }
            if (errors.ElementaryNoPrefNum?.hasError) {
              runValidationTasks("ElementaryNoPrefNum", value);
            }
            setElementaryNoPrefNum(value);
          }}
          onBlur={() =>
            runValidationTasks("ElementaryNoPrefNum", ElementaryNoPrefNum)
          }
          errorMessage={errors.ElementaryNoPrefNum?.errorMessage}
          hasError={errors.ElementaryNoPrefNum?.hasError}
          {...getOverrideProps(overrides, "ElementaryNoPrefNum")}
        ></TextField>
      </Grid>
      <Heading
        children="Middle School (Ages 12-14)"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={MiddleSchoolBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy: value,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolBoy ?? value;
            }
            if (errors.MiddleSchoolBoy?.hasError) {
              runValidationTasks("MiddleSchoolBoy", value);
            }
            setMiddleSchoolBoy(value);
          }}
          onBlur={() => runValidationTasks("MiddleSchoolBoy", MiddleSchoolBoy)}
          errorMessage={errors.MiddleSchoolBoy?.errorMessage}
          hasError={errors.MiddleSchoolBoy?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolBoy")}
        ></SwitchField>
        <TextField
          label="Number of Middle School Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={MiddleSchoolBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum: value,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolBoyNum ?? value;
            }
            if (errors.MiddleSchoolBoyNum?.hasError) {
              runValidationTasks("MiddleSchoolBoyNum", value);
            }
            setMiddleSchoolBoyNum(value);
          }}
          onBlur={() =>
            runValidationTasks("MiddleSchoolBoyNum", MiddleSchoolBoyNum)
          }
          errorMessage={errors.MiddleSchoolBoyNum?.errorMessage}
          hasError={errors.MiddleSchoolBoyNum?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid14")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={MiddleSchoolGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl: value,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolGirl ?? value;
            }
            if (errors.MiddleSchoolGirl?.hasError) {
              runValidationTasks("MiddleSchoolGirl", value);
            }
            setMiddleSchoolGirl(value);
          }}
          onBlur={() =>
            runValidationTasks("MiddleSchoolGirl", MiddleSchoolGirl)
          }
          errorMessage={errors.MiddleSchoolGirl?.errorMessage}
          hasError={errors.MiddleSchoolGirl?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolGirl")}
        ></SwitchField>
        <TextField
          label="Number of Middle School Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={MiddleSchoolGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum: value,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolGirlNum ?? value;
            }
            if (errors.MiddleSchoolGirlNum?.hasError) {
              runValidationTasks("MiddleSchoolGirlNum", value);
            }
            setMiddleSchoolGirlNum(value);
          }}
          onBlur={() =>
            runValidationTasks("MiddleSchoolGirlNum", MiddleSchoolGirlNum)
          }
          errorMessage={errors.MiddleSchoolGirlNum?.errorMessage}
          hasError={errors.MiddleSchoolGirlNum?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={MiddleSchoolNoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref: value,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolNoPref ?? value;
            }
            if (errors.MiddleSchoolNoPref?.hasError) {
              runValidationTasks("MiddleSchoolNoPref", value);
            }
            setMiddleSchoolNoPref(value);
          }}
          onBlur={() =>
            runValidationTasks("MiddleSchoolNoPref", MiddleSchoolNoPref)
          }
          errorMessage={errors.MiddleSchoolNoPref?.errorMessage}
          hasError={errors.MiddleSchoolNoPref?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolNoPref")}
        ></SwitchField>
        <TextField
          label="Number of Middle School Children"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={MiddleSchoolNumNoPref}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref: value,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.MiddleSchoolNumNoPref ?? value;
            }
            if (errors.MiddleSchoolNumNoPref?.hasError) {
              runValidationTasks("MiddleSchoolNumNoPref", value);
            }
            setMiddleSchoolNumNoPref(value);
          }}
          onBlur={() =>
            runValidationTasks("MiddleSchoolNumNoPref", MiddleSchoolNumNoPref)
          }
          errorMessage={errors.MiddleSchoolNumNoPref?.errorMessage}
          hasError={errors.MiddleSchoolNumNoPref?.hasError}
          {...getOverrideProps(overrides, "MiddleSchoolNumNoPref")}
        ></TextField>
      </Grid>
      <Heading
        children="High School (Ages 15-17)"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid18")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={HighSchoolBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy: value,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolBoy ?? value;
            }
            if (errors.HighSchoolBoy?.hasError) {
              runValidationTasks("HighSchoolBoy", value);
            }
            setHighSchoolBoy(value);
          }}
          onBlur={() => runValidationTasks("HighSchoolBoy", HighSchoolBoy)}
          errorMessage={errors.HighSchoolBoy?.errorMessage}
          hasError={errors.HighSchoolBoy?.hasError}
          {...getOverrideProps(overrides, "HighSchoolBoy")}
        ></SwitchField>
        <TextField
          label="Number of High School Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={HighSchoolBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum: value,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolBoyNum ?? value;
            }
            if (errors.HighSchoolBoyNum?.hasError) {
              runValidationTasks("HighSchoolBoyNum", value);
            }
            setHighSchoolBoyNum(value);
          }}
          onBlur={() =>
            runValidationTasks("HighSchoolBoyNum", HighSchoolBoyNum)
          }
          errorMessage={errors.HighSchoolBoyNum?.errorMessage}
          hasError={errors.HighSchoolBoyNum?.hasError}
          {...getOverrideProps(overrides, "HighSchoolBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={HighSchoolGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl: value,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolGirl ?? value;
            }
            if (errors.HighSchoolGirl?.hasError) {
              runValidationTasks("HighSchoolGirl", value);
            }
            setHighSchoolGirl(value);
          }}
          onBlur={() => runValidationTasks("HighSchoolGirl", HighSchoolGirl)}
          errorMessage={errors.HighSchoolGirl?.errorMessage}
          hasError={errors.HighSchoolGirl?.hasError}
          {...getOverrideProps(overrides, "HighSchoolGirl")}
        ></SwitchField>
        <TextField
          label="Number of High School Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={HighSchoolGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum: value,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolGirlNum ?? value;
            }
            if (errors.HighSchoolGirlNum?.hasError) {
              runValidationTasks("HighSchoolGirlNum", value);
            }
            setHighSchoolGirlNum(value);
          }}
          onBlur={() =>
            runValidationTasks("HighSchoolGirlNum", HighSchoolGirlNum)
          }
          errorMessage={errors.HighSchoolGirlNum?.errorMessage}
          hasError={errors.HighSchoolGirlNum?.hasError}
          {...getOverrideProps(overrides, "HighSchoolGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid20")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={HighSchoolNoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref: value,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolNoPref ?? value;
            }
            if (errors.HighSchoolNoPref?.hasError) {
              runValidationTasks("HighSchoolNoPref", value);
            }
            setHighSchoolNoPref(value);
          }}
          onBlur={() =>
            runValidationTasks("HighSchoolNoPref", HighSchoolNoPref)
          }
          errorMessage={errors.HighSchoolNoPref?.errorMessage}
          hasError={errors.HighSchoolNoPref?.hasError}
          {...getOverrideProps(overrides, "HighSchoolNoPref")}
        ></SwitchField>
        <TextField
          label="Number of High School Children"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={HighSchoolNoPrefNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum: value,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.HighSchoolNoPrefNum ?? value;
            }
            if (errors.HighSchoolNoPrefNum?.hasError) {
              runValidationTasks("HighSchoolNoPrefNum", value);
            }
            setHighSchoolNoPrefNum(value);
          }}
          onBlur={() =>
            runValidationTasks("HighSchoolNoPrefNum", HighSchoolNoPrefNum)
          }
          errorMessage={errors.HighSchoolNoPrefNum?.errorMessage}
          hasError={errors.HighSchoolNoPrefNum?.hasError}
          {...getOverrideProps(overrides, "HighSchoolNoPrefNum")}
        ></TextField>
      </Grid>
      <Heading
        children='Kids "Aging Out" (Ages 18+)'
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={AgingOutBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy: value,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutBoy ?? value;
            }
            if (errors.AgingOutBoy?.hasError) {
              runValidationTasks("AgingOutBoy", value);
            }
            setAgingOutBoy(value);
          }}
          onBlur={() => runValidationTasks("AgingOutBoy", AgingOutBoy)}
          errorMessage={errors.AgingOutBoy?.errorMessage}
          hasError={errors.AgingOutBoy?.hasError}
          {...getOverrideProps(overrides, "AgingOutBoy")}
        ></SwitchField>
        <TextField
          label="Number of Aging Out Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={AgingOutBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum: value,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutBoyNum ?? value;
            }
            if (errors.AgingOutBoyNum?.hasError) {
              runValidationTasks("AgingOutBoyNum", value);
            }
            setAgingOutBoyNum(value);
          }}
          onBlur={() => runValidationTasks("AgingOutBoyNum", AgingOutBoyNum)}
          errorMessage={errors.AgingOutBoyNum?.errorMessage}
          hasError={errors.AgingOutBoyNum?.hasError}
          {...getOverrideProps(overrides, "AgingOutBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid24")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={AgingOutGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl: value,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutGirl ?? value;
            }
            if (errors.AgingOutGirl?.hasError) {
              runValidationTasks("AgingOutGirl", value);
            }
            setAgingOutGirl(value);
          }}
          onBlur={() => runValidationTasks("AgingOutGirl", AgingOutGirl)}
          errorMessage={errors.AgingOutGirl?.errorMessage}
          hasError={errors.AgingOutGirl?.hasError}
          {...getOverrideProps(overrides, "AgingOutGirl")}
        ></SwitchField>
        <TextField
          label="Number of Aging Out Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={AgingOutGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum: value,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutGirlNum ?? value;
            }
            if (errors.AgingOutGirlNum?.hasError) {
              runValidationTasks("AgingOutGirlNum", value);
            }
            setAgingOutGirlNum(value);
          }}
          onBlur={() => runValidationTasks("AgingOutGirlNum", AgingOutGirlNum)}
          errorMessage={errors.AgingOutGirlNum?.errorMessage}
          hasError={errors.AgingOutGirlNum?.hasError}
          {...getOverrideProps(overrides, "AgingOutGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid25")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={AgingOutNoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref: value,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutNoPref ?? value;
            }
            if (errors.AgingOutNoPref?.hasError) {
              runValidationTasks("AgingOutNoPref", value);
            }
            setAgingOutNoPref(value);
          }}
          onBlur={() => runValidationTasks("AgingOutNoPref", AgingOutNoPref)}
          errorMessage={errors.AgingOutNoPref?.errorMessage}
          hasError={errors.AgingOutNoPref?.hasError}
          {...getOverrideProps(overrides, "AgingOutNoPref")}
        ></SwitchField>
        <TextField
          label="Number of Aging Out Children"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={AgingOutNoPrefNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum: value,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.AgingOutNoPrefNum ?? value;
            }
            if (errors.AgingOutNoPrefNum?.hasError) {
              runValidationTasks("AgingOutNoPrefNum", value);
            }
            setAgingOutNoPrefNum(value);
          }}
          onBlur={() =>
            runValidationTasks("AgingOutNoPrefNum", AgingOutNoPrefNum)
          }
          errorMessage={errors.AgingOutNoPrefNum?.errorMessage}
          hasError={errors.AgingOutNoPrefNum?.hasError}
          {...getOverrideProps(overrides, "AgingOutNoPrefNum")}
        ></TextField>
      </Grid>
      <Heading
        children="No Age Preference"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid28")}
      >
        <SwitchField
          label="Boy"
          defaultChecked={false}
          isDisabled={false}
          isChecked={NoPrefBoy}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy: value,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPrefBoy ?? value;
            }
            if (errors.NoPrefBoy?.hasError) {
              runValidationTasks("NoPrefBoy", value);
            }
            setNoPrefBoy(value);
          }}
          onBlur={() => runValidationTasks("NoPrefBoy", NoPrefBoy)}
          errorMessage={errors.NoPrefBoy?.errorMessage}
          hasError={errors.NoPrefBoy?.hasError}
          {...getOverrideProps(overrides, "NoPrefBoy")}
        ></SwitchField>
        <TextField
          label="Number of Boys"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={NoPrefBoyNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum: value,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPrefBoyNum ?? value;
            }
            if (errors.NoPrefBoyNum?.hasError) {
              runValidationTasks("NoPrefBoyNum", value);
            }
            setNoPrefBoyNum(value);
          }}
          onBlur={() => runValidationTasks("NoPrefBoyNum", NoPrefBoyNum)}
          errorMessage={errors.NoPrefBoyNum?.errorMessage}
          hasError={errors.NoPrefBoyNum?.hasError}
          {...getOverrideProps(overrides, "NoPrefBoyNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid29")}
      >
        <SwitchField
          label="Girl"
          defaultChecked={false}
          isDisabled={false}
          isChecked={NoPrefGirl}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl: value,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPrefGirl ?? value;
            }
            if (errors.NoPrefGirl?.hasError) {
              runValidationTasks("NoPrefGirl", value);
            }
            setNoPrefGirl(value);
          }}
          onBlur={() => runValidationTasks("NoPrefGirl", NoPrefGirl)}
          errorMessage={errors.NoPrefGirl?.errorMessage}
          hasError={errors.NoPrefGirl?.hasError}
          {...getOverrideProps(overrides, "NoPrefGirl")}
        ></SwitchField>
        <TextField
          label="Number of Girls"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={NoPrefGirlNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum: value,
                NoPref,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPrefGirlNum ?? value;
            }
            if (errors.NoPrefGirlNum?.hasError) {
              runValidationTasks("NoPrefGirlNum", value);
            }
            setNoPrefGirlNum(value);
          }}
          onBlur={() => runValidationTasks("NoPrefGirlNum", NoPrefGirlNum)}
          errorMessage={errors.NoPrefGirlNum?.errorMessage}
          hasError={errors.NoPrefGirlNum?.hasError}
          {...getOverrideProps(overrides, "NoPrefGirlNum")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid30")}
      >
        <SwitchField
          label="No Preference"
          defaultChecked={false}
          isDisabled={false}
          isChecked={NoPref}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref: value,
                NoPrefNum,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPref ?? value;
            }
            if (errors.NoPref?.hasError) {
              runValidationTasks("NoPref", value);
            }
            setNoPref(value);
          }}
          onBlur={() => runValidationTasks("NoPref", NoPref)}
          errorMessage={errors.NoPref?.errorMessage}
          hasError={errors.NoPref?.hasError}
          {...getOverrideProps(overrides, "NoPref")}
        ></SwitchField>
        <TextField
          label="Number of Children"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={NoPrefNum}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                InfantBoy,
                InfantBoyNum,
                InfantGirl,
                InfantGirlNum,
                InfantNoPref,
                InfantNoPrefNum,
                ElementaryBoy,
                ElementaryBoyNum,
                ElementaryGirl,
                ElementaryGirlNum,
                ElementaryNoPref,
                ElementaryNoPrefNum,
                MiddleSchoolBoy,
                MiddleSchoolBoyNum,
                MiddleSchoolGirl,
                MiddleSchoolGirlNum,
                MiddleSchoolNoPref,
                MiddleSchoolNumNoPref,
                HighSchoolBoy,
                HighSchoolBoyNum,
                HighSchoolGirl,
                HighSchoolGirlNum,
                HighSchoolNoPref,
                HighSchoolNoPrefNum,
                AgingOutBoy,
                AgingOutBoyNum,
                AgingOutGirl,
                AgingOutGirlNum,
                AgingOutNoPref,
                AgingOutNoPrefNum,
                NoPrefBoy,
                NoPrefBoyNum,
                NoPrefGirl,
                NoPrefGirlNum,
                NoPref,
                NoPrefNum: value,
                TotalNumChildren,
              };
              const result = onChange(modelFields);
              value = result?.NoPrefNum ?? value;
            }
            if (errors.NoPrefNum?.hasError) {
              runValidationTasks("NoPrefNum", value);
            }
            setNoPrefNum(value);
          }}
          onBlur={() => runValidationTasks("NoPrefNum", NoPrefNum)}
          errorMessage={errors.NoPrefNum?.errorMessage}
          hasError={errors.NoPrefNum?.hasError}
          {...getOverrideProps(overrides, "NoPrefNum")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Divider>
      <TextField
        label="Total Number of Children Sponsored"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalNumChildren}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantBoyNum,
              InfantGirl,
              InfantGirlNum,
              InfantNoPref,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryBoyNum,
              ElementaryGirl,
              ElementaryGirlNum,
              ElementaryNoPref,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolBoyNum,
              MiddleSchoolGirl,
              MiddleSchoolGirlNum,
              MiddleSchoolNoPref,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolBoyNum,
              HighSchoolGirl,
              HighSchoolGirlNum,
              HighSchoolNoPref,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutBoyNum,
              AgingOutGirl,
              AgingOutGirlNum,
              AgingOutNoPref,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefBoyNum,
              NoPrefGirl,
              NoPrefGirlNum,
              NoPref,
              NoPrefNum,
              TotalNumChildren: value,
            };
            const result = onChange(modelFields);
            value = result?.TotalNumChildren ?? value;
          }
          if (errors.TotalNumChildren?.hasError) {
            runValidationTasks("TotalNumChildren", value);
          }
          setTotalNumChildren(value);
        }}
        onBlur={() => runValidationTasks("TotalNumChildren", TotalNumChildren)}
        errorMessage={errors.TotalNumChildren?.errorMessage}
        hasError={errors.TotalNumChildren?.hasError}
        {...getOverrideProps(overrides, "TotalNumChildren")}
      ></TextField>
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
