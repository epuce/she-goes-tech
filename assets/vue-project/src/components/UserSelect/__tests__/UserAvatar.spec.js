import { fireEvent, render } from "@testing-library/vue";
import UserSelect from "./UserSelect.vue";

const sumTwoNumbers = (one, two) => {
    return one + two;
}

const isValidEmail = function (email) {
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegEx.test(email)
}
describe('components/UserSelect', () => {
    it('should sum up 2 numbers', () => {
        expect(sumTwoNumbers(2, 2)).toBe(4)
        expect(sumTwoNumbers(2, "2")).toBe(4)
    })

    it('should validated email', () => {
        expect(isValidEmail('test@test.com')).toBe(true)
        expect(isValidEmail('test.com')).toBe(false)
        expect(isValidEmail('test@.com')).toBe(false)
        expect(isValidEmail('test@test')).toBe(false)
        expect(isValidEmail('test@test.')).toBe(false)
    })

    const users = [
		{
			id: 1,
			avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
			name: 'Jam Jimmies',
		  },
		  {
			id: 7,
			avatar: 'https://www.w3schools.com/howto/img_avatar.png',
			name: 'Jack Jimmies',
		  },
	]

    it('has correct amount of rows', async () => {
        var utils = render(UserSelect, {
            props: {
                users,
            },
        });

        expect(utils.queryAllByTestId('user-option').length).toBe(2)
    })

    it('filters users', async () => {
        var utils = render(UserSelect, {
            props: {
                users,
            },
        });


        expect(utils.queryAllByTestId('user-option').length).toBe(2)

        const searchInput = utils.getByPlaceholderText('Type down to narrow the list')
        await fireEvent.update(searchInput, 'Jam Jimmies')

        expect(utils.queryAllByTestId('user-option').length).toBe(1)
    })
    it('select users', async () => {
        var utils = render(UserSelect, {
            props: {
                users,
            },
        });

        expect(utils.getByText('Jam Jimmies').classList.contains('user-option--selected')).toBe(false)

        const user = utils.getByText('Jam Jimmies')
        await fireEvent.click(user)

        expect(utils.getByText('Jam Jimmies').classList.contains('user-option--selected')).toBe(true)
    })
    it('have avatar img', async () => {
        var utils = render(UserSelect, {
            props: {
                users,
            },
        });

        expect(utils.queryAllByTestId('user-option')[0].querySelector('.user-avatar').getAttribute('src')).toBe(users[0].avatar)
    })
});