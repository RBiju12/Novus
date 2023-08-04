import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const articlecard = ({article, className}) => {
    const {title, content, imageUrl} = article;
    //Destructured objects that store many fields that I access from this component to put data into using the Card Component

    return(
        <>
        <Card sx={{maxWidth: 370, maxHeight: 370, overflow: 'auto' }} className={`article-card ${className || ''}`}>
            <CardHeader title={title} />
            <CardMedia component="img" size="150" image={imageUrl} alt="San Francisco Stock Collapse" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {content}
                </Typography>
            </CardContent>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    )

}

export default articlecard;