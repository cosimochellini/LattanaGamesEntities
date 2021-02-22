import { dateFormatter } from "../utils/dateFormatter";
import { baseMatch } from "./base/matchBaseFields";

export default {
  title: "Secret Hitler Match",
  name: "secretHitlerMatch",
  type: "document",
  fields: [
    {
      title: "Match Date",
      name: "matchDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Players",
      name: "players",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "trumpMatchPlayer" },
        },
      ],
    },
    {
      title: "Winning role",
      name: "winningRole",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    ...baseMatch,
  ],
  preview: {
    select: {
      title: "winningRole",
      date: "matchDate",
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: `${title}`,
        subtitle: dateFormatter(date), // YYYY-MM-DD --> YYYY
      };
    },
  },
};
