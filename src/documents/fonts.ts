import { Font } from "@react-pdf/renderer";


Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "SourceHanSansCN-Regular.otf",
      fontWeight: "normal",
    },

    {
      src: "SourceHanSansCN-Regular.otf",
      fontWeight: "medium",
    },

    {
      src: "SourceHanSansCN-Regular.otf",
      fontStyle: "italic",
    },
  ],
});


Font.registerHyphenationCallback((word) => {
  if (word.length === 1) {
    return [word];
  }
 
  return Array.from(word)
    .map((char) => [char, ""])
    .reduce((arr, current) => {
      arr.push(...current);
      return arr;
    }, []);
});
