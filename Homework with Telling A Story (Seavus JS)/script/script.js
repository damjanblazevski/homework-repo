console.log("It works!");

arguments = ["name", "mood", "activity"];
    function tellStory(valueName, valueMood, valueActivity){
        for(let listValue of arguments) {
            if(listValue === valueName, valueMood, valueActivity){

                console.log(`This is ${valueName}. ${valueName} is a nice person. Today they are ${valueMood}. They are ${valueActivity} all day. The end.`);
            }
        }
    }
    tellStory("Damjan", "Great", "Jogging");