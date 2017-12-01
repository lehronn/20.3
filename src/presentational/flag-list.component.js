import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;

// W powyższym kodzie iterujemy po tablicy państw i dla
// każdego z nich zwracamy identyczną strukturę zaczynającą
// się od znacznika <div>. Przypominam, że przypisujemy do
// niego właściwość key równą country.id, ponieważ React wymaga
// tego podczas iterowania po kolekcjach. Przypisując propsowi
// key unikalną wartość id umożliwiamy Reactowi odróżnienie
// wszystkich stworzonych struktur od siebie, co zostanie
// wykorzystane do optymalizacji renderowania. Należy
// pamiętać, aby dodawać tę właściwość zawsze do
// najstarszego (zewnętrznego) znacznika w zwracanej
// strukturze drzewa DOM. Iterowany obiekt o nazwie
// country jest przekazywany do propsa o tej samej
// nazwie w komponencie <CountryFlag>.

// country to iterator. W każdym kolejnym cyklu iteracyjnym
// przyjmuje on wartość następnego obiektu opisującego państwo.
