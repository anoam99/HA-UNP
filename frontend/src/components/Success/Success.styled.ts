import { styled, Typography, Box } from "@mui/material";

export const Title = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center'
})

export const LinkBox = styled(Box)({
    background: '#F5F7FA',
    padding: '10px',
    borderRadius: '3px',
    ["& p"]: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
})

export const QRCodeWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: '15px 0'
})