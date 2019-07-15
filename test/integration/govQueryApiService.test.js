import { setupTestMakerInstance } from '../helpers';
import GovQueryApiService from '../../src/GovQueryApiService';

let service;

beforeAll(async () => {
  const maker = await setupTestMakerInstance();
  service = maker.service('govQueryApi');
});

test('get all active polls', async () => {
  const polls = await service.getAllWhitelistedPolls();
  console.log('polls', polls);
});

test('get unique voters', async () => {
  const num = await service.getNumUniqueVoters(1);
  console.log('numUnique', num);
});

test('get mkr weight', async () => {
  const weight = await service.getMkrWeight('address', 999999999);
  console.log('weight', weight);
});

test('get current vote', async () => {
  const option = await service.getOptionVotingFor('0xv', 1);
  console.log('option', option);
});

test('get mkr weight by option', async () => {
  const weights = await service.getMkrSupport(1, 999999999);
  console.log('weights', weights);
});
