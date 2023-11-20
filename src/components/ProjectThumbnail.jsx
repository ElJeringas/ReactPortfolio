import { Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material'
function ProjectThumbnail({title, description, img, url, tech}) {
  return (
    <Grid container spacing={2}>
        <Grid item >
            <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component='img'
                        height={300}
                        width={300}
                        alt={title}
                        image={img}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                    </CardMedia>
                <CardContent>
                    <h2>{title}</h2>
                    <p>{description}</p>
          {tech.map((icon, index) => (
            <img key={index} src={icon} alt={`Tech Icon ${index}`} width={'25px'} height={'25px'}/>
          ))}
                </CardContent>
                <CardActions>
                    <a type='button' href={url} target="_blank" rel="noopener noreferrer"  className='button-project'>See Project</a>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}

export default ProjectThumbnail

