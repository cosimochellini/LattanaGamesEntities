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
      title: "Liberal",
      name: "liberal",
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
      date: "match.matchDate",
      win: "win",
      media: "player.profileImage",
    },
    prepare(selection) {
      const { title, date, win, media } = selection;
      return {
        title: `${title}, ${win ? "win" : "defeat"}`,
        subtitle: dateFormatter(date), // YYYY-MM-DD --> YYYY
        media,
      };
    },
  },
};
