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
