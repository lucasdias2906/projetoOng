const generationUniqueId= require("../../src/utils/generetion.uniqueId")

describe("Generate Unique ID", ()=>{
    it("should generate an unique ID", ()=>{

        const id = generationUniqueId()

        expect(id).toHaveLength(8)
    }) // IT (isto) Expect (oq espera algo)
})