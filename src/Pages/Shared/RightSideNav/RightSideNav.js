import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='rounded' variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 w-75 rounded border'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 w-75 rounded border'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 w-75 rounded border'><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-2 w-75 rounded border'><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2 w-75 rounded border'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;