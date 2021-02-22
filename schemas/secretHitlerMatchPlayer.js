import { dateFormatter } from "../utils/dateFormatter";

export default {
  title: "Secret Hitler Match Player",
  name: "secretHitlerMatchPlayer",
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
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Player",
      name: "player",
      type: "reference",
      to: { type: "player" },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Secret Hitler Match",
      name: "match",
      type: "reference",
      to: { type: "secretHitlerMatch" },
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    win: false,
    penaltyPoint: false,
  },
  preview: {
    select: {
      title: "player.nickname",
      role: "role",
      date: "match.matchDate",
      win: "win",
      media: "player.profileImage",
    },
    prepare(selection) {
      const { title, role, date, win, media } = selection;
      return {
        title: `${title}@${role}, ${win ? "win" : "defeat"}`,
        subtitle: dateFormatter(date), // YYYY-MM-DD --> YYYY
        media,
      };
    },
  },
};
