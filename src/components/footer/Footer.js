import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { RiPaypalFill } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";
import './footer.css';
import styled from 'styled-components';

const Foo = styled.footer`
    width: 110%;
    height: 200px;
    margin-top: 80px;
    background-color: black;
    position: relative;
`;

const Lista = styled.ul`
    display: flex;
    justify-content: center;
    padding-inline-start: 0px;
`;

const Contato = styled.a`
    font-family: Yanone Kaffeesatz,Trebuchet MS,Arial,Helvetica,sans-serif;
    color: white;
    margin-right: 10px;
`;
const Tracinho = styled.a`
    font-family: Yanone Kaffeesatz,Trebuchet MS,Arial,Helvetica,sans-serif;
    color: white;
`;
const FaleConosco = styled.a`
    font-family: Yanone Kaffeesatz,Trebuchet MS,Arial,Helvetica,sans-serif;
    color: white;
    margin-left: 10px;
`;



const Footer = () => {

    return (
        <Foo className="footer">
            <div className="footer__social">
                <a href="https://www.facebook.com/">
                    <FaFacebookSquare className="facebook" size="30" color="#fff" />
                </a>
                <a href="https://www.instagram.com/">
                    <FaInstagram className="instagram" size="30" color="#fff" />
                </a>
                <a href="https://www.youtube.com/">
                    <FaYoutube className="youtube" size="30" color="#fff" />
                </a>
                <a href="https://www.twitter.com/">
                    <FaTwitter className="twitter" size="30" color="#fff" />
                </a>
                <a href="https://www.spotify.com/">
                    <FaSpotify className="spotify" size="30" color="#fff" />
                </a>
            </div>
            <div className="antendimento">
                <Lista className="alo">
                    <Contato className="contato" href="/">
                        Contato
                    </Contato>
                    <Tracinho className="tracinho">|</Tracinho>
                    <FaleConosco className="faleConosco" href="/">
                        Fale conosco
                    </FaleConosco>
                </Lista>
            </div>
            <div className="pagamento">
                FORMAS DE PAGAMENTO
            </div>
            <div className="formas">
                <a>
                    <RiMastercardFill className="mastercard" size="30" color="#fff" />
                </a>
                <a>
                    <RiVisaLine className="visa" size="35" color="#fff" />
                </a>
                <a>
                    <RiPaypalFill className="paypal" size="25" color="#fff" />
                </a>
                <a>
                    <RiBarcodeBoxLine className="boleto" size="25" color="#fff" />
                </a>
            </div>
            <p className="footer__copyright"><FaRegCopyright class="c"></FaRegCopyright>  TMJ.com, Inc. ou suas afiliadas</p>
        </Foo>
    )
}
export default Footer;
