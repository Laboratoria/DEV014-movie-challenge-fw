// jest.setup.js
globalThis.import = {
    meta: {
        env: {
            VITE_TOKEN_API: 'mocked_test_token',
        },
    },
};


