export const flex = function (settings) {
  return `
    display: flex;
    flex-direction: ${settings.dir || "row"};
    align-items: ${settings.ai || "flex-start"};
    justify-content: ${settings.jc || "flex-start"};
  `;
};