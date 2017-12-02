import React from 'react';
import { Link } from 'react-router';
import CountryFlag from '../presentational/flag.component';

const CountryFlagList = (props) => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
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

// Najważniejszą rzeczą przy usuwaniu kraju z listy jest przypisanie
// do eventu onClick metody deleteCountry przesłanej za pomocą propsów.
// Funkcja ta przyjmuje jeden parametr, ale wywołanie jej przy pomocy
// użycia metody bind zmusza nas do przekazania dodatkowego parametru
// jakim jest context, pod który będzie w tej funkcji wskazywać słowo
// kluczowe this. Nie interesuje on nas w tym przypadku, więc możemy
// ustawić go na wartość null. Dla nas najważniejsze jest, aby przekazać
// odpowiednio id klikniętego państwa, dlatego drugi argument ustawiamy
// na wartość country.id.
