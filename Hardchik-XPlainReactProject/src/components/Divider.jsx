import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

const xl = defineStyle({
    border: "10px solid",
    borderRadius: 'lg',
})

export const dividerTheme = defineStyleConfig({
    sizes: { xl },
})