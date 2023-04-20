const sumTwoNumbers = (one, two) => {
  return one + two;
};

const isValidEmail = function (email) {
  var emailRegEx =
    /(?:^|,)((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(?:$|(?=,)))/;

  return emailRegEx.test(email);
};

describe("components/UserSelect", () => {
  it("should sum up 2 numbers", () => {
    expect(sumTwoNumbers(2, 2)).toBe(4);
    expect(sumTwoNumbers(2, "2")).toBe(4);
  });

  it("should validate email", () => {
    expect(isValidEmail("test@test.com")).toBe(true);
    expect(isValidEmail("test.com")).toBe(false);
    expect(isValidEmail("test@.com")).toBe(false);
    expect(isValidEmail("test@test")).toBe(false);
    expect(isValidEmail("test@test.")).toBe(false);
  });

  const users = [
    {
      id: 1,
      avatar:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
      name: "Jam Jimmies",
    },
    {
      id: 7,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Jack Jimmies",
    },
  ];

  it("renders user list", () => {
    const utils = render(UserSelect, {
      props: {
        users: users,
      },
    });
    expect(utils.queryAllByTestId("user-option").length).toBe(2);
    // need to link user-option with UserSelect.vue file
  });

  it("filters user list", async () => {
    const utils = render(UserSelect, {
      props: {
        users: users,
      },
    });
    expect(utils.queryAllByTestId("user-option").length).toBe(2);

    const searchInput = utils.getByPlaceholderText('Type down to narrow the list')
    
    await fireEvent.update(searchInput, 'jack')

    expect(utils.queryAllByTestId("user-option").length).toBe(1);

});
 it('selects user', () => {
    const utils = render(UserSelect, {
        props: {
          users: users,
        },
 })

    expect(utils.getByText('Jack Jimmies').classList.contains('user-option--selected')).toBe(false)
    await fireEvent.update(searchInput, 'jack')
    fireEvent.click(getByText('Jack Jimmies').classList.contains('user-option--selected')).toBe(true)
});
