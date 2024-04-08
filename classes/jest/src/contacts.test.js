import getName, { getName2 } from "./contacts.js";

test("expect to return a name", () => {
    expect(getName()).toBe("Karl");
});
