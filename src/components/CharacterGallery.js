import React from "react";
import Character from "./Character";

import characterProfiles from "../data/characterData.json"

const CharacterGallery = () => {
    const characterComponentArray = characterProfiles.map(
        c => <Character {...c } key ={c.id}/>
    )

    return (
        <div data-test="component-char-gallery">
            {characterComponentArray}
        </div>
    )
}
//"component-char-gallery"

export default CharacterGallery;