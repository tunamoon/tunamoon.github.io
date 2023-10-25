import React from "react";
import { AppbarContainer, AppbarHeader } from "./style/appbar";
import Typewriter from "typewriter-effect";

export function Header() {
    return (
        <AppbarContainer>
            <AppbarHeader>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hi Hello Hey...")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A Personal Blog")
                        .start();
                }}
            />
            </AppbarHeader>
            
        
        </AppbarContainer>
    );
}