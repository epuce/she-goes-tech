import UserAvatar from "../UserAvatar.vue"
import { fireEvent, render } from '@testing-library/vue';
import UserSelect from "../UserSelect.vue";

describe('components/UserSelect', () => {
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

	it('has correct amount of rows', async () => {
        var utils = render(UserSelect, {
			props: {
				users,
			},
		});
	

		fireEvent()

		expect(utils.queryAllByTestId('user-option').length).toBe(2)
    })
})