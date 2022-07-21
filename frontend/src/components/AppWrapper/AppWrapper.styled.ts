import { styled } from "@mui/material"


export const Card = styled('div')((props) => ({
    padding: "30px 15px",
    maxWidth: '480px',
    width: '100%',
    boxShadow: "0px 0px 15px rgba(44, 82, 142, 0.2)",
    borderRadius: '20px',
    background: '#ffff',
    [props.theme.breakpoints.down("md")]: {
        maxWidth: 'unset',
        height: '100vh',
        borderRadius: 0
    }
}))

export const Content = styled('div')((props) => ({
    maxWidth: '400px',
    margin: '0 auto',
    [props.theme.breakpoints.down("md")]: {
        maxWidth: 'unset',
    }
}))

export const Wrapper = styled('div')({
    background: '#F5F7FA',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})


