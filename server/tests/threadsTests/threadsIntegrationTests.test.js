const sequelize = require("../../m_api/sequelize");
const getAllThreads = require("../../m_api/services/getAllThreads");
const getOneThread = require("../../m_api/services/getOneThread");
const startThread = require("../../m_api/services/startThread");
const threadsData = require("../../seedersData/threadSeedersData");

afterAll(async () => {
    await sequelize.sequelize.close();
});

describe("integration tests threads", () => {
    it("expect array of threads length by running [getAllThreads]", async () => {

        const threadsLength = threadsData.length;

        const contOfThreads = await getAllThreads.getAllThreads();
        await expect(contOfThreads.length).toBe(threadsLength);
    });

    it("expect array of threads by running [getAllThreads]", async () => {

        expect(await getAllThreads.getAllThreads()).toEqual(
            expect.arrayContaining([
                expect.objectContaining(threadsData[0])
            ])
        );
    });

    it("expect object of one thread by running [getOneThread]", async () => {

        expect(await getOneThread.getOneThread({request:{body:{id: 1}}})).toEqual(
                expect.objectContaining(threadsData[0])
        );
    });

    it("expect to throw error 'NO_SUCH_THREAD' by running [getOneThread]", async () => {

        expect(getOneThread.getOneThread({request:{body:{id: 0}}})).rejects.toThrow(
               "NO_SUCH_THREAD"
        );
    });

    it("expect object of one thread by running [startThread]", async () => {

        const createThread = {
            threadName: "Dimitar",
            threadTitle: "How to add Thread?",
            threadContent: " Lorem ...",
            threadRating: 10,
            threadUser: 2,
            deletedAt: null
        };

        const threadsLength = threadsData.length;
        await startThread.createOneThread({request:{body:createThread}});
        const contOfThreads = await getAllThreads.getAllThreads();

        await expect(contOfThreads.length).toBe(threadsLength + 1);
    });
});
