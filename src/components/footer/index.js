import { Container, IconButton } from "@mui/material";
import { sponsors } from "../../utils/mocked-data";

export const Footer = () => {
    return(
      <Container 
          maxWidth="xl" 
          disableGutters 
          sx={{ display: 'flex', justifyContent: 'space-around', bottom: '0', p: '0.5em', mt:'1.0em', bgcolor:'#F5F5F5'}}
      >
        {sponsors.map(sponsor => 
          <IconButton aria-label="sponsor" key={sponsor.id}>
            <img 
              src={sponsor.logo_image} 
              alt={sponsor.alt}
              style={{width: '2.0em', height: '2.0em'}}
            />
          </IconButton>         
        )}
      </Container>
    );
}