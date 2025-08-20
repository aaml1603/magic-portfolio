"use client";

import { useState } from "react";
import { Flex, Text } from "@once-ui-system/core";

interface ClickToScrollIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export const ClickToScrollIframe: React.FC<ClickToScrollIframeProps> = ({
  src,
  title,
  width = "100%",
  height = "100%",
  style = {},
  containerStyle = {},
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        ...containerStyle,
      }}
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        title={title}
        loading="lazy"
        style={{
          border: "none",
          pointerEvents: isActive ? "auto" : "none",
          ...style,
        }}
      />
      
      {!isActive && (
        <Flex
          position="absolute"
          fillWidth
          fillHeight
          horizontal="center"
          vertical="center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(1px)",
            cursor: "pointer",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Flex
            padding="16"
            radius="m"
            background="page"
            border="neutral-alpha-weak"
            shadow="l"
            horizontal="center"
            vertical="center"
            gap="8"
          >
            <Text variant="body-default-s" onBackground="neutral-strong">
              Click to interact with content
            </Text>
          </Flex>
        </Flex>
      )}
    </div>
  );
};