const { default: GET_API } = require(".");

const GET_AUTO_COMPLETE = async (params) => {
  return await GET_API(`recipes/auto-complete${params}`);
};

const GET_LIST = async (params) => {
  return await GET_API(`recipes/list${params}`);
};

const GET_LIST_SIMILARITITES = async (params) => {
  return await GET_API(`recipes/list-similarities${params}`);
};

const GET_MORE_INFO = async (params) => {
  return await GET_API(`recipes/get-more-info${params}`);
};

const GET_LIST_TIPS = async (params) => {
  return await GET_API(`tips/list${params}`);
};

const GET_LIST_TAGS = async (params) => {
  return await GET_API(`tags/list${params}`);
};

const GET_LIST_FEEDS = async (params) => {
  return await GET_API(`feeds/list${params}`);
};

export {
  GET_AUTO_COMPLETE,
  GET_LIST,
  GET_LIST_FEEDS,
  GET_LIST_SIMILARITITES,
  GET_MORE_INFO,
  GET_LIST_TIPS,
  GET_LIST_TAGS,
};
