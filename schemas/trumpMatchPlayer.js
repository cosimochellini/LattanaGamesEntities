export default {
  title: "Trump Match Player",
  name: "trumpMatchPlayer",
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
      title: "Trump Match",
      name: "trumpMatch",
      type: "reference",
      to: { type: "trumpMatch" },
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    win: false,
    penaltyPoint: false,
  },
};
