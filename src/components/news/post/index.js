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
import teste from '../../../resources/imagem-vitoria.jpg'
import logo from '../../../resources/tigre-logo.svg'
import { useStyles } from '../../../theme'

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

const Post = ({ createdDateTime, image_path, text}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <Card >
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
        classes={{
          // root: classes.cardHeaderRoot,
          action: classes.cardHeaderAction
        }}
      />      
      <CardMedia
        component="img"
        image={teste}
        alt="Paella dish"
        sx={{ objectFit: 'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>  
      </CardActions>
      
    </Card>
  );
}

export default Post;


