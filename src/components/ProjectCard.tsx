import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  url?: string;
  img?: string;
};
export default function ProjectCard({
  title,
  description,
  url,
  img,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", // Customize shadow
        maxWidth: 345,

        maxHeight: 750,
      }}
    >
      <CardActionArea>
        {img && (
          <CardMedia
            component="img"
            height="150"
            image={img}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {url && (
          <Link to={url} style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Go See!
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
