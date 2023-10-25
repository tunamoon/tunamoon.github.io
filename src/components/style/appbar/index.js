import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import '@fontsource/grandiflora-one';
import { Typography } from "@mui/material";

export const AppbarContainer = styled(Box)(() => ({

    //used to fix unexpected behavior in background colors
    display: 'flex',
    marginTop: 4,
    //boxes in the center
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2 pm 8 pm',
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    //space between the word
    flexGrow: 4,
    fontSize: '4em',
    fontFamily: 'Grandiflora One',
    color: '#847577',
    fontWeight: 'medium'
}));