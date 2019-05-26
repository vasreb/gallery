import React from 'react';
import './style.css';

export default function User(props) {
    const {
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    } = props.user;

    const usi = 'user-card__item';
    const usil = 'user-card__item user-card__item--little';

    return (
        <ul className="user-card">
            <li className={usi}>Name: {name}</li>
            <li className={usi}>Username: {username}</li>
            <li className={usi}>Email: {email}</li>
            <ul className={usi}>Address:
                <li className={usil}>Street: {address.street}</li>
                <li className={usil}>Suite: {address.suite}</li>
                <li className={usil}>City: {address.city}</li>
                <li className={usil}>Zipcode: {address.zipcode}</li>
                <ul>
                    <li className={usil}>lat: {address.geo.lat}</li>
                    <li className={usil}>lng: {address.geo.lng}</li>
                </ul>
            </ul>
            <li className={usi}>Phone: {phone}</li>
            <li className={usi}>Website: {website}</li>
            <ul className={usi}>Company:
                <li className={usil}>Name: {company.name}</li>
                <li className={usil}>Catch Phrase: {company.catchPhrase}</li>
                <li className={usil}>Bs: {company.bs}</li>
            </ul>
        </ul>
    )
}