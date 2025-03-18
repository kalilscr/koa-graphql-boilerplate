import userModule from "../users/userModule";

const modules = [userModule];

export const queries = modules.reduce((acc, module) => {
  return { ...acc, ...module.queries };
}, {});

export const mutations = modules.reduce((acc, module) => {
  return { ...acc, ...module.mutations };
}, {});
