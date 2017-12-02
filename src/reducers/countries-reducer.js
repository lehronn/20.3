import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: state.countries})

    case GET_COUNTRY:
      const selectedCountry = state.countries.find(country => country.id===parseInt(action.id));
      return Object.assign({}, state, {selectedCountry});

    case SEARCH_COUNTRIES:
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      return Object.assign({}, state, {visibleCountries: foundCountries});

      case DELETE_COUNTRY:
        const notDeletedCountries = state.countries.filter(country => country.id != action.id);
        const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
        return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

      case SET_CONTINENT:
        const continentCountries = state.countries.filter(country => country.continent === action.name);
        return Object.assign({}, state, {visibleCountries: continentCountries});
      }

  return state;
};

export default countriesReducer;

// Zwróć uwagę na sposób w jaki rozróżniamy akcje
// przechodzące przez reducer. Do tego celu idealnie
// nadaje się właśnie konstrukcja switch, która rozpoznając
// odpowiedni typ akcji (switch (action.type)) jest w stanie
// wybrać porcję kodu, która w odpowiedni sposób zajmie się
// zmianą naszego stanu. Typy akcji są zdefiniowane w pliku
// ./src/actions/actions-countries.js:

// Stan aplikacji zawiera pole countries, które opisuje
// wszystkie dostępne państwa. Po wystartowaniu aplikacji
// przypisujemy do tego pola, państwa zdefiniowane w pliku
// data/countries.json. Reducer potrafi na chwilę obecną
// obsłużyć jedną akcję - GET_COUNTRIES. Po jej wywołaniu
// reducer tworzy kopię obiektu state i do pola countries
// przypisuje obecną wartość tego pola. Mamy również dwa
// zabezpieczenia przed niepożądanymi zdarzeniami.
// Po pierwsze, w przypadku przekazania do reducera
// stanu aplikacji w stanie undefined zostanie do
// niego przypisana domyślna wartość initialState.
// Po drugie, w przypadku przekazania nieznanego
// typu akcji zostanie zwrócony obecny stan, czyli
// po prostu nie wykonamy żadnej zmiany.

// Po pierwsze, nie mutujemy (modyfikujemy) stanu. Dzięki metodzie Object.assign,
// tworzymy jego kopię. Jako pierwszy argument, metoda przyjmuje
// obiekt, do którego będą dołączane kolejne właściwości (stąd {},
// ponieważ chcemy dodawać nowe właściwości do zupełnie nowego obiektu).
// Kolejnymi parametrami są obiekty źródłowe na podstawie których
// tworzona jest kopia (state - ponieważ chcemy najpierw skopiować stan.

// Zamiast Object.assign można również użyć operatora spread dla
// obiektów i stworzyć dzięki niemu nowy obiekt
// ({...state, ...newState}). Operator ten nie jest czescia
// specyfikacji ale trwaja prace zeby go dodac.
// Jesli chcesz skorzystac z niego juz teraz
// wystarczy ze dodasz plugin
// babel-plugin-transform-object-rest-spread.

// Metoda find w case GET_COUNTRY zwraca pierwszy znaleziony element, który spełnia
// zdefiniowany warunek. W tym wypadku, szukane jest państwo,
// które ma id identyczne jak to, które przesłane jest w obiekcie
// action. Następnie znaleziona wartość zostaje przypisana do nowo
// utworzonego stanu obiektu i zwracana, aby nie mutować oryginalnego
// stanu.

// Algorytm wyszukiwania państwa po wpisanej frazie działa następująco -
// opiera się on na zasadzie przeszukiwania, czy w stringu występuje
// wskazany substring. Na początek zamieniamy wszystkie znaki w nazwie
// państwa na małe litery (country.name.toLowerCase()), a następnie za
// pomocą metody includes sprawdzamy, czy zawiera ona w sobie wyszukiwany
// ciąg znaków (action.searchText.toLowerCase()) również sprowadzony do
// małych liter. Metoda filter odpowiedzialna jest za to, aby zapisać do
// stałej foundCountries tylko te elementy, które spełnią opisany powyżej
// warunek. Następnie tworzymy nowy obiekt za pomocą Object.assign() i
// przypisujemy do niego poprzedni stan aplikacji, w którym wartość pola
// visibleCountries będzie równa foundCountries.
