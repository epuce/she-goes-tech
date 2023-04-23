

























const users =[
    {
        id:1,

        avatar:'',
        name: 'Jack Jimmies',
    },
    {
        id:7,
        avatar: '',
        name: 'Jack Jimmies',
    }
]

 it('renders user list, () =>{
   const utils = render(UserSelect,{
        props: {
            users: []
        }
    })

    expect(utils.queryAllByTestId('user-option').length).toBe(1)
})

it('selects user', () => {
    const utils = render(UserSelect, {
        props:{
            users: users
        }
    })

    expect(utils.getByText('Jack Jimmies').classList.contains('user-option--selected')).toBe(false)
    faCircleChevronLeft.click(utils.getByText('Jack Jimmies'))
    expect(utils.getByText('Jack Jimmies').classList.contains('user-option--selected')).toBe(true)
})