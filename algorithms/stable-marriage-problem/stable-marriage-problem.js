/**
 * https://www.algorithm-archive.org/contents/stable_marriage_problem/stable_marriage_problem.html
 * https://www.geeksforgeeks.org/stable-marriage-problem/
 */

const men = ["A", "B", "C", "D"];
const women = ["E", "F", "G", "H"];

const preferences = {
    "A": ["G", "H", "F", "E"],
    "B": ["G", "E", "F", "H"],
    "C": ["H", "F", "G", "E"],
    "D": ["F", "E", "G", "H"],
    "E": ["D", "A", "C", "B"],
    "F": ["D", "A", "B", "C"],
    "G": ["C", "D", "B", "A"],
    "H": ["B", "C", "D", "A"]
};

const engagements = {};

class Driver {

    main() {
        while (true) {
            const bachelors = this._getBachelors();
            if (bachelors.length === 0) {
                return;
            }

            let bachelor;
            for (bachelor of bachelors) {
                console.log(`Finding a spouse for ${bachelor}`);

                const mansPreferenceList = preferences[bachelor];

                let potentialPartner;
                for (potentialPartner of mansPreferenceList) {

                    if (this._isBachelor(potentialPartner)) {
                        this._becomeEngaged(bachelor, potentialPartner);
                        console.log(`> ${bachelor} is now engaged to ${potentialPartner}`);

                        break;
                    } else {
                        const currentPotentialsPartner = engagements[potentialPartner];
                        if (this._isEngagementPreferred(potentialPartner, bachelor, currentPotentialsPartner)) {
                            console.log(`> Potential partner ${potentialPartner} would prefer a engagement to ${bachelor} over current spouse ${currentPotentialsPartner}`);

                            this._becomeEngaged(bachelor, potentialPartner);
                            console.log(`> ${bachelor} is now engaged to ${potentialPartner}`);

                            delete engagements[currentPotentialsPartner];
                            console.log(`> ${currentPotentialsPartner} who was previously engaged to ${potentialPartner} is now a bachelor`);

                            break;
                        } else {
                            console.log(`> Potential partner ${potentialPartner} prefers current spouse ${currentPotentialsPartner} over ${bachelor}`);
                        }
                    }
                }
            }
        }
    }

    _getBachelors() {
        return men.filter((man) => {
            return engagements[man] === undefined;
        });
    }

    _becomeEngaged(personA, personB) {
        engagements[personA] = personB;
        engagements[personB] = personA;
    }

    _isBachelor(person) {
        return engagements[person] === undefined;
    }

    _isEngagementPreferred(subject, optionA, optionB) {
        const subjectsPreferences = preferences[subject];
        return subjectsPreferences.indexOf(optionA) < subjectsPreferences.indexOf(optionB);
    }

    getMenToWomenEngagementMap() {
        const menToWomenEngagementMap = {};
        Object.keys(engagements).forEach((person) => {
            const isMale = men.includes(person);
            if (isMale) {
                menToWomenEngagementMap[person] = engagements[person];
            } else {
                menToWomenEngagementMap[engagements[person]] = person;
            }
        });

        return this.orderMap(menToWomenEngagementMap);
    }

    getWomenToMenEngagementMap() {
        const womenToMenEngagementMap = {};
        Object.keys(engagements).forEach((person) => {
            const isMale = men.includes(person);
            if (isMale) {
                womenToMenEngagementMap[engagements[person]] = person;
            } else {
                womenToMenEngagementMap[person] = engagements[person];
            }
        });

        return this.orderMap(womenToMenEngagementMap);
    }

    orderMap(map) {
        const ordered = {};
        Object.keys(map)
            .sort()
            .forEach(function(key) {
                ordered[key] = map[key];
            });
        return ordered;
    }

    prettyPrintOutput() {
        const menToWomenEngagementMap = this.getMenToWomenEngagementMap();
        const womenToMenEngagementMap = this.getWomenToMenEngagementMap();

        console.log(JSON.stringify(menToWomenEngagementMap, null, 2));
        console.log(JSON.stringify(womenToMenEngagementMap, null, 2));
    }

    assertStable() {
        this.prettyPrintOutput();
        const menToWomenEngagementMap = this.getMenToWomenEngagementMap();
        const womenToMenEngagementMap = this.getWomenToMenEngagementMap();

        Object.keys(menToWomenEngagementMap).forEach((man) => {
            const wife = menToWomenEngagementMap[man];
            const mansPreferenceList = preferences[man];
            mansPreferenceList.forEach((spouseCandidate) => {
                const manPrefersPreferenceOverCurrentWife = this._isEngagementPreferred(man, spouseCandidate, wife);
                const preferencePrefersManOverCurrentSpouse = this._isEngagementPreferred(spouseCandidate, man, womenToMenEngagementMap[spouseCandidate]);
                if (spouseCandidate !== wife
                    && manPrefersPreferenceOverCurrentWife
                    && preferencePrefersManOverCurrentSpouse) {
                        throw new Error(`Marriage not stable, ${man} and ${spouseCandidate} prefer eachother over current spouses.`);
                }
            });
        });
    }
}

const driver = new Driver();

driver.main();
driver.assertStable();
