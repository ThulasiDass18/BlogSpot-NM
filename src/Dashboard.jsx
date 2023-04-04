import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const blogs = [
    {
        id: 1,
        title: "Technology",
        desc: "Technology refers to the application of scientific knowledge and tools for practical purposes. ",
        image: "https://images.moneycontrol.com/static-mcnews/2020/10/TECHNOLOGY.jpg?impolicy=website&width=1600&height=900"
    },
    {
        id: 2,
        title: "Food",
        desc: "Food is essential for human survival and provides the body with nutrients such as proteins, fats, vitamins, and minerals.",
        image: "https://www.healthifyme.com/blog/wp-content/uploads/2022/01/shutterstock_1015800871-1-750x375.jpg"
    },
    {
        id: 3,
        title: "Gaming",
        desc: "Video games come in a variety of genres, including action, adventure, sports, role-playing, and simulation.",
        image: "https://signal.avg.com/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/9%20Ways%20to%20Boost%20Your%20Gaming%20Rig/How_to_Improve_Your_Gaming_PC_Performance-Thumb.jpg"
    },
    {
        id: 4,
        title: "Technology",
        desc: "Technology refers to the application of scientific knowledge and tools for practical purposes. ",
        image: "https://images.moneycontrol.com/static-mcnews/2020/10/TECHNOLOGY.jpg?impolicy=website&width=1600&height=900"
    },
    {
        id: 5,
        title: "Technology",
        desc: "Technology refers to the application of scientific knowledge and tools for practical purposes. ",
        image: "https://images.moneycontrol.com/static-mcnews/2020/10/TECHNOLOGY.jpg?impolicy=website&width=1600&height=900"
    },
    {
        id: 6,
        title: "Technology",
        desc: "Technology refers to the application of scientific knowledge and tools for practical purposes. ",
        image: "https://images.moneycontrol.com/static-mcnews/2020/10/TECHNOLOGY.jpg?impolicy=website&width=1600&height=900"
    },
]

export default function Dashboard() {
    return <div>
        <div id="flex">
            {blogs.map((blog) => {
                return (
                    <div id="flex-item" key={blog.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={blog.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {blog.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                );
            })}
        </div>    
    </div>
}