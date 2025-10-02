import { Carousel, Container, Image } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


var blogs = [
    {id: 1, name: "What's the correct AM/PM routine?", image:"images/blog1.png"},
    {id: 2, name: "What's the right SPF for you?", image:"images/blog2.png"},
    {id: 3, name: "Can I skip toner?", image:"images/blog3.png"},
];


export default function AppSkincareBasics(){

    const navigate = useNavigate();

    return(
        <section>
			<Container>
				<h2 className="skincare-basics text-center">Skincare Basics</h2>
					<Carousel>
                        {blogs.map(blog =>(
                            <Carousel.Item key={blog.id}>
                                <Image src={blog.image} fluid/>
                                <Carousel.Caption onClick = { () => navigate("/blog") }>
                                <h3>{blog.name}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                        }
					</Carousel>
			</Container>
		</section>
    )
}