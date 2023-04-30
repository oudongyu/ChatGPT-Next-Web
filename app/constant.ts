export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://blog.csdn.net/weixin_38620636/article/details/130445872?spm=1001.2014.3001.5501`;
export const ISSUE_URL = `https://blog.csdn.net/weixin_38620636/article/details/130445872?spm=1001.2014.3001.5501`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://blog.csdn.net/weixin_38620636/article/details/130445872?spm=1001.2014.3001.5501`;
export const FETCH_TAG_URL = `https://blog.csdn.net/weixin_38620636/article/details/130445872?spm=1001.2014.3001.5501`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
