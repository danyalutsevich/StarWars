export interface Page {
    count?:    number;
    next?:     string|null;
    previous?: string|null;
    results?:  Character[]|null;
}

export interface Character {
    name?:       string;
    height?:     string;
    mass?:       string;
    hair_color?: string;
    skin_color?: string;
    eye_color?:  string;
    birth_year?: string;
    gender?:     Gender;
    homeworld?:  string;
    films?:      string[];
    species?:    string[];
    vehicles?:   string[];
    starships?:  string[];
    created?:    Date;
    edited?:     Date;
    url?:        string;
}

export interface Homeworld {
    name?:            string;
    rotation_period?: string;
    orbital_period?:  string;
    diameter?:        string;
    climate?:         string;
    gravity?:         string;
    terrain?:         string;
    surface_water?:   string;
    population?:      string;
    residents?:       string[];
    films?:           string[];
    created?:         Date;
    edited?:          Date;
    url?:             string;
}

export interface Species {
    name?:             string;
    classification?:   string;
    designation?:      string;
    average_height?:   string;
    skin_colors?:      string;
    hair_colors?:      string;
    eye_colors?:       string;
    average_lifespan?: string;
    homeworld?:        string;
    language?:         string;
    people?:           string[];
    films?:            string[];
    created?:          Date;
    edited?:           Date;
    url?:              string;
}

export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}
