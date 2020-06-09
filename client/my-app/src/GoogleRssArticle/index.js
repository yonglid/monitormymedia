import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

class GoogleRssArticle extends React.Component {
  handleClick = (event) =>  {
    this.props.onStarred(this.props.article)
  }


  render() {
    const { classes } = this.props;

    return (
      <div className="article-card">
        <h2>{this.props.article.title}</h2>


        <Button variant="contained" color="inherit" href={this.props.article.link} target="_blank">
          View Article
        </Button>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
            <StarIcon color={this.props.isStarred ? "secondary" : "primary"} />
          </IconButton>
        </CardActions>
      </div>
    );
  }
}

export default withStyles(styles)(GoogleRssArticle);
