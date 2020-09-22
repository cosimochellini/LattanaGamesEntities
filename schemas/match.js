export default {
  name: "match",
  title: "Match",
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
          to: { type: "matchPlayer" },
        },
      ],
    },
  ],
};
