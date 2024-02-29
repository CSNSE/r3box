/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NEWREQUEST from "./NEWREQUEST";
import { View } from "@aws-amplify/ui-react";
export default function EDITREQUEST(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="1027px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EDITREQUEST")}
      {...rest}
    >
      <NEWREQUEST
        width="320px"
        height="1027px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(230,221,212,1)"
        {...getOverrideProps(overrides, "NEW_REQUEST")}
      ></NEWREQUEST>
    </View>
  );
}
