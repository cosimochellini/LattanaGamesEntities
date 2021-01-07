export default {
  title: "Player",
  name: "player",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Surname",
      name: "surname",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Nickname",
      name: "nickname",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required().regex(/^\S+@\S+\.\S+$/),
    },
    {
      title: "Birthday",
      name: "birthday",
      type: "date",
    },
    {
      title: "Roles",
      name: "roles",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "playerRole" },
        },
      ],
    },
    {
      title: "Pin",
      name: "pin",
      type: "number",
      validation: (Rule) => Rule.required().integer().max(9999),
    },
    {
      title: "Profile Image",
      name: "profileImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    name: "Mario",
    surname: "Rossi",
    email: "mario.rossi@email.com",
    pin: 0,
  },
  preview: {
    select: {
      title: "nickname",
      media: "profileImage",
      name: "name",
      surname: "surname",
    },
    prepare(player) {
      const { title, media, name, surname } = player;
      return {
        title,
        media,
        subtitle: `${name} ${surname}`,
      };
    },
  },
};
