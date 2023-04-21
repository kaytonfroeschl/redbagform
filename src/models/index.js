// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SponsorPreferences, Sponsor } = initSchema(schema);

export {
  SponsorPreferences,
  Sponsor
};