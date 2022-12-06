import React from "react";
import styled from "styled-components";
import {About} from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () =>{
    
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>

                <Toggle title='How do I start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis.</p>
                    </div>

                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis.</p>
                    </div>
                </Toggle>
                <Toggle title='Different Payment Methods'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis.</p>
                    </div>
                </Toggle>
                <Toggle title= 'What Product do you Offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, perferendis.</p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq =styled(About)`
    display: block;
    Span{
        display: block;
    }
    h2{
        padding-bottom: 1.5rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 1.5rem 0rem;
        width: 100%;
    }
    .question{
        padding: 2rem 0rem;
        cursor: pointer; 
    }
    .answer{
        padding: 1.5rem 0rem;
        p{
            padding: 1rem;
        }

    }
`
export default FaqSection;