// tslint:disable-next-line:no-reference
/// <reference path="./fileA.ts" />
// tslint:disable-next-line:no-reference
/// <reference path="./fileB.ts" />

// tslint:disable-next-line:no-namespace
namespace x {

    import A = x.A;
    import B = x.y.B;

    describe("BrowserFieldTester", () => {

        it("should", () => {
            console.log(A, B);
        });
    });
}