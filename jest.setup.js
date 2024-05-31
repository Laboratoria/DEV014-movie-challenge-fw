//jest espera que los archivos de configuracion jest.setup usen require
//en vez de import
require('@testing-library/jest-dom');
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();
