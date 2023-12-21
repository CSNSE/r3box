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
      backgroundColor="rgba(255,255,255,1)"
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
                fill: "rgba(13,26,38,1)",
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
        >
          <Icon
            width="21.78px"
            height="18.91px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.77855110168457,
              height: 18.909521102905273,
            }}
            paths={[
              {
                d: "M13.5324 18.7577C13.5818 18.8432 13.6732 18.8959 13.7722 18.8959L15.926 18.8959C16.1391 18.8959 16.2723 18.6656 16.1658 18.4814L8.34201 4.95697C8.23545 4.77276 7.96904 4.77276 7.86247 4.95697C5.25995 9.45579 2.65123 13.9748 0.0374783 18.4951C-0.069038 18.6793 0.0641708 18.9095 0.277275 18.9095L10.3655 18.9095C10.5786 18.9095 10.7118 18.6793 10.6053 18.495L9.57336 16.7112C9.5239 16.6257 9.4325 16.5731 9.33359 16.5731L4.17381 16.5731C4.06724 16.5731 4.00064 16.4579 4.05392 16.3658L7.98142 9.5766C8.03471 9.4845 8.16791 9.4845 8.22119 9.5766L13.5324 18.7577Z",
                fill: "rgba(64,170,191,1)",
                fillRule: "nonzero",
              },
              {
                d: "M9.576 1.9949C9.52655 2.08039 9.52655 2.18572 9.576 2.27122L19.1133 18.7577C19.1627 18.8432 19.2541 18.8959 19.3531 18.8959L21.5013 18.8959C21.7144 18.8959 21.8476 18.6656 21.741 18.4814L11.1296 0.138158C11.0231 -0.0460529 10.7567 -0.0460525 10.6501 0.138158L9.576 1.9949Z",
                fill: "rgba(64,170,191,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="calc(50% - 9.45px - -0.45px)"
            left="calc(50% - 10.89px - -0.39px)"
            {...getOverrideProps(overrides, "Union")}
          ></Icon>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="70px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Box"
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
