//describe("closeWindow", function() {
//
//    it('Closes the web page', function() {
//        var confirm = true;
//        expect(confirm).toEqual(true);
//    });
//});

describe("getName", function() {
        var data;
    it('gets the person name', function() {
        var inputName = "Test Name";
        var splitName = inputName.split;
        var result = _.findWhere(data, { "firstName": splitName[0] } && data, {"lastName": splitName[1]});

        expect(splitName).toEqual("Test","Name");
        expect(result).toEqual("firstName", "Test", "lastName","Name");
    });
});

describe("getCharacteristics", function() {
    it('gets the person characteristics', function() {
        var inputCharacteristics = "height weight";
        var splitCharacteristics = inputCharacteristics.split(" ");

        expect(splitCharacteristics).toEqual("height","weight");
    });
});