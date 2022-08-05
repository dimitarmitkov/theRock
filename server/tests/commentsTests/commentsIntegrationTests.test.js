const sequelize = require("../../m_api/sequelize");
const getAllComments = require("../../m_api/services/getAllComments");
const addComment = require("../../m_api/services/addComment");
const commentsData = require("../../seedersData/commentSeedersData");
const objectPicker = require("../utils/objectPicker");
const usersDataArray = require("../../seedersData/userSeedersData");

afterAll(async () => {
    await sequelize.sequelize.close();
});

describe("integration tests comments", () => {
    it("expect array of comments length by running [getAllComments]", async () => {

        const commentsLength = commentsData.filter(data=>data.threadId===1).length;

        const countOfComments = await getAllComments.getAllComments({request:{body:{threadId: 1}}});
        await expect(countOfComments.length).toBe(commentsLength);
    });

    it("expect array of comments by running [getAllComments]", async () => {

        const checkArray = commentsData.map(data => {
            return objectPicker(data, ["id", "threadComment", "threadId", "userId", "deletedAt"]);
        });

        expect(await getAllComments.getAllComments({request:{body:{threadId: 1}}})).toEqual(
            expect.arrayContaining([
                expect.objectContaining(checkArray[0])
            ])
        );
    });

    it("expect count of comments to increase +1 by running [addComment]", async () => {

        const createComment = {
            threadId: 2,
            userId: 3,
            threadComment: "new comment by test",
            deletedAt: null
        };

        const commentsLength = commentsData.filter(data=>data.threadId===2).length;
        await addComment.createComment({request:{body:createComment}});
        const countOfComments = await getAllComments.getAllComments({request:{body:{threadId: 2}}});

        await expect(countOfComments.length).toBe(commentsLength + 1);
    });
});
