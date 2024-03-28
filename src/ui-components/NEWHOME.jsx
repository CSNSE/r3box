/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function NEWHOME(props) {
  const { recipe, request, rectangle21, overrides, ...rest } = props;
  const buttonFourZeroZeroThreeOneOneOneThreeOnClick = useNavigateAction({
    type: "url",
    url: "/req",
  });
  const buttonFourZeroZeroThreeOneOneOneSevenOnClick = useNavigateAction({
    type: "url",
    url: "/col",
  });
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      src="..\public\bckgrnd.png"
      {...getOverrideProps(overrides, "NEWHOME")}
      {...rest}
    >
      <Icon
        width="369px"
        height="440px"
        viewBox={{ minX: 0, minY: 0, width: 369, height: 440 }}
        paths={[
          {
            d: "M0 18C0 8.05888 8.05887 0 18 0L351 0C360.941 0 369 8.05887 369 18L369 422C369 431.941 360.941 440 351 440L18 440C8.05888 440 0 431.941 0 422L0 18Z",
            fill: "rgba(255,255,255,0.55)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="475px"
        left="11px"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></Icon>
      <View
        width="341px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="880px"
        left="25px"
        borderRadius="28px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.75)"
        {...getOverrideProps(overrides, "Rectangle 25")}
      ></View>
      <View
        width="32px"
        height="32px"
        {...getOverrideProps(overrides, "Controls / Buttons: Icon")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(112,112,112,1)"
        lineHeight="14.522727012634277px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="851px"
        left="76px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="11/12/23"
        {...getOverrideProps(overrides, "11/12/23")}
      ></Text>
      <Text
        fontFamily="FreightText Pro"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="40.768001556396484px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="297px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="68px"
        left="25px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome, "
        {...getOverrideProps(overrides, "Welcome,")}
      ></Text>
      <Text
        fontFamily="FreightText Pro"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="40.768001556396484px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="297px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="102px"
        left="25px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Megan"
        {...getOverrideProps(overrides, "Megan")}
      ></Text>
      <Text
        fontFamily="FreightText Pro"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="25.48000144958496px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="477px"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Pending Requests"
        {...getOverrideProps(overrides, "Pending Requests")}
      ></Text>
      <Button
        width="341px"
        height="53px"
        position="absolute"
        borderRadius="28px"
        top="354px"
        left="25px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Request"
        onClick={() => {
          buttonFourZeroZeroThreeOneOneOneThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button40031113")}
      ></Button>
      <Button
        width="341px"
        height="53px"
        position="absolute"
        borderRadius="28px"
        top="412px"
        left="25px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Recipe Library"
        onClick={() => {
          buttonFourZeroZeroThreeOneOneOneSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button40031117")}
      ></Button>
      <Image
        width="425px"
        height="844px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="23px"
        left="410px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://ibb.co/MDnJc7p"
        {...getOverrideProps(overrides, "Screen Shot 2024-02-06 at 11.22 1")}
      ></Image>
    </View>
  );
}
