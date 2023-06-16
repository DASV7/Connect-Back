const UsuarioModelo = require("../../models/users.model");
const likesUsers = require("../../models/likesuser");
const rejectedUsers = require("../../models/rejectedUsers")
const { Types: { ObjectId } } = require("mongoose");

module.exports = {
    getUsersConnect: async ({ _id }) => {

        const dbResponse = UsuarioModelo.aggregate([
            {
                $lookup: {
                    from: 'likesusers',
                    let: { userId: '$_id' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $and: [{ $eq: ['$userWhoLike', '$$userId'] }, { $eq: ['$idUser', new ObjectId(_id)] }] }
                            }
                        }
                    ],
                    as: 'likes'
                }
            },
            {
                $lookup: {
                    from: 'dislikes',
                    let: { userId: '$_id' },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $and: [{ $eq: ['$userRejected', '$$userId'] }, { $eq: ['$idUser', new ObjectId(_id)] }] }
                            }
                        }
                    ],
                    as: 'dislikes'
                }
            },

            {
                $match: {
                    'likes': { $size: 0 },
                    'dislikes': { $size: 0 },
                    _id: { $ne: new ObjectId(_id) }

                }
            },
            {
                $sort: {
                    createdAt: -1
                }
            }
        ])
        return dbResponse
    }
};
