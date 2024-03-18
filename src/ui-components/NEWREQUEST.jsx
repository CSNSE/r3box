/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */

import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction, processFile } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRequest } from "../graphql/mutations";

import { Button, Icon, Text, TextField, View } from "@aws-amplify/ui-react";
const client = generateClient();
export default function NEWREQUEST(props) {
  const { nrcp, overrides, ...rest } = props;
  const [
    textFieldFourZeroFourFourOneTwoOneTwoValue,
    setTextFieldFourZeroFourFourOneTwoOneTwoValue,
  ] = useState("");
  const [
    textFieldFourZeroFourFourOneTwoTwoOneValue,
    setTextFieldFourZeroFourFourOneTwoTwoOneValue,
  ] = useState("");
  const [
    textFieldFourZeroFourFourOneTwoFourThreeValue,
    setTextFieldFourZeroFourFourOneTwoFourThreeValue,
  ] = useState("");
  
  const vectorOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = async () => {
    await client.graphql({
      query: createRequest.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldFourZeroFourFourOneTwoOneTwoValue,
          description: textFieldFourZeroFourFourOneTwoTwoOneValue,
          recipient: textFieldFourZeroFourFourOneTwoFourThreeValue,
        },
      },
  });
  };
  return (
    <View
      width="320px"
      height="1027px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(230,221,212,1)"
      {...getOverrideProps(overrides, "NEWREQUEST")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="297px"
        height="919px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="90px"
        left="11px"
        {...getOverrideProps(overrides, "Group 38181")}
      >
        <View
          width="297px"
          height="919px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="30px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 26")}
        ></View>
      </View>
      <TextField
        width="268px"
        height="unset"
        placeholder="Steak Salad"
        position="absolute"
        top="181px"
        left="26px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourZeroFourFourOneTwoOneTwoValue}
        onChange={(event) => {
          setTextFieldFourZeroFourFourOneTwoOneTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField40441212")}
      ></TextField>
      <TextField
        width="265px"
        height="unset"
        placeholder="The one with Thai Basil"
        position="absolute"
        top="284px"
        left="29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourZeroFourFourOneTwoTwoOneValue}
        onChange={(event) => {
          setTextFieldFourZeroFourFourOneTwoTwoOneValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField40441221")}
      ></TextField>
      <TextField
        width="265px"
        height="unset"
        placeholder="Mom"
        position="absolute"
        top="484px"
        left="29px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldFourZeroFourFourOneTwoFourThreeValue}
        onChange={(event) => {
          setTextFieldFourZeroFourFourOneTwoFourThreeValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField40441243")}
      ></TextField>
      <View
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="13px"
        left="346px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon/type36")}
      >
        <Icon
          width="28.14px"
          height="29.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 28.136695861816406,
            height: 29.33333396911621,
          }}
          paths={[
            {
              d: "M12.5521 0.555747C12.9758 0.19692 13.5131 0 14.0683 0C14.6236 -6.94178e-16 15.1609 0.19692 15.5846 0.555747L27.3082 10.5021C27.5678 10.7222 27.7764 10.9961 27.9195 11.3049C28.0625 11.6137 28.1367 11.95 28.1367 12.2903L28.1367 26.9886C28.1367 27.6105 27.8897 28.2069 27.4499 28.6466C27.0102 29.0863 26.4138 29.3333 25.792 29.3333L16.8039 29.3333C16.4929 29.3333 16.1947 29.2098 15.9749 28.99C15.755 28.7701 15.6315 28.4719 15.6315 28.161L15.6315 18.3913L12.5052 18.3913L12.5052 28.161C12.5052 28.4719 12.3817 28.7701 12.1618 28.99C11.942 29.2098 11.6438 29.3333 11.3328 29.3333L2.34472 29.3333C1.72287 29.3333 1.12648 29.0863 0.686754 28.6466C0.247033 28.2069 0 27.6105 0 26.9886L0 12.2903C0 11.6025 0.303251 10.9476 0.828469 10.5021L12.5521 0.555747ZM14.0683 2.34399L2.34472 12.2903L2.34472 26.9886L10.1605 26.9886L10.1605 17.2189C10.1605 16.908 10.284 16.6098 10.5039 16.3899C10.7237 16.1701 11.0219 16.0466 11.3328 16.0466L16.8039 16.0466C17.1148 16.0466 17.413 16.1701 17.6328 16.3899C17.8527 16.6098 17.9762 16.908 17.9762 17.2189L17.9762 26.9886L25.792 26.9886L25.792 12.2903L14.0683 2.34399Z",
              fill: "rgba(60,50,46,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.17%"
          bottom="4.17%"
          left="4.17%"
          right="7.91%"
          onClick={() => {
            vectorOnClick();
          }}
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Button
        width="265px"
        height="unset"
        position="absolute"
        borderRadius="28px"
        top="934px"
        left="27px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(230,221,212,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Request"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="FreightText Pro"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="30.911998748779297px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="110px"
        left="26px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Request a Recipe"
        {...getOverrideProps(overrides, "Request a Recipe")}
      ></Text>
      <Text
      
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="158px"
        left="36px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recipe Name"
        {...getOverrideProps(overrides, "Recipe Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="261px"
        left="36px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Description"
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="461px"
        left="36px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Who is this request for?"
        {...getOverrideProps(overrides, "Who is this request for?")}
      ></Text>
    </View>
  );
}
