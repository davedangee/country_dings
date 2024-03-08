interface Flag {
    png: string;
    svg: string;
    alt: string;
}

interface CapitalInfo {
    latlng: [number, number];
}

interface Name {
    common: string;
    official: string;
    nativeName: {
        ell: NativeLang;
        tur: NativeLang;
    };
}

interface NativeLang {
    official: string;
    common: string;
}

interface Currency {
    name: string;
    symbol: string;
}

interface ICountry {
    flags: Flag;
    capitalInfo: CapitalInfo;
    name: Name;
    currencies: { [key: string]: Currency };
    capital: string[];
    region: string;
    subregion: string;
    area: number;
    population: number;
    timezones: string[];
    visited: boolean;
}
