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
import { SponsorPreferences } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SponsorPreferencesUpdateForm(props) {
  const {
    id: idProp,
    sponsorPreferences: sponsorPreferencesModelProp,
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
    InfantGirl: false,
    InfantNoPref: false,
    InfantBoyNum: "",
    InfantGirlNum: "",
    InfantNoPrefNum: "",
    ElementaryBoy: false,
    ElementaryGirl: false,
    ElementaryNoPref: false,
    ElementaryBoyNum: "",
    ElementaryGirlNum: "",
    ElementaryNoPrefNum: "",
    MiddleSchoolBoy: false,
    MiddleSchoolGirl: false,
    MiddleSchoolNoPref: false,
    MiddleSchoolBoyNum: "",
    MiddleSchoolGirlNum: "",
    MiddleSchoolNumNoPref: "",
    HighSchoolBoy: false,
    HighSchoolGirl: false,
    HighSchoolNoPref: false,
    HighSchoolBoyNum: "",
    HighSchoolGirlNum: "",
    HighSchoolNoPrefNum: "",
    AgingOutBoy: false,
    AgingOutGirl: false,
    AgingOutNoPref: false,
    AgingOutBoyNum: "",
    AgingOutGirlNum: "",
    AgingOutNoPrefNum: "",
    NoPrefBoy: false,
    NoPrefGirl: false,
    NoPref: false,
    NoPrefBoyNum: "",
    NoPrefGirlNum: "",
    NoPrefNum: "",
    TotalNumChildren: "",
  };
  const [InfantBoy, setInfantBoy] = React.useState(initialValues.InfantBoy);
  const [InfantGirl, setInfantGirl] = React.useState(initialValues.InfantGirl);
  const [InfantNoPref, setInfantNoPref] = React.useState(
    initialValues.InfantNoPref
  );
  const [InfantBoyNum, setInfantBoyNum] = React.useState(
    initialValues.InfantBoyNum
  );
  const [InfantGirlNum, setInfantGirlNum] = React.useState(
    initialValues.InfantGirlNum
  );
  const [InfantNoPrefNum, setInfantNoPrefNum] = React.useState(
    initialValues.InfantNoPrefNum
  );
  const [ElementaryBoy, setElementaryBoy] = React.useState(
    initialValues.ElementaryBoy
  );
  const [ElementaryGirl, setElementaryGirl] = React.useState(
    initialValues.ElementaryGirl
  );
  const [ElementaryNoPref, setElementaryNoPref] = React.useState(
    initialValues.ElementaryNoPref
  );
  const [ElementaryBoyNum, setElementaryBoyNum] = React.useState(
    initialValues.ElementaryBoyNum
  );
  const [ElementaryGirlNum, setElementaryGirlNum] = React.useState(
    initialValues.ElementaryGirlNum
  );
  const [ElementaryNoPrefNum, setElementaryNoPrefNum] = React.useState(
    initialValues.ElementaryNoPrefNum
  );
  const [MiddleSchoolBoy, setMiddleSchoolBoy] = React.useState(
    initialValues.MiddleSchoolBoy
  );
  const [MiddleSchoolGirl, setMiddleSchoolGirl] = React.useState(
    initialValues.MiddleSchoolGirl
  );
  const [MiddleSchoolNoPref, setMiddleSchoolNoPref] = React.useState(
    initialValues.MiddleSchoolNoPref
  );
  const [MiddleSchoolBoyNum, setMiddleSchoolBoyNum] = React.useState(
    initialValues.MiddleSchoolBoyNum
  );
  const [MiddleSchoolGirlNum, setMiddleSchoolGirlNum] = React.useState(
    initialValues.MiddleSchoolGirlNum
  );
  const [MiddleSchoolNumNoPref, setMiddleSchoolNumNoPref] = React.useState(
    initialValues.MiddleSchoolNumNoPref
  );
  const [HighSchoolBoy, setHighSchoolBoy] = React.useState(
    initialValues.HighSchoolBoy
  );
  const [HighSchoolGirl, setHighSchoolGirl] = React.useState(
    initialValues.HighSchoolGirl
  );
  const [HighSchoolNoPref, setHighSchoolNoPref] = React.useState(
    initialValues.HighSchoolNoPref
  );
  const [HighSchoolBoyNum, setHighSchoolBoyNum] = React.useState(
    initialValues.HighSchoolBoyNum
  );
  const [HighSchoolGirlNum, setHighSchoolGirlNum] = React.useState(
    initialValues.HighSchoolGirlNum
  );
  const [HighSchoolNoPrefNum, setHighSchoolNoPrefNum] = React.useState(
    initialValues.HighSchoolNoPrefNum
  );
  const [AgingOutBoy, setAgingOutBoy] = React.useState(
    initialValues.AgingOutBoy
  );
  const [AgingOutGirl, setAgingOutGirl] = React.useState(
    initialValues.AgingOutGirl
  );
  const [AgingOutNoPref, setAgingOutNoPref] = React.useState(
    initialValues.AgingOutNoPref
  );
  const [AgingOutBoyNum, setAgingOutBoyNum] = React.useState(
    initialValues.AgingOutBoyNum
  );
  const [AgingOutGirlNum, setAgingOutGirlNum] = React.useState(
    initialValues.AgingOutGirlNum
  );
  const [AgingOutNoPrefNum, setAgingOutNoPrefNum] = React.useState(
    initialValues.AgingOutNoPrefNum
  );
  const [NoPrefBoy, setNoPrefBoy] = React.useState(initialValues.NoPrefBoy);
  const [NoPrefGirl, setNoPrefGirl] = React.useState(initialValues.NoPrefGirl);
  const [NoPref, setNoPref] = React.useState(initialValues.NoPref);
  const [NoPrefBoyNum, setNoPrefBoyNum] = React.useState(
    initialValues.NoPrefBoyNum
  );
  const [NoPrefGirlNum, setNoPrefGirlNum] = React.useState(
    initialValues.NoPrefGirlNum
  );
  const [NoPrefNum, setNoPrefNum] = React.useState(initialValues.NoPrefNum);
  const [TotalNumChildren, setTotalNumChildren] = React.useState(
    initialValues.TotalNumChildren
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = sponsorPreferencesRecord
      ? { ...initialValues, ...sponsorPreferencesRecord }
      : initialValues;
    setInfantBoy(cleanValues.InfantBoy);
    setInfantGirl(cleanValues.InfantGirl);
    setInfantNoPref(cleanValues.InfantNoPref);
    setInfantBoyNum(cleanValues.InfantBoyNum);
    setInfantGirlNum(cleanValues.InfantGirlNum);
    setInfantNoPrefNum(cleanValues.InfantNoPrefNum);
    setElementaryBoy(cleanValues.ElementaryBoy);
    setElementaryGirl(cleanValues.ElementaryGirl);
    setElementaryNoPref(cleanValues.ElementaryNoPref);
    setElementaryBoyNum(cleanValues.ElementaryBoyNum);
    setElementaryGirlNum(cleanValues.ElementaryGirlNum);
    setElementaryNoPrefNum(cleanValues.ElementaryNoPrefNum);
    setMiddleSchoolBoy(cleanValues.MiddleSchoolBoy);
    setMiddleSchoolGirl(cleanValues.MiddleSchoolGirl);
    setMiddleSchoolNoPref(cleanValues.MiddleSchoolNoPref);
    setMiddleSchoolBoyNum(cleanValues.MiddleSchoolBoyNum);
    setMiddleSchoolGirlNum(cleanValues.MiddleSchoolGirlNum);
    setMiddleSchoolNumNoPref(cleanValues.MiddleSchoolNumNoPref);
    setHighSchoolBoy(cleanValues.HighSchoolBoy);
    setHighSchoolGirl(cleanValues.HighSchoolGirl);
    setHighSchoolNoPref(cleanValues.HighSchoolNoPref);
    setHighSchoolBoyNum(cleanValues.HighSchoolBoyNum);
    setHighSchoolGirlNum(cleanValues.HighSchoolGirlNum);
    setHighSchoolNoPrefNum(cleanValues.HighSchoolNoPrefNum);
    setAgingOutBoy(cleanValues.AgingOutBoy);
    setAgingOutGirl(cleanValues.AgingOutGirl);
    setAgingOutNoPref(cleanValues.AgingOutNoPref);
    setAgingOutBoyNum(cleanValues.AgingOutBoyNum);
    setAgingOutGirlNum(cleanValues.AgingOutGirlNum);
    setAgingOutNoPrefNum(cleanValues.AgingOutNoPrefNum);
    setNoPrefBoy(cleanValues.NoPrefBoy);
    setNoPrefGirl(cleanValues.NoPrefGirl);
    setNoPref(cleanValues.NoPref);
    setNoPrefBoyNum(cleanValues.NoPrefBoyNum);
    setNoPrefGirlNum(cleanValues.NoPrefGirlNum);
    setNoPrefNum(cleanValues.NoPrefNum);
    setTotalNumChildren(cleanValues.TotalNumChildren);
    setErrors({});
  };
  const [sponsorPreferencesRecord, setSponsorPreferencesRecord] =
    React.useState(sponsorPreferencesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SponsorPreferences, idProp)
        : sponsorPreferencesModelProp;
      setSponsorPreferencesRecord(record);
    };
    queryData();
  }, [idProp, sponsorPreferencesModelProp]);
  React.useEffect(resetStateValues, [sponsorPreferencesRecord]);
  const validations = {
    InfantBoy: [],
    InfantGirl: [],
    InfantNoPref: [],
    InfantBoyNum: [],
    InfantGirlNum: [],
    InfantNoPrefNum: [],
    ElementaryBoy: [],
    ElementaryGirl: [],
    ElementaryNoPref: [],
    ElementaryBoyNum: [],
    ElementaryGirlNum: [],
    ElementaryNoPrefNum: [],
    MiddleSchoolBoy: [],
    MiddleSchoolGirl: [],
    MiddleSchoolNoPref: [],
    MiddleSchoolBoyNum: [],
    MiddleSchoolGirlNum: [],
    MiddleSchoolNumNoPref: [],
    HighSchoolBoy: [],
    HighSchoolGirl: [],
    HighSchoolNoPref: [],
    HighSchoolBoyNum: [],
    HighSchoolGirlNum: [],
    HighSchoolNoPrefNum: [],
    AgingOutBoy: [],
    AgingOutGirl: [],
    AgingOutNoPref: [],
    AgingOutBoyNum: [],
    AgingOutGirlNum: [],
    AgingOutNoPrefNum: [],
    NoPrefBoy: [],
    NoPrefGirl: [],
    NoPref: [],
    NoPrefBoyNum: [],
    NoPrefGirlNum: [],
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
          InfantGirl,
          InfantNoPref,
          InfantBoyNum,
          InfantGirlNum,
          InfantNoPrefNum,
          ElementaryBoy,
          ElementaryGirl,
          ElementaryNoPref,
          ElementaryBoyNum,
          ElementaryGirlNum,
          ElementaryNoPrefNum,
          MiddleSchoolBoy,
          MiddleSchoolGirl,
          MiddleSchoolNoPref,
          MiddleSchoolBoyNum,
          MiddleSchoolGirlNum,
          MiddleSchoolNumNoPref,
          HighSchoolBoy,
          HighSchoolGirl,
          HighSchoolNoPref,
          HighSchoolBoyNum,
          HighSchoolGirlNum,
          HighSchoolNoPrefNum,
          AgingOutBoy,
          AgingOutGirl,
          AgingOutNoPref,
          AgingOutBoyNum,
          AgingOutGirlNum,
          AgingOutNoPrefNum,
          NoPrefBoy,
          NoPrefGirl,
          NoPref,
          NoPrefBoyNum,
          NoPrefGirlNum,
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
          await DataStore.save(
            SponsorPreferences.copyOf(sponsorPreferencesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SponsorPreferencesUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Infant boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InfantBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy: value,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Infant girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InfantGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl: value,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Infant no pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InfantNoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref: value,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        label="Infant boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum: value,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Infant girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum: value,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Infant no pref num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum: value,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Elementary boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ElementaryBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy: value,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Elementary girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ElementaryGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl: value,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Elementary no pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ElementaryNoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref: value,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        onBlur={() => runValidationTasks("ElementaryNoPref", ElementaryNoPref)}
        errorMessage={errors.ElementaryNoPref?.errorMessage}
        hasError={errors.ElementaryNoPref?.hasError}
        {...getOverrideProps(overrides, "ElementaryNoPref")}
      ></SwitchField>
      <TextField
        label="Elementary boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum: value,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        onBlur={() => runValidationTasks("ElementaryBoyNum", ElementaryBoyNum)}
        errorMessage={errors.ElementaryBoyNum?.errorMessage}
        hasError={errors.ElementaryBoyNum?.hasError}
        {...getOverrideProps(overrides, "ElementaryBoyNum")}
      ></TextField>
      <TextField
        label="Elementary girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum: value,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Elementary no pref num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum: value,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Middle school boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MiddleSchoolBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy: value,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Middle school girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MiddleSchoolGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl: value,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        onBlur={() => runValidationTasks("MiddleSchoolGirl", MiddleSchoolGirl)}
        errorMessage={errors.MiddleSchoolGirl?.errorMessage}
        hasError={errors.MiddleSchoolGirl?.hasError}
        {...getOverrideProps(overrides, "MiddleSchoolGirl")}
      ></SwitchField>
      <SwitchField
        label="Middle school no pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={MiddleSchoolNoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref: value,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        label="Middle school boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum: value,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Middle school girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum: value,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Middle school num no pref"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref: value,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="High school boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HighSchoolBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy: value,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="High school girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HighSchoolGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl: value,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="High school no pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HighSchoolNoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref: value,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        onBlur={() => runValidationTasks("HighSchoolNoPref", HighSchoolNoPref)}
        errorMessage={errors.HighSchoolNoPref?.errorMessage}
        hasError={errors.HighSchoolNoPref?.hasError}
        {...getOverrideProps(overrides, "HighSchoolNoPref")}
      ></SwitchField>
      <TextField
        label="High school boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum: value,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        onBlur={() => runValidationTasks("HighSchoolBoyNum", HighSchoolBoyNum)}
        errorMessage={errors.HighSchoolBoyNum?.errorMessage}
        hasError={errors.HighSchoolBoyNum?.hasError}
        {...getOverrideProps(overrides, "HighSchoolBoyNum")}
      ></TextField>
      <TextField
        label="High school girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum: value,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="High school no pref num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum: value,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Aging out boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={AgingOutBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy: value,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Aging out girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={AgingOutGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl: value,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="Aging out no pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={AgingOutNoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref: value,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        label="Aging out boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum: value,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Aging out girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum: value,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Aging out no pref num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum: value,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="No pref boy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={NoPrefBoy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy: value,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="No pref girl"
        defaultChecked={false}
        isDisabled={false}
        isChecked={NoPrefGirl}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl: value,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <SwitchField
        label="No pref"
        defaultChecked={false}
        isDisabled={false}
        isChecked={NoPref}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              InfantBoy,
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref: value,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
        label="No pref boy num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum: value,
              NoPrefGirlNum,
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
      <TextField
        label="No pref girl num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum: value,
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
      <TextField
        label="No pref num"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
      <TextField
        label="Total num children"
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
              InfantGirl,
              InfantNoPref,
              InfantBoyNum,
              InfantGirlNum,
              InfantNoPrefNum,
              ElementaryBoy,
              ElementaryGirl,
              ElementaryNoPref,
              ElementaryBoyNum,
              ElementaryGirlNum,
              ElementaryNoPrefNum,
              MiddleSchoolBoy,
              MiddleSchoolGirl,
              MiddleSchoolNoPref,
              MiddleSchoolBoyNum,
              MiddleSchoolGirlNum,
              MiddleSchoolNumNoPref,
              HighSchoolBoy,
              HighSchoolGirl,
              HighSchoolNoPref,
              HighSchoolBoyNum,
              HighSchoolGirlNum,
              HighSchoolNoPrefNum,
              AgingOutBoy,
              AgingOutGirl,
              AgingOutNoPref,
              AgingOutBoyNum,
              AgingOutGirlNum,
              AgingOutNoPrefNum,
              NoPrefBoy,
              NoPrefGirl,
              NoPref,
              NoPrefBoyNum,
              NoPrefGirlNum,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || sponsorPreferencesModelProp)}
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
              !(idProp || sponsorPreferencesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
