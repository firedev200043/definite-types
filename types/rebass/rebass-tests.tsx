import * as React from "react";
import { Box, BoxProps, Button, Card, Flex, Heading, Image, Link, Text } from "rebass";
import { Box as StyledBox } from "rebass/styled-components";
import styled, { css } from "styled-components";
import "styled-components/macro";

const CustomComponent: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

const ExtendedBox = styled(Box)`
    color: red;
`;

const RefForwardingBox = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
    <ExtendedBox
        ref={ref}
        {...props}
    />
));

const boxCss = css`
    background: purple;
    color: white;
`;

const CssBox = () => <Box css={boxCss} />;

const VariantBox = () => <Box tx="specialBoxes" />;

export default () => (
    <Box
        width={1}
        css={{ height: "100vh" }}
        py={[1, 2, 3]}
        ml="1em"
        display="block"
        fontFamily="monospace"
        flexShrink={1}
    >
        <Flex
            width={1}
            flexGrow={1}
            flexShrink={0}
            alignItems="center"
            alignContent="start"
            alignSelf="stretch"
            justifyItems="center"
            justifyContent="start"
            justifySelf="stretch"
        >
            <Heading fontSize={5} fontWeight="bold" flexShrink={1}>
                Hi, I'm a heading.
            </Heading>
            <Text as="p" fontSize={3} lineHeight="1em" letterSpacing="1rem" fontStyle="italic" order={1}>
                Hi, I'm text.
            </Text>
            <Card
                sx={{
                    borderRadius: 8,
                    boxShadow: "0 2px 16px rgba(0, 0, 0, 0.25)",
                    bg: "#f6f6ff",
                }}
                fontSize={6}
                width={[1, 1, 1 / 2]}
                p={5}
                my={5}
            >
                Card
            </Card>
            <Image
                width={[1, 1, 1 / 2]}
                src="https://source.unsplash.com/random/1280x720"
                sx={{
                    borderRadius: "1em",
                }}
            />
            <Link href="https://rebassjs.org" title="Rebass" target="_blank">
                Link
            </Link>
            <Button
                sx={{
                    bg: "magenta",
                    border: "1em",
                    borderRadius: "1em",
                }}
            >
                Button
            </Button>
            <Box as={CustomComponent} bg="red">
                CustomComponent
            </Box>
            <ExtendedBox m={2}>ExtendedBox</ExtendedBox>
            <Box
                css={`
                    color: red;
                `}
            >
                String css prop
            </Box>
            <Button
                sx={theme => ({
                    bg: "magenta",
                    border: "1em",
                    borderRadius: "1em",
                })}
            >
                Button
            </Button>
            <CssBox />

            <VariantBox />
        </Flex>
        <StyledBox width={1} css={{ height: "100vh" }} py={[1, 2, 3]} ml="1em" display="block">
            Styled Box
        </StyledBox>
    </Box>
);
