import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries } from '../actions/actions-countries';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <countryFlagList countries={this.props.countries} />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);

// Argument mapStateToProps zajmuje się (jak sama nazwa wskazuje)
// mapowaniem odpowiedniej porcji stanu do propsów, które przekażemy
// komponentowi. mapStateToProps musi być funkcją, która na wejściu
// przyjmuje stan aplikacji, a na wyjściu zwraca obiekt podpinający
// konkretne wartości propsów do komponentu CountryFlagContainer

// Zauważ, że wywołujemy funkcję connect, która zwraca funkcję.
// Następnie, wywołanie tej funkcji dopiero podpina się pod komponent
// CountryFlagContainer. Na początku może się to wydawać nieco dziwne,
// ale pierwsze wywołanie funkcji przygotowuje odpowiednią,
// inną funkcję która będzie służyła do wstrzyknięcia
// przygotowanych danych do komponentu.

// connect służy do łączenia komponentów do store. Nie modyfikuje
// przy tym w żaden sposób istniejącego komponentu, a zwraca nowy,
// rozszerzony o nowe funkcjonalności.

// W metodzie componentDidMount wywoływanej tuż po render odwołujemy
// się do store'a za pomocą metody dispatch. Stan aplikacji w polu
// countries zawiera wtedy tablicę obiektów pobraną z pliku
// /data/countries.json. Wartość ta jest mapowana w funkcji
// mapStateToProps do propsa komponentu <CountryFlagContainer>
// nazwanego countries - stamtąd przekazujemy go jako parametr
// do propsa countries omawianego niedawno komponentu
// <CountryFlagList>. W ten sposób otrzymuje on dane jakich
// oczekiwał, czyli tablicę obiektów.
