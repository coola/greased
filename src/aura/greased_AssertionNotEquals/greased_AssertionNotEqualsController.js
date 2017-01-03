({
    doInit: function (component, event, helper) {
        var deep = DeepDiff.noConflict();

        var diff = deep.diff;

        var expected = component.get("v.expected");
        var actual = component.get("v.value");
        var differences = diff(expected, actual);

        var space = 3;
        component.set("v.lhs", JSON.stringify(expected, null, space));

        component.set("v.result", !$A.util.isUndefined(differences) && differences.length > 0);
    }

})