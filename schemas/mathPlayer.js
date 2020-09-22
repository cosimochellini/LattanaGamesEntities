export default {
  title: "MatchPlayer",
  name: "matchPlayer",
  type: "document",
  fields: [
    {
      title: "Win",
      name: "win",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "PenaltyPoint",
      name: "penaltyPoint",
      type: "boolean",
    },
    {
      title: "Player",
      name: "player",
      type: "reference",
      to: { type: "player" },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Match",
      name: "match",
      type: "reference",
      to: { type: "match" },
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    penaltyPoint: false,
  },
};
