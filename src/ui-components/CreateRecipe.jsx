/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Recipe } from "../models";  //comment this out!
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
  processFile //add this!
} from "./utils";
import { schema } from "../models/schema"; //comment this out!
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify'
//import { Auth } from "@aws-amplify/auth";
//import { API } from "aws-amplify";
import { Field } from "@aws-amplify/ui-react/internal";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { createRecipe } from "../graphql/mutations"; //

export default function CreateRecipe(props) { //change function name to match filename
  const { nrcp, overrides, ...rest } = props;
  const [
    textFieldThreeEightSixTwoFourTwoNineValue,
    setTextFieldThreeEightSixTwoFourTwoNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightSixTwoFourThreeOneValue,
    setTextFieldThreeEightSixTwoFourThreeOneValue,
  ] = useStateMutationAction("");
  const myIconOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldThreeEightSixTwoFourTwoNineValue,
      description: textFieldThreeEightSixTwoFourThreeOneValue,
    },
    model: Recipe,
    schema: schema,
  });
  // const buttonOnClick = async () => {
  //   const user = await getCurrentUser();
  //   console.log("hey there!  "+ user.attributes.email)
  //   await API.graphql({
  //     query: createRecipe.replaceAll("__typename", ""),
  //     variables: {
  //       input: {
  //         name: textFieldThreeEightSixTwoFourTwoNineValue,
  //         description: textFieldThreeEightSixTwoFourThreeOneValue,
  //         image: imageName,
  //         author: user.attributes.email
  //       },
  //     },
  //   });
  // };
  const buttonOnMouseOut = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="720px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateRecipe")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="720px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          {/* <View
            width="24px"
            height="24px"
            onClick={() => {
              myIconOnClick();
            }}
            {...getOverrideProps(overrides, "MyIcon")}
          ></View> */}
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add Recipie"
            {...getOverrideProps(overrides, "Add Recipie")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="272px"
          height="582px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Chocolate Chip Cookies"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixTwoFourTwoNineValue}
            onChange={(event) => {
              setTextFieldThreeEightSixTwoFourTwoNineValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3862429")}
          ></TextField>
          {/* Following <Field> element is the Image picker: */}
           <Field
                  label={"Image"}
                  isRequired={false}
                  isReadOnly={false}
                  >
                  <StorageManager
                    onUploadSuccess={({ key }) => {
                      setImageName(
                        key
                      );
                    }}
                    processFile={processFile}
                    accessLevel={"public"}
                    acceptedFileTypes={[]}
                    isResumable={false}
                    showThumbnails={true}
                    maxFileCount={1}
                    {...getOverrideProps(overrides, "image")}
                  ></StorageManager>
                  </Field>
          {/* <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="Image1"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            // moved the following to TextAreaField
            value={textFieldThreeEightSixTwoFourThreeOneValue}
            onChange={(event) => {
              setTextFieldThreeEightSixTwoFourThreeOneValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3862431")}
          ></TextField> */}
          <Flex
            gap="8px"
            direction="column"
            width="272px"
            height="406px"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextAreaField")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              value={textFieldThreeEightSixTwoFourThreeOneValue}
              onChange={(event) => {
                setTextFieldThreeEightSixTwoFourThreeOneValue(event.target.value);
              }}
              children="Directions"
              {...getOverrideProps(overrides, "label")}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="375px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(174,179,183,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Placeholder"
                  {...getOverrideProps(overrides, "placeholder")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Button
          width="71px"
          height="40px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseOut={() => {
            buttonOnMouseOut();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
