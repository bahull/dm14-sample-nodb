import React, { Component } from 'react';
import './HeroCard.css';

export default class HeroCard extends Component {
    render() {
        const {
            name,
            eye_color,
            hair_color,
            birth_year,
            url
        } = this.props.hero;
        const {
            deleteHero,
            selectOneHero
        } = this.props;
        return (
    <div className="hero-card">
        <span
            className="removal"
            onClick={() => deleteHero(name)}
        >X</span>
        <a
            onClick={() => selectOneHero(url)}
            className="pointer"
        ><h1>Name: {name}</h1>
        </a>
        <p>Eye Color: {eye_color}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Birth Year: {birth_year}</p>
    </div>);
    }
}
