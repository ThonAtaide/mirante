import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import teste from '../../../resources/imagem-vitoria.jpg'
import logo from '../../../resources/tigre-logo.svg'
// import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles, useTheme } from '@material-ui/styles';
// import classNames from "classnames";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = ({title, author, createdDateTime, image_path}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const classes = useStyles();
  return (
    <Card  >
      <CardHeader sx={{p:'0.5em'}}
        avatar={
          <IconButton aria-label="share" sx={{p:'0'}}>
            <img src={logo} height={60} width={60}/>
          </IconButton>
        }
        action={
          <IconButton aria-label="share" sx={{alignSelf: 'center'}}>
            <ShareIcon />
          </IconButton>
        }
        title={
          <Typography variant="body1" fontWeight="bold" color="text.primary" sx={{fontFamily: 'roboto'}}>
            Mirante FC
          </Typography>
        }       
        subheader={
          <Typography variant="subtitle2"  color="text.secondary" sx={{fontFamily: 'roboto'}}>
            {createdDateTime}
          </Typography>
        }
        // classes={{
        //   // root: classes.cardHeaderRoot,
        //   action: classes.cardHeaderAction
        // }}
      />      
      <CardMedia
        component="img"
        // height="400"
        image={teste}
        alt="Paella dish"
        sx={{ objectFit: 'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          Tem Tigre na próxima fase da Copa São Carlos 2022! 
          Com uma vitória convincente diante da equipe do Milan no campo do Paulistinha nesta tarde. O Mirante garantiu matematicamente sua vaga nas oitavas da competição. 
          Mesmo com um time limitado, com poucas trocas a equipe foi sólida defensivamente e precisa nos contra ataques, sacramento o triunfo. 
          Giovaninho (2) e Douglas fizeram os gols do Tigre! 
          Mirante 3x0 Milan
          Na última rodada a equipe enfrenta o Atlético Itamaraty, um simples empate garante a 1° colocação do grupo visando um melhor confronto nas oitavas.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
  );
}

export default Post;

// const useStyles = makeStyles((theme) => ({
//   cardHeaderRoot: {
//     backgroundColor: theme.palette.grey[400]
//   },
//   cardHeaderAction: {
//     margin: "auto"
//   },
//   root: {
//     maxWidth: "100%"
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: red[500]
//   },
//   cardHeaderTitleRoot: {
//     color: theme.palette.error.main,
//     textAlign: "center"
//   },
//   cardHeaderSubTitleRoot: {
//     color: theme.palette.error.main,
//     textAlign: "center"
//   }
// }));
