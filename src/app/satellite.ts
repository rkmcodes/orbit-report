export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    //warning: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean, /*warning: boolean*/) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
        //this.warning = warning;
    }

//<td [class.warning]="satellite.shouldShowWarning()">{{satellite.type}}</td>

    shouldShowWarning() {
        if(this.type === 'Space Debris' || this.type === 'space debris'){
            return true;
        } else {
            return false;
        }
    }

        


}

