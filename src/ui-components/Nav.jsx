/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Nav(props) {
  const { navR, overrides, ...rest } = props;
  const frameLogoOnClick = useNavigateAction({ type: "url", url: "/new" });
  const iconOnClick = useNavigateAction({ type: "url", url: "/new" });
  const boxOnClick = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="320px"
      height="50px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(230,221,212,1)"
      {...getOverrideProps(overrides, "Nav")}
      {...rest}
    >
      <View
        width="31px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameLogoOnClick();
        }}
        {...getOverrideProps(overrides, "FrameLogo")}
      >
        <View
          width="16px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="4px"
          left="7px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            iconOnClick();
          }}
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        >
          <Icon
            width="9.33px"
            height="9.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.333333969116211,
              height: 9.333333969116211,
            }}
            paths={[
              {
                d: "M9.33333 5.33333L5.33333 5.33333L5.33333 9.33333L4 9.33333L4 5.33333L0 5.33333L0 4L4 4L4 0L5.33333 0L5.33333 4L9.33333 4L9.33333 5.33333Z",
                fill: "rgba(91,85,75,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="18.75%"
            bottom="22.92%"
            left="18.75%"
            right="22.92%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
      <Flex
        gap="32px"
        direction="row"
        width="231px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <View
          width="25px"
          height="19px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "logo")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(91,85,75,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Recipe Share"
          onClick={() => {
            boxOnClick();
          }}
          {...getOverrideProps(overrides, "Box")}
        ></Text>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
