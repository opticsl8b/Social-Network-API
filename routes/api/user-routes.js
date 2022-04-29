const router=require("express").Router();

const{
    getAllusers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    connectWithUser,
    disconnectWithUser,
}=require("../../controllers/user-controller")

// REST
router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(connectWithUser).delete(disconnectWithUser)

module.exports=router;