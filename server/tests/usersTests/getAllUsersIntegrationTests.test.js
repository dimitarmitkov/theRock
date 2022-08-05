const getAllUsers = require("../../m_api/services/getAllUsers");
const sequelize = require("../../m_api/sequelize");
const objectPicker = require("../utils/objectPicker");
const usersDataArray = require("../../seedersData/userSeedersData");

afterAll(async () => {
    await sequelize.sequelize.close();
});

describe("integration tests users", () => {

    it("expect array of users by running [getAllUsers]", async () => {

        const countOfUsers = await getAllUsers.getAllUsers();
        await expect(countOfUsers.length).toBe(3);
    });

    it("expect array of users by running [getAllUsers]", async () => {

        const checkArray = usersDataArray.map(data => {
            return objectPicker(data, ["id", "userName", "deletedAt"]);
        });

        expect(await getAllUsers.getAllUsers()).toEqual(
            expect.arrayContaining([
                expect.objectContaining(checkArray[0])
            ])
        );
    });
})
