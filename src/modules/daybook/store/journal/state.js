export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Esse tempor nisi exercitation ullamco.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Fugiat cillum elit proident consectetur incididunt dolore dolore ea anim esse culpa eiusmod in elit.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Do excepteur nostrud tempor do voluptate pariatur sunt officia consectetur mollit exercitation sunt aliqua.",
      picture: null,
    },
  ],
});
