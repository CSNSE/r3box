/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { generateClient } from "aws-amplify/api";
import { updateRecipe } from "../graphql/mutations";
import {
  Button,
  Flex,
  Icon,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function RecipeEdit(props) {
  const { rEdit, overrides, ...rest } = props;
  const [
    textFieldThreeEightNineThreeEightNineThreeValue,
    setTextFieldThreeEightNineThreeEightNineThreeValue,
  ] = useState("");
  const [textAreaFieldValue, setTextAreaFieldValue] = useState("");
  const [
    textFieldThreeEightNineThreeEightNineFourValue,
    setTextFieldThreeEightNineThreeEightNineFourValue,
  ] = useState("");
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  const buttonOnMouseDown = async () => {
    await client.graphql({
      query: updateRecipe.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeEightNineThreeEightNineThreeValue,
          description: textAreaFieldValue,
          image: textFieldThreeEightNineThreeEightNineFourValue,
          id: rEdit?.id,
        },
      },
    });
  };
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
      {...getOverrideProps(overrides, "RecipeEdit")}
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
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "xIcon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(92,102,112,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
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
            children="Edit Recipe"
            {...getOverrideProps(overrides, "Edit Recipe")}
          ></Text>
        </Flex>
        <Button
          width="71px"
          height="40px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          onMouseDown={() => {
            buttonOnMouseDown();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="16px"
          direction="column"
          width="272px"
          height="364px"
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
            placeholder="db_recipe_name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightNineThreeEightNineThreeValue}
            onChange={(event) => {
              setTextFieldThreeEightNineThreeEightNineThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3893893")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="image_storeage_widget"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightNineThreeEightNineFourValue}
            onChange={(event) => {
              setTextFieldThreeEightNineThreeEightNineFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3893894")}
          ></TextField>
          <TextAreaField
            width="272px"
            height="188px"
            label="Directions"
            placeholder="db_directions"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textAreaFieldValue}
            onChange={(event) => {
              setTextAreaFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextAreaField")}
          ></TextAreaField>
        </Flex>
      </Flex>
    </Flex>
  );
}
