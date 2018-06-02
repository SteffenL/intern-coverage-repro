const { suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

import Util from "src/Util";

suite("Util", () => {
    suite("hello", () => {
        test("returns 'world'", () => {
            assert.strictEqual(Util.hello(), "world");
        });
    });
});
