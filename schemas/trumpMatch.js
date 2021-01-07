import { dateFormatter } from "../utils/dateFormatter";

export default {
  title: "Trump Match",
  name: "trumpMatch",
  type: "document",
  fields: [
    {
      title: "Match Date",
      name: "matchDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Starting Score",
      name: "startingScore",
      type: "number",
      validation: (Rule) => Rule.required().min(60).max(120),
    },
    {
      title: "Final Score",
      name: "finalScore",
      type: "number",
      validation: (Rule) => Rule.required().min(60).max(120),
    },
    {
      title: "Calling Player",
      name: "callingPlayer",
      type: "reference",
      to: { type: "player" },
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
