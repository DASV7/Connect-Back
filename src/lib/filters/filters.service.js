const Filters = require("../../models/filters")

module.exports = {
    async userPreferences(params, token) {
      const filtersData = {
        idUser: token._id,
        ...params,
      };
      const updateFilters = await Filters.findByIdAndUpdate(token._id, filtersData, { upsert: true, new: true });
      return updateFilters;
    },
  };
  