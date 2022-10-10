export const useScrollControl = (isModalOpen) => {
  isModalOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
};
