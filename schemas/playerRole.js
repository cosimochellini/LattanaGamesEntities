export default {
  title: "PlayerRole",
  name: "playerRole",
  type: "document",
  fields: [
    {
      title: "Player",
      name: "player",
      type: "reference",
      to: { type: "player" },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Role",
      name: "role",
      type: "reference",
      to: { type: "role" },
      validation: (Rule) => Rule.required(),
    },
  ],
};
