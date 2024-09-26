export const CharacterHidder = (str, vlaue, limit = 100) => {
  if (str?.length > limit) return str?.substring(0, vlaue) + "...";
  else return str;
};
export const titleCharacterHidder = (str, vlaue, limit = 100) => {
  if (str?.length > limit) return str?.substring(0, vlaue) + "...";
  else return str;
};
export const removeUnderScore = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.replace(/_/g, " ");
};
