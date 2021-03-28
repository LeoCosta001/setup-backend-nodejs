import { User } from '../models/Users';

test('It should be OK', () => {
    const user = new User();

    user.name = 'Gabiru';

    expect(user.name).toEqual('Gabiru');
});
