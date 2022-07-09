import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const sizes = {
    sizes: {
        custom: {
            appBar: "88px"
        }
    },
}

export const appTheme = extendTheme({
    ...config,
    ...sizes,
})