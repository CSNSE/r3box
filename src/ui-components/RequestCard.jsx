/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteRequest } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function RequestCard(props) {
  const { Request, request, overrides, ...rest } = props;
  const trashOnMouseDown = async () => {
    await client.graphql({
      query: deleteRequest.replaceAll("__typename", ""),
      variables: {
        input: {
          id: request?.id,
        },
      },
    });
  };
  const trashOnMouseUp = useNavigateAction({ type: "url", url: `${"/"}${""}` });
  const pencilOnClick = useNavigateAction({
    type: "url",
    url: "/RequestUpdateForm",
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="289px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RequestCard")}
      {...rest}
    >
      <View
        width="320px"
        height="289px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "RequestCard40711326")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="288px"
          height="98px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="18px"
          left="16px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="16px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={request?.name}
            {...getOverrideProps(overrides, "Steak Salad")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="90px"
            height="25px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Request to:"
            {...getOverrideProps(overrides, "Request to:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(132,89,72,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="90px"
            height="18px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={request?.recipient}
            {...getOverrideProps(overrides, "Mom")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="22px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={request?.description}
            {...getOverrideProps(overrides, "The one with Thai Basil")}
          ></Text>
        </Flex>
        <View
          width="295px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="241px"
          left="12px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "CardFooterFrame")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6px"
            left="254px"
            padding="0px 0px 0px 0px"
            onMouseDown={() => {
              trashOnMouseDown();
            }}
            onMouseUp={() => {
              trashOnMouseUp();
            }}
            {...getOverrideProps(overrides, "trash")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              type="delete"
              {...getOverrideProps(overrides, "MyIcon40711334")}
            ></MyIcon>
          </View>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6px"
            left="17px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              pencilOnClick();
            }}
            {...getOverrideProps(overrides, "pencil")}
          >
            <MyIcon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              type="edit"
              {...getOverrideProps(overrides, "MyIcon40711336")}
            ></MyIcon>
          </View>
        </View>
      </View>
    </Flex>
  );
}
