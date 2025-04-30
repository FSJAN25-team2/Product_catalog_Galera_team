interface Props {
  tabId: string;
  current: string;
  option: string;
  category: string;
}

export const useCalculateNewLink = () => {
  const calculateNewLink = ({ tabId, current, option, category }: Props) => {
    const newTabId = tabId.replace(current.toLowerCase(), option.toLowerCase());

    return `/${category}/${newTabId}`;
  }

  return { calculateNewLink };
}