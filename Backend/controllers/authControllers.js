export const register = async (req, res, next) => {
  try {
    const newUsers = new User();
  } catch (error) {
    next(err);
  }
};
