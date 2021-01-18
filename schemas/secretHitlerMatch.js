import { dateFormatter } from "../utils/dateFormatter";

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
      title: "Winning faction",
      name: "winningFaction",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "callingPlayer.nickname",
      date: "matchDate",
      startingScore: "startingScore",
      finalScore: "finalScore",
    },
    prepare(selection) {
      const { title, date, startingScore, finalScore } = selection;
      return {
        title: `${title} ${startingScore} -> ${finalScore}`,
        subtitle: dateFormatter(date), // YYYY-MM-DD --> YYYY
      };
    },
  },
};
