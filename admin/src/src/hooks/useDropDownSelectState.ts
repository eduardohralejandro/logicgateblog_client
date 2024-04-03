const useDropDownSelectState = () => {
  const getSelectedValue = (item: I[], data: Y[]): string | null => {
    const selectedTag = data.find((tag) => tag.key === item.key);
    if (selectedTag) {
      return selectedTag.label;
    }
    return null;
  };

  return {
    getSelectedValue,
  };
};

export default useDropDownSelectState;
