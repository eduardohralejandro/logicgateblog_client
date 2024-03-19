const useDropDownSelectState = () => {
  const getSelectedValue = (item: I[], data: Y[]): string => {
    const selectedTag = data.find((tag) => tag.key === item.key);
    if (selectedTag) {
      return selectedTag.label;
    }
    return "";
  };

  return {
    getSelectedValue,
  };
};

export default useDropDownSelectState;
