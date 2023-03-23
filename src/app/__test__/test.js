import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();

test('testing error', () => {
    const result = errorRepository.translate('303');

    expect(result).toBe('Имя должно быть не менее 3 символов и не более 10')
})

test('Unknown error', () => {
    const result = errorRepository.translate('300');

    expect(result).toBe('Unknown error')
})