export const { initEnvironment, createEnvironment } =
  typeof window === "undefined"
    ? require("./server").serverEnvironment
    : require("./client").clientEnvironment
