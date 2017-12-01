import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id));
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);

// Przyjrzyjmy się bliżej parametrowi, który przyjmuje kreator
// akcji getCountry. Jest on pobierany z adresu URL za
// pomocą odwołania do this.props.params.id.
// W następnym punkcie definiujemy <Route>, który będzie miał
// ścieżkę countries/country:id, co umożliwi taki zabieg. Plik routes.js
